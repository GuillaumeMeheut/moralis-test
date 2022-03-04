pragma solidity >=0.7.0 <0.9.0;

contract Wallet {
    struct wallet {
        uint256 balance;
        uint256 nbPayments;
    }

    mapping(address => wallet) Wallets;

    function getBalance() public view returns (uint256) {
        return Wallets[msg.sender].balance;
    }

    function getNbPayments() public view returns (uint256) {
        return Wallets[msg.sender].nbPayments;
    }

    function getTotalBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function withdrawAllMoney(address payable _to) public {
        uint256 _amount = Wallets[msg.sender].balance;
        Wallets[msg.sender].balance = 0;
        _to.transfer(_amount);
    }

    receive() external payable {
        Wallets[msg.sender].balance += msg.value;
        Wallets[msg.sender].nbPayments++;
    }
}
