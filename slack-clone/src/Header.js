import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeSharpIcon from "@material-ui/icons/AccessTimeSharp";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
            alt={user?.displayName}
            src={user?.photoURL}
          // alt="amit_g0swami"
          // src="https://s3.ap-south-1.amazonaws.com/feed-resources-dev/1f934c6f-a209-4d9b-8bf4-0042bf09e14e/avatar/image/79c078ff-676d-4b39-a7eb-2842bcca39fe.jpeg"
        />
        <AccessTimeSharpIcon />
      </div>

      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search amit_g0swami" />
      </div>

      <div className="header__right">
        <HelpOutlineOutlinedIcon />
      </div>
    </div>
  );
}

export default Header;
