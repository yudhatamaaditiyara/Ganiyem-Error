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
const {Error, RuntimeError, IllegalParameterError} = require('../../');

describe('IllegalParameterError', () => {
  it('must be instanceof Error', () => {
    let error = new IllegalParameterError();
    assert.ok(error instanceof Error);
  });

  it('must be instanceof Throwable', () => {
    let error = new IllegalParameterError();
    assert.ok(error instanceof Throwable);
  });

  it('must be instanceof RuntimeError', () => {
    let error = new IllegalParameterError();
    assert.ok(error instanceof RuntimeError);
  });

  it('must be new IllegalParameterError().name === "IllegalParameterError"', () => {
    let error = new IllegalParameterError();
    assert.strictEqual(error.name, 'IllegalParameterError');
  });

  it('must be new IllegalParameterError().message === ""', () => {
    let error = new IllegalParameterError();
    assert.strictEqual(error.message, '');
  });

  it('must be new IllegalParameterError(null).message === "null"', () => {
    let error = new IllegalParameterError(null);
    assert.strictEqual(error.message, 'null');
  });

  it('must be new IllegalParameterError(undefined).message === ""', () => {
    let error = new IllegalParameterError(undefined);
    assert.strictEqual(error.message, '');
  });

  it('must be new IllegalParameterError(123).message === "123"', () => {
    let error = new IllegalParameterError(123);
    assert.strictEqual(error.message, '123');
  });

  it('must be new IllegalParameterError("foo").message === "foo"', () => {
    let error = new IllegalParameterError('foo');
    assert.strictEqual(error.message, 'foo');
  });
});