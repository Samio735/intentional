import "../style.css"

import { ThemeProvider } from "next-themes"

import { ModeToggle } from "~components/ModeToggle"

import TodoList from "../components/TodoList"

export default function Home() {
  return (
    <div className="dark:bg-black w-screen h-screen">
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange>
        <div className=" flex flex-col items-center ">
          <ModeToggle />
          <h1 className="text-xl  my-6 font-bold">Intentional</h1>
          <TodoList />
        </div>
      </ThemeProvider>
    </div>
    // <div className="text-xl bg-black">hello</div>
  )
}
