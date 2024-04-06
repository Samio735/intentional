import { useState } from "react"

import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import type { Intention, Todo } from "~types"

import { NewTodo } from "./NewTodo"
import { TodoItem } from "./TodoItem"

export default function TodoList() {
  const [intention, setIntention] = useStorage({
    key: "intention",
    instance: new Storage({
      area: "local"
    })
  })
  return (
    // <div>hello</div>
    <div className="    flex flex-col gap-4">
      <NewTodo setIntention={setIntention} intention={intention} />
      {intention?.todos?.map((todo: Todo, index: number) => (
        <TodoItem
          setIntention={setIntention}
          key={index}
          text={todo.text}
          completed={todo.completed}
          pending={todo.pending}
        />
      ))}
    </div>
  )
}
