import { Card, CardContent } from "@/components/ui/card";
import { DataTable } from "./components/data-table";
import { columns } from "./components/colomns";
import { useGetAllTransaksiQuery } from "../financeApi";
import HeaderPage from "../../../components/HeaderPage";
import AksiAdd from "./components/AksiAdd";

export default function TransactionsPage() {
  const { data: fetchedData } = useGetAllTransaksiQuery();
  const data = fetchedData || [];

  return (
    <div className="flex flex-col space-y-4">
      <HeaderPage title="Transaksi" aksibtn={<AksiAdd iconOnly="n" />} />
      <Card>
        <CardContent>
          <DataTable data={data} columns={columns} paginationState />
        </CardContent>
      </Card>
    </div>
  );
}
