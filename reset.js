javascript: (function() {
    function callback() {
        function l() {
        $("span").remove(".axSpan, .openSpan, .closeSpan, .inputSpan, .altSpan");
	    $("strong").remove(".openSpan, .closeSpan");
		$("*").each(function() {
				$(this).css('outline','');
	    	});
		$('body').append('<div id="success" role="alert" style="position:absolute; width:0; height:0; clip: rect(0,0,0,0);"></div>');
		$('#success').html('Success! Page Reset!');
		setTimeout(function(){ $('#success').remove(); s.remove(); }, 3000);
        }
        l()
    }
    var s = document.createElement("script");
    s.addEventListener ? s.addEventListener("load", callback, !1) : s.readyState && (s.onreadystatechange = callback), s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", document.body.appendChild(s);
})()