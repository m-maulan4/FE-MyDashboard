import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "@/api/baseQuery";
import type {
  getDompet,
  getKategori,
  getOverview,
  postDompet,
  postKategori,
  postTransaksi,
  transaksiType,
} from "./transactions/type";
import type { apiResponSuccess } from "@/types/types";

export const financeApi = createApi({
  reducerPath: "financeApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["transaksi", "kategori", "dompet"],
  endpoints: (builder) => ({
    getOverview: builder.query<getOverview, void>({
      query: () => "/keuangan/overview",
      providesTags: ["transaksi"],
    }),
    getAllTransaksi: builder.query<transaksiType[], void>({
      query: () => "/keuangan/transaksi",
      providesTags: ["transaksi"],
    }),
    postTransaksi: builder.mutation<apiResponSuccess, postTransaksi>({
      query: (body) => ({
        url: "/keuangan/transaksi",
        method: "POST",
        body,
      }),
      invalidatesTags: ["transaksi"],
    }),
    getAllKategori: builder.query<getKategori[], void>({
      query: () => "/keuangan/kategori",
      providesTags: ["kategori"],
    }),
    postKategori: builder.mutation<apiResponSuccess, postKategori>({
      query: (body) => ({
        url: "/keuangan/kategori",
        method: "POST",
        body,
      }),
      invalidatesTags: ["kategori"],
    }),
    getAllDompet: builder.query<getDompet[], void>({
      query: () => "/keuangan/dompet",
      providesTags: ["dompet"],
    }),
    postDompet: builder.mutation<apiResponSuccess, postDompet>({
      query: (body) => ({
        url: "/keuangan/dompet",
        method: "POST",
        body,
      }),
      invalidatesTags: ["dompet"],
    }),
  }),
});

export const {
  useGetAllTransaksiQuery,
  useGetAllDompetQuery,
  useGetAllKategoriQuery,
  useGetOverviewQuery,
  usePostTransaksiMutation,
  usePostKategoriMutation,
  usePostDompetMutation,
} = financeApi;
