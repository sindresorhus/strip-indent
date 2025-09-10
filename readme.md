# strip-indent

> Strip leading whitespace from each line in a string

The line with the least number of leading whitespace, ignoring empty lines, determines the number to remove.

Useful for removing redundant indentation.

## Install

```sh
npm install strip-indent
```

## Usage

```js
import stripIndent from 'strip-indent';

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

### stripIndent(string)

Strip leading whitespace from each line in a string.

The line with the least number of leading whitespace, ignoring empty lines, determines the number to remove.

### stripIndent.trimmed(string)

Strip leading whitespace from each line in a string and trim leading/trailing newlines.

Like `stripIndent()`, but also removes leading and trailing newlines. Useful for template literals.

```js
import stripIndent from 'strip-indent';

stripIndent.trimmed(`
	unicorn
		cake
`);
/*
unicorn
	cake
*/
```

## Related

- [strip-indent-cli](https://github.com/sindresorhus/strip-indent-cli) - CLI for this module
- [indent-string](https://github.com/sindresorhus/indent-string) - Indent each line in a string
- [redent](https://github.com/sindresorhus/redent) - Strip redundant indentation and indent the string
