'use strict';
const minIndent = require('min-indent');

module.exports = (string, testString = string) => {
	const indent = minIndent(testString);

	if (indent === 0) {
		return string;
	}

	const regex = new RegExp(`^[ \\t]{${indent}}`, 'gm');

	return string.replace(regex, '');
};
