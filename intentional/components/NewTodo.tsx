import { sendToBackground } from "@plasmohq/messaging"

import type { Intention, Todo } from "~types"

import { Input } from "./ui/input"
import { useToast } from "./ui/use-toast"

// aaaaaaa
export function NewTodo({
  setIntention,
  intention
}: {
  setIntention: any
  intention: Intention
}) {
  const { toast } = useToast()
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
              const relevant = res?.data?.relevant
              console.log("relevant", relevant)
              if (relevant) {
                setIntention((intention: Intention) => {
                  const newTodos =
                    intention?.todos.map((todo) => {
                      if (todo.text == newTodo.text) todo.pending = false
                      return todo
                    }) || []
                  return { ...intention, todos: newTodos }
                })
              } else if (res?.data?.error) {
                toast({
                  title: "Error checking task"
                })
              } else {
                setIntention((intention: Intention) => {
                  const newTodos =
                    intention?.todos.filter(
                      (todo) => todo.text !== newTodo.text
                    ) || []
                  return { ...intention, todos: newTodos }
                })
                toast({
                  title: "Task is not relevant"
                })
              }
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
