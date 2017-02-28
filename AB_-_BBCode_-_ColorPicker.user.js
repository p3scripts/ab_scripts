// ==UserScript==
// @name 			AnimeBytes BBCode ColorPicker
// @author 			psyntax3rr0r
// @version 		1.1
// @description 	A button that insterts [color="#chosencolor"][/color] into the text area.
// @include 		*animebytes.tv/*
// @grant			none
// @icon 			http://animebytes.tv/favicon.ico
// ==/UserScript==

$cp_width = $("#bbcode").children(":first-child").outerWidth();			// Get the width of the first BBCode button
$cp_height = $("#bbcode").children(":first-child").height();			// Get the height of the first BBCode button

if ($cp_width > 30) {
	$cp_width  = ('37');
	$cp_height = ('37');
	$div_pos   = ('-3px');
}
else {
	$cp_width  = ('20');
	$cp_height = ('20');
	$div_pos   = ('-2px');
};

$("#bbcode").children(":nth-child(6)").before('<div id="cp_container" style="display:inline; margin: 0px 3px 0px 0px; position: relative; top: -2px;"><input id="colorpicker" value="#00ff00" type="color"></div>');
$("#cp_container").css({ "top":$div_pos });
$("#colorpicker").css({ "width":$cp_width , "height":$cp_height });		// Setting width and height and position to match the current stylesheet

$("#colorpicker").change(function(){
	$chosencolor = $("#colorpicker").val();
	$("#bbcode").children(":nth-child(7)").attr("onclick","insert_text('[color="+$chosencolor+"]', '[/color]')");
});