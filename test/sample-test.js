const { expect } = require("chai");
const { ethers } = require("hardhat");
// import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
const { SignerWithAddress } = require("@nomiclabs/hardhat-ethers/signers");
// import { Contract } from "hardhat/internal/hardhat-network/stack-traces/model";
const { Contract } = require("ethers");
const { parseEther } = require("ethers/lib/utils");

let donat = Contract;
let owner = SignerWithAddress;
let user1 = SignerWithAddress;
// let donat: Contract, owner: SignerWithAddress, user1: SignerWithAddress

describe("Donat tests", function () {
  beforeEach(async() => {
    [owner, user1] = await ethers.getSigners()
    let donatF = await ethers.getContractFactory("Donat")
    donat = await donatF.connect(owner).deploy()
  })

  describe("donate method", () => {
    it("should forbid to donate 0 eth", async() => {
      await expect(donat.donate({value: 0})).to.be.revertedWith("donation must be greater than zero")
    })

    it("should decrease user balance", async() => {
      let donationAmount = parseEther("1111.1111")

      let balanceBefore = await user1.getBalance()
      await donat.connect(user1).donate({value: donationAmount})
      let balanceAfter = await user1.getBalance()

      expect(balanceAfter).to.be.closeTo(balanceBefore.sub(donationAmount), 1e15)
      expect(await donat.donaterToDonation(user1.address))
        .to.be.closeTo(balanceBefore.sub(balanceAfter), 1e15)
    })

    it("should add donater to list only once", async () => {
      expect((await donat.getDonatersList()).length).eq(0)
      await donat.connect(user1).donate({value: 123})
      await donat.connect(user1).donate({value: 123})
      expect((await donat.getDonatersList()).length).eq(1)
      expect((await donat.getDonatersList())[0]).eq(user1.address)
      expect(await donat.donaterToDonation(user1.address)).eq(246)
    })
  })

  describe("withdraw method", () => {
    it("balances should be changed", async () => {
      let donationAmount = parseEther("1111.1111")
      await donat.connect(user1).donate({value: donationAmount})
      await donat.connect(user1).donate({value: donationAmount})
      
      let balanceBeforeOwner = await owner.getBalance()
      await donat.connect(owner).withdrawDonations(owner.address)
      let balanceAfterOwner = await owner.getBalance()
      
      expect(balanceAfterOwner.sub(balanceBeforeOwner)).closeTo(donationAmount.mul(2), 1e15)
    })
  })
});
