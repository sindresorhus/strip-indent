'use strict';
module.exports = str => {
	const match = str.match(/^[ \t]*(?=\S)/gm);

	if (!match) {
		return str;
	}

	// TODO: Use spread operator when targeting Node.js 6
	const indent = Math.min.apply(Math, match.map(x => x.length));
	const re = new RegExp(`^[ \\t]{${indent}}`, 'gm');

	return indent > 0 ? str.replace(re, '') : str;
};
