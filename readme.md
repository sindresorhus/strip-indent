# strip-indent [![Build Status](https://travis-ci.org/sindresorhus/strip-indent.svg?branch=master)](https://travis-ci.org/sindresorhus/strip-indent)

> Strip leading whitespace from every line in a string

The line with the least number of leading whitespace, ignoring empty lines, determines the number to remove.

Useful for removing redundant indentation.


## Install

Download [manually](https://github.com/sindresorhus/strip-indent/releases) or with a package-manager.

```bash
$ npm install --save strip-indent
```

```bash
$ bower install --save strip-indent
```

```bash
$ component install sindresorhus/strip-indent
```


## Usage

```js
var stripIndent = require('strip-indent');

var str = '\tunicorn\n\t\tcake';
/*
	unicorn
		cake
*/

stripIndent('\tunicorn\n\t\tcake');
/*
unicorn
	cake
*/
```

Can be used with require, global and AMD in the browser.


## CLI

You can also use it as a CLI app by installing it globally:

```bash
$ npm install --global strip-indent
```

### Usage

```bash
$ strip-indent --help

Usage
  $ strip-indent <file>
  $ echo <string> | strip-indent

Example
  $ echo '\tunicorn\n\t\tcake' | strip-indent
  unicorn
  	cake
```


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
