const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, object: bytecode } = require('./compile')
require('dotenv').config();

const provider = new HDWalletProvider(
  process.env.ACCOUNT_WORD,
  process.env.RINKEBY_API
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(interface)
    .deploy({ data: '0x' + bytecode })
    .send({ from: accounts[0] })
  
  console.log(JSON.stringify(interface))
  console.log('Contract deployed to', result.options.address);
}
deploy()