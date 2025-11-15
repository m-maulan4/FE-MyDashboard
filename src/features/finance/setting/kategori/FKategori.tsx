import { Controller, useForm } from "react-hook-form";
import type z from "zod";
import { formKategori } from "../settingType";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { usePostKategoriMutation } from "../../financeApi";
import { toast } from "sonner";

export default function FKategori({ type }: { type: 1 | 2 }) {
  const [postKategori] = usePostKategoriMutation();
  const form = useForm<z.infer<typeof formKategori>>({
    resolver: zodResolver(formKategori),
    defaultValues: {
      nama_kategori: "",
      type,
    },
  });

  async function onSubmit(data: z.infer<typeof formKategori>) {
    try {
      await postKategori(data).unwrap();
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
        name="nama_kategori"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Nama Kategori</FieldLabel>
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
