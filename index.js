import minIndent from 'min-indent';

export default function stripIndent(string) {
	const indent = minIndent(string);

	if (indent === 0) {
		return string;
	}

	const regex = new RegExp(`^[ \\t]{${indent}}`, 'gm');

	return string.replace(regex, '');
}

export function dedent(string) {
	// Remove all leading and trailing whitespace-only lines
	const trimmed = string.replace(/^(?:[ \t]*\r?\n)+|(?:\r?\n[ \t]*)+$/g, '');
	return stripIndent(trimmed);
}
