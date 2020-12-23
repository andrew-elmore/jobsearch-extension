console.log('from forground')
let jobDetails = document.getElementById('job-details')
let jobDescription = ''
let paragraphs = [...jobDetails.children[0].children]
paragraphs.forEach((paragraph) => {
    // console.log(typeof paragraph.innerText)
    jobDescription += paragraph.innerText
})
chrome.storage.local.set({"linkedinPayload": jobDescription})
chrome.runtime.sendMessage({ message: 'linkedin parse complete'})
console.log('sent')
