console.log('from background')

chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        console.log(current_tab_info.url)
        if (/^https:\/\/www\.linkedin\.com*/.test(current_tab_info.url)){
            chrome.tabs.executeScript(null, { file: './foreground.js'}, () => { console.log('injected')})
        } else {
            console.log('not')
        }
    })
})

chrome.runtime.onMessage.addListener((req, sender, res) => {
    if (req.message === 'linkedin parse complete')
    chrome.storage.local.get('linkedinPayload', storage => {
        console.log(storage.linkedinPayload)
    })
})
