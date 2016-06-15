if(document.documentElement.lang) {
	alert('Page Titled: {' + document.title + '} Has documentElement.lang attribute lang=\"' + document.documentElement.lang + '\"');
} 
if(document.getElementsByTagName('html')[0].getAttribute('xml:lang')) {
	alert('Page Titled: {' + document.title + '} Has attribute xml:lang=\"' + document.getElementsByTagName('html')[0].getAttribute('xml:lang') + '\"');
} 