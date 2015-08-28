javascript: (function() {
    function callback() {
        function l() {
        $("strong").remove(".openSpan, .closeSpan");
		$('#success').remove();
        $("h1").prepend("<strong class=\"openSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow\">&lt;h1&gt;</strong>");
        $("h1").append("<strong class=\"closeSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow\">&lt;/h1&gt;</strong>");
        $("h2").prepend("<strong class=\"openSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow\">&lt;h2&gt;</strong>");
        $("h2").append("<strong class=\"closeSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow\">&lt;/h2&gt;</strong>");
        $("h3").prepend("<strong class=\"openSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow\">&lt;h3&gt;</strong>");
        $("h3").append("<strong class=\"closeSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow\">&lt;/h3&gt;</strong>");
        $("h4").prepend("<strong class=\"openSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow\">&lt;h4&gt;</strong>");
        $("h4").append("<strong class=\"closeSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow\">&lt;/h4&gt;</strong>");
        $("h5").prepend("<strong class=\"openSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow\">&lt;h5&gt;</strong>");
        $("h5").append("<strong class=\"closeSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow\">&lt;/h5&gt;</strong>");
        $("h6").prepend("<strong class=\"openSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow\">&lt;h6&gt;</strong>");
        $("h6").append("<strong class=\"closeSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow\">&lt;/h6&gt;</strong>");
        $("[role=heading][aria-level=1]").prepend("<strong class=\"openSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow\">&lt;[role=heading][aria-level=1]&gt;</strong>");
        $("[role=heading][aria-level=1]").append("<strong class=\"closeSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow\">&lt;/[role=heading][aria-level=1]&gt;</strong>");
        $("[role=heading][aria-level=2]").prepend("<strong class=\"openSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow\">&lt;[role=heading][aria-level=2]&gt;</strong>");
        $("[role=heading][aria-level=2]").append("<strong class=\"closeSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow\">&lt;/[role=heading][aria-level=2]&gt;</strong>");
        $("[role=heading][aria-level=3]").prepend("<strong class=\"openSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow\">&lt;[role=heading][aria-level=3]&gt;</strong>");
        $("[role=heading][aria-level=3]").append("<strong class=\"closeSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow\">&lt;/[role=heading][aria-level=3]&gt;</strong>");
        $("[role=heading][aria-level=4]").prepend("<strong class=\"openSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow\">&lt;[role=heading][aria-level=4]&gt;</strong>");
        $("[role=heading][aria-level=4]").append("<strong class=\"closeSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow\">&lt;/[role=heading][aria-level=4]&gt;</strong>");
        $("[role=heading][aria-level=5]").prepend("<strong class=\"openSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow\">&lt;[role=heading][aria-level=5]&gt;</strong>");
        $("[role=heading][aria-level=5]").append("<strong class=\"closeSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow\">&lt;/[role=heading][aria-level=5]&gt;</strong>");
        $("[role=heading][aria-level=6]").prepend("<strong class=\"openSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow\">&lt;[role=heading][aria-level=6]&gt;</strong>");
        $("[role=heading][aria-level=6]").append("<strong class=\"closeSpan\" style=\"color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow\">&lt;/[role=heading][aria-level=6]&gt;</strong>");
			if (!$('h1').length && !$('h2').length && !$('h3').length && !$('h4').length && !$('h5').length && !$('h6').length && !$('[role=heading][aria-level=1]').length && !$('[role=heading][aria-level=2]').length && !$('[role=heading][aria-level=3]').length && !$('[role=heading][aria-level=4]').length && !$('[role=heading][aria-level=5]').length && !$('[role=heading][aria-level=6]').length) {
			alert('No Headings Level 1-6 or WAI-ARIA role=heading Elements Found!');
			} else {
				console.log('headings found');
				$('body').append('<div id="success" role="alert"></div>');
				$('#success').html('Headings Found!');
			}
        }
        l()
    }
    var s = document.createElement("script");
    s.addEventListener ? s.addEventListener("load", callback, !1) : s.readyState && (s.onreadystatechange = callback), s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", document.body.appendChild(s);
})()