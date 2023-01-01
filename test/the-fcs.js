const TheFunixCryptoSim = artifacts.require("TheFunixCryptoSim");

contract("TheFunixCryptoSim", function (/* accounts */) {
  let instance;

  before(async function () {
    instance = await TheFunixCryptoSim.deployed();
  });

  describe("Contract", function () {
    it("should deployed", function () {
      return assert.isTrue(instance !== undefined);
    });
  });

  // *** Start Code here ***

  // *** End Code here ***
});
