import { useState } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import type { Intention } from "~types"

import { NewTodo } from "./NewTodo"
import { TodoItem } from "./TodoItem"

export default function TodoList() {
  const [intention, setIntention] = useState<Intention>()
  console.log(intention)
  return (
    // <div>hello</div>
    <div className="    flex flex-col gap-4">
      <NewTodo setIntention={setIntention} intention={intention} />
      {intention?.todos?.map((todo, index) => (
        <TodoItem
          setIntention={setIntention}
          key={index}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
    </div>
  )
}
