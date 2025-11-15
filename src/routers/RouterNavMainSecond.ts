import BidangPage from "@/features/akpd/bidang";
import SettingPage from "@/features/finance/setting";
import TransactionsPage from "@/features/finance/transactions";
import Keuangan from "@/layout/Keuangan";
import { ClipboardList, House, type LucideIcon } from "lucide-react";
import type React from "react";

interface RouterDataProps {
  title: string;
  icon: LucideIcon;
  path: string;
  items: {
    title: string;
    path: string;
    component: React.ComponentType;
  }[];
}
const RouterNavMainSecond: RouterDataProps[] = [
  // {
  //   title: "AKPD",
  //   icon: ClipboardList,
  //   path: "akpd",
  //   items: [
  //     {
  //       title: "Bidang",
  //       path: "bidang",
  //       component: BidangPage,
  //     },
  //   ],
  // },
  {
    title: "Keuangan",
    icon: House,
    path: "keuangan",
    items: [
      {
        title: "Laporan",
        path: "laporan",
        component: Keuangan,
      },
      {
        title: "Transaksi",
        path: "transaksi",
        component: TransactionsPage,
      },
      {
        title: "Setting",
        path: "setting",
        component: SettingPage,
      },
    ],
  },
];
export default RouterNavMainSecond;
