import type { PlasmoMessaging } from "@plasmohq/messaging"
import { Storage } from "@plasmohq/storage"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const storage = new Storage()
  const todos = await storage.get("todos")
  const response = await fetch(
    "https://660caf82d8b257b28425.appwrite.global/",
    {
      method: "POST",
      body: JSON.stringify({
        info: req.body.info,
        todos
      })
    }
  )
  const data = await response.json()
  res.send(data)
}

export default handler
