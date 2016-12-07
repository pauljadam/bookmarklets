javascript: (function() {
    function callback() {
        function l() {
        $("span").remove(".axSpan");
		$("*").each(function() {
			if (this.hasAttribute('title')) {
				$(this).attr('style','outline:orange 2px dashed;padding:2px;');
        $(this).after("<span role=\"region\" aria-label=\"Title\" class=\"axSpan\" style=\"outline:orange 2px dashed;padding:1px;color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;position:relative;line-height:100%;z-index:2147483647;\">❓title=\""+$(this).attr('title')+"\"</span>");
				}
	    });
			if (!$('[title]').length) {
				alert('No title attributes Found on Page: ' + document.title);
			} else {
				$('body').append('<div id="success" role="alert" style="position:absolute; width:0; height:0; clip: rect(0,0,0,0);"></div>');
				$('#success').html('Success! title attributes Found!');
				setTimeout(function(){ $('#success').remove(); }, 3000);
			}
      $("script[src$='title.js']").remove();s.remove();

        }
        l()
    }
    var s = document.createElement("script");
    s.addEventListener ? s.addEventListener("load", callback, !1) : s.readyState && (s.onreadystatechange = callback), s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", document.body.appendChild(s);
})()
