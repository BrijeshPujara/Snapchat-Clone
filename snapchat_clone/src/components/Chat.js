import { Avatar } from "@mui/material";
import React from "react";
import "./Chat.css";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import Timeago from "timeago-react";
import { useDispatch } from "react-redux";
import { selectImage } from "../features/appSlice";
import { useNavigate } from "react-router";
import { db } from "../firebase";

const Chat = ({ id, username, timestamp, read, imageUrl, profilePic }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const open = () => {
    if (!read) {
      dispatch(selectImage(imageUrl));
      db.collection("posts").doc(id).set(
        {
          read: true,
        },
        { merge: true }
      );
      navigate("/chats/view");
    }
  };
  return (
    <div onClick={open} className="chat">
      <Avatar className="chat-avatar" src={profilePic} />
      <div className="chat-info">
        <h4>{username}</h4>
        <p>
         {!read && "Tap to view"}  {" "}
         <Timeago date={new Date(timestamp?.toDate()).toUTCString()} />
        </p>
      </div>

      {!read && <StopRoundedIcon className="chat-readIcon" />}
    </div>
  );
};

export default Chat;
