import test from 'ava';
import m from './';

test(t => {
	t.is(m('\nunicorn\n'), '\nunicorn\n');
	t.is(m('\n  unicorn\n'), '\nunicorn\n');
	t.is(m('\t\t<!doctype html>\n\t\t<html>\n\t\t\t<body>\n\n\n\n\t\t\t\t<h1>Hello world!</h1>\n\t\t\t</body>\n\t\t</html>'), '<!doctype html>\n<html>\n\t<body>\n\n\n\n\t\t<h1>Hello world!</h1>\n\t</body>\n</html>');
	t.is(m('\n\t\n\t\tunicorn\n\n\n\n\t\t\tunicorn'), '\n\t\nunicorn\n\n\n\n\tunicorn', 'ignore whitespace only lines');
});
