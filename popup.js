const copyReport = document.getElementById('copyReport');

try {
    copyReport.addEventListener('click', () => {
        console.log("in popup")
        chrome.runtime.sendMessage({ action: 'injectContentScript' });
    });
} catch (error) {
    console.log(error);
}

document.addEventListener('RW759_connectExtension', function(e) {
    async function c() { 
        await navigator.clipboard.writeText(e.detail);
        alert('done')
    }
    confirm('Click "OK" to copy the list to your clipboard.')
    setTimeout(c, 0)
});

document.addEventListener('DOMContentLoaded', function () {
    const postivieListInput = document.getElementById('postivieList');
    const negativeListInput = document.getElementById('negativeList');
    const applyButton = document.getElementById('apply');

    chrome.storage.sync.get(['postivieList', 'negativeList'], function (result) {
        if (result.postivieList) {
            postivieListInput.value = result.postivieList;
        }
        if (result.negativeList) {
            negativeListInput.value = result.negativeList;
        }
    });

    applyButton.addEventListener('click', function () {
        const postivieList = postivieListInput.value;
        const negativeList = negativeListInput.value;

        chrome.storage.sync.set({ postivieList: postivieList, negativeList: negativeList }, function () {
            console.log('Names saved:', postivieList, negativeList);
        });
    });
});
