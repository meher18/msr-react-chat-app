import React from 'react';
import { useState } from 'react';



const [message, setMessage] = useState("");
const inputMessage = (event) =>{
    setMessage(event.target.value);
    console.log(message);
}

const sendMessage =({socket, user, room}) =>
{
 socket.emit("sendMessage", {user, room, message});
}
const ChatBox = ({socket, user, room}) => {
    <div id="chat_container">
    <input type='text' onChange={inputMessage(this)}></input>
    <input type='button' onClick={(sendMessage(socket, user, room))}/>
    </div>

}

export default ChatBox;