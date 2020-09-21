import React from 'react';
import '../refs/Body.css';
import $ from 'jquery';
//import sticky from 'jquery-sticky';

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
    /* $(document).ready(function() {
        $(".body__modelYText").sticky();
    });
 */
    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 120) {
               $(".body__modelYText").css({"opacity" : "0"})
               $(".body__modelYButtons").css({"opacity" : "0"}).css({"transition" : "0.5s"}) 
            }
            else {
                $(".body__modelYText").css({"opacity" : "1"})
                $(".body__modelYButtons").css({"opacity" : "1"}) 
             }
        })

        $(window).scroll(function() {
            if ($(this).scrollTop() > 1400) {
               $(".body__modelXText").css({"opacity" : "0"})
               $(".body__modelXButtons").css({"opacity" : "0"}).css({"transition" : "0.5s"}) 
            }
            else {
                $(".body__modelXText").css({"opacity" : "1"})
                $(".body__modelXButtons").css({"opacity" : "1"}) 
             }
        })

        $(window).scroll(function() {
            if ($(this).scrollTop() > 2600) {
               $(".body__model3Text").css({"opacity" : "0"})
               $(".body__model3Buttons").css({"opacity" : "0"}).css({"transition" : "0.5s"}) 
            }
            else {
                $(".body__model3Text").css({"opacity" : "1"})
                $(".body__model3Buttons").css({"opacity" : "1"})
             }
        })

        $(window).scroll(function() {
            if ($(this).scrollTop() > 3800) {
               $(".body__modelSText").css({"opacity" : "0"})
               $(".body__modelSButtons").css({"opacity" : "0"}).css({"transition" : "0.5s"}) 
            }
            else {
                $(".body__modelSText").css({"opacity" : "1"}) 
                $(".body__modelSButtons").css({"opacity" : "1"})
             }
        })

        $(window).scroll(function() {
            if ($(this).scrollTop() > 4900) {
               $(".body__solarPanelText").css({"opacity" : "0"})
               $(".body__solarPanelButtons").css({"opacity" : "0"}).css({"transition" : "0.5s"}) 
            }
            else {
                $(".body__solarPanelText").css({"opacity" : "1"})
                $(".body__solarPanelButtons").css({"opacity" : "1"}) 
            }
        })

        $(window).scroll(function() {
            if ($(this).scrollTop() > 6200) {
               $(".body__newSolarPanelText").css({"opacity" : "0"})
               $(".body__newSolarPanelButtons").css({"opacity" : "0"}).css({"transition" : "0.5s"}) 
            }
            else {
                $(".body__newSolarPanelText").css({"opacity" : "1"})
                $(".body__newSolarPanelButtons").css({"opacity" : "1"}) 
             }
        })

        $(window).scroll(function() {
            if ($(this).scrollTop() > 8000) {
               $(".body__accessoriesText").css({"opacity" : "0"})
               $(".body__accessoriesButtons").css({"opacity" : "0"}).css({"transition" : "0.5s"}) 
            }
            else {
                $(".body__accessoriesText").css({"opacity" : "1"})
                $(".body__accessoriesButtons").css({"opacity" : "1"})
             }
        })
    })

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
