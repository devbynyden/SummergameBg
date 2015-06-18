// ==UserScript==
// @name         Steamgame BG
// @namespace    https://github.com/ltapache/SummergameBg
// @version      0.2.0
// @description  Steam Monster Minigame Background
// @author       ltapache
// @match        *://steamcommunity.com/minigame/towerattack*
// @match        *://steamcommunity.com//minigame/towerattack*
// @grant none
// @updateURL https://raw.githubusercontent.com/ltapache/SummergameBg/master/autoPlay.user.js
// @downloadURL https://raw.githubusercontent.com/ltapache/SummergameBg/master/autoPlay.user.js
// @grant        none
// ==/UserScript==
(function( nw ) {

	var bgUrl = "http://i.imgur.com/xEVZ3nn.png";


    setTimeout(function(){
        console.log("BG By LtApache");
        nw.$J(".tv_ui").css("background-image", "url("+bgUrl+")");
		var options_box2 = document.querySelector(".options_box");

		if(!options_box2) {
			options_box2 = document.querySelector(".options_box");
		}		
		options_box2.style.backgroundImage = "url(\"http://i.imgur.com/QFxudNP.jpg\"))";
		options_box2.style.backgroundRepeat  = "repeat";
		//options_box.style.color = "white";
		
    }, 10000);

}(window));
