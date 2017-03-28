declare module 'intern/lib/reporters/Runner' {
	import Collector = require('istanbul/lib/collector');
	import * as Reporter from 'istanbul/lib/report/text-summary';
	import * as DetailedReporter from 'istanbul/lib/report/text';
	import * as Suite from 'intern/lib/Suite';
	import * as Test from 'intern/lib/Test';

	class Runner {
		protected sessions: { [sessionId: string]: any };
		protected hasErrors: boolean;
		protected proxyOnly: boolean;
		protected reporter: Reporter;
		protected detailedReporter: DetailedReporter;
		protected charm: any;

		constructor(config?: object);

		coverage(sessionId: string, coverage: Collector): void;
		deprecated(name: string, replacement?: string, extra?: string): void;
		fatalError(error: Error): void;
		proxyStart(proxy: any): void;
		reporterError(reporter: any, error: Error): void;
		runEnd(): void;
		suiteEnd(suite: Suite): void;
		suiteError(suite: Suite): void;
		suiteStart(suite: Suite): void;
		testFail(test: Test): void;
		testPass(test: Test): void;
		testSkip(test: Test): void;
		tunnelDownloadProgress(tunnel: any, progress: any): void;
		tunnelStart(): void;
		tunnelStatus(tunnel: any, status: string): void;
	}

	module Runner { }

	export = Runner;
}

declare module 'intern/lib/util' {
	import Promise = require('dojo/Promise');

	export function serialize(object: object): string;
	export function isAbsoluteUrl(url: string): boolean;
	export function assertSafeModuleId(moduleId: string): void;
	export function isGlobModuleId(moduleId: string): boolean;
	export function createDeferred(): Promise.Deferred<any>;
	export function createQueue(maxConcurrency: number): (callee: (...args: any[]) => any) => (() => any);
	export function escapeRegExp(str: string): string;
	export function getErrorMessage(err: any): string;
	export function getModule(moduleId: string, loader?: any): Promise<any>;
	export function getModules(moduleIds: string[], loader?: any): Promise<any[]>;
	export function getShouldWait(waitMode: 'fail' | true | string[], message: string[]): boolean;
	export function normalizePath(path: string): string;
	export function normalizePathForInstrumentation(filename: string): string;
	export function resolveModuleIds(moduleIds: string[]): string[];
	export function retry<T>(callback: (...args: any[]) => Promise<T>, numRetries: number): Promise<T>;
	export function setInstrumentationHooks(excludeInstrumentation: string, basePath: string, instrumenterOptions: any): { remove: () => void };
	export function instrument(filedata: string, filepath: string, instrumenterOptions: any): string;
}

declare module 'istanbul/lib/collector' {
	class Collector {
		add(coverage: any): void;
		files(): string[];
	}

	module Collector { }

	export = Collector;
}

declare module 'istanbul/lib/report/json' {
	import Collector = require('istanbul/lib/collector');
	class JsonReporter {
		constructor(options: any);

		writeReport(collector: Collector, sync: boolean): void;
	}

	module JsonReporter { }

	export = JsonReporter;
}

declare module 'istanbul/lib/report/text' {
	import Collector = require('istanbul/lib/collector');
	class Reporter {
		constructor(options: any);

		writeReport(collector: Collector, sync: boolean): void;
	}

	module Reporter { }

	export = Reporter;
}

declare module 'istanbul/lib/report/text-summary' {
	import Collector = require('istanbul/lib/collector');
	class Reporter {
		constructor(options: any);

		writeReport(collector: Collector, sync?: boolean): void;
	}

	module Reporter { }

	export = Reporter;
}

declare module 'istanbul/lib/store/memory' {
	class MemoryStore {
		set(key: string, contents: any): void;
		get(key: string): any;
		hasKey(key: string): boolean;
		keys(): string[];
		dispose(): void;

		static TYPE: string;
	}

	module MemoryStore {}

	export = MemoryStore;
}

declare module 'istanbul/lib/instrumenter' {
	class Instrumenter {
		constructor(options?: any);

		instrumentSync(code: string, path: string): string;
		lastFileCoverage(): any;
	}

	module Instrumenter { }

	export = Instrumenter;
}
