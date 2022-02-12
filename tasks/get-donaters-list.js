const { task } = require("hardhat/config");
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

task("getDonatersList", "getting a list of those who made donations")
    .setAction(async function (hre) {
        const donat = await hre.ethers.getContractAt("Donat", process.env.ADDR_CONTRACT);
        const donaters = await donat.getDonatersList();
        console.log('donors:', donaters);
    });