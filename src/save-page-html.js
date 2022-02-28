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

window.getSaveData = function() {
  return Save.serialize();
}

window.getSaveDataElement = function() {
  return document.querySelector('tw-passagedata[name="StorySaveData"]');
}

window.createSaveDataElement = function(saveData) {
  let e = getSaveDataElement();
  if (!e) {
    e = document.createElement("tw-passagedata");
    e.setAttribute("pid", "4294967295");
    e.setAttribute("name", "StorySaveData");
    e.setAttribute("tags", "");
    e.setAttribute("position", "9999999,9999999");
    e.setAttribute("size", "0,0");
  }

  e.innerText = saveData;

  let parent = document.querySelector("tw-storydata");
  parent.appendChild(e);
}

window.persistSaveData = function() {
  window.createSaveDataElement(window.getSaveData());
}

window.loadSaveDataFromElement = function() {
  let e = window.getSaveDataElement();
  if (!e) {
    console.log("No embedded save data to load");
    return;
  }
  let data = e.innerText;
  console.log("Loading save data embedded in page");
  Save.deserialize(data);
}