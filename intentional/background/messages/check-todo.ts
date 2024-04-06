import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  console.log("checkkk")
  const response = await fetch("http://6610b8d69d1699487563.appwrite.global/", {
    method: "POST",
    body: JSON.stringify({
      title: req.body?.title,
      todo: req.body?.todo
    })
  })
  const data = await response.json()
  res.send(data)
}

export default handler
