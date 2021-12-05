import React, { useEffect } from 'react';

import AppLayout from '@/components/common/AppLayout';

declare global {
  interface Window {
    Kakao: any;
  }
}

const { Kakao } = window;

const LoginPage = () => {
  const onClickKakaoLogin = async () => {
    await Kakao.Auth.login({
      success: function () {
        Kakao.API.request({
          url: '/v2/user/me',
          success: function (response: any) {
            const { nickname, thumbnail_image } = response.profile;
            const KakaoId = response.id;
            const { kakao_account: kakaoAccount } = response;
            const profileObj = {
              kakaoId: KakaoId,
              name: nickname,
              imageUrl: thumbnail_image,
              email: kakaoAccount.email,
              sex: kakaoAccount.gender,
              age: kakaoAccount.age_range,
            };
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
      <button type="button" onClick={onClickKakaoLogin}>
        로그인
      </button>
    </AppLayout>
  );
};

export default LoginPage;
