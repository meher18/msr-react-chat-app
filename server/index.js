const express = require('express');
const http  = require('http');
const cors = require('cors');
const {Server} = require("socket.io");

const PORT = process.env.PORT || 4001;
const app = express();

app.use(cors);

const server  = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        method:["GET","POST"]
    }
});

io.on("connection",(socket)=>{
    console.log("connected : "+socket.id);

    socket.on("disconnected",()=>{
        console.log(`dis connected: ${socket.id}`);
    })

    socket.on("join-room", ({user, room})=>{
        socket.join(room);
    })
    socket.on("sendMessage",({user, room, message}) => {
        socket.to(room).emit("receiveMessage",{user, room, message});
    })
})
server.listen(PORT, ()=>{
    console.log("server is running + "+PORT);
})
