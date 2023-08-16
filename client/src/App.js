
import { useState } from 'react';
import JoinUser from './components/JoinUser';
import './App.css';
import io from 'socket.io-client';

const socket = io.connection("https://localhost:4001");
function App() {
  return (
    <div>
    <JoinUser props ={{socket: socket}}></JoinUser>
    </div>
  );
}

export default App;
