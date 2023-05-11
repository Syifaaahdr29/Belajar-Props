import { useState } from "react"
import img from "../assets/me.jpg"

function Profile() {
    const [name, setName] = useState("Syifa")
    const [age, setAge] = useState(20)

    // let name = "Sipe"
    // let age = 20

    return (
        <div>
            <img src={img} alt="" width={200}></img>
            <h1 onClick={() => setName("Sipe")}>Nama : {name}</h1>
            <h2 onClick={() => setName("Sipe")}>Umur : {age}</h2>
        </div>
    )
}

export default Profile