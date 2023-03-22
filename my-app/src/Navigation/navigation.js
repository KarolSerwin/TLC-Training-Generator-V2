import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {


    return <ul className="app-navig">
        <li><Link className="app-navig-link" to="/">My Profile</Link></li>
        <li><Link className="app-navig-link" to="/my-cycle">My Cycle</Link></li>
        <li><Link className="app-navig-link" to="/team-cycle">Team Cycle</Link></li>
        <li><Link className="app-navig-link" to="/methods">TLC Methods</Link></li>
    </ul>
}

export {Navigation}