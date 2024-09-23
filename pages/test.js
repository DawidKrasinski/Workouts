export default function Test() {

 const getUserData = () => {
  return new Promise ((resolve, reject) => {

    setTimeout(() => {
      console.log("working...")
      resolve("end!")
    }, 800)
  }) 
 }

 
  const sendEmail = () => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        console.log("sending email...")
        resolve("send email!")
      }, 200)
    })

  }

  getUserData()
  .then(sendEmail)
return <div></div>
}

