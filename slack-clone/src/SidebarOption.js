import React from "react";
import "./SidebarOption.css";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import db from "./firebase";

function SidebarOption({ Icon, title, id, addChannelOption }) {
  // const history = useHistory();
  const navigate = useNavigate();

  const addChannel = () => {
    const channelName = prompt("Please enter the room name");
    if(channelName){
db.collection('rooms').add({
  name: channelName,
})
    }
  };

  const selectChannel = () => {
    if (id) {
      // history.push(`/room/${history}`);
      navigate(`/room/${id}`);
    } else {
      navigate("/");
    }
  };
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebaroption__channel">
          <span className="sidebarOption__hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
