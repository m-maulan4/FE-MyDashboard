import { Card } from "@/components/ui/card";
import {
  BanknoteArrowDown,
  BanknoteArrowUp,
  PiggyBank,
  type LucideIcon,
} from "lucide-react";
type types = "1" | "2" | "3";
interface Props {
  type: types;
  title: string;
  jumlah: number;
}
const cardConfig: Record<
  types,
  { icon: LucideIcon; style: string; color: string }
> = {
  "1": { icon: BanknoteArrowUp, style: "border-green-500", color: "green" },
  "2": { icon: BanknoteArrowDown, style: "border-red-500", color: "red" },
  "3": { icon: PiggyBank, style: "border-blue-500", color: "blue" },
};

export default function CardWidget({ type, jumlah, title }: Props) {
  const config = cardConfig[type];
  return (
    <Card className={`p-3 ${config.style}`}>
      <div className="flex space-x-3">
        <div className="p-2 bg-muted rounded-lg flex items-center">
          {type && <config.icon color={config.color} />}
        </div>
        <div className="flex flex-col space-y-1">
          <h6>{"Rp " + jumlah.toLocaleString("id-ID")}</h6>
          <p className="capitalize">{title}</p>
        </div>
      </div>
    </Card>
  );
}
