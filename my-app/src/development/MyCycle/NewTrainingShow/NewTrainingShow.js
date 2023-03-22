import React, {useRef} from "react";
import {NewTrainingParams} from "./NewTrainingParams";
import {NewTrainingContent} from "./NewTrainingContent";


import ReactToPrint from 'react-to-print'
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";


const NewTrainingShow = ({training, date, showButtons}) => {

    const componentRef = useRef();

    const {params, content} = training


    const handleClickSave = () => {

        const {id, params, content} = training
        const firstNewTraining = [{id, date, params, content}]
        const newTraining = {id, date, params, content}


        if (localStorage.getItem("trainings")) {

            const previousTrainings = JSON.parse(localStorage.getItem("trainings"))
            const actualTrainings = [...previousTrainings, newTraining ]
            localStorage.setItem("trainings", JSON.stringify(actualTrainings))

        } else {
            localStorage.setItem("trainings", JSON.stringify(firstNewTraining))
        }
        //window.location.reload();

    }


    const handleClickReset = () => {
        window.location.reload();
    }

    return <div className="trainingGenerator-show">

        <div ref={componentRef} className="trainingGenerator-show-body">
            <NewTrainingParams  trainingParams={params} date={date}/>
            <NewTrainingContent  trainingContent={content} />
        </div>
        <div style={{display: showButtons ? "block" : "none"}} className="trainingGenerator-show-btns">
            <div className="trainingGenerator-show-btns-in">
            <button onClick={handleClickReset}>Reset</button>
            <HashLink to="/#myTrainings" className="save-btn" onClick={handleClickSave}>Save Training to My Profile</HashLink>
            <ReactToPrint bodyClass="pdf"
                          documentTitle="TLC training"
                          trigger={() => <button>Print or Download</button>}
                          content={() => componentRef.current} />
            </div>
            <Link to="/methods" className="methods-link"> Learn about all types of methods used in trainings </Link>
        </div>

    </div>
}

export {NewTrainingShow}