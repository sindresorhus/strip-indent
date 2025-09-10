import minIndent from 'min-indent';

export default function stripIndent(string) {
	const indent = minIndent(string);

	if (indent === 0) {
		return string;
	}

	const regex = new RegExp(`^[ \\t]{${indent}}`, 'gm');

	return string.replace(regex, '');
}

stripIndent.trimmed = string => {
	// Remove leading and trailing lines that contain only whitespace
	const trimmed = string.replace(/^[ \t]*[\r\n]+/, '').replace(/[\r\n]+[ \t]*$/, '');
	return stripIndent(trimmed);
};
