import "../style.css"

import { ThemeProvider } from "next-themes"

import { ModeToggle } from "~components/ModeToggle"

import TodoList from "../components/TodoList"

export default function Home() {
  return (
    <div className="dark">
      <div className="dark dark:bg-black dark:text-white w-screen h-screen">
        <div className=" flex flex-col items-center ">
          <h1 className="text-xl  my-6 font-bold">intentional</h1>
          <TodoList />
        </div>
      </div>
    </div>
  )
}
