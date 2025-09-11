import test from 'ava';
import stripIndent, {dedent} from './index.js';

test('main', t => {
	t.is(stripIndent('\nunicorn\n'), '\nunicorn\n');
	t.is(stripIndent('\n  unicorn\n'), '\nunicorn\n');
	t.is(stripIndent('\t\t<!doctype html>\n\t\t<html>\n\t\t\t<body>\n\n\n\n\t\t\t\t<h1>Hello world!</h1>\n\t\t\t</body>\n\t\t</html>'), '<!doctype html>\n<html>\n\t<body>\n\n\n\n\t\t<h1>Hello world!</h1>\n\t</body>\n</html>');
	t.is(stripIndent('\n\t\n\t\tunicorn\n\n\n\n\t\t\tunicorn'), '\n\t\nunicorn\n\n\n\n\tunicorn', 'ignore whitespace only lines');
});

test('dedent', t => {
	// Basic template literal use case
	const templateLiteral = dedent(`
		unicorn
			cake
	`);
	t.is(templateLiteral, 'unicorn\n\tcake');

	// Issue #10 example
	const fire = dedent(`
	THIS IS FINE.
	I'M OK WITH THE EVENTS UNFOLDING CURRENTLY.
`);
	t.is(fire, 'THIS IS FINE.\nI\'M OK WITH THE EVENTS UNFOLDING CURRENTLY.');

	// Multiple leading/trailing whitespace-only lines
	t.is(dedent('\n \n\tfoo\n \n'), 'foo');

	// CRLF support
	t.is(dedent('\r\n\t\r\n\tfoo\r\n\t\r\n'), 'foo');

	// Mixed LF and CRLF
	t.is(dedent('\r\n\n\tfoo\n\r\n'), 'foo');

	// Multiple whitespace-only lines at start and end
	t.is(dedent('\n \n \nfoo\n \n \n'), 'foo');

	// Preserves internal empty lines and whitespace-only lines
	const withInternalEmpty = dedent(`
		first

		second
		  
		third
	`);
	t.is(withInternalEmpty, 'first\n\nsecond\n  \nthird');

	// Only whitespace-only lines
	t.is(dedent('\n \n \t \n'), '');

	// Empty string
	t.is(dedent(''), '');

	// String without leading/trailing newlines - same as stripIndent
	t.is(dedent('\tunicorn\n\t\tcake'), 'unicorn\n\tcake');

	// Complex indentation patterns
	const complex = dedent(`
		function example() {
			if (true) {
				console.log('hello');
			}
		}
	`);
	t.is(complex, 'function example() {\n\tif (true) {\n\t\tconsole.log(\'hello\');\n\t}\n}');

	// Preserves trailing spaces in content
	const trailingSpaces = dedent(`
		hello world    
			indented    
	`);
	t.is(trailingSpaces, 'hello world    \n\tindented    ');

	// Tabs and spaces mixed in whitespace-only lines
	t.is(dedent(' \t \n\tfoo\n \t '), 'foo');

	// Test with various whitespace patterns
	t.is(dedent('\n\t\n\tfoo\n\t\n'), 'foo');
});
