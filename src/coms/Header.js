import React from 'react';
import '../refs/Header.css';

import teslaLogo from '../imgs/tesla.png';

import DehazeIcon from '@material-ui/icons/Dehaze';
import $ from 'jquery';

function Header() {

    $(document).ready(function(){
        
        $(".header__menu").click(function(){
          $(".header__sidebar").show();
        });

        $(".close").click(function(){
            $(".header__sidebar").hide();
          });
    });
    
    return (
        <div className="header">

            <div className="header__navigation">
                <img 
                    src={teslaLogo}
                    alt=""
                />
            </div>

            <div className="header__option">
                <div className="header__optionItem">
                    <a href="#">Model S</a>
                </div>
                <div className="header__optionItem">
                    <a href="#">Model 3</a>
                </div>
                <div className="header__optionItem">
                    <a href="#">Model X</a>
                </div>
                <div className="header__optionItem">
                    <a href="#">Model Y</a>
                </div>
                <div className="header__optionItem">
                    <a href="#">Solar Roof</a>
                </div>
                <div className="header__optionItem">
                    <a href="#">Solar Panels</a>
                </div>
            </div>
            
            <div className="header__end">
                <div className="header__optionItem">
                    <a href="#">Shop</a>
                </div>
                <div className="header__optionItem">
                    <a href="#">Sign In</a>
                </div>
                <div className="header__optionItem">
                    <a className="header__menu" href="#"><DehazeIcon /></a>
                </div>

            </div>

            <div className="header__sidebar">
                <div className="header__sidebarContainer">
                    <div className="header__sidebarClose">
                        <p className="close">X</p>
                    </div>
                    <div className="header__sidebarOptions">
                        <h3>Used Inventory</h3>
                            <hr />
                            <h3>Trade-In</h3>
                            <hr />
                            <h3>Cybertruck</h3>
                            <hr />
                            <h3>Roadster</h3>
                            <hr />
                            <h3>Semi</h3>
                            <hr />
                            <h3>Powerwall</h3>
                            <hr />
                            <h3>Commercial Solar</h3>
                            <hr />
                            <h3>Test Drive</h3>
                            <hr />
                            <h3>Charging</h3>
                            <hr />
                            <h3>Find Us</h3>
                            <hr />
                            <h3>Support</h3>
                            <hr />
                            <h3>United States</h3>
                            <hr />
                    </div>
                    <div className="header__sidebarBlank">
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
