import React from 'react';
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
                <h1>{model}</h1>
                <p>{subText1} <a href="#"><u>{subText2}</u></a></p>
                <p>{solarPanelInfo1}</p>
                <p>{solarPanelInfo2}</p>
            </div>
            <img src={image} />
            <div className={`body__${id}Buttons`}>
                <a href="#" class="order">{buttonText1}</a>
                <a href="#" class="more">{buttonText2}</a>
            </div>

        </div>
    )
}

export default Model
