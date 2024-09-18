import { useState } from "react";

function Test() {
const [v, s] = useState(1)

const increment = () => {
  s(v+1)
}

    return (
      <>
        <button onClick={increment}>kliknij</button>
        <span>{v}</span>
      </>
    );
  }
  
  export default Test