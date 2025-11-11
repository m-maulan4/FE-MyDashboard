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
import { Trash } from "lucide-react";
import { toast } from "sonner";
import { useDelTodoMutation } from "../todoApi";
interface AksiBackProps {
  id_todo: number;
}

export default function AksiHapus({ id_todo }: AksiBackProps) {
  const [delTodo] = useDelTodoMutation();
  async function onSubmit(data: number) {
    try {
      await delTodo({ id_todo: data }).unwrap();
      toast.success("berhasil merubah data");
    } catch (error) {
      toast.warning("server sedang sibuk");
    }
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"secondary"} size={"icon"} className="btn-red">
          <Trash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="capitalize">
            apakah anda ingin Menghapus Task
          </AlertDialogTitle>
          <AlertDialogDescription className="capitalize">
            pastikan jika task sudah sesuai dengan yang di pilih
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
