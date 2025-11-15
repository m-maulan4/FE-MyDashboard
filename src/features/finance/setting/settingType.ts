import type { ReactNode } from "react";
import z from "zod";

export interface CardSettingType {
  title: string;
  aksibtn?: ReactNode;
  content: ReactNode;
}

export const formKategori = z.object({
  nama_kategori: z.string().nonempty("Tidak boleh kosong"),
  type: z.number(),
});
export const formDompet = z.object({
  nama_dompet: z.string().nonempty("Tidak boleh kosong"),
});
