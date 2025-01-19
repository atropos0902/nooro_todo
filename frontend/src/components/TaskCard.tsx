"use client";

import { AxiosInstance } from "@/utils/axiosInstance";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Todo } from "@/utils/todoUtil";

interface TaskCardProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onUpdateStatus: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  todo,
  onDelete,
  onUpdateStatus,
}) => {
  const router = useRouter();

  const onEditHandle = () => {
    router.push(`/edit/${todo.id}`);
  };

  const onDeleteHandle = () => {
    onDelete(todo.id);
  };

  return (
    <div className="w-full flex items-center justify-between justify-items-center gap-3 border p-4 shadow-input border-todo rounded-lg text-[14px]">
      <div className="flex grow items-center">
        <label className="flex h-6 w-6 items-center cursor-pointer relative">
          <input
            type="checkbox"
            className="peer m-1 w-4 h-4 cursor-pointer transition-all appearance-none text-white rounded-full shadow hover:shadow-md border border-check checked:bg-indigo checked:border-0 checked:line-through"
            value={todo.title}
            checked={todo.completed}
            onChange={() => onUpdateStatus(todo.id)}
          />
          <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </label>
        <label
          className={`${
            todo.completed ? "line-through text-disabled" : ""
          } grow cursor-pointer`}
          onClick={onEditHandle}
        >
          {todo.title}
        </label>
      </div>
      <Image
        className="items-end cursor-pointer"
        src="/img/trash.svg"
        width={24}
        height={24}
        alt=""
        onClick={onDeleteHandle}
      />
    </div>
  );
};

export default TaskCard;
