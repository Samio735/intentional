import type { Intention } from "~types"

import { Input } from "./ui/input"

export function NewTodo({
  setIntention,
  intention
}: {
  setIntention: any
  intention: Intention
}) {
  return (
    <div className="opacity-50 hover:opacity-100">
      <Input
        type="new-todo"
        placeholder="New todo ..."
        onKeyUp={(e) => {
          const target = e.target as HTMLInputElement

          if (e.key === "Enter") {
            setIntention((intention: Intention) => {
              const newTodos = [
                ...(intention?.todos || []),
                { text: target.value, completed: false }
              ]
              return { ...intention, todos: newTodos }
            })
            target.value = ""
          }
        }}
      />
    </div>
  )
}
