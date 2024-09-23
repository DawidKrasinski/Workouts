export default function Test() {

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
        resolve()
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
    const user = await logIn(userData)
    await sendEmail(user)
    console.log("end!")
  }

  someAsyncFunction()

return <div>1</div>
}

