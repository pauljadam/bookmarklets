javascript: (function() {
    function callback() {
        function l() {
        $("span").remove(".openSpan, .closeSpan, .inputSpan, .axSpan");
		var arias = $('[aria-expanded], [aria-controls], [aria-selected], [aria-required], [aria-invalid], [aria-labelledby], [aria-describedby], [aria-label], [role], [aria-hidden], [aria-level], [aria-haspopup], [aria-pressed], [aria-checked], [aria-live], [aria-atomic]').not(':input[type=hidden], :input[type=button], :input[type=submit], :input[type=reset]');
		$(arias).each(function() {
			$(this).attr('style','outline:green 2px solid;padding:2px;');
			if($(this).attr('aria-label')) {
            	$(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">aria-label=\""+$(this).attr('aria-label')+"\"</span>");
			}
			if($(this).attr('role')) {
   	 		$(this).before("<span class=\"axSpan\" style=\"outline:green 2px solid;padding:1px;color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;position:relative;line-height:100%;z-index:2147483647;\">role=\""+$(this).attr('role')+"\"</span>");
			}
			if($(this).attr('aria-live')) {
   	 		$(this).before("<span class=\"axSpan\" style=\"outline:green 2px solid;padding:1px;color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;position:relative;line-height:100%;z-index:2147483647;\">aria-live=\""+$(this).attr('aria-live')+"\"</span>");
			}
			if($(this).attr('aria-atomic')) {
   	 		$(this).before("<span class=\"axSpan\" style=\"outline:green 2px solid;padding:1px;color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;position:relative;line-height:100%;z-index:2147483647;\">aria-atomic=\""+$(this).attr('aria-atomic')+"\"</span>");
			}
			if($(this).attr('aria-expanded')) {
            	$(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">aria-expanded=\""+$(this).attr('aria-expanded')+"\"</span>");
			}
			if($(this).attr('aria-selected')) {
            	$(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">aria-selected=\""+$(this).attr('aria-selected')+"\"</span>");
			}
			if($(this).attr('aria-hidden')) {
            	$(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">aria-hidden=\""+$(this).attr('aria-hidden')+"\"</span>");
			}
			if($(this).attr('aria-haspopup')) {
            	$(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">aria-haspopup=\""+$(this).attr('aria-haspopup')+"\"</span>");
			}
			if($(this).attr('aria-pressed')) {
            	$(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">aria-pressed=\""+$(this).attr('aria-pressed')+"\"</span>");
			}
			if($(this).attr('aria-checked')) {
            	$(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">aria-checked=\""+$(this).attr('aria-checked')+"\"</span>");
			}
			if($(this).attr('aria-level')) {
            	$(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">aria-level=\""+$(this).attr('aria-level')+"\"</span>");
			}
			if($(this).attr('aria-describedby')) {
            	$(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">aria-describedby=\""+$(this).attr('aria-describedby')+"\"</span>");
				var describedbyValue = $(this).attr('aria-describedby');
				var describedbyArray = describedbyValue.split(' ');
				for (i = 0; i < describedbyArray.length; i++) {
		            var describedby = $('[id="'+describedbyArray[i]+'"]');
					$(describedby).attr('style','outline:green 2px solid;');
					$(describedby).prepend("<span class=\"inputSpan\" style=\"padding:1px;color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;z-index:2147483647;speak:literal-punctuation;\">id=\""+describedbyArray[i]+"\"</span>");
				}
			}
			if($(this).attr('aria-labelledby')) {
            	$(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">aria-labelledby=\""+$(this).attr('aria-labelledby')+"\"</span>");
				var labelledbyValue = $(this).attr('aria-labelledby');
				var labelledbyArray = labelledbyValue.split(' ');
				for (i = 0; i < labelledbyArray.length; i++) {
		            $('[id="'+labelledbyArray[i]+'"]').attr('style','outline:green 2px solid;');
					$('[id="'+labelledbyArray[i]+'"]').prepend("<span class=\"inputSpan\" style=\"padding:1px;color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;z-index:2147483647;speak:literal-punctuation;\">id=\""+labelledbyArray[i]+"\"</span>");
				}
			}
			if($(this).attr('aria-controls')) {
            	$(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">aria-controls=\""+$(this).attr('aria-controls')+"\"</span>");
				var controlsValue = $(this).attr('aria-controls');
				var controlsArray = controlsValue.split(' ');
				for (i = 0; i < controlsArray.length; i++) {
		            $('[id="'+controlsArray[i]+'"]').attr('style','outline:green 2px solid;');
					$('[id="'+controlsArray[i]+'"]').prepend("<span class=\"inputSpan\" style=\"padding:1px;color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;z-index:2147483647;speak:literal-punctuation;\">id=\""+controlsArray[i]+"\"</span>");
				}
			}
			if($(this).attr('aria-required')) {
            	$(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&#9937;aria-required=\""+$(this).attr('aria-required')+"\"</span>");
			}
			if($(this).attr('aria-invalid')) {
            	$(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&#9940;aria-invalid=\""+$(this).attr('aria-invalid')+"\"</span>");
			}
        });
		$('[aria-describedby]').each(function(index) {
				var describedbyValue = $(this).attr('aria-describedby');
				var describedbyArray = describedbyValue.split(' ');
				for (i = 0; i < describedbyArray.length; i++) {
					var idString = "#";
					idString += describedbyArray[i];
						if ($(idString).length <=0 && $('[id="'+describedbyArray[i]+'"]')) {
							$(this).attr('style','outline:red 2px dotted;padding:2px;');
							$(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;speak:literal-punctuation;\">❌NO ID MATCH</span>");
						}
				}
		});
		$('[aria-labelledby]').each(function(index) {
				var labelledbyValue = $(this).attr('aria-labelledby');
				var labelledbyArray = labelledbyValue.split(' ');
				for (i = 0; i < labelledbyArray.length; i++) {
					var idString = "#";
					idString += labelledbyArray[i];
						if ($(idString).length <=0 && $('[id="'+labelledbyArray[i]+'"]')) {
							$(this).attr('style','outline:red 2px dotted;padding:2px;');
							$(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;speak:literal-punctuation;\">❌NO ID MATCH</span>");
						}
				}
		});
			if (!$(inputs).length) {
				alert('No Form Inputs Found!');
			} else {
				$('body').append('<div id="success" role="alert" style="position:absolute; width:0; height:0; clip: rect(0,0,0,0);"></div>');
				$('#success').html('Success! Form Inputs Found!');
				setTimeout(function(){ $('#success').remove(); s.remove(); }, 3000);
			}
        }
        l()
    }
    var s = document.createElement("script");
    s.addEventListener ? s.addEventListener("load", callback, !1) : s.readyState && (s.onreadystatechange = callback), s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", document.body.appendChild(s);
})()