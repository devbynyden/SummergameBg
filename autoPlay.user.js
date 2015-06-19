// ==UserScript==
// @name         Steamgame BG
// @namespace    https://github.com/ltapache/SummergameBg
// @version      0.2.5.2
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
	
	//SETTINGS
	var interfaceBgUrl = "http://i.imgur.com/xEVZ3nn.png";
	var optionsBgUrl = "http://i.imgur.com/QFxudNP.jpg";
	var infoBgUrl = "http://i.imgur.com/QFxudNP.jpg";
	var steamBgUrl = "http://i.imgur.com/riHzvTu.jpg";
	var timeOut = 10000; // Necessary to overwrite 


	//PROGRAM
    setTimeout(function(){
		//Background change interface
        console.log("BG By LtApache");
        nw.$J(".tv_ui").css("background-image", "url("+interfaceBgUrl+")");
		
		
		//Background change of options and info box
		var options_box2 = document.querySelector(".options_box");
		if(!options_box2) {
			options_box2 = document.querySelector(".options_box");
		}		
		var info = document.querySelector(".info_box");
		if(!info) {
			info = document.querySelector(".info_box");
		}			
		options_box2.style.backgroundImage = "url(\""+optionsBgUrl+"\")";
		options_box2.style.backgroundRepeat  = "repeat";
		//options_box2.style.color = "red";
		info.style.backgroundImage = "url(\""+infoBgUrl+"\")";
		info.style.backgroundRepeat  = "repeat";
		
		
		//Steam Background page change
		var bgHead = document.querySelector(".auction_home_page");
		if(!bgHead) {
			bgHead = document.querySelector(".auction_home_page");
		}	
		bgHead.style.backgroundImage = "url(\""+steamBgUrl+"\")";
		bgHead.style.backgroundRepeat  = "repeat";
		
		
		//Add option to select menu
		var selectMenu = document.getElementsByName("praiseGoldHelmImage");
		var optionHtml = document.createElement("option");
		optionHtml.value = interfaceBgUrl;
		optionHtml.text = "Custom BG";
		selectMenu[0].add(optionHtml,0);
		
    }, timeOut);

}(window));
