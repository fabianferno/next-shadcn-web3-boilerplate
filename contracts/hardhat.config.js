require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-etherscan");
// require("@nomicfoundation/hardhat-verify");

require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
    optimism_sepolia: {
      url: `https://opt-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  // etherscan: {
  //   apiKey: {
  //     sepolia: process.env.ETHERSCAN_API_KEY,
  //     openCampusCodex: process.env.OPENCAMPUS_CODEX_API_KEY,
  //   },
  //   customChains: [
  //     {
  //       network: "openCampusCodex",
  //       chainId: 656476,
  //       urls: {
  //         apiURL: "https://opencampus-codex.blockscout.com/api",
  //         browserURL: "https://opencampus-codex.blockscout.com",
  //       },
  //     },
  //   ],
  // },
};
