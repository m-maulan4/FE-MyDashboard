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
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import type { getOverview } from "../../transactions/type";
interface Props {
  data: getOverview["analyticBar"] | undefined;
}

export default function CardChartBar({ data }: Props) {
  const chartConfig = {} satisfies ChartConfig;
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Cash Flow</CardTitle>
        <CardDescription>Last Week</CardDescription>
      </CardHeader>
      <CardContent className="px-2">
        <ChartContainer config={chartConfig} className="h-40 w-full">
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="hari"
              tickLine={false}
              axisLine={false}
              // tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
              labelFormatter={(value) => value + " (Rp)"}
            />
            <Line
              dataKey="uangMasuk"
              name="Pendapatan"
              type="monotone"
              stroke="var(--green)"
              strokeWidth={2}
              dot={true}
            />
            <Line
              dataKey="uangKeluar"
              name="Pengeluaran"
              type="monotone"
              stroke="var(--red)"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
