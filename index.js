'use strict';
const minIndent = require('min-indent');

module.exports = str => {
	const indent = minIndent(str);

	if (indent === 0) {
		return str;
	}

	const re = new RegExp(`^[ \\t]{${indent}}`, 'gm');

	return str.replace(re, '');
};
