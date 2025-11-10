export interface formSchemaPost {
  title: string;
  desc: string;
  status: number;
  priority: number;
  due_date: Date;
}

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
