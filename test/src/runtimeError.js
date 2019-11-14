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
const {Error, RuntimeError} = require('../../');

describe('RuntimeError', () => {
  it('instance of Error', () => {
    let error = new RuntimeError();
    assert.ok(error instanceof Error);
  });

  it('instance of Throwable', () => {
    let error = new RuntimeError();
    assert.ok(error instanceof Throwable);
  });

  it('new RuntimeError().name === "RuntimeError"', () => {
    let error = new RuntimeError();
    assert.strictEqual(error.name, 'RuntimeError');
  });

  it('new RuntimeError().message === ""', () => {
    let error = new RuntimeError();
    assert.strictEqual(error.message, '');
  });

  it('new RuntimeError(null).message === "null"', () => {
    let error = new RuntimeError(null);
    assert.strictEqual(error.message, 'null');
  });

  it('new RuntimeError(undefined).message === ""', () => {
    let error = new RuntimeError(undefined);
    assert.strictEqual(error.message, '');
  });

  it('new RuntimeError(123).message === "123"', () => {
    let error = new RuntimeError(123);
    assert.strictEqual(error.message, '123');
  });

  it('new RuntimeError("foo").message === "foo"', () => {
    let error = new RuntimeError('foo');
    assert.strictEqual(error.message, 'foo');
  });
});