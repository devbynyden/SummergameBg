// ==UserScript==
// @name         Steamgame BG
// @namespace    https://github.com/ltapache/SummergameBg
// @version      0.2.3
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
		//Background change interface
        console.log("BG By LtApache");
        nw.$J(".tv_ui").css("background-image", "url("+bgUrl+")");
		
		
		//Background change of options and info box
		var options_box2 = document.querySelector(".options_box");
		if(!options_box2) {
			options_box2 = document.querySelector(".options_box");
		}		
		var info = document.querySelector(".info_box");
		if(!info) {
			info = document.querySelector(".info_box");
		}			
		options_box2.style.backgroundImage = "url(\"http://i.imgur.com/QFxudNP.jpg\")";
		options_box2.style.backgroundRepeat  = "repeat";
		//options_box2.style.color = "red";
		info.style.backgroundImage = "url(\"http://i.imgur.com/QFxudNP.jpg\")";
		info.style.backgroundRepeat  = "repeat";
		
		
		//Steam Background page change
		var bgHead = document.querySelector(".flat_page.game");
		if(!bgHead) {
			bgHead = document.querySelector(".flat_page.game");
		}	
		bgHead.style.backgroundImage = "url(\"http://i.imgur.com/riHzvTu.jpg\")";
		bgHead.style.backgroundRepeat  = "repeat";
		
    }, 10000);

}(window));
