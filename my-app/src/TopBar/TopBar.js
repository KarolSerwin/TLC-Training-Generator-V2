import React from "react";


const TopBar = ({toggle}) => {

    const user = localStorage.getItem("user")

  

    return <div className="topBar">
        <button onClick={toggle}>Switch color mode</button>
        
        <span style={{display: user ? "block" : "none"}}>Logged in as: {user}</span>
    </div>
}

export {TopBar}