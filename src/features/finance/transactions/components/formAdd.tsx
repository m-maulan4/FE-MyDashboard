import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formAddTransaksiType, type FormAddTransaksiProps } from "../type";
import type z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useGetAllDompetQuery,
  useGetAllKategoriQuery,
  usePostTransaksiMutation,
} from "../../financeApi";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function FormAddTransaksi({
  onSubmitSuccess,
}: FormAddTransaksiProps) {
  const { data: listDompet } = useGetAllDompetQuery();
  const { data: listKategori } = useGetAllKategoriQuery();
  const [postTrans] = usePostTransaksiMutation();
  const [kate, setKate] = useState<number>();
  const form = useForm<z.infer<typeof formAddTransaksiType>>({
    resolver: zodResolver(formAddTransaksiType),
    defaultValues: {
      id_dompet: 0,
      id_kategori: 0,
      jenis_transaksi: 0,
      jumlah: 0,
      ket: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formAddTransaksiType>) {
    try {
      toast.success("berhasil menambahkan data");
      form.reset();
      onSubmitSuccess(true);
      await postTrans(values).unwrap();
    } catch (error) {
      toast.warning("Server sedang gangguan");
    }
  }
  if (listDompet?.length === 0 || listKategori?.length === 0)
    return (
      <h4>
        Masukan data Dompet dan/atau Kategori di halaman Keuangan {"->"} Setting
      </h4>
    );
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Controller
        name="jenis_transaksi"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldContent>
              <FieldLabel htmlFor={`form-${field.name}`}>
                Jenis Transaksi
              </FieldLabel>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}

              <RadioGroup
                id={`form-${field.name}`}
                onValueChange={(e) => {
                  field.onChange(Number(e));
                  setKate(Number(e));
                }}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1" id="masuk" />
                  <Label htmlFor="masuk">Masuk</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="2" id="keluar" />
                  <Label htmlFor="keluar">Keluar</Label>
                </div>
              </RadioGroup>
            </FieldContent>
          </Field>
        )}
      />
      <Controller
        name="id_dompet"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field orientation="responsive" data-invalid={fieldState.invalid}>
            <FieldContent>
              <FieldLabel htmlFor="form-dompet">Dompet</FieldLabel>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              <Select
                name={field.name}
                value={field.value ? String(field.value) : ""}
                onValueChange={(e) => field.onChange(Number(e))}
              >
                <SelectTrigger
                  id="form-dompet"
                  aria-invalid={fieldState.invalid}
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="item-aligned">
                  {listDompet?.map((d, i) => (
                    <SelectItem key={i} value={String(d.id)}>
                      {d.nama_dompet}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FieldContent>
          </Field>
        )}
      />
      <Controller
        name="id_kategori"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field orientation="responsive" data-invalid={fieldState.invalid}>
            <FieldContent>
              <FieldLabel htmlFor={`form-${field.name}`}>Kategori</FieldLabel>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              <Select
                name={field.name}
                value={field.value ? String(field.value) : ""}
                onValueChange={(e) => field.onChange(Number(e))}
                disabled={!kate}
              >
                <SelectTrigger
                  id={`form-${field.name}`}
                  aria-invalid={fieldState.invalid}
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="item-aligned">
                  {listKategori
                    ?.filter((e) => e.type == kate)
                    .map((d, i) => (
                      <SelectItem key={i} value={String(d.id)}>
                        {d.nama_kategori}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </FieldContent>
          </Field>
        )}
      />
      <Controller
        name="jumlah"
        control={form.control}
        defaultValue={0}
        render={({ field, fieldState }) => (
          <Field orientation="responsive" data-invalid={fieldState.invalid}>
            <FieldContent>
              <FieldLabel htmlFor={`form-${field.name}`}>Jumlah</FieldLabel>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
            <Input
              {...field}
              id={`form-${field.name}`}
              aria-invalid={fieldState.invalid}
              type="number"
              onChange={(e) => field.onChange(e.target.valueAsNumber)}
              value={String(field.value)}
            />
          </Field>
        )}
      />
      <Controller
        name="ket"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field orientation="responsive" data-invalid={fieldState.invalid}>
            <FieldContent>
              <FieldLabel htmlFor={`form-${field.name}`}>Keterangan</FieldLabel>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
            <Textarea
              {...field}
              id={`form-${field.name}`}
              aria-invalid={fieldState.invalid}
              placeholder="Keterangan Transaksi"
              className="min-h-[120px]"
            />
          </Field>
        )}
      />
      <Button type="submit">kirim</Button>
    </form>
  );
}
