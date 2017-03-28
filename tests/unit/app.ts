import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';

import index from '../../src/app';

registerSuite({
	name: 'index',

	basic() {
		assert(index);
	}
});
