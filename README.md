# @kkandasamy/acronym

[![npm (scoped)](https://img.shields.io/npm/v/@kkandasamy/acronym.svg)](https://github.com/gitkarthik/acronym)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@kkandasamy/acronym.svg)](https://github.com/gitkarthik/acronym)

Generate your acronyms!

## Install

```
$ npm install @kkandasamy/acronym
```

## Usage

```js
const acronym = require("@kkandasamy/acronym");

acronym("for your information", (err, resp) => {
  if (err) {
    console.log(err);
  }
  console.log(resp); // => fyi
});

acronym("", (err, resp) => {
  if (err) {
    console.log(err); // => String, Please! e.g. "for your information"
  }
  console.log(resp);
});
```
