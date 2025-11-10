import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";

export default function AksiNext() {
  return (
    <Button variant={"secondary"} size={"icon"} className="btn-green">
      <ArrowBigRight />
    </Button>
  );
}
