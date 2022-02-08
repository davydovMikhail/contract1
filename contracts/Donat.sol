// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Donat is Ownable {
    address[] donaters;

    mapping(address => uint256) public donaterToDonation;

    function donate() external payable {
        require(msg.value > 0, "donation must be greater than zero");

        if (donaterToDonation[msg.sender] == 0) {
            donaters.push(msg.sender);
        }
        donaterToDonation[msg.sender] += msg.value;
    }

    function withdrawDonations(address _recipient, uint256 _amount)
        external
        onlyOwner
    {
        require(
            _amount <= address(this).balance,
            "the amount must be less than or equal to the balance"
        );
        payable(_recipient).transfer(_amount);
    }

    function getDonatersList() external view returns (address[] memory) {
        return donaters;
    }

    function addressTotal(address _address) external view returns (uint256) {
        return donaterToDonation[_address];
    }
}
