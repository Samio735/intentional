import { useState } from "react"

import { NewTodo } from "./NewTodo"
import { TodoItem } from "./TodoItem"

const InitialTodos = [
  { text: "add this", completed: false },
  { text: "browse youtube and google", completed: false },
  { text: "learn swift", completed: false },
  { text: "build something", completed: false }
]

export default function TodoList() {
  const [todos, setTodos] = useState(InitialTodos)
  return (
    // <div>hello</div>
    <div className="  w-[80%] max-w-md  flex flex-col gap-4">
      <NewTodo setTodos={setTodos} />
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo.text} />
      ))}
    </div>
  )
}
