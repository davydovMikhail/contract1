const { task } = require("hardhat/config");
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

task("addressTotal", "amount donated by a particular user")
    .addParam("account", "transfer of a certain amount to a certain address")
    .setAction(async function (taskArgs, hre) {

        const donat = await hre.ethers.getContractAt("Donat", process.env.ADDR_CONTRACT);
        const amount = await donat.addressTotal(taskArgs.account);
        console.log(`${taskArgs.account} donated ${amount} ether`);
    });