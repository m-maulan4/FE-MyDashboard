import z from "zod";

export const formAddTransaksiType = z.object({
  id_dompet: z.number(),
  id_kategori: z.number(),
  jenis_transaksi: z.number(),
  jumlah: z.number(),
  ket: z.string().nonempty(),
});
export interface postTransaksi {
  id_dompet: number;
  id_kategori: number;
  jenis_transaksi: number;
  jumlah: number;
  ket: string;
}
export interface getDompet {
  id: number;
  nama_dompet: string;
}
export interface getKategori {
  id: number;
  nama_kategori: string;
  type: number;
}
export interface postKategori {
  nama_kategori: string;
  type: number;
}
export interface postDompet {
  nama_dompet: string;
}
export interface FormAddTransaksiProps {
  onSubmitSuccess: (status: boolean) => void;
}
