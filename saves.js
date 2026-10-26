//"theme": { name: "name", savedAt: <date>, tabs: [ { url, title, pinned }, ... ] }

async function getTabsOfWindow(windowId){
    const results = await browser.tabs.query({windowId});
    return results;
}
function cleanTabs(tabs){
    
}