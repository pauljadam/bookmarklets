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
			var wrappedLabel;
            if(label.length <= 0) {
            	$(this).attr('style','outline:orange 2px dashed;padding:2px;');
                var parentElem = $(this).parent(),
                    parentTagName = parentElem.get(0).tagName.toLowerCase();
                if(parentTagName == "label") {
					wrappedLabel = parentElem;
                }
            }
			if(!$(this).attr('id')) {
				$(this).before("<span class=\"inputSpan\" style=\"padding:1px;color:black;font-weight:bold;font-family:sans-serif;font-size:small;outline:red 2px dotted;background-color:yellow;z-index:2147483647;\">&lt;input NO ID&gt;</span>");
            	$(this).attr('style','outline:red 2px dotted;padding:2px;');
			} else {
				$(this).before("<span class=\"inputSpan\" style=\"padding:1px;color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;z-index:2147483647;speak:literal-punctuation;\">&lt;input id=\""+$(this).attr('id')+"\"&gt;</span>");
			}
            $(label).prepend("<span class=\"openSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;label for=\""+$(this).attr('id')+"\"&gt;</span>");
            $(label).append("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;/label&gt;</span>");
            $(wrappedLabel).prepend("<span class=\"openSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;label NO FOR&gt;</span>");
            $(wrappedLabel).append("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;/label&gt;</span>");
	        $(wrappedLabel).attr('style','outline:2px dashed orange;');

        });
		$('label').each(function(index) {
			var forAttr = $(this).attr('for');
			var idString = "#";
			idString += forAttr;
			console.log(idString);
			if ($(idString).length <=0) {
				console.log($(this).html());
				$(this).attr('style','outline:red 2px dotted;padding:2px;');
				$(this).prepend("<span class=\"openSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;label NO ID MATCH&gt;</span>");
				$(this).append("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;speak:literal-punctuation;\">&lt;/label&gt;</span>");
			}
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