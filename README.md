# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

test command sequence:

```shell
npm install
npx hardhat
npx hardhat compile
npx hardhat test
```

examples of tasks:

```shell
npx hardhat --network rinkeby donate --amount 1
npx hardhat --network rinkeby addressTotal --account 0x300E5986013b20C5167933A4023F4044DA90e823
npx hardhat --network rinkeby getDonatersList
npx hardhat --network rinkeby withdrawDonations --account 0x45633f99dA4bC7425e5996499aF8c977C321e190 --amount 1
```

.env example:

```shell
API_URL = "https://eth-rinkeby.alchemyapi.io/v2/alchemy-key"
PRIVATE_KEY = "private_key"
ADDR_CONTRACT = "0xB3486253f3208a4A5d6FDF2d5dD07Bfa806BFac2"
```

Contract address: 0xB3486253f3208a4A5d6FDF2d5dD07Bfa806BFac2
