'use strict';

const minIndent = require('min-indent');

module.exports = string => {
	const indent = minIndent(string);

	if (indent === 0) {
		return string;
	}

	const regExp = new RegExp(`^[ \\t]{${indent}}`, 'gm');

	return string.replace(regExp, '');
};
