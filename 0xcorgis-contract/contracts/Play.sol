//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Play {
    mapping(address => uint256) public balances;

    event Learn(address sender, uint256 amount);
    event Earn(address receiver, uint256 amount);

    function learn() public payable {
        emit Learn(msg.sender, msg.value);
        balances[msg.sender] += msg.value;
    }

    function earn(uint256 amount) public returns(bool success) {
        require(balances[msg.sender] >= amount, "Insufficient funds");
        emit Earn(msg.sender, amount);
        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount); 
        return success;
    }

    receive() external payable {}
}
