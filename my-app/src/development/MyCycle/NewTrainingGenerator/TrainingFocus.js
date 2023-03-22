import React from "react";
import {HashLink} from "react-router-hash-link";

const TrainingFocus = ({updateFocus}) => {

    const handleChange = (event) => {
        let valueToSave = event.target.value;
        updateFocus("focus", valueToSave)
    }


    return (
        <div className="trainingGenerator-form-param">
            <div>
                <span>FOCUS: </span>
                <select name="option"   onChange={handleChange}>
                    <option selected disabled value="choose">choose</option>
                    <option value="technical">Technical</option>
                    <option value="jump">Jump</option>
                    <option value="endurance">Endurance</option>
                </select>
            </div>
            <HashLink smooth to="/methods#focus" >
                -- About training focus --
            </HashLink>
        </div>
    )
}

export {TrainingFocus}