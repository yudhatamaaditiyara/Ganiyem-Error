/**
 * Copyright (C) 2019 Yudha Tama Aditiyara
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const assert = require("assert");
const Throwable = require("ganiyem-util-throwable");
const {Error, UnknownError} = require("../../");

/**
 */
describe("unknownError", () => {
	/**
	 */
	it("instance of Error", () => {
		let error = new UnknownError();
		assert.ok(error instanceof Error);
	});

	/**
	 */
	it("instance of Throwable", () => {
		let error = new UnknownError();
		assert.ok(error instanceof Throwable);
	});
	
	/**
	 */
	it("new UnknownError().name === 'UnknownError'", () => {
		let error = new UnknownError();
		assert.strictEqual(error.name, "UnknownError");
	});

	/**
	 */
	it("new UnknownError().message === ''", () => {
		let error = new UnknownError();
		assert.strictEqual(error.message, "");
	});

	/**
	 */
	it("new UnknownError(null).message === 'null'", () => {
		let error = new UnknownError(null);
		assert.strictEqual(error.message, "null");
	});

	/**
	 */
	it("new UnknownError(undefined).message === ''", () => {
		let error = new UnknownError(undefined);
		assert.strictEqual(error.message, "");
	});

	/**
	 */
	it("new UnknownError(123).message === '123'", () => {
		let error = new UnknownError(123);
		assert.strictEqual(error.message, "123");
	});

	/**
	 */
	it("new UnknownError('Foo').message === 'Foo'", () => {
		let error = new UnknownError("Foo");
		assert.strictEqual(error.message, "Foo");
	});
});