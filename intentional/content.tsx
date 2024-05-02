import cssText from "data-text:~style.css"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"
import { getPort } from "@plasmohq/messaging/port"
import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import Intentions from "~components/Intentions"
import TodoList from "~components/TodoList"

const storage = new Storage({
  area: "local"
})
export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

export {}
// url, title, heading all subheadings like h1 h2 h3 ...
let info = {
  url: document.URL,
  title: document.title.substring(0, 100),
  heading: document.querySelector("h1")?.textContent,
  subheadings: Array.from(document.querySelectorAll("h2, h3, h4, h5, h6"))
    .filter((el) => el.textContent.length > 10)
    .map((el) => el.textContent)
}

storage.watch({
  intention: (c) => {
    console.log(c)
    if (!c.oldValue) {
      location.reload()
    }
  }
})

export default function content() {
  const [relevant, setRelevant] = useState(true)
  function checkRelevance() {
    setTimeout(() => {
      sendToBackground({
        name: "check-tab",
        body: {
          info
        }
      }).then((res) => {
        if (res.reload) {
          location.reload()
        }
        console.log(JSON.stringify(info).substring(0, 1000))
        console.log(res)
        console.log(res.data.relevant)
        if (res.data.relevant == false) {
          setRelevant(false)
          document.body = document.createElement("body")
        }
      })
    }, 1000)
  }

  useEffect(() => {
    checkRelevance()
  }, [])
  if (relevant) return <></>
  return (
    <div
      className={`dark text-base fixed bg-black text-white w-screen h-screen z-100 flex flex-col  items-center`}>
      <h1 className="text-xl  my-6 font-bold">intentional</h1>
      <h1 className=" text-xl font-medium max-w-md my-10">
        It seems that this page isn't relevant to any of your to-do items :(
      </h1>
      <Intentions />
    </div>
  )
}
