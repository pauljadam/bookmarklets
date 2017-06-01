javascript: (function() {
    function callback() {
        function l() {
if(document.getElementsByTagName('html')[0].getAttribute('xml:lang') && document.documentElement.lang) {
	$('body').prepend('<strong style="color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;" id="lang-success" role="status"></strong>');
	$('#lang-success').html('lang=\"' + document.documentElement.lang + '\" AND? xml:lang=\"' + document.getElementsByTagName('html')[0].getAttribute('xml:lang') + '\" on page: ' + document.title);
	setTimeout(function(){ $('#lang-success').remove(); }, 10000);
} else if(document.documentElement.lang) {
	$('body').prepend('<strong style="color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;" id="lang-success" role="status"></strong>');
	$('#lang-success').html('lang=\"' + document.documentElement.lang + '\" on page: ' + document.title);
	setTimeout(function(){ $('#lang-success').remove(); }, 10000);
} else if(document.getElementsByTagName('html')[0].getAttribute('xml:lang')) {
	$('body').prepend('<strong style="color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;" id="lang-success" role="status"></strong>');
	$('#lang-success').html('xml:lang=\"' + document.getElementsByTagName('html')[0].getAttribute('xml:lang') + '\" on page: ' + document.title);
	setTimeout(function(){ $('#lang-success').remove(); }, 10000);
} else {
		$('body').prepend('<strong style="color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;" id="failure" role="status"></strong>');
		$('#failure').html('No Lang or xml:lang Attributes Found on Page: ' + document.title);
		setTimeout(function(){ $('#failure').remove(); }, 6000);
}
        $("span").remove(".langSpan");
		$("[lang]:not(html)").each(function() {
			$(this).attr('style','outline:green 2px solid;padding:2px;');
            $(this).after("<span class=\"langSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">lang=\""+$(this).attr('lang')+"\"</span>");
        });
					if (!$("[lang]:not(html)").length) {
				$('body').prepend('<strong style="color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;" id="failure" role="status"></strong>');
				$('#failure').html('No Lang Attributes Found on Parts of Page: ' + document.title);
				setTimeout(function(){ $('#failure').remove(); }, 6000);
			} else {
				$('body').append('<div id="success" role="alert" style="position:absolute; width:0; height:0; clip: rect(0,0,0,0);"></div>');
				$('#success').html('Success! Lang Attributes Found on Parts of Page: ' + document.title);
				setTimeout(function(){ $('#success').remove(); }, 3000);
			}
      $("script[src$='lang.js']").remove();s.remove();

        }
        l()
    }
    var s = document.createElement("script");
    s.addEventListener ? s.addEventListener("load", callback, !1) : s.readyState && (s.onreadystatechange = callback), s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", document.body.appendChild(s);
})()
