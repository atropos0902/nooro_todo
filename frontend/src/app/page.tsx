"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { AxiosInstance } from "@/utils/axiosInstance";
import { Todo } from "@/interfaces/Todo";
import TaskCard from "../components/TaskCard";
import ConfirmModal from "../components/ConfirmModal";

export default function Home() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [deleteTaskId, setDeleteTaskId] = useState<number | null>(null);

  useEffect(() => {
    AxiosInstance.get("/")
      .then((res) => {
        setTodoList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [todoList]);

  const onConfirmDelete = () => {
    AxiosInstance.delete(`/${deleteTaskId}`)
      .then(() => {
        setTodoList((prev) => prev.filter((t) => t.id !== deleteTaskId));
        setDeleteTaskId(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onUpdateTask = (id: number) => {
    const index = todoList.findIndex((t) => t.id === id);

    if (index < 0) return;

    AxiosInstance.put("/" + todoList[index].id, {
      ...todoList[index],
      completed: !todoList[index].completed,
    })
      .then(() => {
        todoList[index].completed = !todoList[index].completed;
        setTodoList([...todoList]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="grid items-center justify-items-center -translate-y-6">
      <Link
        className="w-736 rounded-lg flex items-center justify-center justify-items-center bg-button p-4 font-bold text-sm/[19.6px] gap-2"
        href="/edit"
      >
        Create Task{" "}
        <Image src="/img/plus.svg" width={16} height={16} alt=""></Image>
      </Link>

      <div className="grid items-center justify-items-center w-736 gap-6 mt-todo">
        <div className="flex justify-between w-full">
          <div className="gap-2">
            <span className="text-tasks">Tasks</span>{" "}
            <span className="py-0.5 px-2 gap-2.5 bg-badge rounded-badge">
              {todoList.length}
            </span>
          </div>
          <div className="gap-2">
            <span className="text-completed">Completed</span>{" "}
            <span className="py-0.5 px-2 gap-2.5 bg-badge rounded-badge">
              {!todoList.length
                ? "0"
                : `${
                    todoList.filter((todo: Todo) => todo.completed).length
                  } of ${todoList.length}`}
            </span>
          </div>
        </div>
        {!todoList.length ? (
          <div className="grid items-center justify-items-center rounded-lg border-t w-full border-todo gap-4 px-6 py-16.5 text-disabled">
            <Image
              src="/img/clipboard.png"
              alt=""
              width={56}
              height={56}
            ></Image>
            <div className="font-bold">
              You don't have any tasks registered yet.
            </div>
            <div className="font-normal">
              Create tasks and organize your to-do items.
            </div>
          </div>
        ) : (
          <div className="grid items-center justify-items-center rounded-lg w-full gap-4 text-disabled">
            {todoList.map((todo: Todo, index: number) => (
              <TaskCard
                key={index}
                todo={todo}
                onDelete={setDeleteTaskId}
                onUpdateStatus={onUpdateTask}
              />
            ))}
          </div>
        )}
      </div>

      <ConfirmModal
        isOpen={Boolean(deleteTaskId)}
        onConfirm={onConfirmDelete}
        onCancel={() => setDeleteTaskId(null)}
      />
    </main>
  );
}
