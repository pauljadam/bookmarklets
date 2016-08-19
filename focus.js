javascript: (function() {
    function callback() {
        function l() {
			$( "<style>a:focus, *:focus { outline: 4px solid orange !important; outline-offset:1px !important; }</style>" ).appendTo( "head" );
        }
        l()
    }
    var s = document.createElement("script");
    s.addEventListener ? s.addEventListener("load", callback, !1) : s.readyState && (s.onreadystatechange = callback), s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", document.body.appendChild(s);
})()