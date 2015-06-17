# milestokilometers.js

JavaScript conversion of miles to kilometers.

## Usage

### Node.js

```js
var MilesToKilometers = require("./milestokilometers");
var mtk = new MilesToKilometers();
mtk.get(1);
// => 1.60934
```

### Browser

(Add necessary `<script>` tag reference to `milestokilometers.js`)

```js
// MilesToKilometers is autoloaded to window.MilesToKilometers
var mtk = new MilesToKilometers();
mtk.get(1);
// => 1.60934
```

## Tests

```bash
$ jasmine
```

## License

MIT. By [Josh Ause](http://www.github.com/joshause).
