import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';
import { getBaseUrl } from '../../helpers/config/envConfig';
import { tagTypes } from '../tag-types';

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: (builder) => ({}),
  tagTypes: [
    tagTypes.user,
    tagTypes.admin,
    tagTypes.department,
    tagTypes.faculty,
  ],
});
