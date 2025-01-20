import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Todo } from "@/interfaces/Todo";
import { AxiosInstance } from "@/utils/axiosInstance";

const colorList: string[] = [
  "bg-red",
  "bg-orange",
  "bg-yellow",
  "bg-green",
  "bg-blue",
  "bg-indigo",
  "bg-purple",
  "bg-pink",
  "bg-brown",
];

interface FormProps {
  todo?: Todo;
}

const Form: React.FC<FormProps> = ({ todo }) => {
  const router = useRouter();
  const [taskTitle, setTaskTitle] = useState(!todo ? "" : todo.title);
  const [selectedColor, setSelectedColor] = useState(!todo ? 1 : todo.color);

  const onSubmitHandle = () => {
    if (!taskTitle) return;

    AxiosInstance.post(`/`, {
      title: taskTitle,
      color: selectedColor,
    })
      .then((res) => {
        router.back();
      })
      .catch((err) => {
        console.error("Request failed", err);
      });
  };

  const onUpdateHandle = () => {
    if (!taskTitle) return;
    if (!todo) return;

    AxiosInstance.put(`/${todo.id}`, {
      title: taskTitle,
      color: selectedColor,
    })
      .then((res) => {
        console.log(router);
        router.back();
      })
      .catch((err) => {
        console.error("Request failed", err);
      });
  };

  return (
    <form className="grid items-center justify-items-left w-736 gap-12">
      <div className="w-full">
        <Link href="/">
          <Image
            src="/img/arrow-left.svg"
            width={24}
            height={24}
            alt=""
          ></Image>
        </Link>
      </div>
      <div className="grid gap-3">
        <div className="text-tasks font-bold">Title</div>
        <input
          className={`w-full rounded-lg border p-4 gap-3 shadow-input border-todo bg-input`}
          type="text"
          placeholder="Ex. Brush you teeth"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        {!taskTitle ? (
          <div className="text-red-800">Please enter title field</div>
        ) : (
          <></>
        )}
      </div>
      <div className="grid gap-3">
        <div className="text-tasks font-bold">Color</div>
        <div className="flex gap-4">
          {colorList.map((col, index) => (
            <div
              key={index}
              className={`${col} rounded-full font-bold cursor-pointer w-[52px] h-[52px] ${
                selectedColor === index + 1 ? "border-2" : ""
              }`}
              onClick={() => setSelectedColor(index + 1)}
            ></div>
          ))}
        </div>
      </div>
      {!todo?.title ? (
        <button
          className="w-736 rounded-lg flex items-center justify-center justify-items-center bg-button p-4 font-bold text-sm/[19.6px] gap-2"
          type="submit"
          disabled={!taskTitle}
          onClick={onSubmitHandle}
        >
          Add Task{" "}
          <Image src="/img/plus.svg" width={16} height={16} alt=""></Image>
        </button>
      ) : (
        <button
          className="w-736 rounded-lg flex items-center justify-center justify-items-center bg-button p-4 font-bold text-sm/[19.6px] gap-2"
          type="submit"
          disabled={!taskTitle}
          onClick={onUpdateHandle}
        >
          Save{" "}
          <Image src="/img/check.svg" width={16} height={16} alt=""></Image>
        </button>
      )}
    </form>
  );
};

export default Form;
