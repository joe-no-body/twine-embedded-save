const GAME_FILENAME = 'save-in-html.html';

window.getPageHtml = function() {
  return window.document.documentElement.outerHTML;
}

// based on https://github.com/Jermolene/TiddlyWiki5/blob/master/core/modules/savers/download.js#L21
window.downloadFile = function(text, filename = '') {
  if(!filename) {
    var p = document.location.pathname.lastIndexOf("/");
    if(p !== -1) {
      // We decode the pathname because document.location is URL encoded by the browser
      filename = decodeURIComponent(document.location.pathname.substr(p+1));
    }
  }
  if(!filename) {
    filename = GAME_FILENAME;
  }

  // Set up the link
  var link = document.createElement("a");
  if(Blob !== undefined) {
    var blob = new Blob([text], {type: "text/html"});
    link.setAttribute("href", URL.createObjectURL(blob));
  } else {
    link.setAttribute("href","data:text/html," + encodeURIComponent(text));
  }
  link.setAttribute("download",filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  return true;
}

window.downloadPageHtml = function() {
  let pageHtml = getPageHtml();
  return downloadFile(pageHtml);
}

