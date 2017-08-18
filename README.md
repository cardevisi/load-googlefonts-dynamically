## Usage

```js
function loadGoogleFontsByName(name) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css?family="+name;
    head.appendChild(link);
}
```

This will load fonts by your name

```js
loadGoogleFontsByName('Open+Sans');
```

## Apply dynamically font

This will apply a loaded font in a DOM element

```js
element.style.fontFamily = 'Open Sans';
```
