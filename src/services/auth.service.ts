import { setLocalStorage } from '@/utils/localStorage';

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  setLocalStorage('accessToken', accessToken as string);
};
