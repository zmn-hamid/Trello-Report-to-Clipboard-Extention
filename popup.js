const btn = document.getElementById('copyTheReport');

try {
    btn.addEventListener('click', () => {
        console.log("in popup")
        chrome.runtime.sendMessage({ action: 'injectContentScript' });
    });
} catch (error) {
    console.log(error)
}

document.addEventListener('RW759_connectExtension', function(e) {
    async function c() { 
        await navigator.clipboard.writeText(e.detail); 
    } 
    confirm('Click "OK" to copy the list to your clipboard.')
    setTimeout(c, 0)
});