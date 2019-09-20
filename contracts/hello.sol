pragma solidity >=0.5.11;

contract Hello {
    string public message;
    constructor(string memory initialMessage) public {
        message = initialMessage;
    }
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
    function getMessage() public view returns (string memory) {
        return message;
    }
}