import React from "react";



const NewTrainingParams = ({trainingParams, date}) => {

const {time, level, focus} = trainingParams


    return <div className="trainingGenerator-show-body-params">
        <h1>Your new training {date} </h1>
        <div className="span">
        <p >You will train for: <b>{time}</b>  </p>
        <p>on <b>{level}</b> level </p>
        <p>focusing on: <b>{focus}</b> aspect</p>
        </div>
    </div>
}

export {NewTrainingParams}