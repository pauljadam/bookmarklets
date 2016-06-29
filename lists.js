javascript: (function() {
    function callback() {
        function l() {
        $("strong").remove(".openSpan, .closeSpan");
		$("ul, ol, dl").attr('style','outline:green 2px solid;padding:2px;list-style-position: inside;');
		$("ul").prepend("<strong class=\"openSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;speak:literal-punctuation;;speak:literal-punctuation;\">&lt;ul&gt;📝</strong>");
        $("ul").append("<strong class=\"closeSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;/ul&gt;</strong>");
		$("ol").prepend("<strong class=\"openSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;speak:literal-punctuation;;speak:literal-punctuation;\">&lt;ol&gt;#⃣</strong>");
        $("ol").append("<strong class=\"closeSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;/ol&gt;</strong>");
		$("li").prepend("<strong class=\"openSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;speak:literal-punctuation;;speak:literal-punctuation;\">&lt;li&gt;</strong>");
        $("li").append("<strong class=\"closeSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;/li&gt;</strong>");
			if (!$("ul, ol, li, dd, dt, dl").length) {
				alert('No Lists Found!');
			} else {
				$('body').append('<div id="success" role="alert" style="position:absolute; width:0; height:0; clip: rect(0,0,0,0);"></div>');
				$('#success').html('Success! Lists Found!');
				setTimeout(function(){ $('#success').remove(); s.remove(); }, 3000);
			}
        }
        l()
    }
    var s = document.createElement("script");
    s.addEventListener ? s.addEventListener("load", callback, !1) : s.readyState && (s.onreadystatechange = callback), s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", document.body.appendChild(s);
})()