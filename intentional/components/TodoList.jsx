import { useState } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import { NewTodo } from "./NewTodo"
import { TodoItem } from "./TodoItem"

export default function TodoList() {
  const [todos, setTodos] = useStorage("todos")
  return (
    // <div>hello</div>
    <div className="  w-[80%] max-w-md  flex flex-col gap-4">
      <NewTodo setTodos={setTodos} />
      {todos?.map((todo, index) => (
        <TodoItem
          setTodos={setTodos}
          key={index}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
    </div>
  )
}
