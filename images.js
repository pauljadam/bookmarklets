javascript: (function() {
    function callback() {
        function l() {
        $("span").remove(".altSpan");
		$('#success').remove();
		$("img").each(function() {
			if (!this.hasAttribute('alt')) {
				$(this).attr('style','border:red 2px solid;padding:2px;');
   			 	$(this).before("<span class=\"altSpan\" style=\"border:red 2px solid;padding:1px;color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;position:absolute;line-height:100%;z-index:2147483647;\">NO ALT</span>");
			} else {
				$(this).attr('style','border:green 2px solid;padding:2px;');
   			 	$(this).before("<span class=\"altSpan\" style=\"border:green 2px solid;padding:1px;color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;position:absolute;line-height:100%;z-index:2147483647;\">alt=\""+$(this).attr('alt')+"\"</span>");
			}
	    });
					if (!$('img').length) {
			alert('No <img> Elements Found!');
			} else {
				$('body').append('<div id="success" role="alert" style="position:absolute; width:0; height:0; clip: rect(0,0,0,0);"></div>');
				$('#success').html('Success! Images Found!');
			}

        }
        l()
    }
    var s = document.createElement("script");
    s.addEventListener ? s.addEventListener("load", callback, !1) : s.readyState && (s.onreadystatechange = callback), s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", document.body.appendChild(s);
})()