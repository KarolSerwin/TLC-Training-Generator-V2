import React from "react";
import {InstagramRider} from "./InstagramRider";
import "./teamCycle.scss"

const TeamCycle = () => {

    const ridersPosts = ["https://www.instagram.com/p/CoVN3zyu1IR/",
    "https://www.instagram.com/p/CiAXkMRjyJl/",
    "https://www.instagram.com/p/CThvPB3jHw_/",
    "https://www.instagram.com/p/Ck1F5j-yw9_/",
    "https://www.instagram.com/p/CgrpZ5gjRzt/",
    "https://www.instagram.com/p/CfPgEekM7M2/",
    "https://www.instagram.com/p/Ch13QaQj0ub/"]

    return <div className="teamCycle-container">
        <h1 className="teamCycle-container-title">The Life Cycle Team</h1>
        <h2>These are actual riders that follow Individual Trials Programming</h2>
        <div className="teamCycle-container-insta">
            {ridersPosts.map(rider => <InstagramRider key={rider} post={rider}/>)}
        </div>
    </div>
}

export {TeamCycle}