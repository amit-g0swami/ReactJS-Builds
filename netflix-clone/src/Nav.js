import React, {useState, useEffect} from 'react';
import './Nav.css';

function Nav() {

     const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <h1 className="nav__logo">NETFLIX</h1>
            <img className="nav__avatar" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="" />
        </div>
    )
}

export default Nav
