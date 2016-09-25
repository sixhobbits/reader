function plaintext(info,tab) {
  chrome.tabs.create({  
    url: "http://plaintext.dwyer.co.za/article?url=" + info.linkUrl,
    active: false;
  });           
}
chrome.contextMenus.create({
  title: "View Plaintext", 
  contexts:["link"], 
  onclick: plaintext,
});