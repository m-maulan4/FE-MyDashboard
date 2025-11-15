import { Separator } from "@/components/ui/separator";
import { useGetAllKategoriQuery } from "../../financeApi";

export function LKategoriMasuk() {
  const { data } = useGetAllKategoriQuery();
  const dataM = data?.filter((f) => f.type === 1);
  return (
    <div className="flex flex-col space-y-1.5">
      {dataM?.map((d, i) => (
        <div key={i} className="flex flex-col">
          <p className="capitalize">{d.nama_kategori}</p>
          <Separator />
        </div>
      ))}
    </div>
  );
}
export function LKategoriKeluar() {
  const { data } = useGetAllKategoriQuery();
  const dataK = data?.filter((f) => f.type === 2);
  return (
    <div className="flex flex-col space-y-1.5">
      {dataK?.map((d, i) => (
        <div key={i} className="flex flex-col">
          <p className="capitalize">{d.nama_kategori}</p>
          <Separator />
        </div>
      ))}
    </div>
  );
}
