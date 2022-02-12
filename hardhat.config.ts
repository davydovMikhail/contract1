import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-web3";
import "ts-node";
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
import "solidity-coverage"
require("./tasks")

const { API_URL, PRIVATE_KEY } = process.env;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
