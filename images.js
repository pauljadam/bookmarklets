javascript: (function() {
    function callback() {
        function l() {
        $("span").remove(".altSpan");
		$("img").each(function() {
			if (!this.hasAttribute('alt')) {
				$(this).attr('style','outline:red 2px solid;padding:2px;');
				if ($(this).parent('a').length) {
   			 		$(this).before("<span class=\"altSpan\" style=\"outline:red 2px solid;padding:1px;color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;position:absolute;line-height:100%;z-index:2147483647;border-bottom:2px solid blue;\">LINK NO ALT</span>");
				} else {
   			 	$(this).before("<span class=\"altSpan\" style=\"outline:red 2px solid;padding:1px;color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;position:absolute;line-height:100%;z-index:2147483647;\">NO ALT</span>");
			}
			} else {
				$(this).attr('style','outline:green 2px dashed;padding:2px;');
					if ($(this).parent('a').length) {
   			 	$(this).before("<span class=\"altSpan\" style=\"outline:green 2px dashed;padding:1px;color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;position:absolute;line-height:100%;z-index:2147483647;speak:literal-punctuation;border-bottom:2px solid blue;\">LINK alt=\""+$(this).attr('alt')+"\"</span>");
					} else {
   			 	$(this).before("<span class=\"altSpan\" style=\"outline:green 2px dashed;padding:1px;color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;position:absolute;line-height:100%;z-index:2147483647;speak: literal-punctuation;\">alt=\""+$(this).attr('alt')+"\"</span>");
							}
					}	
	    });
			if (!$('img').length) {
				alert('No <IMG> Elements Found!');
			} else {
				$('body').append('<div id="success" role="alert" style="position:absolute; width:0; height:0; clip: rect(0,0,0,0);"></div>');
				$('#success').html('Success! Images Found!');
				setTimeout(function(){ $('#success').remove(); s.remove(); }, 3000);
			}
        }
        l()
    }
    var s = document.createElement("script");
    s.addEventListener ? s.addEventListener("load", callback, !1) : s.readyState && (s.onreadystatechange = callback), s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", document.body.appendChild(s);
})()