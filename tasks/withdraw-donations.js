const { task } = require("hardhat/config");
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

task("withdrawDonations", "adds new minter from owner account")
    .addParam("account", "transfer of a certain amount to a certain address")
    .addParam("amount", "transfer amount to beneficiary's address")
    .setAction(async function (taskArgs, hre) {

        const donat = await hre.ethers.getContractAt("Donat", process.env.ADDR_CONTRACT);
        donat.withdrawDonations(taskArgs.account, taskArgs.amount);
        console.log('withdrawDonations Done!');
    });