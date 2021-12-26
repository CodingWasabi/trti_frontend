import client from '@/lib/api/client';

/**
 * 이미지 서버에 업로드하기
 * @param {FormData} image 업로드하고자 하는 이미지 FormData('img')
 * @returns Image URL (Promise)
 */
export const uploadImage = (image: FormData) => client.post('/image', image);
