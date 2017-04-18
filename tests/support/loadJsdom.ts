import * as jsdom from 'jsdom';

/* In order to have the tests work under Node.js, we need to load JSDom and polyfill
 * requestAnimationFrame */

declare global {
	interface Window {
		CustomEvent: typeof CustomEvent;
	}
}

/* Create a basic document */
const doc = jsdom.jsdom(`
		<!DOCTYPE html>
		<html>
		<head></head>
		<body>
			<h1>TypeScript TL;DR</h1>
			<div id="message"></div>
			<button id="button1" name="button1" type="button">Click Me!</button>
		</body>
		<html>
	`, {
		/* direct the console of the document to the NodeJS console */
		virtualConsole: jsdom.createVirtualConsole().sendTo(console)
	});

/* Assign it to the global namespace */
(<any> global).document = doc;

/* Assign a global window as well */
(<any> global).window = doc.defaultView;

/* Needed for Pointer Event Polyfill's incorrect Element detection */
(<any> global).Element = function() {};

/* Patch feature detection of CSS Animations */
Object.defineProperty(
	(<any> window).CSSStyleDeclaration.prototype,
	'transition',
	Object.getOwnPropertyDescriptor((<any> window).CSSStyleDeclaration.prototype, 'webkitTransition')
);

/* Polyfill requestAnimationFrame - this can never be called an *actual* polyfill */
(<any> global).requestAnimationFrame = (cb: (...args: any[]) => {}) => {
	setImmediate(cb);
	// return something at least!
	return true;
};

(<any> global).cancelAnimationFrame = () => {};

export default doc;
