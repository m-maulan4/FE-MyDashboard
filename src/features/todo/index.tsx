import LoadingPage from "@/pages/LoadingPage";
import { CardTodoConten, CardTodoTitle } from "./components/CardTodo";
import { useGetAllTodoQuery } from "./todoApi";
import HeaderTodo from "./components/HeaderTodo";

export default function TodoPage() {
  const { data, isLoading } = useGetAllTodoQuery();
  if (isLoading) return <LoadingPage />;
  return (
    <>
      <HeaderTodo />
      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col space-y-2">
          <CardTodoTitle title="Pending" icons="circle" iconcolor="red" />
          {data?.pending.map((p, i) => (
            <CardTodoConten
              key={i}
              title={p.title}
              desc={p.description}
              priority={p.priority}
              due_date={p.due_date}
            />
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          <CardTodoTitle
            title="On Progress"
            icons="circle-dashed"
            iconcolor="blue"
          />
          {data?.on_progress.map((o, i) => (
            <CardTodoConten
              key={i}
              title={o.title}
              desc={o.description}
              priority={o.priority}
              due_date={o.due_date}
            />
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          <CardTodoTitle
            title="Completed"
            icons="circle-check"
            iconcolor="green"
          />
          {data?.completed.map((c, i) => (
            <CardTodoConten
              key={i}
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
