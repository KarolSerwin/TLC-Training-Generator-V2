import React from "react";
import {HashLink} from "react-router-hash-link";


const TrainingLevel = ({updateLevel}) => {

    const handleChange = (event) => {
        let valueToSave = event.target.value;
        updateLevel("level", valueToSave)
    }

    return (
        <div className="trainingGenerator-form-param">
            <div>
                <span>LEVEL: </span>
                <select name="option"  onChange={handleChange}>
                    <option selected disabled value="choose">choose</option>
                    <option value="beginner">BEGINNER</option>
                    <option disabled value="intermediate">INTERMEDIATE</option>
                    <option disabled value="advanced">ADVANCED</option>

                </select>
            </div>
            <HashLink smooth to="/methods#level" >
                -- Verify your level --
            </HashLink>

        </div>
    )
}

export {TrainingLevel}