import { Card, CardContent } from "@/components/ui/card";
import AksiPost from "./AksiPost";

export default function HeaderTodo() {
  return (
    <Card className="p-0 mb-6">
      <CardContent className="p-3 flex justify-between items-center">
        <h3>Project Board</h3>
        <AksiPost />
      </CardContent>
    </Card>
  );
}
