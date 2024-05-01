import { Storage } from "@plasmohq/storage"

import type { Intention } from "~types"

const storage = new Storage({ area: "local" })

setInterval(async () => {
  const intention: Intention = await storage.get("intention")
  // console.log(intention)
  if (!intention) return
  if (intention?.duration) {
    intention.duration = intention.duration - 1
    await storage.set("intention", intention)
    // console.log("Intention duration is", intention.duration)
  }
  if (intention?.duration === 0) {
    // console.log("intention ended")
    await storage.set("intention", { locked: false })
  }
}, 1000)
