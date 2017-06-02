javascript: (function() {
    function callback() {
        function l() {
if(document.getElementsByTagName('html')[0].getAttribute('xml:lang') && document.documentElement.lang) {
	$('body').prepend('<strong class="langSpan" style="color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;" id="lang-success" role="status"></strong>');
	$('#lang-success').html('HTML document has lang=\"' + document.documentElement.lang + '\" AND? xml:lang=\"' + document.getElementsByTagName('html')[0].getAttribute('xml:lang') + '\" on page titled: ' + document.title);
} else if(document.documentElement.lang) {
	$('body').prepend('<strong class="langSpan" style="color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;" id="lang-success" role="status"></strong>');
	$('#lang-success').html('HTML document has lang=\"' + document.documentElement.lang + '\" on page titled: ' + document.title);
} else if(document.getElementsByTagName('html')[0].getAttribute('xml:lang')) {
	$('body').prepend('<strong class="langSpan" style="color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;" id="lang-success" role="status"></strong>');
	$('#lang-success').html('HTML document has xml:lang=\"' + document.getElementsByTagName('html')[0].getAttribute('xml:lang') + '\" on page titled: ' + document.title);
} else {
		$('body').prepend('<strong class="langSpan" style="color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;" id="failure" role="status"></strong>');
		$('#failure').html('HTML document has no lang or xml:lang attributes on page titled: ' + document.title);
}
        $("span").remove(".langSpan");
		$("[lang]:not(html)").each(function() {
			$(this).attr('style','outline:green 2px solid;padding:2px;');
            $(this).after("<span class=\"langSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">lang=\""+$(this).attr('lang')+"\"</span>");
        });
			if ($("[lang]:not(html)").length) {
				$('body').prepend('<p><strong class="langSpan" style="color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;" id="lang-success" role="status"></strong></p>');
				$('#lang-success').html('HTML document has individual element(s) with lang attributes on parts of the page titled: ' + document.title);
			}
      $("script[src$='lang.js']").remove();s.remove();

        }
        l()
    }
    var s = document.createElement("script");
    s.addEventListener ? s.addEventListener("load", callback, !1) : s.readyState && (s.onreadystatechange = callback), s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", document.body.appendChild(s);
})()
