// import cssText from "data-text:~style.css"
// import { useTheme } from "next-themes"
// import OpenAI from "openai"
// import { useEffect, useState } from "react"

// import { sendToBackground } from "@plasmohq/messaging"
// import { Storage } from "@plasmohq/storage"

// import { ModeToggle } from "~components/ModeToggle"
// import { ThemeProvider } from "~components/theme-provider"
// import TodoList from "~components/TodoList"

// export const getStyle = () => {
//   const style = document.createElement("style")
//   style.textContent = cssText
//   return style
// }

// export {}

// const storage = new Storage()

// let info

// info = {
//   url: document.URL,
//   title: document.title,
//   heading: document.querySelector("h1")?.textContent,
//   subheadings: Array.from(document.querySelectorAll("h2")).map(
//     (subheading) => ({
//       heading: subheading.textContent,
//       paragraph: subheading.nextElementSibling?.textContent
//     })
//   )
// }

// export default function content() {
//   const { theme, setTheme } = useTheme()
//   const [relevant, setRelevant] = useState(true)
//   sendToBackground({
//     name: "check-tab",
//     body: {
//       info
//     }
//   }).then((res) => {
//     console.log(res)
//     console.log(res.data.relevant)
//     if (res.data.relevant == false) {
//       setRelevant(false)
//       document.body = document.createElement("body")
//     }
//   })
//   useEffect(() => {}, [])
//   if (relevant) return <></>
//   return (
//     <div
//       className={`dark text-base fixed bg-black text-white w-screen h-screen z-100 flex flex-col  items-center`}>
//       <h1 className="text-xl  my-6 font-bold">intentional</h1>
//       <h1 className=" text-xl font-medium max-w-md my-20">
//         It seems that this page isn't relevant to any of your to-do items :(
//       </h1>
//       <TodoList />
//     </div>
//   )
// }
