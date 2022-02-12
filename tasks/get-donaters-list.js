const { task } = require("hardhat/config");
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

task("getDonatersList", "getting a list of those who made donations")
    .setAction(async function (taskArgs, hre) {
        const donat = await hre.ethers.getContractAt("Donat", process.env.ADDR_CONTRACT);
        try {
            const donaters = await donat.getDonatersList();
            console.log('donors:', donaters);
        } catch (e) {
            console.log('error', e);
        }
    });