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
const {Error, RuntimeError, IllegalArgumentError} = require("../../");

/**
 */
describe("illegalArgumentError", () => {
	/**
	 */
	it("instance of Error", () => {
		let error = new IllegalArgumentError();
		assert.ok(error instanceof Error);
	});

	/**
	 */
	it("instance of Throwable", () => {
		let error = new IllegalArgumentError();
		assert.ok(error instanceof Throwable);
	});

	/**
	 */
	it("instance of RuntimeError", () => {
		let error = new IllegalArgumentError();
		assert.ok(error instanceof RuntimeError);
	});
	
	/**
	 */
	it("new IllegalArgumentError().name === 'IllegalArgumentError'", () => {
		let error = new IllegalArgumentError();
		assert.strictEqual(error.name, "IllegalArgumentError");
	});

	/**
	 */
	it("new IllegalArgumentError().message === ''", () => {
		let error = new IllegalArgumentError();
		assert.strictEqual(error.message, "");
	});

	/**
	 */
	it("new IllegalArgumentError(null).message === 'null'", () => {
		let error = new IllegalArgumentError(null);
		assert.strictEqual(error.message, "null");
	});

	/**
	 */
	it("new IllegalArgumentError(undefined).message === ''", () => {
		let error = new IllegalArgumentError(undefined);
		assert.strictEqual(error.message, "");
	});

	/**
	 */
	it("new IllegalArgumentError(123).message === '123'", () => {
		let error = new IllegalArgumentError(123);
		assert.strictEqual(error.message, "123");
	});

	/**
	 */
	it("new IllegalArgumentError('Foo').message === 'Foo'", () => {
		let error = new IllegalArgumentError("Foo");
		assert.strictEqual(error.message, "Foo");
	});
});