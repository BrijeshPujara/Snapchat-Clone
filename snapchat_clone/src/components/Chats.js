import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Chats.css";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { db } from "../firebase";

const Chats = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="chats">
      <div className="chats-header">
        <Avatar className="chats-avatar" />
        <div className="chats-search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
        <ChatBubbleIcon className="chats-chatIcon" />
      </div>
          <div className="chats-post">
              {posts.map(({ id, data: { profilePic, username, timestamp, imageUrl, read } }) => (
                  <Chat
                      key={id}
                      id={id}
                      username={username}
                      timestamp={timestamp}
                      imageUrl={imageUrl}
                      read={read}
                      profilePic={profilePic}
                  />
              ))}
      </div>
    </div>
  );
};

export default Chats;
