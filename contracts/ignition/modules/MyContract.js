const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("MyContractModule", (m) => {
  const myContract = m.contract("MyContract", []);

  return { myContract };
});
