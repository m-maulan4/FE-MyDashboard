import type React from "react";
import type { IconName } from "lucide-react/dynamic";
import Home from "@/layout/Home";

interface RouterDataProps {
  title: string;
  icon: IconName;
  path: string;
  component: React.ComponentType;
}
const RouterNavMain: RouterDataProps[] = [
  {
    title: "Home",
    icon: "house",
    path: "/",
    component: Home,
  },
];
export default RouterNavMain;
