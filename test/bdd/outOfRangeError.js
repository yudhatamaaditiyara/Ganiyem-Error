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
const assert = require('assert');
const Throwable = require('ganiyem-util-throwable');
const {Error, RuntimeError, OutOfRangeError} = require('../../');

/**
 */
describe('outOfRangeError', () => {
	/**
	 */
	it('instance of Error', () => {
		let error = new OutOfRangeError();
		assert.ok(error instanceof Error);
	});

	/**
	 */
	it('instance of Throwable', () => {
		let error = new OutOfRangeError();
		assert.ok(error instanceof Throwable);
	});

	/**
	 */
	it('instance of RuntimeError', () => {
		let error = new OutOfRangeError();
		assert.ok(error instanceof RuntimeError);
	});
	
	/**
	 */
	it('new OutOfRangeError().name === "OutOfRangeError"', () => {
		let error = new OutOfRangeError();
		assert.strictEqual(error.name, 'OutOfRangeError');
	});

	/**
	 */
	it('new OutOfRangeError().message === ""', () => {
		let error = new OutOfRangeError();
		assert.strictEqual(error.message, '');
	});

	/**
	 */
	it('new OutOfRangeError(null).message === "null"', () => {
		let error = new OutOfRangeError(null);
		assert.strictEqual(error.message, 'null');
	});

	/**
	 */
	it('new OutOfRangeError(undefined).message === ""', () => {
		let error = new OutOfRangeError(undefined);
		assert.strictEqual(error.message, '');
	});

	/**
	 */
	it('new OutOfRangeError(123).message === "123"', () => {
		let error = new OutOfRangeError(123);
		assert.strictEqual(error.message, '123');
	});

	/**
	 */
	it('new OutOfRangeError("foo").message === "foo"', () => {
		let error = new OutOfRangeError('foo');
		assert.strictEqual(error.message, 'foo');
	});
});