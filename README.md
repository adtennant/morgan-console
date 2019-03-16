# Morgan Console

![npm](https://img.shields.io/npm/v/npm.svg) ![license](https://img.shields.io/npm/l/morgan-console.svg)

[morgan](https://github.com/expressjs/morgan) wrapper that logs using `console.info`/`console.error`. For use in environments where the `process.stdout`/`process.stderr` don't work, e.g. Google Cloud Functions.

```js
const express = require('express');
const morganConsole = require('morgan-console');

const app = express();
app.use(morganConsole('combined'));
```

Anything `morgan` would normally logged is logged to `console.info`/`console.error` in the `combined` format.

# Installation

npm:
```bash
npm install morgan-console
```

Yarn:
```bash
yarn add morgan-console
```
# Usage

<b><code>morganConsole(format [, morgan])</code></b>

Create a new morgan-console middleware function using the given `format` and instance of `morgan`. If no instance of morgan is passed in then a default one will be created. Passing your own morgan instance in lets you register your own tokens with morgan before constructing the `morgan-console` middleware.

# License

[MIT](https://github.com/adtennant/morgan-console/blob/master/LICENSE)
