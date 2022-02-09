import "@nomiclabs/hardhat-waffle";
import "ts-node";
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
import "solidity-coverage"

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
