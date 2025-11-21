import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Cell, Pie, PieChart } from "recharts";
import type { getOverview } from "../../transactions/type";
interface Props {
  data: getOverview["analyticPie"] | undefined;
}

export default function CardChartPie({ data }: Props) {
  const chartConfig = {} satisfies ChartConfig;
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Pengeluaran</CardTitle>
        <CardDescription>Last Week</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <ChartContainer config={chartConfig} className="h-40 w-full">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  formatter={(e, b) => (
                    <div className="flex flex-col">
                      <p className="capitalize font-semibold">{b}</p>
                      <p>
                        {e.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          maximumFractionDigits: 0,
                        })}
                      </p>
                    </div>
                  )}
                />
              }
            />
            <Pie
              data={data}
              dataKey="jumlah"
              nameKey="nama_kategori"
              innerRadius={60}
              outerRadius={80}
            >
              {data?.map((e, i) => (
                <Cell key={e.nama_kategori} fill={`var(--red-${i + 1})`} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
