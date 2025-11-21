"use client";

import { Button } from "@/components/ui/button";
import { idrFormatter } from "@/lib/idrformater";
import { type ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import type { transaksiType } from "../type";

export const columns: ColumnDef<transaksiType>[] = [
  {
    accessorKey: "jenis_transaksi",
    size: 10,
    minSize: 5,
    header: ({ column }) => (
      <>
        Jenis
        <Button
          variant="ghost"
          size={"icon"}
          className="hover:cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      </>
    ),
    cell: (d) => {
      const data = d.getValue();
      return data == 1 ? <p>Masuk</p> : <p>Keluar</p>;
    },
  },
  {
    accessorKey: "nama_dompet",
    size: 10,
    minSize: 10,
    header: ({ column }) => {
      return (
        <>
          Dompet
          <Button
            variant="ghost"
            size={"icon"}
            className="hover:cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </>
      );
    },
  },
  {
    accessorKey: "nama_kategori",
    header: "Kategori",
    // size: 1800,
    // maxSize: 1800,
    cell: (v) => {
      const data: any = v.getValue();
      return <p className="line-clamp-1 text-wrap">{data}</p>;
    },
  },
  {
    accessorKey: "ket",
    header: "Keterangan",
    size: 1800,
    // maxSize: 1800,
    cell: (v) => {
      const data: any = v.getValue();
      return <p className="line-clamp-1 text-wrap">{data}</p>;
    },
  },
  {
    accessorKey: "jumlah",
    header: ({ column }) => {
      return (
        <>
          Jumlah
          <Button
            variant="ghost"
            size={"icon"}
            className="hover:cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </>
      );
    },
    cell: (v) => {
      const data: any = v.getValue();
      return <p>{idrFormatter.format(data)}</p>;
    },
  },
];
