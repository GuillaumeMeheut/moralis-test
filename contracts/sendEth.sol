pragma solidity >=0.7.0 <0.9.0;

contract SendETH {
    address lastSender;
    uint256 balance;

    function getLastSender() public view returns (address) {
        return lastSender;
    }

    function getBalance() public view returns (uint256) {
        return balance;
    }

    receive() external payable {
        lastSender = msg.sender;
        balance = balance + msg.value;
    }
}
