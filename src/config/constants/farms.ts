import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'MOBILE LP',
    lpAddresses: {
      97: '',
      56: '0xEB33F0F47b015A59e2a11ef76bc033D2Da096c3E',
    },
    tokenSymbol: 'MOBILE',
    tokenAddresses: {
      97: '',
      56: '0x2CC6a05e1729e568f69AC3f52Ee89d40747239D2',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059fF775485246999027B3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'LINA-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xeB325a8ea1c5abf40c7ceAf645596c1F943d0948',
    },
    tokenSymbol: 'LINA',
    tokenAddresses: {
      97: '',
      56: '0x762539b45A1dCcE3D36d080F74d1AED37844b878',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 1,
    lpSymbol: 'MOBILE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9D166cc29ec9660d7c824e51abF14cceAc0578fe',
    },
    tokenSymbol: 'MOBILE',
    tokenAddresses: {
      97: '',
      56: '0x2cc6a05e1729e568f69ac3f52ee89d40747239d2',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    risk: 1,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

     {
    pid: 5,
    risk: 1,
    lpSymbol: 'MOBILE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xEB33F0F47b015A59e2a11ef76bc033D2Da096c3E',
    },
    tokenSymbol: 'MOBILE',
    tokenAddresses: {
      97: '',
      56: '0x2CC6a05e1729e568f69AC3f52Ee89d40747239D2',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

]

export default farms
