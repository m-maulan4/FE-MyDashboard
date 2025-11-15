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
import FormAddTransaksi from "./formAdd";
import { useState } from "react";

type iconOnly = "y" | "n";
interface Props {
  iconOnly: iconOnly;
}
const buttonConfig: Record<iconOnly, { size: "sm" | "icon"; label: string }> = {
  y: { size: "icon", label: "" }, // Hanya ikon
  n: { size: "sm", label: "Tambah Transaksi" }, // Ada teks
};

export default function AksiAdd({ iconOnly }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const handleFormSubmit = (status: boolean) => {
    if (status) {
      setOpen(false); // otomatis menutup dialog
    }
  };
  const config = buttonConfig[iconOnly];
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"secondary"} size={config.size} className="btn-green">
          <Plus /> {config.label}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tambah Transaksi</DialogTitle>
          <DialogDescription>
            Pastikan data yang di isi sudah benar
          </DialogDescription>
        </DialogHeader>
        <FormAddTransaksi onSubmitSuccess={handleFormSubmit} />
      </DialogContent>
    </Dialog>
  );
}
