import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { type ReactNode } from "react";
type iconOnly = "y" | "n";
interface Props {
  iconOnly: iconOnly;
  title: string;
  content: ReactNode;
}
const buttonConfig: Record<iconOnly, { size: "sm" | "icon" }> = {
  y: { size: "icon" },
  n: { size: "sm" },
};

export default function DialogSetting({ iconOnly, title, content }: Props) {
  const config = buttonConfig[iconOnly];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"secondary"} size={config.size} className="btn-green">
          <Plus /> {config.size != "icon" ? title : ""}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Pastikan data yang di isi sudah benar
          </DialogDescription>
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  );
}
