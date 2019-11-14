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
const {Error, AssertionError} = require('../../');

describe('AssertionError', () => {
  it('must be instanceof Error', () => {
    let error = new AssertionError();
    assert.ok(error instanceof Error);
  });

  it('must be instanceof Throwable', () => {
    let error = new AssertionError();
    assert.ok(error instanceof Throwable);
  });

  it('must be new AssertionError().name === "AssertionError"', () => {
    let error = new AssertionError();
    assert.strictEqual(error.name, 'AssertionError');
  });

  it('must be new AssertionError().message === ""', () => {
    let error = new AssertionError();
    assert.strictEqual(error.message, '');
  });

  it('must be new AssertionError(null).message === "null"', () => {
    let error = new AssertionError(null);
    assert.strictEqual(error.message, 'null');
  });

  it('must be new AssertionError(undefined).message === ""', () => {
    let error = new AssertionError(undefined);
    assert.strictEqual(error.message, '');
  });

  it('must be new AssertionError(123).message === "123"', () => {
    let error = new AssertionError(123);
    assert.strictEqual(error.message, '123');
  });

  it('must be new AssertionError("foo").message === "foo"', () => {
    let error = new AssertionError('foo');
    assert.strictEqual(error.message, 'foo');
  });
});