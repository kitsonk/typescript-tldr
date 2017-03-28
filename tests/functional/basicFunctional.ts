import * as registerSuite from 'intern!object';
import pollUntil = require('intern/dojo/node!leadfoot/helpers/pollUntil');

registerSuite({
	name: 'basicFunctional',

	'loading the index'(this: any) {
		return this.remote
			.get((<any> require).toUrl('../../src/'))
			.then(pollUntil(() => {
				const message = document.getElementById('message');
				return message && message.innerHTML === 'Hello World!';
			}, [], 5000, 250));
	}
});
