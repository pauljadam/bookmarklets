javascript: (function() {
    function callback() {
        function l() {
        $("span").remove(".openSpan, .closeSpan, .inputSpan");
		$("input").each(function() {
				$(this).attr('style','border:green 2px solid;padding:2px;');
   			 	$(this).before("<span class=\"inputSpan\" style=\"padding:1px;color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;z-index:2147483647;\">&lt;input id="+$(this).attr('id')+"&gt;</span>");
            var label = $('label[for="'+$(this).attr('id')+'"]');
            if(label.length <= 0) {
                var parentElem = $(this).parent(),
                    parentTagName = parentElem.get(0).tagName.toLowerCase();

                if(parentTagName == "label") {
                    label = parentElem;
                }
            $(this).attr('style','border:red 2px solid;padding:2px;');

            }
            console.log('label.text(); = '+label.text());
            $(label).prepend("<span class=\"openSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow\">&lt;label for="+$(this).attr('id')+"&gt;</span>");
            $(label).append("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow\">&lt;/label&gt;</span>");
        });
        $("legend").each(function() {
               	$(this).prepend("<span class=\"openSpan\" style=\"padding:1px;color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;z-index:2147483647;\">&lt;legend&gt;</span>");
                $(this).append("<span class=\"closeSpan\" style=\"color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow\">&lt;/legend&gt;</span>");

        });
        }
        l()
    }
    var s = document.createElement("script");
    s.addEventListener ? s.addEventListener("load", callback, !1) : s.readyState && (s.onreadystatechange = callback), s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", document.body.appendChild(s);
})()