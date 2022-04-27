import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectCameraImage } from "../features/cameraSlice";
import "./Preview.css";

const Preview = () => {
    const Image = useSelector(selectCameraImage);
    const navigate = useNavigate();

  useEffect(() => {
    if (!Image) {
      navigate("/");
    }
  }, [Image, navigate]);
    
  return (
    <div className="preview">
      <h2>This is a Preview</h2>
      <img src={Image} alt="" />
    </div>
  );
};

export default Preview;
