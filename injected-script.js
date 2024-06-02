const textareas = document.querySelectorAll('textarea');
var items = [];

items.push('😏 Done:')
for (let textarea of textareas) {
    if (textarea.value.includes("today's positive half of the glass")) {
		var the_list = textarea.parentElement.parentElement.parentElement.children[2];
		for (let li of the_list.children) {
			items.push(li.children[0].children[0].querySelectorAll('a')[0].innerText)
		}
        break;
    }
}
items.push('')
items.push('😒 Not Done:')
for (let textarea of textareas) {
    if (textarea.value.includes('today')) {
		var the_list = textarea.parentElement.parentElement.parentElement.children[2];
		for (let li of the_list.children) {
			items.push(li.children[0].children[0].querySelectorAll('a')[0].innerText)
		}
        break;
    }
}

setTimeout(function() {
    /* Example: Send data from the page to your Chrome extension */
    document.dispatchEvent(new CustomEvent('RW759_connectExtension', {
        detail: items.join('\n')
    }));
}, 0);