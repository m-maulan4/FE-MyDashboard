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
import z from "zod";
import { formSchemaPost } from "../todoType";

export default function AksiPost() {
  const form = useForm<z.infer<typeof formSchemaPost>>({
    resolver: zodResolver(formSchemaPost),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchemaPost>) {
    // Do something with the form values.
    console.log(data);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"secondary"} className="btn-green">
          <Plus strokeWidth={4} /> New Task
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Task</DialogTitle>
          <DialogDescription className="capitalize">
            isi semua jangan ada yang kosong
          </DialogDescription>
        </DialogHeader>
        <form></form>
      </DialogContent>
    </Dialog>
  );
}
