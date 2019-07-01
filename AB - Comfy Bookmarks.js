// ==UserScript==
// @name         AB - Comfy bookmarks
// @version      0.1
// @description  Comfy bookmarks
// @downloadURL  https://github.com/p3scripts/ab_scripts/raw/master/AB%20-%20Comfy%20Bookmarks.js
// @updateURL    https://github.com/p3scripts/ab_scripts/raw/master/AB%20-%20Comfy%20Bookmarks.js
// @author       p3
// @match        https://animebytes.tv/bookmarks.php*
// @grant        none
// @icon         http://animebytes.tv/favicon.ico
// ==/UserScript==

$(".del_bookmark_torrent").html("<img title='Remove Bookmark' style='margin:5px; filter:drop-shadow(3px 3px 1px black)' src='data:image/png;base64,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'>");

$("#collage_table > tbody > tr > td > a").each(function(){
    $nope  = $(this).attr("href");             // #group_ID
    $grid  = $nope.substring(1, $nope.length); //  group_ID
    $grcl  = "." + $grid;                      // .group_ID
    $grinf = $grid + "_info";                  //  group_ID_info
    $grdel = $grid + "_delete";                //  group_ID_delete
    $grdwn = $grid + "_download";              //  group_ID_download
    $torid = $nope.substring(7, $nope.length); //  ID

    $grdwnimg = "<img id='"+$torid+"' title='Download...' style='margin:5px; filter:drop-shadow(3px 3px 1px black); cursor:pointer' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9h\
AAABsUlEQVR4AXXST4hSURQG8LM0NWum1ZC+R7uIoKmwrMQyVDIGE6Xoj0QwIEXUu1BtahNBRELbNkIQ7ly2aBXtQ9qFxPAeMshjCBGR4tLudj4UuUds4Pe94dzjeefpo+W/afuVCre3TNismPB+1cDegxquZvrxjcfIhhAm71+o3et587f3RUBt+uG1x8iGEMbvnmCA+fO\
1K+zWLxke7jGyIYTx20ezAZ/aAgaMW8pjZEMIo+d3FZp/d1oCaqOX2x4jG0LYe1hX83UF1PjMY2RDCMM7RTVfVxjULho+8xjZEAJ/WM3XFTBgUM0pRjYKrpzVQemMCa6eM4NK1sDwZsH8enZbGN4qmqByYWbrvAnKGVw1fV475PAAjTuE98p4gfDirIQz9KAXN/62seEQB3\
UOrLt+Ia2xetgooWklnKEHvd2D6y4jQsDTeCLlXz6t+bnwCFhZQA1nfv6UVtzLCBALj+MJdye3iSFYU0BtJ7upm7H9DiMAhNCIxlM/sycwZPGl4f9+5ri+EY05jGwIEK7tizr99DGNX+THyaOm5yYn+UgkyWiZLEjO9yMp3Use9hn9zz+fHOsUv1AfGwAAAABJRU5ErkJggg=='>";

    $(this).wrap("<div class="+$grid+" style='position:relative; width:125px; height:188px; top:0px; left:0px; margin:0px; padding:0px'></div>");
    $($grcl).append("<div id="+$grinf+" style='z-index:1000; position:absolute; top:0px; left:0px;  margin:0px; padding:0px; width:100%; height:100%; background:rgb(0,0,0); background: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.1) 65%, rgba(0,0,0,1) 95%, rgba(0,0,0,1) 100%); display:none'><strong><br></strong></div>"); // info box
    $($grcl).append("<div id="+$grdel+" style='z-index:1000; position:absolute; top:0px; right:0px; margin:0px; padding:0px; display:none'></div>");
    $($grcl).append("<div id="+$grdwn+" style='z-index:1000; position:absolute; top:25px; right:0px; margin:0px; padding:0px; display:none'>"+$grdwnimg+"</div>");

    $($nope + " > td > span > a").clone().appendTo("#" + $grdel);
    $($nope + " > td > strong > a").eq(0).clone().insertBefore("#" + $grinf + " > strong > br");
    $($nope + " > td > strong > a").eq(1).clone().insertAfter("#" + $grinf + " > strong > br");
    $("#" + $grinf + " > strong > a").eq(0).css({"position":"absolute", "bottom":"0px", "margin":"3px", "color":"#FFF", "text-shadow": "0px 0px 5px orangered"});
    $("#" + $grinf + " > strong > a").eq(1).css({"position":"absolute", "top":"0px", "margin":"3px", "color":"#FFF", "text-shadow": "0px 0px 5px orangered"});

    $($nope + ", tr[class*=groupid_"+$torid+"]").insertAfter($($grcl).parent().parent());
    $($nope + " > td:first").remove();
    $($nope + " > td:first").next().attr("colspan","4");
    $($nope + " > td:first").next().children("span").hide();

    $("tr[class*=groupid_"+$torid+"] > td > span").parent().next().next().remove();
    $("tr[class*=groupid_"+$torid+"] > td > span").parent().next().next().next().remove();
    $("tr[class*=groupid_"+$torid+"] > td > span").parent().next().next().prepend("Seeders : ");
    $("tr[class*=groupid_"+$torid+"]").css({'font-variant':'small-caps','font-size':'90%'});
    $("#discog_table").hide();
    $(".UserScriptToggleYenPerGB").hide();
    $(".UserScriptToggleYen").hide();

    $(this).parent().hover(function(){$(this).children().not("a").show();}
                           ,function(){$(this).children().not("a").hide();});

    $($nope + ", tr[class*=groupid_"+$torid+"]").hide();
    $("#" + $torid).click(function(){
        $container = $(this).parent().parent();
        $("div[class*=group_]").not($container).css("box-shadow","none");
        if ($container.css("box-shadow") != "none" ){ $container.css("box-shadow","none");}
        else {$container.css("box-shadow","0px 0px 3px 3px orangered");}
        $this = $("#group_" + $(this).attr("id") + ", tr[class*=groupid_" + $(this).attr("id") + "]");
        $("tr[id*=group], tr[class*=groupid_]").not($this).hide();
        $this.toggle();
        $('html, body').animate({ scrollTop: $(this).parent().parent().offset().top }, 500);
    });
});
