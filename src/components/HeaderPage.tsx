import { Card, CardContent } from "@/components/ui/card";
import type { ReactNode } from "react";

interface HeaderPageprops {
  title: string;
  aksibtn?: ReactNode;
}

export default function HeaderPage({ title, aksibtn }: HeaderPageprops) {
  return (
    <Card className="p-0">
      <CardContent className="p-4 flex justify-between items-center">
        <h3>{title}</h3>
        {aksibtn ?? <div className="flex space-x-2">{aksibtn}</div>}
      </CardContent>
    </Card>
  );
}
