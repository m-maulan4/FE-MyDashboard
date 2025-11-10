import { Button } from "@/components/ui/button";
import { ArrowBigLeft } from "lucide-react";

export default function AksiBack() {
  return (
    <Button variant={"secondary"} size={"icon"} className="btn-red">
      <ArrowBigLeft />
    </Button>
  );
}
