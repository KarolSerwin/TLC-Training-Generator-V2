import React, {useState} from "react";
import {NewTrainingGenerator} from "./NewTrainingGenerator/NewTrainingGenerator";
import {NewTrainingShow} from "./NewTrainingShow/NewTrainingShow";
import {trainings} from "../trainings/trainings";

import "./myCycle.scss"
const MyCycle = () => {

    const [newParams, setNewParams] = useState({

        id: "",
        params: {
            time: "",
            level: "",
            focus: ""
        },
        content: {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    })

    const [date, setDate] = useState("");

    const [showButtons, setShowButtons] = useState(false)



    //funkcja pobierania paramsow z training generator oraz generowania daty
    const getParams = (params) => {

        const {time, level, focus} = params

        let result = trainings.filter(training => training.params.time === time && training.params.level === level && training.params.focus === focus)
        console.log(result)
        const newResult = result[Math.floor(Math.random() * result.length)]

        setNewParams({
                id: newResult.id,
                params: {
                    time: newResult.params.time,
                    level: newResult.params.level,
                    focus: newResult.params.focus
                },
                content: {
                    a: newResult.content.a,
                    b: newResult.content.b,
                    c: newResult.content.c,
                    d: newResult.content.d,
                    e: newResult.content.e
                }

        })

        setDate(new Date().toLocaleDateString())

        setShowButtons(true)

    }



    return <div>
        <div className="trainingGenerator">
        <NewTrainingGenerator getParams={getParams}/>
        <NewTrainingShow showButtons={showButtons}  training={newParams} date={date}/>
        </div>
    </div>
}

export {MyCycle}