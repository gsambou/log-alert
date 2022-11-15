#!/usr/bin/env node
/**
 * CLI log-alerts
 * CLI Alerts with colors
 * Alerts: `success`, `info`, `warning`, `error`
 *
 * @author gsambou <https://twitter.com/gsdotdev/>
 */

const RESET = '\u001b[0m';

const SYMBOLS = {
	success: '\u001b[38;5;76;1m\u2714',
	warning: '\u001b[38;5;220;1m\u26A0',
	info: '\u001b[38;5;75;1m\u2139',
	error: '\u001b[38;5;196;1m\u2A2F',
};

const COLORS = {
	success: {
		back: '\u001b[48;5;76;1m',
		text: '\u001b[38;5;76;2m',
	},
	warning: {
		back: '\u001b[48;5;220;1m',
		text: '\u001b[38;5;220;2m',
	},
	info: {
		back: '\u001b[48;5;75;1m',
		text: '\u001b[38;5;75;2m',
	},
	error: {
		back: '\u001b[48;5;196;1m',
		text: '\u001b[38;5;196;2m',
	},
	text: '\u001b[38;5;18;1m',
};

const log = (type, msg, name) => {
	name = name ? name : type;
	console.log(
		`\n ${SYMBOLS[type]} ${COLORS[type]?.back} ${COLORS.text} ${name.toUpperCase()} ${RESET} ${
			COLORS[type].text
		} ${msg} ${RESET}\n`
	);
};

const errorChecking = (type, msg, name) => {
	if (!Object.keys(SYMBOLS).includes(type?.toLowerCase())) {
		type = 'error';
		msg = 'You provided an invalid type';
	}
	return { type, msg, name };
};

const logger = (type, msg, name) => {
	const data = errorChecking(type, msg, name);

	log(data.type, data.msg, data.name);
};

module.exports = (...args) => {
	if (args.length === 1 && args[0] instanceof Object) {
		let { type, msg, name } = args[0];
		logger(type, msg, name);
	} else {
		let [type, msg, name] = args;
		logger(type, msg, name);
	}
};
