declare namespace stripIndent {
	interface Options {
		/**
		Whitespace number to be stripped. Determined automatically if not specified.
		*/
		readonly indent?: number;
	}
}

/**
Strip leading whitespace from each line in a string.

The line with the least number of leading whitespace, ignoring empty lines, determines the number to remove (unless specified in options).

@example
```
import stripIndent = require('strip-indent');

const string = '\tunicorn\n\t\tcake';
//	unicorn
//		cake

stripIndent(string);
//unicorn
//	cake
```
*/
declare function stripIndent(string: string, options?: stripIndent.Options): string;

export = stripIndent;
