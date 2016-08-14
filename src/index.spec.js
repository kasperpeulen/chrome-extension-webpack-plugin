import {square} from './index';
import {expect} from 'chai';
import {describe, it} from 'mocha';

describe("square", () => {
  it("squares a number", () => {
    expect(square(3)).to.equal(9);
  });
});
