const path = require('path')
const fs = require('fs')
const solc = require('solc')

const inboxPath = path.resolve(__dirname, 'contracts', 'hello.sol')
const source = fs.readFileSync(inboxPath, 'utf8')

const jsonContractSource = JSON.stringify({
  language: 'Solidity',
  sources: {
    'hello.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
})

const { abi: interface, evm: { bytecode: { object } } } = JSON.parse(solc.compile(jsonContractSource)).contracts['hello.sol'].Hello

module.exports = { interface, object };