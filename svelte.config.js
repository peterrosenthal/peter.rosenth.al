import fs from 'fs';
import path from 'path';
import vercel from '@sveltejs/adapter-vercel';

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
		// vercel adapter for deployment
		adapter: vercel(),
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
