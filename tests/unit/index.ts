import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';

import index from '../../src/index';

registerSuite({
	name: 'index',

	basic() {
		assert(index);
	}
});
