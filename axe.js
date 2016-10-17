var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/2.0.7/axe.js';
document.head.appendChild(script);
setTimeout(function(){
axe.a11yCheck(document, function(results) {
  console.log(results);
});
}, 1000);