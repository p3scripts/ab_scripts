// ==UserScript==
// @name 			AB - BBCode Improvements
// @author 			p3
// @version 		1
// @downloadURL		https://github.com/p3scripts/ab_scripts/raw/master/AB%20-%20BBCode%20Improvements.user.js
// @updateURL		https://github.com/p3scripts/ab_scripts/raw/master/AB%20-%20BBCode%20Improvements.user.js
// @description 	BBCode Improvements
// @include 		*animebytes.tv/*
// @grant			GM_addStyle
// @icon 			http://animebytes.tv/favicon.ico
// ==/UserScript==

// Get width and height of the first BBCode button in case we need it for whatever reason
$w = $("#bbcode").children(":first-child").width();
$h = $("#bbcode").children(":first-child").height();

//Replacing the original color button...
$("#bbcode").children(":nth-child(6)").replaceWith('<img id="colortrigger" src="https://animebytes.tv/static/common/symbols/color_one.png" title="ColorPicker" alt="ColorPicker"></img><input id="colorpicker" value="#00ff00" type="color" style="display: none; width: 5px; height: 5px; border: none;">');

//Image onClick triggers the hidden color picker...
$("#colortrigger").click(function(){$("#colorpicker").click();});
$("#colorpicker").change(function(){insert_text("[color="+$(this).val()+"]", "[/color]");});

//Removing onClick attribute from the align button and addig a prompt to ask for left,center or right
$("#bbcode").children(":nth-child(5)").attr("onclick", "").click(function(){
    $align = prompt("Please type left, center or right to set alignment!");
    if ($align != null){insert_text('[align='+$align+']', '[/align]');}
});

//Removing onClick attribute from the Spoilers button and addig a prompt to ask for optional title
$("#bbcode").children(":nth-child(8)").attr("onclick", "").click(function(){
    $spoiler = prompt("Enter a title for your SPOILER tag\nor press OK to leave it empty!");
    if ($spoiler != null){insert_text('[spoiler='+$spoiler+']', '[/spoiler]');}
});

//Removing onClick attribute from the Hide button and addig a prompt to ask for optional title
$("#bbcode").children(":nth-child(9)").attr("onclick", "").click(function(){
    $hide = prompt("Enter a title for your HIDE tag\nor press OK to leave it empty!");
    if ($hide != null){insert_text('[hide='+$hide+']', '[/hide]');}
});

//Removing onClick attribute from the URL button and addig a prompt to ask for URL and Link text
$("#bbcode").children(":nth-child(17)").attr("onclick", "").click(function(){
    $url = prompt("Enter the URL!");
    if ($url != null){$linktext = prompt("Enter link text!");
    if ($linktext != null){insert_text('[url='+$url+']'+$linktext+'[/url]', '');}}
});

GM_addStyle ( `
    #bbcode > br{
        display:none;
    }

    #bbcode{
        padding-bottom:10px;
    }

    #bbcode > img{
        width: 25px;
        height: 25px;
        /*-webkit-filter: sepia(50%);*/
    }

    #smileysbox > span{
        width: 23px;
        height: 23px;
        /*-webkit-filter: sepia(50%);*/
        border-radius: 4px;
        margin: 0 0 0 -7px;
    }

    #bbcode > img:hover{
        -webkit-filter: sepia(25%) drop-shadow(1px 1px 1px rgba(0, 0, 0, .65));
    }

    #smileys > span{
        width: 25px;
        height: 25px;
        /*-webkit-filter: sepia(30%);*/
    }

    #smileys{
        width: 189px !important;
        margin: 26px 0 0 -7px !important;
        z-index: 10;
    }`
);










