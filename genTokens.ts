/* eslint-disable @typescript-eslint/no-explicit-any */

import { writeFileSync } from 'fs';
import { Eta } from 'eta';
import { readFileSync } from 'fs';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import defaultTokens from './tokens.json';

type ConfValue = string | number;
type ConfValueArg = ConfValue | [ConfValue, ConfValue];

const views = './src/lib/theme';
const output = './src/lib/theme/types.ts';

const placeholder = {
	unstyled: '',
	primary: '',
	secondary: '',
	tertiary: '',
	danger: '',
	warning: '',
	success: '',
	info: '',
	light: '',
	dark: '',
	white: '',
	black: '',
};

/**
 * If undefined empty array is returned otherwise the array or value wrapped as array is.
 *
 * @param value the value to inspect as any array.
 * @param clean when true and is array clean any undefined.
 */
export function ensureArray<T = any>(value?: null | T | T[], clean = true) {
	if (typeof value === 'undefined' || value === null || value === '') return [] as T[];
	if (Array.isArray(value))
		return (clean ? value.filter((v) => typeof v !== 'undefined') : value) as T[];
	return [value] as T[];
}


function mergeConf(conf: Record<string, Record<string, ConfValueArg>>, val: string | (string | Record<string, any>)[]) {
	const arr = ensureArray(val);
	return arr.reduce((a, c) => {
		const obj = typeof c === 'string' || typeof c === 'number' ? conf[c] : c;
		a = { ...(a as Record<string, string>), ...obj };
		return a;
	}, {} as Record<string, any>) as Record<string, any>;
}

function normalize(conf: Record<string, Record<string, ConfValueArg>>) {
	const keys = Object.keys(conf);
	keys.forEach((k) => {
		const val = conf[k];
		// if (typeof val === 'string') {
		// 	conf[k] = conf[val]; // config value is mapped to another key's value.
		// }
		// else if (Array.isArray(val)) {
		// 	conf[k] = val.reduce((a, c) => {
		// 		a = { ...a, ...(conf[c] || {}) };
		// 		return a;
		// 	}, {} as Record<string, string>);
		// }
		// else 

		if (typeof val === 'string' || Array.isArray(val)) {
			conf[k] = mergeConf(conf, val);
		}

		else if (typeof val['$before'] === 'string' || Array.isArray(val['$before'])) {
			const obj = mergeConf(conf, val['$before'] as string | (string | Record<string, any>)[]);

		}
		else if (typeof val['$after'] === 'string' || Array.isArray(val['$after'])) {
			const obj = mergeConf(conf, val['$after'] as string | (string | Record<string, any>)[]);

		}
	});
	Object.keys(conf).forEach(key => {
		const map = conf[key];
		for (const [k, v] of Object.entries(map)) {
			if (!Array.isArray(v))
				map[k] = [v, v];
		}
		conf[key] = map;
	});

	return { ...placeholder, ...conf }; // merge w/ placeholder ensure all keys are present.
}

export function buildTokens() {

	const confStr = readFileSync('./tokens.json').toString();
	const conf = normalize(JSON.parse(confStr));

	const eta = new Eta({
		views,
		defaultExtension: 'ts',
		varName: 'i',
		tags: ['{{', '}}']
	});

	const res = eta.render('./types.src.ts', conf);

	writeFileSync(output, res);

	if (import.meta.hot) {
		import.meta.hot.on('vite:beforeFullReload', () => {
			console.log('>>>>>>>>>>>>>>>>>>>>>> needs restart <<<<<<<<<<<<<<<<<<<<<');
		});
	}

}
