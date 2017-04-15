// ==UserScript==
// @name 			AnimeBytes QLinks
// @author 			psyntax3rr0r
// @version 		0.1
// @description 	Because we need them...
// @include 		*animebytes.tv/*
// @grant			none
// @icon 			http://animebytes.tv/favicon.ico
// ==/UserScript==

$("#userinfo_minor").children(":nth-child(3)").after('<li class="navmenu"> \
									<a>QLinks</a> \
								    <span class="dropit hover clickmenu"><span class="stext">ˇ</span> \
								    <ul class="subnav nobullet" style="display: none;"> \
										<li><a href="/forums.php?action=viewunread">Unread Posts</a></li> \
										<li><a href="/imageupload.php">Image Upload</a></li> \
										<li><a href="/user.php?action=mei_uploads">Uploaded Images</a></li> \
									</ul> \
								   </li>');