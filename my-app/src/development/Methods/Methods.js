import React from "react";
import "./methods.scss"
import {intro, level, time, focus} from "./description";
import pic1 from "./Images/ja i Olivier.png"
import pic2 from "./Images/_1053824 ok.jpg"
import pic3 from "./Images/ochotnica5.jpg"
import pic4 from "./Images/_33_0280 ok.jpg"
const Methods = () => {

    return <div className="methods-container">
        <section>
            <h1>Introduction</h1>
            <div className="photo-box">
                <img alt="" src={pic1}/>
                <div className="methods-container-intro" dangerouslySetInnerHTML={{__html: intro}}/>
            </div>

        </section>


        <section id="level">
            <h1>What is your level?</h1>
            <div className="photo-box">
                <img alt="" src={pic2}/>
            <div  dangerouslySetInnerHTML={{__html: level}}/>
            </div>
        </section>

        <section id="time">
            <h1>Training time</h1>
            <div className="photo-box">
                <img alt="" src={pic3}/>
                <div  dangerouslySetInnerHTML={{__html: time}}/>
            </div>
        </section>

        <section id="focus">
            <h1>Training focus</h1>
            <div className="photo-box">
                <img alt="" src={pic4}/>
                <div  dangerouslySetInnerHTML={{__html: focus}}/>
            </div>
        </section>
    </div>
}

export {Methods}