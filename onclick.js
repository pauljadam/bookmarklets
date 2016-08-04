javascript: (function() {
    function callback() {
        function l() {
        $("span").remove(".axSpan");
		$("*").each(function() {
			if (this.hasAttribute('onclick')) {
				$(this).attr('style','outline:red 1px solid;padding:2px;');
   			 	$(this).after("<span role=\"region\" aria-label=\"Onclick\" class=\"axSpan\" style=\"outline:red 1px solid;padding:1px;color:black;font-family:sans-serif;font-weight:bold;font-size:small;background-color:yellow;position:relative;line-height:100%;z-index:2147483647;\">onclick=\""+$(this).attr('onclick')+"\"</span>");
				}
			//console.log('Event handlers :', $._data(this, "events"));
			//console.log('this is :', this);
			
				function output(){ 
					var e = $._data(this).events,
						str = "All Events"
					$.each(e,function(i,v){
						str+="\n" + i + ":" + v.toString();
						$.each(v,function(ii,vv){
							str+="\n\t" + ii + ":" + vv.handler.toString();
						})
					})
					console.log(str);
				};
				output();
			
			
	    });
			if (!$('[onclick]').length) {
				alert('No <HTML> Elements with onclick attributes Found on Page: ' + document.title);
			} else {
				$('body').append('<div id="success" role="alert" style="position:absolute; width:0; height:0; clip: rect(0,0,0,0);"></div>');
				$('#success').html('Success! onclick attributes Found!');
				setTimeout(function(){ $('#success').remove(); s.remove(); }, 3000);
			}
        }
        l()
    }
    var s = document.createElement("script");
    s.addEventListener ? s.addEventListener("load", callback, !1) : s.readyState && (s.onreadystatechange = callback), s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", document.body.appendChild(s);
})()