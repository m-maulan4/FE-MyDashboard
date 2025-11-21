import { Card, CardContent, CardTitle } from "@/components/ui/card";
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
  const dataLength = data?.length === 1 ? "h-fit" : "h-60";
  return (
    <Card>
      <CardContent className="space-y-6 px-2">
        <CardTitle className="text-center">{title}</CardTitle>
        <ScrollArea className={`${dataLength} rounded-md border`}>
          <div className="p-4">
            <ItemGroup>
              {data?.map((d, i) => (
                <Fragment key={i}>
                  <ItemContent>
                    <ItemTitle>{d.title}</ItemTitle>
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
