pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/AccessControl.sol";

//

contract Donat is AccessControl {
    address[] donaters;
    // donater address => total donation
    mapping(address => uint256) public donaterToDonation;

    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function donate() external payable {
        require(msg.value > 0, "donation must be greater than zero");

        if (donaterToDonation[msg.sender] == 0) {
            donaters.push(msg.sender);
        }
        donaterToDonation[msg.sender] += msg.value;
    }

    function withdrawDonations(address _recipient)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        payable(_recipient).transfer(address(this).balance);
    }

    function getDonatersList() external view returns (address[] memory) {
        return donaters;
    }
}
