import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { tagihanGoals } from "../../transactions/type";
import {
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";
import { Fragment } from "react";
interface Props {
  title: string;
  data: tagihanGoals[] | undefined;
}
export default function CardGoalsBill({ data, title }: Props) {
  const dataLength = (data?.length ?? 0) <= 5 ? "h-fit" : "h-60";
  const display = data?.length === 0 && "hidden";
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className={`px-2 ${display}`}>
        <ScrollArea className={`${dataLength} rounded-md border`}>
          <div className="p-4">
            <ItemGroup>
              {data?.map((d, i) => (
                <Fragment key={i}>
                  <ItemContent>
                    <ItemTitle className="text-wrap">{d.title}</ItemTitle>
                    <ItemDescription>
                      Rp {d.amount.toLocaleString("id-ID")}
                    </ItemDescription>
                  </ItemContent>
                  <ItemSeparator />
                </Fragment>
              ))}
            </ItemGroup>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
