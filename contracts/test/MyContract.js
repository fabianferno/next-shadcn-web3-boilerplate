const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

describe("MyContract", function () {
  // We define a fixture to reuse the same setup in every test.
  async function deployMyContractFixture() {
    const [owner, otherAccount] = await ethers.getSigners(); // Contracts are deployed using the first signer/account by default

    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract = await MyContract.deploy();

    return { myContract, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { myContract } = await loadFixture(deployMyContractFixture);

      expect(await myContract.myFunction()).to.equal("Hello World");
    });
  });
});
