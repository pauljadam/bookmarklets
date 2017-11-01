javascript: (function() {
    function callback() {
        function l() {
          $("span").remove(".openSpan, .closeSpan, .inputSpan");
          $("table, [role=grid]").attr('style','outline:2px solid olive;');
          $("caption").each(function() {
   				$(this).removeAttr('class');
  				$(this).attr('style','outline:green 2px solid;padding:2px;');
                 	$(this).prepend("<span class=\"openSpan\" style=\"padding:1px;color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;z-index:2147483647;speak:literal-punctuation;\">&lt;caption&gt;🎓</span>");
                  $(this).append("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;/caption&gt;</span>");
          });
          $("th").each(function() {
  				$(this).attr('style','outline:green 2px solid;padding:2px;');
  				if ($(this).attr('scope')) {
  					if ($(this).attr('id')) {
  						if ($(this).attr('scope') == 'row') {
  							$(this).prepend("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;th♿scope=\"row\"🚣 id=\""+$(this).attr('id')+"\"&gt;</span>");
  						}
  						if ($(this).attr('scope') == 'col') {
  							$(this).prepend("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;th♿scope=\"col\"👇 id=\""+$(this).attr('id')+"\"&gt;</span>");
  						}
  					} else if ($(this).attr('role')) {
  						if ($(this).attr('scope') == 'row') {
  							$(this).prepend("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;th♿scope=\"row\"🚣 ♿role=\""+$(this).attr('role')+"\"&gt;</span>");
  						}
  						if ($(this).attr('scope') == 'col') {
  							$(this).prepend("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;th♿scope=\"col\"👇 ♿role=\""+$(this).attr('role')+"\"&gt;</span>");
  						}
  					} else {
  							if ($(this).attr('scope') == 'row') {
  								$(this).prepend("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;th♿scope=\"row\"🚣&gt;</span>");
  							}
  							if ($(this).attr('scope') == 'col') {
  								$(this).prepend("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;th♿scope=\"col\"👇&gt;</span>");
  							}
  					}
  				} else if ($(this).attr('headers')) {
  					if ($(this).attr('id')) {
  						$(this).prepend("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;th♿headers=\""+$(this).attr('headers')+"\" id=\""+$(this).attr('id')+"\"&gt;</span>");
  						} else {
  						$(this).prepend("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;th♿headers=\""+$(this).attr('headers')+"\"&gt;</span>");
  					}
  				} else if ($(this).attr('id')) {
  					$(this).prepend("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;th id=\""+$(this).attr('id')+"\"&gt;♿</span>");
  				} else if ($(this).attr('role')) {
  					$(this).prepend("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;th♿role=\""+$(this).attr('role')+"\"&gt;</span>");
  				} else {
              		$(this).prepend("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;th&gt;♿</span>");
  				}
          });
          $("td").each(function() {
  				$(this).attr('style','outline:orange 2px dashed;padding:2px;');
  				if ($(this).attr('headers')) {
  					if ($(this).attr('role')) {
  					$(this).prepend("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;td♿headers=\""+$(this).attr('headers')+"\"♿role=\""+$(this).attr('role')+"\"&gt;</span>");
  					}	else {
  					$(this).prepend("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;td♿headers=\""+$(this).attr('headers')+"\"&gt;</span>");
  					}
  				} else if ($(this).attr('role')) {
  					$(this).prepend("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;td♿role=\""+$(this).attr('role')+"\"&gt;</span>");
  				} else {
              		$(this).prepend("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;td&gt;</span>");
  				}
          });
  				$("table").each(function() {
  					if ($(this).attr('summary')) {
  						$(this).before("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;table♿summary=\""+$(this).attr('summary')+"\"&gt;</span>");
  					} else if ($(this).attr('role') == 'presentation') {
  						$(this).before("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;table♿role=\""+$(this).attr('role')+"\"&gt;</span>");
  					} else {
            		$(this).before("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;table&gt;</span>");
  				}
          });
  				$("[role=grid]").each(function() {
  					if ($(this).attr('aria-readonly')){
  						$(this).before("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">♿role=\""+$(this).attr('role')+"\"♿aria-readonly=\""+$(this).attr('aria-readonly')+"\"</span>");
  					} else if ($(this).attr('aria-labelledby') && $(this).attr('aria-readonly')){
  						$(this).before("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">♿role=\""+$(this).attr('role')+"\"♿aria-labelledby=\""+$(this).attr('aria-labelledby')+"\"♿aria-readonly=\""+$(this).attr('aria-readonly')+"\"</span>");
  					} else if ($(this).attr('aria-label') && $(this).attr('aria-readonly')){
  						$(this).before("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">♿role=\""+$(this).attr('role')+"\"♿aria-label=\""+$(this).attr('aria-label')+"\"♿aria-readonly=\""+$(this).attr('aria-readonly')+"\"</span>");
  					} else {
  					$(this).before("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">♿role=\""+$(this).attr('role')+"\"</span>");
  					}
          });
  				$("tr[role]").each(function() {
  					$(this).before("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;tr♿role=\""+$(this).attr('role')+"\"&gt;</span>");
          });
  		$('td[headers], th[headers]').each(function(index) {
  				var describedbyValue = $(this).attr('headers');
  				var describedbyArray = describedbyValue.split(' ');
  				for (i = 0; i < describedbyArray.length; i++) {
  					var idString = "#";
  					idString += describedbyArray[i];
  						if ($(idString).length <=0 && $('[id="'+describedbyArray[i]+'"]')) {
  							$(this).attr('style','outline:red 2px dotted;padding:2px;');
  							$(this).append("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;speak:literal-punctuation;\">❌NO ID MATCH</span>");
  						}
  				}
  		});
  			if (!$("table").length) {
				$('body').prepend('<strong style="color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;" id="failure" role="status"></strong>');
				$('#failure').html('No Tables Found on Page: ' + document.title);
				setTimeout(function(){ $('#failure').remove(); }, 6000);
			} else {
				$('body').append('<div id="success" role="alert" style="position:absolute; width:0; height:0; clip: rect(0,0,0,0);"></div>');
				$('#success').html('Success! Tables Found on Page: ' + document.title);
				setTimeout(function(){ $('#success').remove(); }, 3000);
  			}
      $("script[src$='tables.js']").remove();s.remove();

        }
        l()
    }
    var s = document.createElement("script");
    s.addEventListener ? s.addEventListener("load", callback, !1) : s.readyState && (s.onreadystatechange = callback), s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", document.body.appendChild(s);
})()
