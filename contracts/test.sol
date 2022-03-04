pragma solidity >=0.7.0 <0.9.0;

contract Test {
    uint256 number;

    function setNumber(uint256 _number) public {
        number = _number;
    }

    function getNumber() public view returns (uint256) {
        return number;
    }
}
