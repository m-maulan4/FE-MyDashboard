import type React from "react";
import Home from "@/layout/Home";
import TodoPage from "@/features/todo";
import { ClipboardCheck, House, type LucideIcon } from "lucide-react";

interface RouterDataProps {
  title: string;
  icon: LucideIcon;
  path: string;
  component: React.ComponentType;
}
const RouterNavMain: RouterDataProps[] = [
  {
    title: "Home",
    icon: House,
    path: "/",
    component: Home,
  },
  {
    title: "To-Do",
    icon: ClipboardCheck,
    path: "/todo",
    component: TodoPage,
  },
];
export default RouterNavMain;
