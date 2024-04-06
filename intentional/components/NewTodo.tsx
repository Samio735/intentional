import { sendToBackground } from "@plasmohq/messaging"

import type { Intention, Todo } from "~types"

import { Input } from "./ui/input"

// aaaaaaa
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
        placeholder="New task ..."
        onKeyUp={(e) => {
          const target = e.target as HTMLInputElement

          if (e.key === "Enter") {
            let newTodo: Todo
            newTodo = { text: target.value, completed: false, pending: true }
            setIntention((intention: Intention) => {
              const newTodos = [...(intention?.todos || []), newTodo]
              return { ...intention, todos: newTodos }
            })
            sendToBackground({
              name: "check-todo",
              body: {
                title: intention.name,
                todo: newTodo.text
              }
            }).then((res) => {
              console.log(res)
            })
            // setTimeout(
            //   () => {
            //     setIntention((intention: Intention) => {
            //       const newTodos =
            //         intention?.todos.map((todo) => {
            //           if (todo.text == newTodo.text) todo.pending = false
            //           return todo
            //         }) || []
            //       return { ...intention, todos: newTodos }
            //     })
            //   },

            //   1000
            // )
            target.value = ""
          }
        }}
      />
    </div>
  )
}
