import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import '../refs/Body.css';

function Model({
    id, 
    model, 
    image, 
    subText1, 
    subText2, 
    solarPanelInfo1, 
    solarPanelInfo2,
    buttonText1,
    buttonText2 }) {

    return (
        <div className="body__model">
            <div className={`body__${id}Text`}>
                <ScrollAnimation animateIn="fadeIn" style={{transition: "0.6s"}}>
                    <h1>{model}</h1>
                    <p 
                        style={{
                                fontSize: "16px",
                                textDecoration: "none",
                                color: "black"}}
                    >
                            {subText1} 
                            <a href="#">
                                <u>
                                    {subText2}
                                </u>
                            </a>
                            {solarPanelInfo1}
                            {solarPanelInfo2}
                    </p>
                </ScrollAnimation>
            </div>
           
            <img src={image} />
            <div className={`body__${id}Buttons`}>
                {/* <ScrollAnimation animateIn="fadeIn" style={{transition: "0.6s"}}> */}
                    <a href="#" className="order">{buttonText1}</a>
                    <a href="#" className="more">{buttonText2}</a>
                {/* </ScrollAnimation> */} 
            </div>
        </div>
    )
}

export default Model
