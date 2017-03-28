export interface MyAwesomeClassOptions {
	/**
	 * The name of the instance
	 */
	name: string;

	/**
	 * The type of the instance
	 */
	type: 'foo' | 'bar' | 'baz';

	/**
	 * Should this be enabled or not?  Defaults to `true`.
	 */
	enable?: boolean;
}

export default class MyAwesomeClass {
	private _foo: string;
	private _options: MyAwesomeClassOptions;

	public get foo() {
		return this._foo;
	}

	constructor(options: MyAwesomeClassOptions) {
		this._foo = 'bar';

		// EXAMPLE: Using future functionality versus syntax
		this._options = options;
	}
}
