import React from "react";
import {InstagramEmbed} from "react-social-media-embed";


const InstagramRider = ({post}) => {


    return <div>
        <InstagramEmbed url={post} width={550}/>
    </div>
}

export {InstagramRider}