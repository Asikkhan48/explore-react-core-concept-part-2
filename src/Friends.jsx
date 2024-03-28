import { useEffect, useState } from "react"
import "./fridens.css"
import Friend from "./Friend"

const [friends, setFriends] = useState([])

useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data = setFriends(data))
}, [])

export default function Friends(){
    return(
        <div className="box">
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}