import LoadingPage from "@/pages/LoadingPage";
import { CardTodoConten, CardTodoTitle } from "./components/CardTodo";
import { useGetAllTodoQuery } from "./todoApi";
import HeaderTodo from "./components/HeaderTodo";
import { Circle, CircleCheck, CircleDashed } from "lucide-react";

export default function TodoPage() {
  const { data, isLoading } = useGetAllTodoQuery();
  if (isLoading) return <LoadingPage />;
  return (
    <>
      <HeaderTodo />
      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col space-y-4">
          <CardTodoTitle title="Pending" icons={Circle} iconcolor="red" />
          {data?.pending.map((p, i) => (
            <CardTodoConten
              key={i}
              id_todo={p.id}
              status={p.status}
              title={p.title}
              desc={p.description}
              priority={p.priority}
              due_date={p.due_date}
            />
          ))}
        </div>
        <div className="flex flex-col space-y-4">
          <CardTodoTitle
            title="On Progress"
            icons={CircleDashed}
            iconcolor="blue"
          />
          {data?.on_progress.map((o, i) => (
            <CardTodoConten
              key={i}
              id_todo={o.id}
              status={o.status}
              title={o.title}
              desc={o.description}
              priority={o.priority}
              due_date={o.due_date}
            />
          ))}
        </div>
        <div className="flex flex-col space-y-4">
          <CardTodoTitle
            title="Completed"
            icons={CircleCheck}
            iconcolor="green"
          />
          {data?.completed.map((c, i) => (
            <CardTodoConten
              key={i}
              id_todo={c.id}
              status={c.status}
              title={c.title}
              desc={c.description}
              priority={c.priority}
              due_date={c.due_date}
            />
          ))}
        </div>
      </div>
    </>
  );
}
