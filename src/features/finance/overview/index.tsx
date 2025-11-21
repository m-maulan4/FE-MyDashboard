import { useGetOverviewQuery } from "../financeApi";
import CardWidget from "./components/CardWidget";

export default function OverViewPage() {
  const { data } = useGetOverviewQuery();

  return (
    <div className="grid lg:grid-cols-4 gap-3">
      <div className="col-span-3 grid lg:grid-cols-3 gap-3 h-fit">
        <CardWidget
          type="3"
          jumlah={data?.widgets.total_masuk || 0}
          title="Total Saldo"
        />
        <CardWidget
          type="1"
          jumlah={data?.widgets.total_masuk || 0}
          title="Total Uang Keluar"
        />
        <CardWidget
          type="2"
          jumlah={data?.widgets.total_keluar || 0}
          title="Total Uang Keluar"
        />
      </div>
      <div className="grid grid-cols-1 gap-3 h-fit max-md:hidden">asdfd</div>
    </div>
  );
}
