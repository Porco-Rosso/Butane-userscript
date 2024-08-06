// ==UserScript==
// @name         vkdl-userscript
// @namespace    vkdl-userscript
// @include      *
// @author       Porco-Rosso
// @description  This userscript is meant to provide integration to the vkdl downloader into other websites, such as soundcloud.
// ==/UserScript==

// a function that loads jQuery and calls a callback function when jQuery has finished loading
function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
    
    var awesomeicons = document.createElement("link")
        awesomeicons.setAttribute("rel", "stylesheet")
        awesomeicons.setAttribute("type", "text/css")
        awesomeicons.setAttribute("href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css")
}

// the guts of this userscript


//function searchvkdl() {
//    
//    var SongTitle = jQ(this).parents("li:first").find( ".soundTitle__title" ).children().text();
//    alert(SongTitle);
//}


function main() {
  // Note, jQ replaces $ to avoid conflicts.
    
    jQ( ".soundList__item" ).each(function( i ) {
    
        var RawSongTitle = jQ(this).find( ".soundTitle__title" ).children().text();
        
        var SongTitle = RawSongTitle.split(' ').join('+');
        
            jQ( '<a target="_blank" href="https://rawgit.com/Porco-Rosso/vkdl/master/index.html#' + SongTitle + '" class="sc-button-download sc-button sc-button-small sc-button-responsive" tabindex="0" title="Search on vkdl">Vkdl</a>' ).insertAfter( jQ(this).find(".sc-button-toolbar>.sc-button:last-child, .sc-button-group>.sc-button:last-child") );
          
    
    });
    
}

// load jQuery and execute the main function
addJQuery(main);