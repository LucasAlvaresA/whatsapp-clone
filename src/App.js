import React, { useState, useEffect } from 'react';
import "./App.css";

import ChatListItem from "./components/ChatListItem/ChatListItem";

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default function App() {

 const [chatlist, setChatList] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]);

 return (
   <div className="app-window">
     <div className="sidebar">
        <header>
            <img className="header--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
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
                />
            ))}
        </div>
     </div>
     <div className="contentarea">
        Content
     </div>
   </div>
 );
}