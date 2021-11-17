/** @type {import('@sveltejs/kit').Config} */

// import adapter from '@sveltejs/adapter-static';

// const dev = process.env.NODE_ENV === 'development';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		/*
		// set base path for deployment
		paths: {
			base: dev ? '' : '/dev2',
		},
		// static adapter for deployment
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
		}),
		*/
	},
};

export default config;
