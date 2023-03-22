import React, {useRef, useState} from "react";

import {TrainingTime} from "./TrainingTime";
import {TrainingLevel} from "./TrainingLevel";
import {TrainingFocus} from "./TrainingFocus";
import {ButtonGenerate} from "./ButtonGenerate";

const NewTrainingGenerator = ({getParams}) => {

    const [params, setParams] = useState({
        time: "",
        level: "",
        focus: "",
    })

    const updateState = (key, value) => {
        setParams(prevState => {
            return {
                ...prevState,
                [key]: value
            }
        })
    }

    const ref = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        getParams(params)

        ref.current.scrollIntoView({behavior: "smooth", block: "end"});

        setParams({
            time: "",
            level: "",
            focus: "",
        })


    }


    return (
        <form ref={ref} onSubmit={handleSubmit} className="trainingGenerator-form">
            <h1>Select options for your Training</h1>
            <TrainingTime updateTime={updateState}/>
            <TrainingLevel updateLevel={updateState}/>
            <TrainingFocus updateFocus={updateState}/>
            <ButtonGenerate />
        </form>
    )
}

export {NewTrainingGenerator}