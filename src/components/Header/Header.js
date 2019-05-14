import React from "react";
import './header.css';

function Header(props){
    return(
        <>

  <div className="container">
  <br></br>
  <br></br>
    <h1 className="display-4">Clicky Game of Thrones</h1>
    <h3>How well do you know the The Realm?</h3>
    <h4>Do not click on the same Character or you will lose points.</h4>
  </div>


<nav className="navbar">
            <span className="navbar2">Clicky Game of Thrones</span>
            <div>
                <h5>Score: {props.score}</h5>
            </div>
            <div>
                <h5>HighScore: {props.highscore}</h5>
            </div>
        </nav>
        </>
    )
}

export default Header;