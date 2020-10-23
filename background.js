chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info=>{
        var s=current_tab_info.url;
        if(s.includes("meet")){
            chrome.tabs.executeScript(null,{file:'./foreground.js'},()=>console.log("yessssss"));
            
        }
       // console.log(current_tab_info.url);
    })
});

