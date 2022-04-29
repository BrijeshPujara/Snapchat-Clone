import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Chats.css";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { auth, db } from "../firebase";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/appSlice";
import RadioButtonUnchecked from "@mui/icons-material/RadioButtonUnchecked";
import { useNavigate } from "react-router";
import { resetCameraImage } from "../features/cameraSlice";

const Chats = () => {
  const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    const takeSnap = () => {
        dispatch(resetCameraImage());
        navigate('/')
        

    }

  return (
    <div className="chats">
      <div className="chats-header">
        <Avatar
          src={user.profilePic}
          onClick={() => auth.signOut()}
          className="chats-avatar"
        />
        <div className="chats-search">
          <SearchIcon className="chats-searchIcon" />
          <input placeholder="Search" type="text" />
        </div>
        <ChatBubbleIcon className="chats-chatIcon" />
      </div>
      <div className="chats-post">
        {posts.map(
          ({
            id,
            data: { profilePic, username, timestamp, imageUrl, read },
          }) => (
            <Chat
              key={id}
              id={id}
              username={username}
              timestamp={timestamp}
              imageUrl={imageUrl}
              read={read}
              profilePic={profilePic}
            />
          )
        )}
      </div>
      <RadioButtonUnchecked
        className="chats-takePic"
        onClick={takeSnap}
        fontSize="large"
      />
    </div>
  );
};

export default Chats;
