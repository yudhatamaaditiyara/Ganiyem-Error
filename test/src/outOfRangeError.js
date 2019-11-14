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

describe('OutOfRangeError', () => {
  it('must be instanceof Error', () => {
    let error = new OutOfRangeError();
    assert.ok(error instanceof Error);
  });

  it('must be instanceof Throwable', () => {
    let error = new OutOfRangeError();
    assert.ok(error instanceof Throwable);
  });

  it('must be instanceof RuntimeError', () => {
    let error = new OutOfRangeError();
    assert.ok(error instanceof RuntimeError);
  });

  it('must be new OutOfRangeError().name === "OutOfRangeError"', () => {
    let error = new OutOfRangeError();
    assert.strictEqual(error.name, 'OutOfRangeError');
  });

  it('must be new OutOfRangeError().message === ""', () => {
    let error = new OutOfRangeError();
    assert.strictEqual(error.message, '');
  });

  it('must be new OutOfRangeError(null).message === "null"', () => {
    let error = new OutOfRangeError(null);
    assert.strictEqual(error.message, 'null');
  });

  it('must be new OutOfRangeError(undefined).message === ""', () => {
    let error = new OutOfRangeError(undefined);
    assert.strictEqual(error.message, '');
  });

  it('must be new OutOfRangeError(123).message === "123"', () => {
    let error = new OutOfRangeError(123);
    assert.strictEqual(error.message, '123');
  });

  it('must be new OutOfRangeError("foo").message === "foo"', () => {
    let error = new OutOfRangeError('foo');
    assert.strictEqual(error.message, 'foo');
  });
});