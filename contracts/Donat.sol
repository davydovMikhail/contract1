// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";



contract Donat is Ownable {
    address[] donaters;
    // donater address => total donation
    mapping(address => uint256) public donaterToDonation;

    function donate() external payable {
        require(msg.value > 0, "donation must be greater than zero");

        if (donaterToDonation[msg.sender] == 0) {
            donaters.push(msg.sender);
        }
        donaterToDonation[msg.sender] += msg.value;
    }

    function withdrawDonations(address _recipient)
        external
        onlyOwner
    {
        payable(_recipient).transfer(address(this).balance);
    }

    function getDonatersList() external view returns (address[] memory) {
        return donaters;
    }
}
