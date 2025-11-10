import Keuangan from "@/layout/Keuangan";
import { House, type LucideIcon } from "lucide-react";
import type React from "react";

interface RouterDataProps {
  title: string;
  icon: LucideIcon;
  path: string;
  items: [
    {
      title: string;
      path: string;
      component: React.ComponentType;
    }
  ];
}
const RouterNavMainSecond: RouterDataProps[] = [
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
    ],
  },
];
export default RouterNavMainSecond;
