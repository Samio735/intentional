import { useState } from "react"

import "./style.css"

import Intentions from "~components/Intentions"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        padding: 16,
        width: 600
      }}>
      <Intentions></Intentions>
    </div>
  )
}

export default IndexPopup
