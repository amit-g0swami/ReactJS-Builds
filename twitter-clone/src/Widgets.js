import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1421810424492609542"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="amit_g0swami"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/amit_g0swami"}
          options={{ text: "I love react", via: "amit_g0swami" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
