import ArrowBackIosIcon from "@material-ui/icons/CameraAltOutlined";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import React from "react";
import "./VideoHeader.css";

function VideoHeader() {
  return (
    <div className="videoHeader">
      <ArrowBackIosIcon />
      <h3>Reels</h3>
      <CameraAltOutlinedIcon />
    </div>
  );
}

export default VideoHeader;
