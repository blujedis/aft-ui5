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

// const colors = [
// 	unstyled,
// 	primary,
// 	secondary,
// 	tertiary,
// 	danger,
// 	warning,
// 	success,
// 	info,
// 	light,
// 	dark,
// 	white,
// 	black,
// ];

const placeholderBuild = {
	primary: '',
	primaryH: '',
	secondary: '',
	secondaryH: '',
	tertiary: '',
	tertiaryH: '',
	danger: '',
	dangerH: '',
	warning: '',
	warningH: '',
	success: '',
	successH: '',
	info: '',
	infoH: '',
	light: '',
	lightH: '',
	dark: '',
	darkH: '',
	white: '',
	whiteH: '',
	black: '',
	blackH: '',
};

export function normalizeTuple(key: string, tuple: (string | number)[]) {
	let name = key.replace(/H$/, '');
		// get the normalized color name for light/dark this is always "frame"
		name = ['light', 'dark', 'lightH', 'darkH'].includes(key) ? 'frame' : key.replace(/H$/, '');
		name = ['white', 'whiteH', 'black', 'blackH'].includes(key) ? '' : name;
		tuple = tuple.map(v => {
			if (!name.length) return v; // white or black which requires color or color and value.
			const cleaned = (v + '').split('-').filter(n => n!== name).join('-');
			if (/^\d+$/.test(cleaned) || /^\d+$/.test(cleaned.replace('/', '')))
				return `${name}-${cleaned}`;
			return cleaned;
		});
	 return tuple as [string, string];
}

function normalize(conf: Record<string, Record<string, ConfValueArg>>) {
	const keys = Object.keys(conf);
	keys.forEach((k) => {
		const val = conf[k];
		if (typeof val === 'string' || Array.isArray(val)) {
			conf[k] = (typeof val === 'string' ? [conf[val] || {}] : val)
				.reduce((a,c) => {
					if (typeof c === 'string')
						c = conf[c] || {};
					a = { ...a, ...c};
				return a;
			}, {} as Record<string, any>) as Record<string, any>;
		}
	});
	keys.forEach(key => {
		const map = { ...placeholderBuild, ...conf[key] } as Record<string, string | number | (string | number)[]>;

		// eslint-disable-next-line prefer-const
		let { base, baseH, ...clean } = map;
		base = !Array.isArray(map.base) ? [map.base, map.base] : map.base;
		baseH = !Array.isArray(map.baseH) ? [map.baseH, map.baseH] : map.baseH;
		
		// eslint-disable-next-line prefer-const
		for (let [k, v] of Object.entries(clean)) {
			if (v === '')  // empty placeholder string update from base.
				v  = /H$/.test(k) ? baseH : base;
			if (!Array.isArray(v))
				v = [v, v];
			clean[k] =normalizeTuple(k, v);
		}
		conf[key] = clean as Record<string, [string, string]>;
	});

	return conf; // merge w/ placeholder ensure all keys are present.
}

export function buildTokens() {

	const confStr = readFileSync('./tokens.json').toString();
	const conf = normalize(JSON.parse(confStr));

	console.log(conf);

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
