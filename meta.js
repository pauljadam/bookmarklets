var viewport = document.querySelector("meta[name=viewport]");
if (viewport) {alert(document.querySelector("meta[name=viewport]").getAttribute('content'));} else {alert("No <meta name=\"viewport\"> Found on Page: " + document.title)};
