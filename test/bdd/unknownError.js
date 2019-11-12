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
const {Error, UnknownError} = require('../../');

describe('UnknownError', () => {
  it('must be instanceof Error', () => {
    let error = new UnknownError();
    assert.ok(error instanceof Error);
  });

  it('must be instance of Throwable', () => {
    let error = new UnknownError();
    assert.ok(error instanceof Throwable);
  });

  it('must be new UnknownError().name === "UnknownError"', () => {
    let error = new UnknownError();
    assert.strictEqual(error.name, 'UnknownError');
  });

  it('must be new UnknownError().message === ""', () => {
    let error = new UnknownError();
    assert.strictEqual(error.message, '');
  });

  it('must be new UnknownError(null).message === "null"', () => {
    let error = new UnknownError(null);
    assert.strictEqual(error.message, 'null');
  });

  it('must be new UnknownError(undefined).message === ""', () => {
    let error = new UnknownError(undefined);
    assert.strictEqual(error.message, '');
  });

  it('must be new UnknownError(123).message === "123"', () => {
    let error = new UnknownError(123);
    assert.strictEqual(error.message, '123');
  });

  it('must be new UnknownError("foo").message === "foo"', () => {
    let error = new UnknownError('foo');
    assert.strictEqual(error.message, 'foo');
  });
});