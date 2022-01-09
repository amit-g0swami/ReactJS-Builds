import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
      <Card src="http://essentialhome.eu/blog/wp-content/uploads/2017/10/AirBnB-San-Francisco-Headquarters-Are-Inspired-by-Their-Own-Listings_2.jpg" title="Online Experience" description="Has anyone else been getting these text "/>
      <Card src="https://myvacationhub.com/wp-content/uploads/2020/09/1600412130_440_10-Amazing-Airbnb-Rentals-Near-U.S.-National-Parks.jpg" title="Unique stays" description="of 3 different texts I have received.  The all start out by saying "/>
      <Card src="https://secureservercdn.net/45.40.144.200/23h.d61.myftpupload.com/wp-content/uploads/2019/03/31df420f-ccd2-4021-b8d4-0a8642845b8f.jpg?time=1590376610" title="Entire homes" description="However, they have been delivered during "/>
      </div>
      <div className="home__section">
      <Card src="https://secureservercdn.net/45.40.144.200/23h.d61.myftpupload.com/wp-content/uploads/2019/02/Massive-Alpine-Castle-1.png?time=1590428294" title="1 bedroom stays" description="Has anyone else been getting these text" price="200$"/>
      <Card src="https://media.cntraveler.com/photos/5b6ddd619dc0d5057c463f51/master/w_1200,c_limit/5%20-%20COLLECTIVE.jpg?mbid=social_retweet" title="Unique stays" description="of 3 different texts I have received.  The all start out by saying" price="450$"/>
      <Card src="https://news.airbnb.com/wp-content/uploads/sites/4/2018/03/accessible-header-wide-min.jpg?fit=1800%2C771" title="Entire homes" description="However, they have been delivered during"price="550$"/>
      </div>
    </div>
  );
}

export default Home;
