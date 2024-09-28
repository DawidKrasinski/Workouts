import { useEffect } from "react"
import { useState } from "react"

export default function Test() {

  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('api/testAPI')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.log(error))
  })

  return <div>
    <p>message from backend: {message} </p>
  </div>
}

