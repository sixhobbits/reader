function plaintext(info,tab) {
  chrome.tabs.create({  
    url: "http://localhost:5000/reader?url=" + info.linkUrl,
  });           
}
chrome.contextMenus.create({
  title: "View Plaintext", 
  contexts:["link"], 
  onclick: plaintext,
});