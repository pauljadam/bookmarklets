if(document.getElementsByTagName('html')[0].getAttribute('xml:lang') && document.documentElement.lang) {
	alert('Page <title>: {' + document.title + '} Has documentElement.lang attribute lang=\"' + document.documentElement.lang + '\" AND Has attribute xml:lang=\"' + document.getElementsByTagName('html')[0].getAttribute('xml:lang') + '\"');
} else if(document.documentElement.lang) {
	alert('Page <title>: {' + document.title + '} Has documentElement.lang attribute lang=\"' + document.documentElement.lang + '\"');
} else if(document.getElementsByTagName('html')[0].getAttribute('xml:lang')) {
	alert('Page <title>: {' + document.title + '} Has attribute xml:lang=\"' + document.getElementsByTagName('html')[0].getAttribute('xml:lang') + '\"');
} else {
		alert('Page <title>: {' + document.title + '} Has no lang or xml:lang attribute found!');
}