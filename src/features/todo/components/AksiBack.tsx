import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ArrowBigLeft } from "lucide-react";
import { usePatchBackTodoMutation } from "../todoApi";
import { toast } from "sonner";
interface AksiBackProps {
  id_todo: number;
}

export default function AksiBack({ id_todo }: AksiBackProps) {
  const [patchBack] = usePatchBackTodoMutation();
  async function onSubmit(data: number) {
    try {
      await patchBack({ id_todo: data }).unwrap();
      toast.success("berhasil merubah data");
    } catch (error) {
      toast.warning("server sedang sibuk");
    }
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"secondary"} size={"icon"} className="btn-red">
          <ArrowBigLeft />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="capitalize">
            apakah anda ingin merubah status Task
          </AlertDialogTitle>
          <AlertDialogDescription className="capitalize">
            pastikan jika ingin mengambil task sudah sesuai dengan yang di pilih
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onSubmit(id_todo)}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
