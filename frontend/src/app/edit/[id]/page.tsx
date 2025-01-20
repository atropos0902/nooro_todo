"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { AxiosInstance } from "@/utils/axiosInstance";
import Form from "../../../components/Form";

const EditTodo: React.FC = () => {
  const [todo, setTodo] = useState();
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    AxiosInstance.get(`/${id}`)
      .then((res) => {
        setTodo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!todo) return null;

  return (
    <div className="w-full grid items-center justify-items-center">
      <Form todo={todo}></Form>
    </div>
  );
};

export default EditTodo;
