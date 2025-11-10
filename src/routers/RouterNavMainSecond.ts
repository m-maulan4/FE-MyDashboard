import Keuangan from "@/layout/Keuangan";
import type { IconName } from "lucide-react/dynamic";
import type React from "react";

interface RouterDataProps {
  title: string;
  icon: IconName;
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
    icon: "house",
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
