// ==UserScript==
// @name        AB profile comment reply
// @namespace   AB profile comment reply
// @author      psyntax3rr0r
// @description Reply button for profile comments
// @icon        http://animebytes.tv/favicon.ico
// @include     *https://animebytes.tv/user.php?*
// @version     1
// @grant       none
// ==/UserScript==

$("a.strong.usercomment_posttime").each( function () {
	$author = $(this).parent().prev(":first-child").children(":first-child").attr("href");
	$(this).before('<a href="'+$author+'#quickpost" class="strong">[Reply]</a>');
});

$(document).ready(function () {
    if(window.location.href.indexOf("quickpost") > -1) {
       $("#quickpost").focus();
    }
});