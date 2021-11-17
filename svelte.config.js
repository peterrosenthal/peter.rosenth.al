import fs from 'fs';
import path from 'path';
import adapter from '@sveltejs/adapter-static';

const { kitprops } = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const dev = process.env.NODE_ENV === 'development';
const dir = kitprops ? kitprops.subdirectory : '';
const prefix = dir.startsWith('/') ? '' : '/';
const base = dev || !dir ? '' : `${prefix}${dir}`;

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		// set base path for deployment
		paths: { base },
		// static adapter for deployment
		adapter: adapter(),
		// config for path aliases
		vite: {
			resolve: {
				alias: {
					'$components': path.resolve('./src/components'),
					'$data': path.resolve('./src/data'),
				},
			},
		},
	},
};

export default config;
