export const proxyPort = 9000;
export const proxyUrl = 'http://localhost:9000/';

export const capabilities = {
	project: 'TypeScript TL;DR',
	name: 'typescript-tldr'
};

export const loaders = {
	'host-browser': 'node_modules/@dojo/loader/loader.js',
	'host-node': '@dojo/loader'
};

export const loaderOptions = {
	packages: [
		{ name: 'src', location: 'build/src' },
		{ name: 'tests', location: 'build/tests' }
	]
};

export const suites = [ 'tests/unit/all' ];

export const functionalSuites = [ 'tests/functional/all' ];

export const excludeInstrumentation = /(?:node_modules|tests)/;
