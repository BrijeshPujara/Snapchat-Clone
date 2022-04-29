import React, { useEffect } from "react";
import "./App.css";
import WebcamCapture from "./components/WebcamCapture";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Preview from "./components/Preview";
import Chats from "./components/Chats";
import ChatView from "./components/ChatView";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/appSlice";
import Login from "./components/Login";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: auth.User.photoURL,
            id: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <>
            <img className="app-logo"
              src="https://images.ctfassets.net/adclj4ijug4e/5LO0pW3N2SNIQTN3DPr9zZ/ef2d3f804ec3719a3ac0d43ab3732546/social-lg.jpeg"
              alt=""
            />
              <div className="app-body">
                <div className="app-bodyBackground"></div>
              <Routes>
                <Route path="/chats/view" element={<ChatView />} />
              </Routes>

              <Routes>
                <Route path="/chats" element={<Chats />} />
              </Routes>
              <Routes>
                <Route path="/preview" element={<Preview />} />
              </Routes>
              <Routes>
                <Route path="/" element={<WebcamCapture />} />
              </Routes>
            </div>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
