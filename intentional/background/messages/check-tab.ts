import type { PlasmoMessaging } from "@plasmohq/messaging"
import { Storage } from "@plasmohq/storage"

import type { Intention } from "~types"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const storage = new Storage({ area: "local" })
  const intention = await storage.get<Intention>("intention")
  if (!intention.name) return
  try {
    const response = await fetch(
      "https://660caf82d8b257b28425.appwrite.global/",
      {
        method: "POST",
        body: JSON.stringify({
          info: req.body.info,
          title: intention?.name,
          todos: intention?.todos
        })
      }
    )
    const data = await response.json()
    if (data.data.relevant === true || data.data.relevant === false)
      res.send(data)
    else {
      res.send({ reload: true })
    }
  } catch (error) {
    res.send({ reload: true })
    console.error(error)
  }
}

export default handler
