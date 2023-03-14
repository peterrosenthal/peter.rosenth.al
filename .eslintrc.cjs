module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'camelcase': 'error',
		'comma-dangle': ['error', 'always-multiline'],
		'comma-spacing': 'error',
		'eol-last': ['error', 'always'],
		'eqeqeq': ['error', 'smart'],
		'func-style': ['error', 'declaration'],
		'indent': ['error', 2, { 'ShiftCase': 1 }],
		'linebreak-style': ['error', 'unix'],
		'max-len': [
			'error',
			{
				code: 95,
				ignoreComments: false,
				ignoreStrings: false,
				ignoreTemplateLiterals: false,
				ignoreUrls: true,
			},
		],
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
		'space-in-parens': ['error', 'never'],
	},
};
