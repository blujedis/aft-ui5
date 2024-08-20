/* eslint-disable @typescript-eslint/no-explicit-any */

import { Eta } from 'eta';
import { readFileSync, readdirSync, writeFileSync, unlinkSync } from 'fs';

type ConfValue = string | number;
type ConfValueArg = ConfValue | [ConfValue, ConfValue];

const views = './src/lib/theme';
const output = './src/lib/theme/types.ts';

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

export function getDirs(...exclude: string[]) {
	return readdirSync('./src/lib/components', { withFileTypes: true })
		.filter(dirent => dirent.isDirectory() && !exclude.includes(dirent.name))
		.map(dirent => "'" + dirent.name + "'");
}

export function normalizeTuple(key: string, tuple: (string | number)[], parent: Record<string, any>) {
	let name = key.replace(/H$/, '');
	parent = parent || {};
	if (tuple.length === 1) {
		// array provided with only first element get parent if exists or fallback first index.
		tuple = [tuple[0], parent[key] || tuple[0]];
	}
	// get the normalized color name for light/dark this is always "frame"
	name = ['light', 'dark', 'lightH', 'darkH'].includes(key) ? 'frame' : key.replace(/H$/, '');
	name = ['white', 'whiteH', 'black', 'blackH'].includes(key) ? '' : name;
	tuple = tuple.map(v => {
		if (!name.length) return v; // white or black which requires color or color and value.
		const cleaned = (v + '').split('-').filter(n => n !== name).join('-');
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
			conf[k] = (typeof val === 'string' ? [conf[val] || {}] : val).reduce((a, c, i) => {
				if (typeof c === 'string') {
					if (i === 0)
						a.parent = conf[c]; // save parent tokens are merged from.
					c = conf[c] || {};
				}
				a = { ...a, ...c };
				return a;
			}, {} as Record<string, any>) as Record<string, any>;

		}
	});
	keys.forEach(key => {
		const map = { ...placeholderBuild, ...conf[key] } as Record<string, string | number | (string | number)[]>;

		// eslint-disable-next-line prefer-const
		let { base, baseH, parent, ...clean } = map;
		base = !Array.isArray(map.base) ? [map.base, map.base] : map.base;
		baseH = !Array.isArray(map.baseH) ? [map.baseH, map.baseH] : map.baseH;

		// eslint-disable-next-line prefer-const
		for (let [k, v] of Object.entries(clean)) {
			if (v === '')  // empty placeholder string update from base.
				v = /H$/.test(k) ? baseH : base;
			if (!Array.isArray(v))
				v = [v, v];
			clean[k] = normalizeTuple(k, v, parent as Record<string, any>);
		}
		conf[key] = clean as Record<string, [string, string]>;
	});

	return conf; // merge w/ placeholder ensure all keys are present.
}

export function buildTokens() {

	const confStr = readFileSync('./tokens.json').toString();
	const conf = normalize(JSON.parse(confStr)) as Record<string, Record<string, ConfValueArg>> & {
		$components: any
	};
	conf.$components = `[${getDirs('colormode', 'conditional').join(', ')}];\n`;


	const eta = new Eta({
		views,
		defaultExtension: 'ts',
		varName: 'i',
		tags: ['{{', '}}']
	});

	const res = eta.render('./types.src.eta', conf);

	unlinkSync(output);
	writeFileSync(output, res);

	if (import.meta.hot) {
		import.meta.hot.on('vite:beforeFullReload', () => {
			console.log('>>>>>>>>>>>>>>>>>>>>>> needs restart <<<<<<<<<<<<<<<<<<<<<');
		});
	}

}
