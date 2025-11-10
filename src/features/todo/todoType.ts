import * as z from "zod";
export const formSchemaPost = z.object({
  title: z.string().nonempty("tidak boleh kosong"),
  desc: z.string().nonempty("tidak boleh kosong"),
  status: z.number(),
  priority: z.number(),
  due_date: z.iso.datetime(),
});

export interface dataTodoType {
  id: number;
  title: string;
  description: string;
  status: number;
  priority: number;
  due_date: Date;
  createdAt: Date;
}
export interface resGetAllTodo {
  pending: dataTodoType[];
  on_progress: dataTodoType[];
  completed: dataTodoType[];
}
