javascript: (function() {
    function callback() {
        function l() {
        $("span").remove(".altSpan");
		$("img").each(function() {
			if (!this.hasAttribute('alt')) {
				$(this).attr('style','border:red 2px solid;padding:2px;');
   			 	$(this).before("<span class=\"altSpan\" style=\"border:red 2px solid;padding:1px;color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;position:absolute;line-height:100%;z-index:2147483647;\">NO ALT</span>");
			} else {
				$(this).attr('style','border:green 2px solid;padding:2px;');
   			 	$(this).before("<span class=\"altSpan\" style=\"border:green 2px solid;padding:1px;color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;position:absolute;line-height:100%;z-index:2147483647;\">alt=\""+$(this).attr('alt')+"\"</span>");
			}
	    });
        }
        l()
    }
    var s = document.createElement("script");
    s.addEventListener ? s.addEventListener("load", callback, !1) : s.readyState && (s.onreadystatechange = callback), s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", document.body.appendChild(s);
})()