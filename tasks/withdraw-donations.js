const { task } = require("hardhat/config");
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

task("withdrawDonations", "transfer a certain amount to a certain address")
    .addParam("account", "transfer of a certain amount to a certain address")
    .addParam("amount", "transfer amount to beneficiary's address")
    .setAction(async function (taskArgs, hre) {

        const donat = await hre.ethers.getContractAt("Donat", process.env.ADDR_CONTRACT);
        try {
            await donat.withdrawDonations(taskArgs.account, web3.utils.toWei(taskArgs.amount, 'ether'));
            console.log('withdrawDonations Done!');
        } catch (e) {
            console.log('error', e);
        }
    });