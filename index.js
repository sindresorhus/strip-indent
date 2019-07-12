'use strict';
const minIndent = require('min-indent');

module.exports = (string, options = {}) => {
	const indent = options.indent === undefined ? minIndent(string) : options.indent;

	if (indent === 0) {
		return string;
	}

	const regex = new RegExp(`^[ \\t]{${indent}}`, 'gm');

	return string.replace(regex, '');
};
