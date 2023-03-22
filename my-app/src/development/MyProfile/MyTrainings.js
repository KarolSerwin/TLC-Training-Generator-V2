import React, {useRef} from "react";
import {OneTraining} from "./OneTraining";
import Carousel from "nuka-carousel";
import ReactToPrint from "react-to-print";


const MyTrainings = ({trainings}) => {

    const reverseTrainings = trainings.sort((a,b) => parseFloat(b.date) - parseFloat(a.date))

    const componentRef = useRef();

    const handleClickRemove = () => {

        localStorage.removeItem("trainings");
        window.location.reload();
    }

    const styles = {
            wrapAround: true,
            animation: "zoom",
            style: {
                width: 1200,
                height: "60vh",
                marginTop: 50,
                marginLeft: 90,
                paddingBottom: 20,
                borderRadius: 10
            }
        }


        return <div style={{display: trainings ? "flex" : "none"}} className="carousel myProfile-container-carousel">
               <div ref={componentRef}>
                <Carousel {...styles}>
                    {reverseTrainings.map((training, index) =>
                        <OneTraining key={index} training={training}/>)}
                </Carousel>
               </div >
                <div id="myTrainings" className="carousel myProfile-container-carousel-btns" style={{display: trainings ? "block" : "none"}}>
                    <ReactToPrint bodyClass="pdf2"
                                  documentTitle="TLC training"
                                  trigger={() => <button>Print or Download</button>}
                                  content={() => componentRef.current} />
                    <button onClick={handleClickRemove}>Delete all trainings</button>
                </div>
        </div>

}

export {MyTrainings}