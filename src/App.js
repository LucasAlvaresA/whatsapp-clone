import React, { useState, useEffect } from 'react';
import "./App.css";

import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default function App() {

 const [chatlist, setChatList] = useState([
   {chatId: 1, title: "Fulano de Tal", image: "https://www.w3schools.com/howto/img_avatar2.png"},
   {chatId: 2, title: "Fulano de Tal", image: "https://www.w3schools.com/howto/img_avatar2.png"},
   {chatId: 3, title: "Fulano de Tal", image: "https://www.w3schools.com/howto/img_avatar2.png"},
   {chatId: 4, title: "Fulano de Tal", image: "https://www.w3schools.com/howto/img_avatar2.png"},
 ]);
 const [activeChat, setActiveChat] = useState({});
 const [user, setUser] = useState({
   id:1234,
   avatar: "https://www.w3schools.com/howto/img_avatar2.png",
   name: "Usuario Logado"
 });

 return (
   <div className="app-window">
     <div className="sidebar">
        <header>
            <img className="header--avatar" src={user.avatar} alt="" />
            <div className="header--buttons">
              <div className="header--btn">
                <DonutLargeIcon style={{color: "#919191"}} />
              </div>
              <div className="header--btn">
                <ChatIcon style={{color: "#919191"}} />
              </div>
              <div className="header--btn">
                <MoreVertIcon style={{color: "#919191"}} />
              </div>
            </div>
        </header>
        <div className="search">
            <div className="search--input">
                <SearchIcon fontSize="small" style={{color: "#919191"}}/>
                <input type="search" placeholder="Procurar ou começar uma nova conversa" />
            </div>
        </div>
        <div className="chatlist">
            {chatlist.map((item, key)=> (
                <ChatListItem 
                    key={key}
                    data={item}
                    active={activeChat.chatId === chatlist[key].chatId}
                    onClick={()=>setActiveChat(chatlist[key])}
                />
            ))}
        </div>
     </div>
     <div className="contentarea">
        {activeChat.chatId !== undefined &&
            <ChatWindow 
                user={user}
            />
        }

        {activeChat.chatId === undefined &&
            <ChatIntro />
        }
     </div>
   </div>
 );
}