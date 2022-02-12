const { task } = require("hardhat/config");
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require("@nomiclabs/hardhat-web3");

task("addressTotal", "amount donated by a particular user")
    .addParam("account", "transfer of a certain amount to a certain address")
    .setAction(async function (taskArgs, hre) {

        const donat = await hre.ethers.getContractAt("Donat", process.env.ADDR_CONTRACT);
        try {
            let amount = await donat.addressTotal(taskArgs.account);
            amount = web3.utils.fromWei(amount.toString(), 'ether')
            console.log(`${taskArgs.account} donated ${amount} ether`);
        } catch (e) {
            console.log('error', e);
        }
    });