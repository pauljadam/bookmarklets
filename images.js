javascript: (function() {
    function callback() {
        function l() {
          $("span").remove(".altSpan");
  		$("img, [role=img]").each(function() {
  			if($(this).attr('role')) {
          $(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;outline:orange 2px dashed;margin:0 2px; padding:2px;speak:literal-punctuation;\">❓role=\""+$(this).attr('role')+"\"</span>");
  			}
  			if($(this).attr('aria-label')) {
  							$(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;outline:orange 2px dashed;margin:0 2px; padding:2px;speak:literal-punctuation;\">aria-label=\""+$(this).attr('aria-label')+"\"</span>");
  			}
  			if($(this).attr('aria-describedby')) {
  							$(this).before("<span class=\"axSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;outline:orange 2px dashed;margin:0 2px; padding:2px;speak:literal-punctuation;\">aria-describedby=\""+$(this).attr('aria-describedby')+"\"</span>");
  				var describedbyValue = $(this).attr('aria-describedby');
  				var describedbyArray = describedbyValue.split(' ');
  				for (i = 0; i < describedbyArray.length; i++) {
  								var describedby = $('[id="'+describedbyArray[i]+'"]');
  					$(describedby).attr('style','outline:orange 2px dashed;');
  					$(describedby).prepend("<span class=\"inputSpan\" style=\"padding:1px;color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;outline:orange 2px dashed;z-index:2147483647;speak:literal-punctuation;\">id=\""+describedbyArray[i]+"\"</span>");
  				}
  			}
  			if($(this).attr('aria-labelledby')) {
  							$(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;outline:orange 2px dashed;margin:0 2px; padding:2px;speak:literal-punctuation;\">aria-labelledby=\""+$(this).attr('aria-labelledby')+"\"</span>");
  				var labelledbyValue = $(this).attr('aria-labelledby');
  				var labelledbyArray = labelledbyValue.split(' ');
  				for (i = 0; i < labelledbyArray.length; i++) {
  								$('[id="'+labelledbyArray[i]+'"]').attr('style','outline:orange 2px dashed;');
  					$('[id="'+labelledbyArray[i]+'"]').prepend("<span class=\"inputSpan\" style=\"padding:1px;color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;outline:orange 2px dashed;z-index:2147483647;speak:literal-punctuation;\">id=\""+labelledbyArray[i]+"\"</span>");
  				}
  			}
  			$(this).attr('style','outline:green 2px solid;padding:2px;');
  			if (!this.hasAttribute('alt')) {
  				if ($(this).parent('a').length) {
  					if (!this.hasAttribute('aria-label')) {
  							if (!this.hasAttribute('aria-labelledby')) {
  								if (!this.hasAttribute('aria-describedby')) {
  									if (!this.hasAttribute('title')) {
  				   			 		$(this).before("<span class=\"altSpan\" style=\"outline:red 2px solid;padding:1px;color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;position:absolute;line-height:100%;z-index:2147483647;border-bottom:2px solid blue;\">LINK IMG❌NO ALT</span>");
  									}
  								}
  							}
  						}
  					} else if (!this.hasAttribute('aria-label')) {
  					if (!this.hasAttribute('aria-labelledby')) {
  						if (!this.hasAttribute('aria-describedby')) {
  							if (!this.hasAttribute('title')) {
  								$(this).attr('style','outline:red 2px solid;padding:2px;');
  			   			 	$(this).before("<span class=\"altSpan\" style=\"outline:red 2px solid;padding:1px;color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;position:absolute;line-height:100%;z-index:2147483647;\">IMG❌NO ALT</span>");
  							}
  						}
  					}
  				}
  			} else {
  				$(this).attr('style','outline:green 2px solid;padding:2px;');
  					if ($(this).parent('a').length) {
     			 	$(this).before("<span class=\"altSpan\" style=\"outline:orange 2px dashed;padding:1px;color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;position:absolute;line-height:100%;z-index:2147483647;speak:literal-punctuation;border-bottom:2px solid blue;\">LINK IMG👍alt=\""+$(this).attr('alt')+"\"</span>");
  					} else {
     			 	$(this).before("<span class=\"altSpan\" style=\"outline:orange 2px dashed;padding:1px;color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;position:absolute;line-height:100%;z-index:2147483647;speak: literal-punctuation;\">IMG👍alt=\""+$(this).attr('alt')+"\"</span>");
  							}
  					}
  				if (this.hasAttribute('title')) {
  					$(this).after("<span role=\"region\" aria-label=\"Title\" class=\"axSpan\" style=\"outline:orange 2px dashed;padding:1px;color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;position:relative;line-height:100%;z-index:2147483647;\">❓title=\""+$(this).attr('title')+"\"</span>");
  				}
  				if (this.hasAttribute('longdesc')) {
  					$(this).after("<span role=\"region\" aria-label=\"Long Description\" class=\"axSpan\" style=\"outline:orange 2px dashed;padding:1px;color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;position:relative;line-height:100%;z-index:2147483647;\">❓longdesc=\""+$(this).attr('longdesc')+"\"</span>");
  				}

  	    });

  			if (!$('img, [role=img]').length) {
  				alert('No <IMG> Elements Found on Page: ' + document.title);
  			} else {
  				$('body').append('<div id="success" role="alert" style="position:absolute; width:0; height:0; clip: rect(0,0,0,0);"></div>');
  				$('#success').html('Success! Images Found!');
  				setTimeout(function(){ $('#success').remove(); }, 3000);
  			}
      $("script[src$='images.js']").remove();s.remove();
        }
        l()
    }
    var s = document.createElement("script");
    s.addEventListener ? s.addEventListener("load", callback, !1) : s.readyState && (s.onreadystatechange = callback), s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", document.body.appendChild(s);
})()
