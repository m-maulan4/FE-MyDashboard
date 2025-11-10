import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CalendarIcon, Plus } from "lucide-react";
import { type formSchemaPost } from "../todoType";
import { Controller, useForm } from "react-hook-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { usePostTodoMutation } from "../todoApi";
import { toast } from "sonner";

export default function AksiPost() {
  const [postTodo] = usePostTodoMutation();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const form = useForm<formSchemaPost>({
    defaultValues: {
      status: 1,
      due_date: date,
    },
  });

  async function onSubmit(data: formSchemaPost) {
    try {
      await postTodo(data).unwrap();
      toast.success("berhasil menambahkan data");
    } catch (error) {}
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
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              control={form.control}
              name="title"
              rules={{ required: "tidak boleh kosong" }}
              defaultValue=""
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor={field.name}
                    className="capitalize font-semibold"
                  >
                    title
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="capitalize"
                    />
                  )}
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name="desc"
              rules={{ required: "tidak boleh kosong" }}
              defaultValue=""
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor={field.name}
                    className="capitalize font-semibold"
                  >
                    Keterangan
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Keterangan"
                    className="min-h-[120px]"
                  />
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="capitalize"
                    />
                  )}
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name="priority"
              rules={{ required: "pilih salah satu" }}
              defaultValue={}
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                  orientation={"responsive"}
                >
                  <FieldLabel
                    htmlFor="form-rhf-select-priority"
                    className="font-semibold capitalize"
                  >
                    Priority
                  </FieldLabel>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                  <Select
                    name={field.name}
                    value={String(field.value)}
                    onValueChange={(e) => field.onChange(Number(e))}
                  >
                    <SelectTrigger
                      id="form-rhf-select-priority"
                      aria-invalid={fieldState.invalid}
                      className="min-w-[200px]"
                    >
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="item-aligned">
                      <SelectItem value="1">Low</SelectItem>
                      <SelectItem value="2">Medium</SelectItem>
                      <SelectItem value="3">High</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name="due_date"
              rules={{ required: "tidak boleh kosong" }}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor={field.name}
                    className="capitalize font-semibold"
                  >
                    due date
                  </FieldLabel>
                  <Popover>
                    <PopoverTrigger id={field.name} asChild>
                      <Button
                        variant="outline"
                        data-empty={!date}
                        className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal"
                      >
                        <CalendarIcon />
                        {date ? date.toLocaleDateString() : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                      />
                    </PopoverContent>
                  </Popover>
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="capitalize"
                    />
                  )}
                </Field>
              )}
            />
            <Button type="submit">test</Button>
          </FieldGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
}
