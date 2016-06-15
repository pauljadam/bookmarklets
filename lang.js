if(document.documentElement.lang) {
	alert('Page Titled: {' + document.title + '} Has document.title Set: lang=\"' + document.documentElement.lang + '\"');
} 
if(document.getElementsByTagName('html')[0].getAttribute('xml:lang')) {
	alert('Page Titled: {' + document.title + '} Has xml:lang=\"' + document.getElementsByTagName('html')[0].getAttribute('xml:lang') + '\"');
} 