# strip-indent [![Build Status](https://travis-ci.org/sindresorhus/strip-indent.svg?branch=master)](https://travis-ci.org/sindresorhus/strip-indent)

> Strip leading whitespace from each line in a string

The line with the least number of leading whitespace, ignoring empty lines, determines the number to remove.

Useful for removing redundant indentation.


## Install

```
$ npm install strip-indent
```


## Usage

```js
const stripIndent = require('strip-indent');

const string = '\tunicorn\n\t\tcake';
/*
	unicorn
		cake
*/

stripIndent(string);
/*
unicorn
	cake
*/
```

## API

### stripIndent(string, [options])

Returns a `string`.

#### options

Type: `object`

##### indent

Type: `string`

Whitespace number to be stripped. Determined automatically if not specified.

## Advanced usage

Passing `indent` option: useful if the string may contain only whitespaces (like manipulating `node.raws.before` in a [PostCSS](https://github.com/postcss/postcss) plugin) or for optimization. Check the indentation first for the context using e.g. [min-indent](https://github.com/jamiebuilds/min-indent) and use this module to just strip it.

```js
const minIndent = require('min-indent');
const stripIndent = require('strip-indent');

const fullString = '\tunicorn\n\t\tcake';
const string = '\n\t\t';
const indent = minIndent(fullString);

stripIndent(string, {indent}); // '\n\t'
```

## Related

- [strip-indent-cli](https://github.com/sindresorhus/strip-indent-cli) - CLI for this module
- [indent-string](https://github.com/sindresorhus/indent-string) - Indent each line in a string


---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-strip-indent?utm_source=npm-strip-indent&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
