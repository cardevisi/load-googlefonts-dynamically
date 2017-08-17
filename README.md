## Usage

```js
function loadGoogleFontsByName(name) {
    var head = document.getElementsByTagName('head')[0] 
    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css?family="+name;
    head.appendChild(link);
}

loadGoogleFontsByName('Open+Sans');
```
##Apply dynamically font

```js
element.style.fontFamily = 'Open Sans';
```
