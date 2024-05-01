import { useState } from "react"

import Intentions from "~components/Intentions"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        padding: 16
      }}>
      <Intentions></Intentions>
    </div>
  )
}

export default IndexPopup
