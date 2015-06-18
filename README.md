# milestokilometers.js

JavaScript conversion of miles to kilometers.

[![Build Status](https://travis-ci.org/joshause/milestokilometers.svg?branch=master)](https://travis-ci.org/joshause/milestokilometers)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Usage

### Node.js

```js
var MilesToKilometers = require("milestokilometers");
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

Jasmine

```bash
$ npm test
```

## License

MIT. By [Josh Ause](http://www.github.com/joshause).
