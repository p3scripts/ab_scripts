// ==UserScript==
// @name        AB - External links on new tab
// @author 		psyntax3rr0r
// @description External links on new tab
// @include     https://animebytes.tv/*
// @version     1
// @grant       none
// ==/UserScript==

$('a[href*="anidb.net"],[href*="animenewsnetwork.com"],[href*="wikipedia.org"],[href*="myanimelist.net"],[href*="mangaupdates.com"]').attr('target','_blank');