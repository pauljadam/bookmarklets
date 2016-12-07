javascript: (function() {
    function callback() {
        function l() {
          $("span").remove(".openSpan, .closeSpan, .inputSpan");
          $("fieldset").attr('style','outline:2px solid green;');
          $("label").attr('style','outline:2px solid green;');
  		var inputs = $('input, textarea, select').not(':input[type=hidden], :input[type=button], :input[type=submit], :input[type=reset]');
  		$(inputs).each(function() {
  			$(this).attr('style','outline:green 2px solid;padding:2px;');
              var label = $('label[for="'+$(this).attr('id')+'"]');
  			var wrappedLabel;
              if(label.length <= 0) {
              	$(this).attr('style','outline:red 2px dotted;padding:2px;');
                  var parentElem = $(this).parent(),
                      parentTagName = parentElem.get(0).tagName.toLowerCase();
                  if(parentTagName == "label") {
  									$(this).attr('style','outline:green 2px solid;padding:2px;');
  					wrappedLabel = parentElem;
                  }
              }
  			if(!$(this).attr('id')) {
  				$(this).before("<span class=\"inputSpan\" style=\"padding:1px;color:black;font-weight:bold;font-family:sans-serif;font-size:small;outline:red 2px dotted;background-color:yellow;z-index:2147483647;\">&lt;input NO ID&gt;</span>");
              	$(this).attr('style','outline:red 2px dotted;padding:2px;');
  			} else {
  				$(this).before("<span class=\"inputSpan\" style=\"padding:1px;color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;z-index:2147483647;speak:literal-punctuation;\">&lt;input 🆔=\""+$(this).attr('id')+"\"&gt;</span>");
  			}
              $(label).prepend("<span class=\"openSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;label 🍀=\""+$(this).attr('id')+"\"&gt;</span>");
              $(label).append("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;/label&gt;</span>");
              $(wrappedLabel).prepend("<span class=\"openSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;label 🎁&gt;</span>");
              $(wrappedLabel).append("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;/label&gt;</span>");
  	        $(wrappedLabel).attr('style','outline:2px solid green;');
  			if($(this).attr('title')) {
              	$(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;outline:dashed 2px orange;speak:literal-punctuation;\">♿title=\""+$(this).attr('title')+"\"</span>");
  			}
  			if($(this).attr('aria-label')) {
              	$(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">♿aria-label=\""+$(this).attr('aria-label')+"\"</span>");
  			}
  			if($(this).attr('aria-describedby')) {
              	$(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">♿aria-describedby=\""+$(this).attr('aria-describedby')+"\"</span>");
  				var describedbyValue = $(this).attr('aria-describedby');
  				var describedbyArray = describedbyValue.split(' ');
  				for (i = 0; i < describedbyArray.length; i++) {
  		            var describedby = $('[id="'+describedbyArray[i]+'"]');
  					$(describedby).attr('style','outline:green 2px solid;');
  					$(describedby).prepend("<span class=\"inputSpan\" style=\"padding:1px;color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;z-index:2147483647;speak:literal-punctuation;\">🆔=\""+describedbyArray[i]+"\"</span>");
  				}
  			}
  			if($(this).attr('aria-labelledby')) {
              	$(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">♿aria-labelledby=\""+$(this).attr('aria-labelledby')+"\"</span>");
  				var labelledbyValue = $(this).attr('aria-labelledby');
  				var labelledbyArray = labelledbyValue.split(' ');
  				for (i = 0; i < labelledbyArray.length; i++) {
  		            $('[id="'+labelledbyArray[i]+'"]').attr('style','outline:green 2px solid;');
  					$('[id="'+labelledbyArray[i]+'"]').prepend("<span class=\"inputSpan\" style=\"padding:1px;color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;z-index:2147483647;speak:literal-punctuation;\">🆔=\""+labelledbyArray[i]+"\"</span>");
  				}
  			}
  			if($(this).attr('aria-required')) {
              	$(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&#9937;aria-required=\""+$(this).attr('aria-required')+"\"</span>");
  			}
  			if($(this).attr('aria-invalid')) {
              	$(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&#9940;aria-invalid=\""+$(this).attr('aria-invalid')+"\"</span>");
  			}
          });
  		$('label').each(function(index) {
  			var forAttr = $(this).attr('for');
  			var idString = "#";
  			idString += forAttr;
  			if ($(idString).length <=0 && $(this).attr('for')) {
  				$(this).attr('style','outline:red 2px dotted;padding:2px;');
  				$(this).prepend("<span class=\"openSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;label❌NO ID MATCH&gt;</span>");
  				$(this).append("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;/label&gt;</span>");
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
          $("legend").each(function() {
  				$(this).attr('style','outline:green 2px solid;padding:2px;');
                 	$(this).prepend("<span class=\"openSpan\" style=\"padding:1px;color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;z-index:2147483647;speak:literal-punctuation;\">&lt;legend&gt;👍</span>");
                  $(this).append("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;/legend&gt;</span>");
          });
          $("fieldset").each(function() {
                 	$(this).before("<span class=\"openSpan\" style=\"padding:1px;color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;z-index:2147483647;speak:literal-punctuation;\">&lt;fieldset&gt;</span>");
                  $(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;/fieldset&gt;</span>");
          });
  			if (!$(inputs).length) {
  				alert("No Form Inputs Found on Page: " + document.title);
  			} else {
  				$('body').append('<div id="success" role="alert" style="position:absolute; width:0; height:0; clip: rect(0,0,0,0);"></div>');
  				$('#success').html('Success! Form Inputs Found!');
  				setTimeout(function(){ $('#success').remove(); }, 3000);
  			}
        $("script[src$='forms.js']").remove();s.remove();
        }
        l()
    }
    var s = document.createElement("script");
    s.addEventListener ? s.addEventListener("load", callback, !1) : s.readyState && (s.onreadystatechange = callback), s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", document.body.appendChild(s);
})()
