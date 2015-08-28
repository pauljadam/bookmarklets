javascript: (function() {
    function callback() {
        function l() {
        $("span").remove(".openSpan, .closeSpan, .inputSpan");
		$('#success').remove();
        $("fieldset").attr('style','outline:2px solid green;');
        $("label").attr('style','outline:2px solid green;');
		var inputs = $('input, textarea, select').not(':input[type=hidden], :input[type=button], :input[type=submit], :input[type=reset]');
		$(inputs).each(function() {
			$(this).attr('style','outline:green 2px solid;padding:2px;');
            var label = $('label[for="'+$(this).attr('id')+'"]');
            if(label.length <= 0) {
                var parentElem = $(this).parent(),
                    parentTagName = parentElem.get(0).tagName.toLowerCase();
                if(parentTagName == "label") {
                    label = parentElem;
                }
            }
			if(!$(this).attr('id')) {
				$(this).before("<span class=\"inputSpan\" style=\"padding:1px;color:black;font-weight:bold;font-family:sans-serif;font-size:small;outline:red 2px solid;background-color:yellow;z-index:2147483647;\">NO ID</span>");
            	$(this).attr('style','outline:red 2px solid;padding:2px;');
			} else {
				$(this).before("<span class=\"inputSpan\" style=\"padding:1px;color:black;font-weight:bold;font-family:sans-serif;font-size:small;outline:green 2px solid;background-color:yellow;z-index:2147483647;speak:literal-punctuation;\">ID="+$(this).attr('id')+"</span>");
			}
            console.log('label.text(); = '+label.text());
            $(label).prepend("<span class=\"openSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;label for="+$(this).attr('id')+"&gt;</span>");
            $(label).append("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;/label&gt;</span>");
        });
        $("legend").each(function() {
               	$(this).prepend("<span class=\"openSpan\" style=\"padding:1px;color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;z-index:2147483647;speak:literal-punctuation;\">&lt;legend&gt;</span>");
                $(this).append("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;/legend&gt;</span>");
        });
        $("fieldset").each(function() {
               	$(this).before("<span class=\"openSpan\" style=\"padding:1px;color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;z-index:2147483647;speak:literal-punctuation;\">&lt;fieldset&gt;</span>");
                $(this).after("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;/fieldset&gt;</span>");
        });
			if (!$(inputs).length) {
				alert('No Form Inputs Found!');
			} else {
				$('body').append('<div id="success" role="alert" style="position:absolute; width:0; height:0; clip: rect(0,0,0,0);"></div>');
				$('#success').html('Success! Form Inputs Found!');
			}
        }
        l()
    }
    var s = document.createElement("script");
    s.addEventListener ? s.addEventListener("load", callback, !1) : s.readyState && (s.onreadystatechange = callback), s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", document.body.appendChild(s);
})()