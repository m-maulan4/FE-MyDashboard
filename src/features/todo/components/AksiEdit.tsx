import { Button } from "@/components/ui/button";
import { ClipboardPenLine } from "lucide-react";

export default function AksiEdit() {
  return (
    <Button variant={"secondary"} size={"icon"} className="btn-blue">
      <ClipboardPenLine />
    </Button>
  );
}
