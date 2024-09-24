export default function Test() {

const x = 0

  const getUserData = () => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        console.log("working...")
        resolve()
      }, 600)
    })
  }

  const logIn = () => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        console.log("log in...")

        if(x) 
          resolve()
        else 
          reject()

      }, 200)
    })
  }

  const sendEmail = () => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        console.log("sending...")
        resolve()
      }, 300)
    })
  }

  async function someAsyncFunction () {
    const userData = await getUserData()
    try {
      const user = await logIn(userData)
    } catch {}
    await sendEmail(user)
    console.log("end!")
  }

  someAsyncFunction()

return <div>1</div>
}

