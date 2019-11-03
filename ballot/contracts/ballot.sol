pragma solidity >=0.5.11;

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    address[] public approvers;

    modifier restricted() {
        require(
            msg.sender == manager,
            "required manager"
        );
        _;
    }

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