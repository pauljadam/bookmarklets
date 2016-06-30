javascript: (function() {
    function callback() {
        function l() {
        $("span").remove(".openSpan, .closeSpan, .inputSpan");
        $("table").attr('style','outline:2px solid olive;');
        $("caption").each(function() {
				$(this).attr('style','outline:green 2px solid;padding:2px;');
               	$(this).prepend("<span class=\"openSpan\" style=\"padding:1px;color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;z-index:2147483647;speak:literal-punctuation;\">🎓&lt;caption&gt;</span>");
                $(this).append("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;/caption&gt;</span>");
        });
        $("th").each(function() {
				$(this).attr('style','outline:green 2px solid;padding:2px;');
				if ($(this).attr('scope')) {
					if ($(this).attr('id')) {
						$(this).prepend("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;th 🍨scope=\""+$(this).attr('scope')+"\" id=\""+$(this).attr('id')+"\"&gt;👍</span>");
						} else {
						$(this).prepend("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;th 🍨scope=\""+$(this).attr('scope')+"\"&gt;👍</span>");
					}
				} else if ($(this).attr('headers')) {
					if ($(this).attr('id')) {
						$(this).prepend("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;th❓headers=\""+$(this).attr('headers')+"\" id=\""+$(this).attr('id')+"\"&gt;👍</span>");
						} else {
						$(this).prepend("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;th❓headers=\""+$(this).attr('headers')+"\"&gt;👍</span>");
					}
				} else if ($(this).attr('id')) {
					$(this).prepend("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;th id=\""+$(this).attr('id')+"\"&gt;👍</span>");
				} else {
            		$(this).prepend("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;th&gt;👍</span>");
				}
        });
        $("td").each(function() {
				$(this).attr('style','outline:orange 2px dashed;padding:2px;');
				if ($(this).attr('headers')) {
					$(this).prepend("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;td ❓headers=\""+$(this).attr('headers')+"\"&gt;</span>");
				} else {
            		$(this).prepend("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;td&gt;</span>");
				}
        });
        $("table").each(function() {
				if ($(this).attr('summary')) {
					$(this).before("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;table❓summary=\""+$(this).attr('summary')+"\"&gt;</span>");
				} else if ($(this).attr('role')) {
					$(this).before("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;table❓role=\""+$(this).attr('role')+"\"&gt;</span>");
				} else {
            		$(this).before("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;margin:0 2px; padding:2px;speak:literal-punctuation;\">&lt;table&gt;</span>");
				}
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
				alert('No Tables Found!');
			} else {
				$('body').append('<div id="success" role="alert" style="position:absolute; width:0; height:0; clip: rect(0,0,0,0);"></div>');
				$('#success').html('Success! Tables Found!');
				setTimeout(function(){ $('#success').remove(); s.remove(); }, 3000);
			}
        }
        l()
    }
    var s = document.createElement("script");
    s.addEventListener ? s.addEventListener("load", callback, !1) : s.readyState && (s.onreadystatechange = callback), s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", document.body.appendChild(s);
})()