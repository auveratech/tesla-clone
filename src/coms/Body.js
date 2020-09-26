import React, {useState, useEffect, useRef} from 'react';
import '../refs/Body.css';


import Model from './Model';

function Body() {

    /* const images = ([]); */
    const modelY = "https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/model_y_front_34_blue.jpg"

    const modelX = "https://www.tesla.com/sites/default/files/modelsx-new/social/model-x-social.jpg"

    const model3 = "https://www.tesla.com/assets/img/m3_tw.jpg"

    const modelS = "https://tesla-cdn.thron.com/delivery/public/image/tesla/35d15221-0a5f-4dce-b484-a4db67b81dd2/bvlatuR/std/0x0/model-s@2x"

    const solarPanel = "https://www.tesla.com/sites/default/files/solarpanels/hero/D_solarpanels_hero_2880x1800_ENC.jpg"

    const newSolarPanel = "https://www.tesla.com/sites/default/files/solarroof/hero/SR_Desktop-Hero_2880x1800.jpg"

    const accessories = "https://www.slashgear.com/wp-content/uploads/2019/10/tesla-update-1280x638.jpg"

    const subText1 = "Order Online for"
    const subText2 = "Touchless Delivery"
    const solarPanelInfo1 = "Lowest Cost in America - Money-back guarantee"
    const solarPanelInfo2 = "Solar Roof Costs Less Than a New Roof Plus Solar Panels"

    const buttonTextOrder = "Custom Order"
    const buttonTextMore = "Learn More"
    const buttonTextExist = "Existing Inventory"
    const buttonTextShop = "Shop Now"

    return (
        <div className="body">
            <div className="body__modelContainer">
                <Model
                    id = "modelY" 
                    model = "Model Y"
                    image = {modelY}
                    subText1 = {subText1}
                    subText2 = {subText2}
                    buttonText1 = {buttonTextOrder}
                    buttonText2 = {buttonTextMore}
                />

                <Model
                    id = "modelX" 
                    model = "Model X"
                    image = {modelX}
                    subText1 = {subText1}
                    subText2 = {subText2}
                    buttonText1 = {buttonTextOrder}
                    buttonText2 = {buttonTextExist}
                    isVisible
                />

                <Model
                    id = "model3" 
                    model = "Model 3"
                    image = {model3}
                    subText1 = {subText1}
                    subText2 = {subText2}
                    buttonText1 = {buttonTextOrder}
                    buttonText2 = {buttonTextExist}
                />

                <Model
                    id = "modelS" 
                    model = "Model S"
                    image = {modelS}
                    subText1 = {subText1}
                    subText2 = {subText2}
                    buttonText1 = {buttonTextOrder}
                    buttonText2 = {buttonTextExist}
                />
                <Model
                    id = "solarPanel" 
                    model = "Only $1.49/Watt for Solar on Existing Roofs"
                    image = {solarPanel}
                    solarPanelInfo1={solarPanelInfo1}
                    buttonText1 = {buttonTextOrder}
                    buttonText2 = {buttonTextMore}
                />

                <Model
                    id = "newSolarPanel" 
                    model = "Solar for New Roofs"
                    image = {newSolarPanel}
                    solarPanelInfo2 = {solarPanelInfo2}
                    buttonText1 = {buttonTextOrder}
                    buttonText2 = {buttonTextMore}
                />

                <Model
                    id = "accessories"
                    model = "Accessories"
                    image = {accessories}
                    buttonText1 = {buttonTextShop}
                    buttonText2 = {buttonTextMore}
                    
                
                />
            </div>    
        </div>
    )
}

export default Body
