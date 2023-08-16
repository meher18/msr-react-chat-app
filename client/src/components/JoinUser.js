import React from 'react';
import { useState } from 'react';
import ChatBox from './ChatBox';

  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");
  

const JoinUser = ({socket}) => {
  const userName = prompt("User Name");
  if(userName != null || userName.length() < 0)
  {
    setUser(userName);
    const roomName = prompt("Room Name");

    if(roomName != null || roomName.length() < 0)
    {
      setRoom(roomName);
    }
  }
  if(user !== "" && room !== "")
    {
     <ChatBox props = {{socket, user, rrom}}></ChatBox>
    }

}

export default JoinUser;