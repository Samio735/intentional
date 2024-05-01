import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const response = await fetch(
      "https://6610b8d69d1699487563.appwrite.global/",
      {
        method: "POST",
        body: JSON.stringify({
          title: req.body?.title,
          todo: req.body?.todo
        })
      }
    )
    const data = await response.json()
    res.send(data)
  } catch (error) {
    res.send({ error: error.message })
    console.error(error)
  }
}
export default handler
