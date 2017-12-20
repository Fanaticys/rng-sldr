Rng-sldr is an easy range slider.<br>

## Demo

<a href="https://fanaticys.github.io/rng-sldr">Basic demo</a>

## Installation

Via npm:

    npm intsall rng-sldr --save

In a browser:

    <script src="lib/js/rng-sldr.js"></script>

## Example

HTML Elements:
```
<input class="price-start">
<input class="price-end">
<div class="rng-sldr price"></div>
```
Style:
```
<link href="lib/css/rng-sldr.css" rel="stylesheet">
```
Script:
```
var settings = {
    max: 100,   //required
    min: 10,    //optional
    start: 20,  //optional
    end: 90     //optional
}
rngSldr('price', settings);

//CommonJS
var rngSldr = require('rng-sldr');

// ES6
import rngSldr from "rng-sldr";
```

## License

The MIT License.