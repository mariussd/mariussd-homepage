module.exports = {
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': [
		'plugin:react/recommended'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true,
			'tsx': true
		},
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		'indent': [
			'warn',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
	}
};