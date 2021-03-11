import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import './Nav.css';
//import useState from 'react';

function Nav() {

    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if (window.scrollY > 100 ){
            handleShow(true);
        }else {
            handleShow(false);
        }
    };

   useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar)
   }, []);
    return (
        <div className= { "nav nav__black"}>
            <div className="nav__contents">
            <img 
                onClick={() => history.push("/")}
                className="nav__logo"
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt=""
            />
            <img
                onClick={() => history.push("/profile")}
                className="nav__avatar"
                src="https://i.pinimg.com/564x/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.jpg"
                alt=""
            />

            </div>
            
        </div>
    )
}

export default Nav
