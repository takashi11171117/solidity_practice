const path = require('path')
const fs = require('fs')
const solc = require('solc')

const lotteryPath = path.resolve(__dirname, 'contracts', 'lottery.sol')
const source = fs.readFileSync(lotteryPath, 'utf8')

const jsonContractSource = JSON.stringify({
  language: 'Solidity',
  sources: {
    'lottery.sol': {
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

const { abi: interface, evm: { bytecode: { object } } } = JSON.parse(solc.compile(jsonContractSource)).contracts['lottery.sol'].Lottery

module.exports = { interface, object };