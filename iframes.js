javascript: (function() {
    function callback() {
        function l() {
        $("span").remove(".openSpan, .closeSpan, .inputSpan");
		var iframes = $('iframe').not('iframe[aria-hidden=true]');
		$(iframes).each(function() {
			$(this).attr('style','outline:green 2px dashed;padding:2px;');
			if(!$(this).attr('title')) {
				if($(this).attr('name')) {
					$(this).before("<span class=\"inputSpan\" style=\"padding:1px;color:black;font-weight:bold;font-family:sans-serif;font-size:small;outline:red 2px dotted;background-color:yellow;z-index:2147483647;\">&lt;iframe❌NO TITLE name=\""+$(this).attr('name')+"\" src=\""+$(this).attr('src')+"\"&gt;</span>");
				} else {
					$(this).before("<span class=\"inputSpan\" style=\"padding:1px;color:black;font-weight:bold;font-family:sans-serif;font-size:small;outline:red 2px dotted;background-color:yellow;z-index:2147483647;\">&lt;iframe❌NO TITLE src=\""+$(this).attr('src')+"\"&gt;</span>");
			}
            	$(this).attr('style','outline:red 2px dotted;padding:2px;');
			} else {
				if($(this).attr('name')) {
					$(this).before("<span class=\"inputSpan\" style=\"padding:1px;color:black;font-weight:bold;font-family:sans-serif;font-size:small;outline:green 2px solid;background-color:yellow;z-index:2147483647;\">&lt;iframe 👍title=\""+$(this).attr('title')+"\" name=\""+$(this).attr('name')+"\" src=\""+$(this).attr('src')+"\"&gt;</span>");
				} else {
					$(this).before("<span class=\"inputSpan\" style=\"padding:1px;color:black;font-weight:bold;font-family:sans-serif;font-size:small;outline:green 2px solid;background-color:yellow;z-index:2147483647;\">&lt;iframe 👍title=\""+$(this).attr('title')+"\" src=\""+$(this).attr('src')+"\"&gt;</span>");
			}
			}
        });
			if (!$(iframes).length) {
				alert('No Iframes Found on Page: ' + document.title);
			} else {
				$('body').append('<div id="success" role="alert" style="position:absolute; width:0; height:0; clip: rect(0,0,0,0);"></div>');
				$('#success').html('Success! Iframes Found!');
				setTimeout(function(){ $('#success').remove(); s.remove(); }, 3000);
			}
        }
        l()
    }
    var s = document.createElement("script");
    s.addEventListener ? s.addEventListener("load", callback, !1) : s.readyState && (s.onreadystatechange = callback), s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", document.body.appendChild(s);
})()