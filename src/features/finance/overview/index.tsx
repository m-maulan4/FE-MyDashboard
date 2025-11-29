import IsLoading from "@/components/IsLoading";
import { useGetOverviewQuery } from "../financeApi";
import CardWidget from "./components/CardWidget";
import CardGoalsBill from "./components/CardGoalsBill";
import CardChartBar from "./components/CardChartBar";
import CardChartPie from "./components/CardChartPie";
import { DataTable } from "../transactions/components/data-table";
import { columns } from "../transactions/components/colomns";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export default function OverViewPage() {
  const { data, isLoading } = useGetOverviewQuery();
  if (isLoading) return <IsLoading />;
  return (
    <div className="grid lg:grid-cols-4 gap-6">
      <div className="col-span-3 grid lg:grid-cols-3 gap-6 h-fit">
        <CardWidget
          type="3"
          jumlah={data?.widgets.total_masuk || 0}
          title="Total Saldo"
        />
        <CardWidget
          type="1"
          jumlah={data?.widgets.total_masuk || 0}
          title="Total Uang Masuk"
        />
        <CardWidget
          type="2"
          jumlah={data?.widgets.total_keluar || 0}
          title="Total Uang Keluar"
        />
        <CardChartBar data={data?.analyticBar} />
        <CardChartPie data={data?.analyticPie} />
        <Card className="col-span-3">
          <CardContent>
            <CardTitle>Transaction</CardTitle>
            <CardDescription className="mb-1">
              Last 10 Transactions
            </CardDescription>
            <DataTable
              data={data?.transactionLastWeek || []}
              columns={columns}
              paginationState={false}
            />
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 gap-6 h-fit max-md:hidden">
        <CardGoalsBill data={data?.tagihan} title="Tagihan" />
        <CardGoalsBill data={data?.goals} title="Goals" />
      </div>
    </div>
  );
}
