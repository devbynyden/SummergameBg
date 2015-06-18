// ==UserScript==
// @name         Steamgame BG
// @namespace    http://bynyden.com/
// @version      0.1.3
// @description  Steam Monster Minigame Background
// @author       You
// @match        *://steamcommunity.com/minigame/towerattack*
// @match        *://steamcommunity.com//minigame/towerattack*
// @grant        none
// ==/UserScript==
(function(nw) {

	var bgUrl='http://i.imgur.com/xEVZ3nn.png';


    setTimeout(function(){
        console.log("BG By LtApache");
        nw.$J('.tv_ui').css('background-image', 'url('+bgUrl+')');
    }, 10000);

}(window));