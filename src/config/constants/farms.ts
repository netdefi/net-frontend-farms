import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'XTM',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x61b009c0405313e6a32d5fa20a3314ac2e25b73c',
    },
    tokenSymbol: 'XTM',
    tokenAddresses: {
      97: '',
      56: '0xD90eAD48B86955552EC264266CADaecF8e17d6A6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'XTG',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x0e9022fc05bf0f4fc4e56b7300c8d6c32d7f793d',
    },
    tokenSymbol: 'XTG',
    tokenAddresses: {
      97: '',
      56: '0x3D732cB0BE2CEc26a6F640e9D1845b657c06c367',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },  
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'XTM-BUSD LP',    
    lpAddresses: {
      97: '',
      56: '0x61b009c0405313e6a32d5fa20a3314ac2e25b73c',
    },
    tokenSymbol: 'XTM',
    tokenAddresses: {
      97: '',
      56: '0xD90eAD48B86955552EC264266CADaecF8e17d6A6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'XTG-BUSD LP',    
    lpAddresses: {
      97: '',
      56: '0x0e9022fc05bf0f4fc4e56b7300c8d6c32d7f793d',
    },
    tokenSymbol: 'XTG',
    tokenAddresses: {
      97: '',
      56: '0x3D732cB0BE2CEc26a6F640e9D1845b657c06c367',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },  
]

export default farms
