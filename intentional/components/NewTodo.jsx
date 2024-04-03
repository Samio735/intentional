import { Input } from "./ui/input"

export function NewTodo({ setTodos }) {
  const addTodo = (e) => {
    if (e.key === "Enter") {
      setTodos((todos) => {
        if (todos) return [{ text: e.target.value, completed: false }, ...todos]

        return [{ text: e.target.value, completed: false }]
      })
      e.target.value = ""
    }
  }
  return (
    <div className="opacity-50 hover:opacity-100">
      <Input type="new-todo" placeholder="New todo ..." onKeyPress={addTodo} />
    </div>
  )
}
