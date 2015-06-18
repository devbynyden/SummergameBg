// ==UserScript==
// @name         Steamgame BG
// @namespace    https://github.com/ltapache/SummergameBg
// @version      0.1.5
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
		var options_box = document.querySelector(".options_box");

		if(!options_box) {
			options_box = document.querySelector(".options_box");
		}		
		options_box.style.background-image = "url('http://i.imgur.com/QFxudNP.jpg'))";
		options_box.style.background-repeat  = "repeat";
		//options_box.style.color = "white";
		
    }, 8000);

}(window));
