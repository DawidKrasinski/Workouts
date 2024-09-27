import { useEffect } from "react"

export default function Test() {

  useEffect(() => {
    fetch('api/testAPI')
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
  })

  return <div>1</div>
}

