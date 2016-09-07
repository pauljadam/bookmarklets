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
		$(document).keypress(function(e)	{
   			 switch(e.which)
    		{
        	// user presses the "m"
        	case 109: console.log('m key pressed'); if ($('main').length) {$('main:first').focus();} if ($('[role=main]').length) {$('[role=main]:first').focus();} break;
        	// user presses the "b"
        	case 98: console.log('b key pressed'); if ($('header').length) {$('header:first').focus();} if ($('[role=banner]').length) {$('[role=banner]:first').focus();} break;
        	// user presses the "n"
        	case 110: console.log('n key pressed'); if ($('nav').length) {$('nav:first').focus();} if ($('[role=navigation]').length) {$('[role=navigation]:first').focus();} break;
        	// user presses the "f"
        	case 70: console.log('f key pressed'); if ($('footer').length) {$('footer:first').focus();} if ($('[role=contentinfo]').length) {$('[role=contentinfo]:first').focus();} break;
        	// user presses the "s"
        	case 115: console.log('s key pressed'); if ($('search').length) {$('search:first').focus();} if ($('[role=search]').length) {$('[role=search]:first').focus();} break;
        	// user presses the "1"
        	case 49: $('h1').focus(); break;
        	// user presses the "2"
        	case 50: $('h2').focus(); break;
        	// user presses the "3"
        	case 51: $('h3').focus(); break;
        	// user presses the "4"
        	case 52: $('h4').focus(); break;
        	// user presses the "5"
        	case 53: $('h5').focus(); break;
        	// user presses the "6"
        	case 54: $('h6').focus(); break;
    		}
		});
			if (!$(landmarks).length && !$(':header').length && !$(sections).length){
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