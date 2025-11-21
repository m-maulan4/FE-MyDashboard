import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export default function CardBill() {
  console.log(tags.length);

  return (
    <Card>
      <CardContent className="space-y-6">
        <CardTitle className="text-center">Tagihan</CardTitle>
        <ScrollArea className="h-72 rounded-md border">
          <div className="p-4">
            {tags.map((tag) => (
              <>
                <div className="text-sm">{tag}</div>
                <Separator className="my-2" />
              </>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
