import React, { useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

import client from '@/lib/api/client';

import Icon from '@/components/atomic/atoms/Icon';
import KakaoLoginButton from '@/components/atomic/atoms/KakaoLoginButton';
import LeftRadiusButton from '@/components/atomic/atoms/LeftRadiusButton';

import AppLayout from '@/components/common/AppLayout';

import { Theme } from '@/theme/Theme';

import { Wrapper, ButtonWrapper } from './style';

declare global {
  interface Window {
    Kakao: any;
  }
}

const { Kakao } = window;

const LoginPage = ({ history }: RouteComponentProps) => {
  const cookies = new Cookies();

  const onSubmitKakao = async (profileObj: any) => {
    const res = await client.post('/auth/kakao', profileObj);

    if (res.status === 200) {
      const { token } = res.data;
      cookies.set('token', token, { path: '/', expires: new Date(Date.now() + 1000 * 60 * 29) });
      client.defaults.headers.common['X-AUTH-TOKEN'] = token;
      if (res.data.type === 'LOGIN') {
        history.push('/');
      } else {
        history.push('/tendency');
      }
    }
  };

  const onClickAnonymous = () => {
    history.push('/');
  };

  const onClickKakaoLogin = async () => {
    await Kakao.Auth.login({
      success: function () {
        Kakao.API.request({
          url: '/v2/user/me',
          success: function (response: any) {
            const { nickname, thumbnail_image_url } = response.kakao_account.profile;
            const KakaoId = response.id;
            const { kakao_account: kakaoAccount } = response;
            const profileObj = {
              oauthId: KakaoId,
              nickname,
              profileImage: thumbnail_image_url,
              email: kakaoAccount.email,
              gender: kakaoAccount.gender,
              ageRange: kakaoAccount.age_range,
            };
            onSubmitKakao(profileObj);
          },
          fail: function (error: any) {
            console.log(error);
          },
        });
      },
    });
  };

  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }
  }, []);

  return (
    <AppLayout>
      <Wrapper>
        <Link to="/">
          <Icon icon="Logo" width={200} height={48} />
        </Link>
        <ButtonWrapper>
          <KakaoLoginButton onClick={onClickKakaoLogin} />
          <LeftRadiusButton
            onClick={onClickAnonymous}
            width="100%"
            backgroundColor={Theme.F_1}
            fontColor={Theme.F_3}
            boxShadow={'0px 0px 4px rgba(0, 0, 0, 0.25)'}>
            비회원으로 검사하기
          </LeftRadiusButton>
        </ButtonWrapper>
      </Wrapper>
    </AppLayout>
  );
};

export default LoginPage;
