# htdp/universe JavaScript Wrapper

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE-MIT) [![RacketScript](https://img.shields.io/badge/RacketScript-0000FF?logo=github)](https://github.com/racketscript/racketscript) 

An experimental wrapper written for [RacketScript's](https://github.com/racketscript/racketscript) htdp/universe and htdp/image modules, so that they can be used in vanilla JavaScript. :)

## Quick Install and Setup

### Set up an environment using Vite.js

First, set up a development environment using [vite.js](https://vitejs.dev/) and install the `htdp-universe-js` package from npm.

```bash
# Set up a JS project using Vite.js
npx create-vite@latest htdp-universe-test --template vanilla
cd htdp-universe-test
npm install

# Install htdp-universe-js package from npm
npm install htdp-universe-js
```

Next, paste this code into `main.js` in the `/htdp-universe-test` directory.

```javascript

// Basic clicker example

import {
  bigBang,
  toDraw,
  onMouse,
  emptyScene,
  text,
  overlay
} from "htdp-universe-js";

const INIT_STATE = 0;
const FONT_SIZE = 30;
const TEXT_COLOR = "black";
const WIDTH = 1000;
const HEIGHT = 1000;

const draw = toDraw((ws) => {
  return overlay(
    text(`${ws}`, FONT_SIZE, TEXT_COLOR),
    emptyScene(WIDTH, HEIGHT, "gray"),
  );
  });

const handleMouse = onMouse((ws, xPos, yPos, eventType) => {
  if (eventType === 'button-down') {
    return ws + 1;
  } else{
    return ws;
  }
})

bigBang(INIT_STATE, draw, handleMouse);
```

Now run the `vite` dev server by pasting this command into the terminal.

```bash
# Run the vite.js dev server
npm run dev
```

Finally, open a browser window to `http://localhost:5173` to see the example running!

## Documentation

Docs are available in the GitHub repo in markdown format [here](docs-markdown/DOCS.md), and are built via JSDoc to an HTML file [here](docs/index.html).

## Other Information

An example implementation of Snake using this library can be found [here](https://github.com/leiDnedyA/snake-htdp-js)!

[View the package on the npm registry](https://www.npmjs.com/package/htdp-universe-js)
