import test from 'ava';
import stripIndent from './index.js';

test('main', t => {
	t.is(stripIndent('\nunicorn\n'), '\nunicorn\n');
	t.is(stripIndent('\n  unicorn\n'), '\nunicorn\n');
	t.is(stripIndent('\t\t<!doctype html>\n\t\t<html>\n\t\t\t<body>\n\n\n\n\t\t\t\t<h1>Hello world!</h1>\n\t\t\t</body>\n\t\t</html>'), '<!doctype html>\n<html>\n\t<body>\n\n\n\n\t\t<h1>Hello world!</h1>\n\t</body>\n</html>');
	t.is(stripIndent('\n\t\n\t\tunicorn\n\n\n\n\t\t\tunicorn'), '\n\t\nunicorn\n\n\n\n\tunicorn', 'ignore whitespace only lines');
});

test('stripIndent.trimmed', t => {
	// Basic template literal use case
	const templateLiteral = stripIndent.trimmed(`
		unicorn
			cake
	`);
	t.is(templateLiteral, 'unicorn\n\tcake');

	// Issue #10 example
	const fire = stripIndent.trimmed(`
	THIS IS FINE.
	I'M OK WITH THE EVENTS UNFOLDING CURRENTLY.
`);
	t.is(fire, 'THIS IS FINE.\nI\'M OK WITH THE EVENTS UNFOLDING CURRENTLY.');

	// Multiple leading/trailing newlines
	t.is(stripIndent.trimmed('\n\n\tunicorn\n\n'), 'unicorn');

	// Mixed indentation with leading/trailing newlines
	const mixed = stripIndent.trimmed(`

		first line
			indented line
		last line

	`);
	t.is(mixed, 'first line\n\tindented line\nlast line');

	// Only newlines
	t.is(stripIndent.trimmed('\n\n\n'), '');

	// Empty string
	t.is(stripIndent.trimmed(''), '');

	// String without leading/trailing newlines
	t.is(stripIndent.trimmed('\tunicorn\n\t\tcake'), 'unicorn\n\tcake');

	// Preserves internal empty lines
	const withEmptyLines = stripIndent.trimmed(`
		first

		second
	`);
	t.is(withEmptyLines, 'first\n\nsecond');

	// Complex example with varied indentation
	const complex = stripIndent.trimmed(`
		function example() {
			if (true) {
				console.log('hello');
			}
		}
	`);
	t.is(complex, 'function example() {\n\tif (true) {\n\t\tconsole.log(\'hello\');\n\t}\n}');

	// Edge case: content that starts/ends with spaces - no newlines to trim, normal stripIndent behavior
	const spacesOnly = stripIndent.trimmed('   \thello\n\t\tworld   ');
	t.is(spacesOnly, ' \thello\nworld   ');

	// Edge case: mixed leading whitespace with newlines - newlines trimmed then stripIndent applied
	const mixedLeading = stripIndent.trimmed('\n   \n\t\thello\n\t\tworld\n   \n');
	t.is(mixedLeading, ' \nhello\nworld\n ');

	// Test that trailing spaces are preserved
	const trailingSpaces = stripIndent.trimmed(`
		hello world    
			indented    
	`);
	t.is(trailingSpaces, 'hello world    \n\tindented    ');
});
