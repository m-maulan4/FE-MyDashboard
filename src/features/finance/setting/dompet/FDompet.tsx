import { Controller, useForm } from "react-hook-form";
import type z from "zod";
import { formDompet } from "../settingType";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { usePostDompetMutation } from "../../financeApi";
import { toast } from "sonner";

export default function FDompet() {
  const [postDompet] = usePostDompetMutation();
  const form = useForm<z.infer<typeof formDompet>>({
    resolver: zodResolver(formDompet),
    defaultValues: {
      nama_dompet: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formDompet>) {
    try {
      await postDompet(data).unwrap();
      toast.success("berhasil menambahkan data");
      form.reset();
    } catch (error) {
      toast.warning("server sedang sibuk ");
    }
  }
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col space-y-2"
    >
      <Controller
        name="nama_dompet"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Nama Dompet</FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <div className="flex justify-end items-center">
        <Button variant={"secondary"} size={"lg"} className="btn-green">
          <Plus />
          Tambah
        </Button>
      </div>
    </form>
  );
}
