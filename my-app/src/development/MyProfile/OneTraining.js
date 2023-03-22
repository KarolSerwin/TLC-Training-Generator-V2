import React from "react";


const OneTraining = ({training}) => {

    const {id, date, params, content} = training
    return <div className="myProfile-training-show" >

        <h2>From: {date}</h2>
        <h2> {params.time} -- {params.level} -- {params.focus} </h2>
        <div  dangerouslySetInnerHTML={{__html: content.a}}/>
        <div style={{width: 860}} dangerouslySetInnerHTML={{__html: content.b}}/>
        <div dangerouslySetInnerHTML={{__html: content.c}}/>
        <div dangerouslySetInnerHTML={{__html: content.d}}/>
        <div dangerouslySetInnerHTML={{__html: content.e}}/>
        <br/>
        <span>training ID: {id}</span>
    </div>

}

export {OneTraining}