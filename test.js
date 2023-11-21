const user = require("./src/controllers/user.controller")
const calculator = require("./src/controllers/mathametic")
const {expect} = require('expect');
describe("User Service Unit Tests", function () {
    describe("Save User functionality", function () {
      it("should successfully factorial functions.", async function () {
        expect(calculator.calculateFactorial(4)).toBe(24);   
      });
    });
  });