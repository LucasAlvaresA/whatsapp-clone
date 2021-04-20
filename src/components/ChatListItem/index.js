import React from 'react';
import "./ChatListItem.css";

export default function ChatListItem({onClick, active, data}) {
 return (
    <div 
        className={`chatListItem ${active ? "active" : ""}`}
        onClick={onClick}
    >
        <img className="chatListItem--avatar" src={data.image} alt="" />
        <div className="chatListItem--lines">
            <div className="chatListItem-line">
                <div className="chatListItem--name">{data.title}</div>
                <div className="chatListItem--date">19:00</div>
            </div>
            <div className="chatListItem-line">
                <div className="chatListItem--lastMsg">
                    <p>Oi,estou sim,e você?</p>
                </div>
            </div>
        </div>
    </div>
 );
}