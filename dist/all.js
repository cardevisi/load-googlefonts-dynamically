function loadGoogleFontsByName(name) {
    var head = document.getElementsByTagName('head')[0] 
    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css?family="+name;
    head.appendChild(link);
}
loadGoogleFontsByName('Opens+Sans');
loadGoogleFontsByName('Roboto');
document.addEventListener('DOMContentLoaded', function(event){
    setTimeout(function(){
        document.body.style.fontFamily = 'Open Sans';
    }, 1000);
    
    setTimeout(function(){
        document.body.style.fontFamily = 'Roboto';
    }, 2000);
});