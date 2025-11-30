import Home from "@/layout/Home";
import TodoPage from "@/features/todo";
import {
  ClipboardCheckIcon,
  ClipboardList,
  HomeIcon,
  Wallet,
} from "lucide-react";
import type { RouterDataProps } from "./routeType";
import OverViewPage from "@/features/finance/overview";
import TransactionsPage from "@/features/finance/transactions";
import SettingPage from "@/features/finance/setting";
import BidangPage from "@/features/akpd/bidang";

const RouterNavMain: RouterDataProps[] = [
  {
    title: "Home",
    icon: HomeIcon,
    path: "/",
    component: Home,
    subMenu: false,
  },
  {
    title: "To-Do",
    icon: ClipboardList,
    path: "todo",
    component: TodoPage,
    subMenu: false,
  },
  {
    title: "Keuangan",
    icon: Wallet,
    path: "keuangan",
    subMenu: true,
    items: [
      {
        title: "Laporan",
        path: "laporan",
        component: OverViewPage,
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
  {
    title: "AKPD",
    icon: ClipboardCheckIcon,
    path: "AKPD",
    subMenu: true,
    items: [
      {
        title: "Bidang",
        path: "bidang",
        component: BidangPage,
      },
    ],
  },
];
export default RouterNavMain;
