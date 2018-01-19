import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';
import Cat from './production/cat';

describe('Cat', () => {
  let tama;

  beforeEach(() => {
    tama = new Cat('tama');
  });

  describe("greet()", () => {
    it("挨拶をする", () => {
      expect(tama.greet()).to.equal('...');
    });
  });
});
