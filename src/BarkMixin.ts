import MyAwesomeClass from './MyAwesomeClass';

export interface Constructor<T> {
	new (...args: any[]): T;
	prototype: T;
}

export interface BarkMixin {
	bark(): string;
}

export default function BarkMixin<T extends Constructor<MyAwesomeClass>>(base: T): T & Constructor<BarkMixin> {
	return class extends base {
		bark() {
			return 'bark';
		}
	};
};
