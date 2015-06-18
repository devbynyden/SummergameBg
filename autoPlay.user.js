// ==UserScript==
// @name         Steamgame BG
// @namespace    http://bynyden.com/
// @version      0.1.4
// @description  Steam Monster Minigame Background
// @author       ltapache
// @match        *://steamcommunity.com/minigame/towerattack*
// @match        *://steamcommunity.com//minigame/towerattack*
// @grant none
// @updateURL https://raw.githubusercontent.com/ltapache/SummergameBg/master/autoPlay.user.js
// @downloadURL https://raw.githubusercontent.com/ltapache/SummergameBg/master/autoPlay.user.js
// @grant        none
// ==/UserScript==
"use strict";
(function( nw ) {

	var bgUrl = "http://i.imgur.com/xEVZ3nn.png";


    setTimeout(function(){
        console.log("BG By LtApache");
        nw.$J(".tv_ui").css("background-image", "url("+bgUrl+")");
    }, 10000);

}(window));