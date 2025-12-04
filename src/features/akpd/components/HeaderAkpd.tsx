import type { ReactNode } from "react";

interface HeaderAkpdProps {
  title: string;
  component?: ReactNode;
}
export default function HeaderAkpd({ title, component }: HeaderAkpdProps) {
  return (
    <div className="mx-4 mt-2 mb-6 flex justify-between items-center border-b-4">
      <h4 className="capitalize">{title}</h4>
      {component}
    </div>
  );
}
