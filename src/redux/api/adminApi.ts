import { IMeta } from '@/types';
import { tagTypes } from '../tag-types';
import { baseApi } from './baseApi';

const ADMIN_URL = '/admin';

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addAdminWithFormData: build.mutation({
      query: (data) => ({
        url: '/users/create-admin',
        method: 'POST',
        data,
        contentType: 'multipart/form-data',
      }),
      invalidatesTags: [tagTypes.admin],
    }),

    admins: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: ADMIN_URL,
          method: 'GET',
          params: arg,
        };
      },
      transformResponse: (response: any, meta: IMeta) => {
        return {
          admins: response.data,
          meta: response.meta,
        };
      },
      providesTags: [tagTypes.admin],
    }),
  }),
});

export const { useAdminsQuery, useAddAdminWithFormDataMutation } = adminApi;
