// ==UserScript==
// @name        AB profile comment reply
// @namespace   AB profile comment reply
// @author      p3
// @description Reply button for profile comments
// @icon        http://animebytes.tv/favicon.ico
// @include     *https://animebytes.tv/user.php?*
// @version     1
// @downloadURL		https://github.com/p3scripts/ab_scripts/raw/master/AB_profile_comment_reply.user.js
// @updateURL		https://github.com/p3scripts/ab_scripts/raw/master/AB_profile_comment_reply.user.js
// @grant       none
// ==/UserScript==

$("a.strong.usercomment_posttime").each( function () {
	$author = $(this).parent().prev(":first-child").children(":first-child").attr("href");
	$(this).before('<a href="'+$author+'#quickpost" class="strong">[&#10150;]</a>');
});

$(document).ready(function () {
    if(window.location.href.indexOf("quickpost") > -1) {
       $("#quickpost").focus();
    }
});
