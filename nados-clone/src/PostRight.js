import React from 'react'
import "./PostRight.css"

function PostRight() {
    return (
        <div className="leftcard">
            <div className="leftcard__card">
                <h5>Top Doubt Resolvers</h5>
                <div className="leftcard__cardc">
                    <div className="topusers">
                    <div className="userinfo">
                    <div className="userprofile">
                    <img src="https://wallpaperaccess.com/full/2032981.jpg" alt=""/>
                    </div>
                    <div className="username">
                    <span>Vladimir Putin</span>
                    </div>
                    </div>
                        <div className="topuserscore">
                         <h5>82</h5>   
                        </div>
                    </div> 
                    <div className="topusers">
                    <div className="userinfo">
                    <div className="userprofile">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt=""/>
                    </div>
                    <div className="username">
                    <span>Amit Goswami</span>
                    </div>
                    </div>
                        <div className="topuserscore"> <h5>53</h5></div> 
                    </div>
                    <div className="topusers">
                    <div className="userinfo">
                    <div className="userprofile">
                    <img src="https://images.wsj.net/im-275882?width=1280&size=1" alt=""/>
                    </div>
                    <div className="username">
                    <span>wang -國王</span>
                    </div>
                    </div>
                        <div className="topuserscore">  <h5>32</h5> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostRight
