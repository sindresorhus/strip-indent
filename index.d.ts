declare const stripIndent: {
	/**
	Strip leading whitespace from each line in a string.

	The line with the least number of leading whitespace, ignoring empty lines, determines the number to remove.

	@example
	```
	import stripIndent from 'strip-indent';

	const string = '\tunicorn\n\t\tcake';
	//	unicorn
	//		cake

	stripIndent(string);
	//unicorn
	//	cake
	```
	*/
	(string: string): string;

	/**
	Strip leading whitespace from each line in a string and trim leading/trailing newlines.

	Like `stripIndent()`, but also removes leading and trailing newlines. Useful for template literals.

	@example
	```
	import stripIndent from 'strip-indent';

	stripIndent.trimmed(`
		unicorn
			cake
	`);
	//unicorn
	//	cake
	```
	*/
	trimmed(string: string): string;
};

export default stripIndent;
