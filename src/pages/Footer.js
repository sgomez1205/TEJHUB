/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Footer.css';
import Facebook from '../pages/img/Facebook.png'
import Instagram from '../pages/img/Instagram.png'
import Twitter from '../pages/img/Twitter.png'
import Youtube from '../pages/img/Youtube.png'

function Footer(props){
    return(
        <div className="Foot">
            <a href="https://www.facebook.com/search/posts/?q=barcelona%20vs%20bayern%20munich"><img width="40" height="40" src = {Facebook}></img></a>
            <a href="https://www.instagram.com/isabellalondono1/?hl=es-la"><img width="40" height="40" src = {Instagram}></img></a>
            <a href="https://twitter.com/LuisFDiaz19"><img width="40" height="40" src = {Twitter}></img></a>
            <a href="https://www.youtube.com/watch?v=mCdA4bJAGGk&ab_channel=sweetblue."><img width="40" height="40" src = {Youtube}></img></a>
            <div><p>&copy; Team SGV Ultra Team. All rights reserved. | Design by Sebastián Gómez</p></div>
        </div>
        
    );
}

export default Footer;