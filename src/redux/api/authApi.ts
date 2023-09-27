import { baseApi } from './baseApi';

const AUTH_URL = '/auth';

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: 'POST',
        dat: loginData,
      }),
      invalidatesTags: ['user'],
    }),
  }),
  overrideExisting: false,
});

export const { useUserLoginMutation } = authApi;
