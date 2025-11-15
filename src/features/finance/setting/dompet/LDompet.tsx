import { Separator } from "@/components/ui/separator";
import { useGetAllDompetQuery } from "../../financeApi";

export default function LDompet() {
  const { data } = useGetAllDompetQuery();
  return (
    <div className="flex flex-col space-y-1.5">
      {data?.map((d, i) => (
        <div key={i} className="flex flex-col">
          <p className="capitalize">{d.nama_dompet}</p>
          <Separator />
        </div>
      ))}
    </div>
  );
}
