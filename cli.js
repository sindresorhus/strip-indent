#!/usr/bin/env node
'use strict';
var fs = require('fs');
var meow = require('meow');
var stdin = require('get-stdin');
var stripIndent = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ strip-indent <file>',
		'  $ echo <string> | strip-indent',
		'',
		'Example',
		'  $ echo \'\\tunicorn\\n\\t\\tcake\' | strip-indent',
		'  $ unicorn',
		'  \tcake'
	]
});

var input = cli.input[0];

function init(data) {
	console.log(stripIndent(data));
}

if (!input && process.stdin.isTTY) {
	console.error('Expected a filename');
	process.exit(1);
}

if (input) {
	init(fs.readFileSync(input, 'utf8'));
} else {
	stdin(init);
}
