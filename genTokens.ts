// import { relative } from 'path';
import { writeFileSync } from 'fs';
import { Eta } from 'eta';
import { readFileSync } from 'fs';

type ConfValue = string | number;
type ConfValueArg = ConfValue | [ConfValue, ConfValue];

const views = './src/lib/theme';
const output = './src/lib/theme/types.example.ts';

function normalize(conf: Record<string, Record<string, ConfValueArg>>) {
	Object.keys(conf).forEach(key => {
		const map = conf[key];
		for (const [k, v] of Object.entries(map)) {
			if (!Array.isArray(v))
				map[k] = [v, v];
		}
		conf[key] = map;
	});
	return conf;
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
