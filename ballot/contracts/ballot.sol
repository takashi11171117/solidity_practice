pragma solidity >=0.5.11;

contract Campaign {
    address public manager;
    uint public minimumContribution;
    address[] public approvers;

    constructor(uint minimum) public {
        manager = msg.sender;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(
            msg.value > minimumContribution,
            "paying is not over minimum"
        );

        approvers.push(msg.sender);
    }
}