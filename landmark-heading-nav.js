javascript: (function() {
    function callback() {
        function l() {
		var landmarks = $('[role=main], [role=search], [role=contentinfo], [role=banner], [role=navigation], [role=complementary], [role=application]');
		var sections = $('main, banner, footer, header, aside, nav');
		$('#success').remove();
		$(landmarks).each(function() {
				$(this).attr('tabindex','0');

	    });	
		$(landmarks).focus(function() {
				$(this).attr('style','outline:3px solid orange;');
				$(this).blur(function() {
					$(this).removeAttr('style');
	   			 });	
	    });	
		$(sections).each(function() {
				$(this).attr('tabindex','0');
	    });
		$(sections).focus(function() {
				$(this).attr('style','outline:3px solid orange;');
				$(this).blur(function() {
					$(this).removeAttr('style');
	   			 });	
	    });	
		$(':header').each(function() {
				$(this).attr('tabindex','0');
	    });
		$(':header').focus(function() {
				$(this).attr('style','outline:3px solid orange;');
				$(this).blur(function() {
					$(this).removeAttr('style');
	   			 });	
	    });	
			if (!$(landmarks).length) {
				alert('No Landmarks or Headings Found!');
			} else {
				$('body').append('<div id="success" role="alert" style="position:absolute; width:0; height:0; clip: rect(0,0,0,0);"></div>');
				$('#success').html('Success! Landmarks or Headings Found on Page: ' + document.title);
				setTimeout(function(){ $('#success').remove(); s.remove(); }, 3000);
			}
        }
        l()
    }
    var s = document.createElement("script");
    s.addEventListener ? s.addEventListener("load", callback, !1) : s.readyState && (s.onreadystatechange = callback), s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", document.body.appendChild(s);
})()