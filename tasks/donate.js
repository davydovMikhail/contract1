const { task } = require("hardhat/config");
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require("@nomiclabs/hardhat-web3");

task("donate", "sending a donation")
    .addParam("amount", "donation amount")
    .setAction(async function (taskArgs, hre) {
        const donat = await hre.ethers.getContractAt("Donat", process.env.ADDR_CONTRACT);
        try {
            await donat.donate({value: web3.utils.toWei(taskArgs.amount, 'ether')})
            console.log(`you donated ${taskArgs.amount} ethers`);
        } catch (e) {
            console.log('error',e)
        }
    });