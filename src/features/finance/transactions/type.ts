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
export interface tagihanGoals {
  id: number;
  title: string;
  amount: number;
  desc: string;
  done: number;
  due_date: Date;
}
export interface getOverview {
  widgets: {
    total_masuk: number;
    total_keluar: number;
    saldo: number;
  };
  analyticBar: {
    hari: string;
    uangMasuk: number;
    uangKeluar: number;
  }[];
  analyticPie: {
    nama_kategori: string;
    jumlah: number;
  }[];
  transactionLastWeek: {
    jenis_transaksi: number;
    ket: string;
    jumlah: number;
    nama_dompet: string;
    nama_kategori: string;
  }[];
  tagihan: tagihanGoals[];
  goals: tagihanGoals[];
}
export type transaksiType = {
  jenis_transaksi: number;
  ket: string;
  jumlah: number;
  nama_dompet: string;
  nama_kategori: string;
};
