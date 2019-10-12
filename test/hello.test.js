const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())
const { interface, object: bytecode } = require('../compile')

let accounts
let hello

beforeEach(async () => {
  accounts = await web3.eth.getAccounts()

  hello = await new web3.eth.Contract(interface)
    .deploy({ data: bytecode, arguments: ['Hello world!'] })
    .send({ from: accounts[0], gas: '1000000' })
})

describe('Hello', () => {
  it('deploys a contract', () => {
    assert.ok(hello.options.address)
  });
  it('has a default message', async () => {
    const message = await hello.methods.message().call();
    assert.equal(message, 'Hello world!');
  });
  it('can change the message', async () => {
    await hello.methods.setMessage('bye').send({ from: accounts[0] });
    const message = await hello.methods.message().call();
    assert.equal(message, 'bye');
  });
})