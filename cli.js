#!/usr/bin/env node
'use strict';
var fs = require('fs');
var pkg = require('./package.json');
var stripIndent = require('./index');
var input = process.argv[2];

function stdin(cb) {
	var ret = '';
	process.stdin.setEncoding('utf8');
	process.stdin.on('data', function (data) { ret += data });
	process.stdin.on('end', function () { cb(ret) }).resume();
}

function help() {
	console.log(pkg.description);
	console.log('');
	console.log('Usage');
	console.log('  $ strip-indent <file>');
	console.log('  $ echo <string> | strip-indent');
	console.log('');
	console.log('Example');
	console.log('  $ echo \'\\tunicorn\\n\\t\\tcake\' | strip-indent');
	console.log('  unicorn');
	console.log('  \tcake');
}

function init(data) {
	console.log(stripIndent(data));
}

if (process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

if (process.stdin.isTTY) {
	if (!input) {
		help();
		return;
	}

	init(fs.readFileSync(input, 'utf8'));
} else {
	stdin(init);
}
