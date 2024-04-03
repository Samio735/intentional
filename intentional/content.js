import { Storage } from "@plasmohq/storage"

export {}
const storage = new Storage()
storage.get("todos").then((todos) => {
  console.log(todos)
})

let info

//  write a text that contains the title of the current web page, the heading, subheadings each one with it's paragraph

info = {
  url: document.URL,
  title: document.title,
  heading: document.querySelector("h1")?.textContent,
  subheadings: Array.from(document.querySelectorAll("h2")).map(
    (subheading) => ({
      heading: subheading.textContent,
      paragraph: subheading.nextElementSibling?.textContent
    })
  )
}
console.log(info)
