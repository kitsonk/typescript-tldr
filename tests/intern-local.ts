export * from './intern';

export const environments = [ { browserName: 'chrome' } ];

export const tunnel = 'SeleniumTunnel';
export const tunnelOptions = {
	hostname: 'localhost',
	port: '4444'
};
