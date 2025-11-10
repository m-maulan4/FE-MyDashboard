import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Dot } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import AksiNext from "./AksiNext";
import AksiBack from "./AksiBack";
import formatDate from "@/lib/formatDate";
import AksiEdit from "./AksiEdit";
interface CardTodoConten {
  id_todo: number;
  status: number;
  title: string;
  desc: string;
  priority: number;
  due_date: Date;
}

export function CardTodoConten({
  id_todo,
  status,
  title,
  desc,
  priority,
  due_date,
}: CardTodoConten) {
  return (
    <Card className="p-0">
      <CardContent className="flex flex-col space-y-1.5 p-4">
        <div className="flex items-center justify-between">
          <p className="flex space-x-1.5">
            <span>Priority :</span>
            <BadgeTodo priority={priority as 1 | 2 | 3} />
          </p>
          <AksiEdit />
        </div>
        <Separator />
        <CardTitle className="capitalize text-lg text-wrap line-clamp-1">
          {title}
        </CardTitle>
        <p className="text-wrap line-clamp-2">{desc}</p>
        <Separator />
        <div className="flex space-x-1 items-center justify-between">
          {status > 1 ? <AksiBack id_todo={id_todo} /> : ""}
          <p className="space-x-1">
            <span>Due Date:</span>
            <span className="font-semibold">{formatDate(due_date)}</span>
          </p>
          {status < 3 ? <AksiNext id_todo={id_todo} /> : ""}
        </div>
      </CardContent>
    </Card>
  );
}
function BadgeTodo({ priority }: { priority: 1 | 2 | 3 }) {
  const badgeConfig = {
    1: { text: "low", color: "green" },
    2: { text: "medum", color: "blue" },
    3: { text: "high", color: "red" },
  };
  const config = badgeConfig[priority];
  return (
    <Badge
      variant={"secondary"}
      className={`bg-${config.color} text-white/50 font-semibold uppercase`}
    >
      <Dot strokeWidth={12} absoluteStrokeWidth />
      {config.text}
    </Badge>
  );
}
export function CardTodoTitle({
  title,
  icons,
  iconcolor,
}: {
  title: string;
  icons: "circle" | "circle-check" | "circle-dashed";
  iconcolor: "red" | "blue" | "green";
}) {
  return (
    <Card className="p-3 bg-muted mb-6">
      <CardTitle className="flex items-center space-x-3">
        <DynamicIcon name={icons} color={iconcolor} />
        <p className="font-semibold">{title}</p>
      </CardTitle>
    </Card>
  );
}
