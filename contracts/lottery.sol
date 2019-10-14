pragma solidity >=0.5.11;

contract Lottery {
    address public manager;
    address[] public players;

    constructor() public {
        manager = msg.sender;
    }

    function enter() public payable {
        require(
            msg.value > .01 ether,
            "Sender not authorized."
        );

        players.push(msg.sender);
    }
}