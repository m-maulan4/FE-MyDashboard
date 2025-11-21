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
  { icon: LucideIcon; border: string; bg: string; color: string }
> = {
  "1": {
    icon: BanknoteArrowUp,
    border: "border-green-500",
    bg: "bg-green-500",
    color: "green",
  },
  "2": {
    icon: BanknoteArrowDown,
    border: "border-red-500",
    bg: "bg-red-500",
    color: "red",
  },
  "3": {
    icon: PiggyBank,
    border: "border-blue-500",
    bg: "bg-blue-500",
    color: "blue",
  },
};

export default function CardWidget({ type, jumlah, title }: Props) {
  const config = cardConfig[type];
  return (
    <Card className={`p-0 flex-row gap-3 overflow-hidden ${config.border}`}>
      <div className={`px-4 ${config.bg} flex items-center`}>
        {type && <config.icon size={32} />}
      </div>
      <div className="flex flex-col space-y-0.5 py-2">
        <h6>{"Rp " + jumlah.toLocaleString("id-ID")}</h6>
        <p className="capitalize">{title}</p>
      </div>
    </Card>
  );
}
