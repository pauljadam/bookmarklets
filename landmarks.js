javascript: (function() {
    function callback() {
        function l() {
        $("span").remove(".landmarksSpan");
		var landmarks = $('[role=main], [role=search], [role=contentinfo], [role=banner], [role=navigation], [role=complementary], [role=application]')
		$('#success').remove();
		$(landmarks).each(function() {
				$(this).attr('style','outline:green 2px solid;padding:2px;');
   			 	$(this).before("<span class=\"landmarksSpan\" style=\"outline:green 2px solid;padding:1px;color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;position:relative;line-height:100%;z-index:2147483647;\">role=\""+$(this).attr('role')+"\"</span>");
	    });
			if (!$(landmarks).length) {
				alert('No Landmarks Found!');
			} else {
				$('body').append('<div id="success" role="alert" style="position:absolute; width:0; height:0; clip: rect(0,0,0,0);"></div>');
				$('#success').html('Success! Landmarks Found!');
			}
        }
        l()
    }
    var s = document.createElement("script");
    s.addEventListener ? s.addEventListener("load", callback, !1) : s.readyState && (s.onreadystatechange = callback), s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", document.body.appendChild(s);
})()