import { ChainId, JSBI, Percent, Token, WETH } from '@alium-official/sdk'
import { AbstractConnector } from '@web3-react/abstract-connector'
// import { bsc, fortmatic, injected, portis, walletconnect, walletlink } from '../connectors'
import { bsc, injected } from '../connectors'

// TODO
// export const ROUTER_ADDRESS = '0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F' // router of cake
// export const ROUTER_ADDRESS = '0x5E468Edc83968f9CfdFA47a75a777CdBb34D4bbC' // router of DAI-ALIUM
export const ROUTER_ADDRESS = '0x07899d5bE4B700Db9bf345530fF849a530EF79c3' // router of alium

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

//  BSC Mainnet Basic Tokens
export const DAI = new Token(ChainId.MAINNET, '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', 18, 'DAI', 'Dai Stablecoin')
export const BUSD = new Token(ChainId.MAINNET, '0xe9e7cea3dedca5984780bafc599bd69add087d56', 18, 'BUSD', 'Binance USD')
export const USDT = new Token(ChainId.MAINNET, '0x55d398326f99059ff775485246999027b3197955', 18, 'USDT', 'Tether USD')
export const EOS = new Token(ChainId.MAINNET, '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6', 18, 'EOS', 'EOS Token')
export const DOT = new Token(ChainId.MAINNET, '0x7083609fce4d1d8dc0c979aab8c869ea2c873402', 18, 'DOT', 'Polkadot Token')
export const ETH = new Token(
  ChainId.MAINNET,
  '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  18,
  'ETH',
  'Binance-Peg Ethereum Token',
)
export const BETH = new Token(
  ChainId.MAINNET,
  '0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B',
  18,
  'BETH',
  'Binance Beacon Ethereum Token',
)
export const TESTALM = new Token(
  ChainId.BSCTESTNET,
  '0xf671C33452adfB8e0f645d95d8E3C6Df0d78fED2',
  18,
  'ALM',
  'Alium Token',
)
export const TESTWBNB = new Token(
  ChainId.BSCTESTNET,
  '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
  18,
  'WBNB',
  'Wrapped BNB',
)
export const TESTXXX1 = new Token(
  ChainId.BSCTESTNET,
  '0xB42A8e21f983A56d1e8D1b8f83CE51A9Eb0241FC',
  18,
  'XXX1',
  'XXX1 Test',
)
export const TESTUSDT = new Token(
  ChainId.BSCTESTNET,
  '0x1138ebb3101f557b28326a28b6f192c7fecc95f7',
  18,
  'USDT',
  'USDT Test',
)
export const TESTDAI = new Token(
  ChainId.BSCTESTNET,
  '0x618549d304828c77dcb590d02e3641b03e6f4176',
  18,
  'DAI',
  'DAI Test',
)
export const TESTWETH = new Token(
  ChainId.BSCTESTNET,
  '0x12BE304f9b7a3B624213b5DBaC1822F75E005DAF',
  18,
  'WETH',
  'WETH Test',
)
// @ts-ignore
//  BSC Testnet Basic Tokens
export const TEST_BSC_ALM = new Token(
  ChainId.BSCTESTNET,
  '0xf671C33452adfB8e0f645d95d8E3C6Df0d78fED2',
  18,
  'ALM',
  'Alium Token',
)
export const TEST_BSC_WBNB = new Token(
  ChainId.BSCTESTNET,
  '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
  18,
  'WBNB',
  'Wrapped BNB',
)
export const TEST_BSC_XXX1 = new Token(
  ChainId.BSCTESTNET,
  '0xB42A8e21f983A56d1e8D1b8f83CE51A9Eb0241FC',
  18,
  'XXX1',
  'XXX1 Test',
)
export const TEST_BSC_USDT = new Token(
  ChainId.BSCTESTNET,
  '0x1138ebb3101f557b28326a28b6f192c7fecc95f7',
  18,
  'USDT',
  'USDT Test',
)
export const TEST_BSC_DAI = new Token(
  ChainId.BSCTESTNET,
  '0x618549d304828c77dcb590d02e3641b03e6f4176',
  18,
  'DAI',
  'DAI Test',
)
export const TEST_BSC_WETH = new Token(
  ChainId.BSCTESTNET,
  '0x12BE304f9b7a3B624213b5DBaC1822F75E005DAF',
  18,
  'WETH',
  'WETH Test',
)

//  HECO Mainnet Basic Tokens
export const HECO_USDT = new Token(
  ChainId.HECOMAINNET,
  '0xa71edc38d189767582c38a3145b5873052c3e47a',
  18,
  'USDT',
  'Tether USD',
)
export const HECO_ETH = new Token(
  ChainId.HECOMAINNET,
  '0x64ff637fb478863b7468bc97d30a5bf3a428a1fd',
  18,
  'ETH',
  'HECO-Peg Ethereum Token',
)

// HECO Testnet Basic Tokens
export const TEST_HECO_WHT = new Token(
  ChainId.HECOTESTNET,
  '0x7aF326B6351C8A9b8fb8CD205CBe11d4Ac5FA836',
  6,
  'WHT',
  'Wrapped HT',
)
export const TEST_HECO_USDT = new Token(
  ChainId.HECOTESTNET,
  '0x6e4Dc12aF5477fCE40F87841dAfdf7156722635e',
  6,
  'USDT',
  'USDT',
)
export const TEST_HECO_USDC = new Token(
  ChainId.HECOTESTNET,
  '0x9a33Ddd074Cd1275DCF6aDe8920675FD8fade75E',
  6,
  'USDC',
  'USDC',
)
export const TEST_HECO_DAI = new Token(
  ChainId.HECOTESTNET,
  '0xc73cbC85C8Df0e7b40Cc05f8B82De4a7ae8F8813',
  6,
  'DAI',
  'DAI',
)
export const TEST_HECO_WBTC = new Token(
  ChainId.HECOTESTNET,
  '0x7bA4b2383255b891D51D1702023904dcEf6d952a',
  6,
  'WBTC',
  'Wrapped BTC',
)
export const TEST_HECO_UNI = new Token(
  ChainId.HECOTESTNET,
  '0x6e4Dc12aF5477fCE40F87841dAfdf7156722635e',
  6,
  'UNI',
  'UNI',
)

const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
  [ChainId.BSCTESTNET]: [TESTWBNB],
  [ChainId.BSCTESTNET]: [WETH[ChainId.BSCTESTNET]],
  [ChainId.HECOMAINNET]: [WETH[ChainId.HECOMAINNET]],
  [ChainId.HECOTESTNET]: [WETH[ChainId.HECOTESTNET]],
  1: [WETH[ChainId.HECOTESTNET]],
  4: [WETH[ChainId.HECOTESTNET]],
  137: [WETH[ChainId.HECOTESTNET]],
  80001: [WETH[ChainId.HECOTESTNET]],
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT, ETH],
  [ChainId.BSCTESTNET]: [TEST_BSC_ALM, TEST_BSC_DAI, TEST_BSC_XXX1, TEST_BSC_USDT, TEST_BSC_WETH],
  [ChainId.HECOMAINNET]: [...WETH_ONLY[ChainId.HECOMAINNET], HECO_USDT, HECO_ETH],
  [ChainId.HECOTESTNET]: [TEST_HECO_DAI, TEST_HECO_USDT, TEST_HECO_USDC],
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.HECOMAINNET]: {},
  [ChainId.HECOTESTNET]: {},
  [ChainId.MAINNET]: {
    [ETH.address]: [DAI, WETH[ChainId.MAINNET], BETH],
  },
  [ChainId.BSCTESTNET]: {
    [ETH.address]: [TESTDAI, TESTALM, TESTXXX1],
  },
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT],
  [ChainId.BSCTESTNET]: [
    ...WETH_ONLY[ChainId.BSCTESTNET],
    TEST_BSC_ALM,
    TEST_BSC_XXX1,
    TEST_BSC_USDT,
    TEST_BSC_DAI,
    TEST_BSC_WETH,
  ],
  [ChainId.HECOMAINNET]: [...WETH_ONLY[ChainId.HECOMAINNET], HECO_USDT, HECO_ETH],
  [ChainId.HECOTESTNET]: [
    ...WETH_ONLY[ChainId.HECOTESTNET],
    TEST_HECO_DAI,
    TEST_HECO_USDC,
    TEST_HECO_USDT,
    TEST_HECO_WBTC,
    TEST_HECO_UNI,
  ],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT],
  [ChainId.BSCTESTNET]: [...WETH_ONLY[ChainId.BSCTESTNET], TEST_BSC_USDT, TEST_BSC_DAI, TEST_BSC_WETH],
  [ChainId.HECOMAINNET]: [...WETH_ONLY[ChainId.HECOMAINNET], HECO_USDT, HECO_ETH],
  [ChainId.HECOTESTNET]: [...WETH_ONLY[ChainId.HECOTESTNET], TEST_HECO_DAI, TEST_HECO_USDC, TEST_HECO_USDT],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [
      new Token(ChainId.MAINNET, '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', 18, 'CAKE', 'PancakeSwap Token'),
      new Token(ChainId.MAINNET, '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', 18, 'WBNB', 'Wrapped BNB'),
    ],
    [BUSD, USDT],
    [DAI, USDT],
  ],
  [ChainId.BSCTESTNET]: [
    [TEST_BSC_ALM, TEST_BSC_WBNB],
    [TEST_BSC_USDT, TEST_BSC_DAI],
  ],
  [ChainId.HECOMAINNET]: [[HECO_USDT, HECO_ETH]],
  [ChainId.HECOTESTNET]: [
    [TEST_HECO_DAI, TEST_HECO_USDT],
    [TEST_HECO_DAI, TEST_HECO_USDC],
  ],
}
export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  BSC: {
    connector: bsc,
    name: 'Binance Chain Wallet',
    iconName: 'binance.svg',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D',
  },
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true,
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D',
  },
  // WALLET_CONNECT: {
  //   connector: walletconnect,
  //   name: 'WalletConnect',
  //   iconName: 'walletConnectIcon.svg',
  //   description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
  //   href: null,
  //   color: '#4196FC',
  //   mobile: true
  // },
  // WALLET_LINK: {
  //   connector: walletlink,
  //   name: 'Coinbase Wallet',
  //   iconName: 'coinbaseWalletIcon.svg',
  //   description: 'Use Coinbase Wallet app on mobile device',
  //   href: null,
  //   color: '#315CF5'
  // },
  // COINBASE_LINK: {
  //   name: 'Open in Coinbase Wallet',
  //   iconName: 'coinbaseWalletIcon.svg',
  //   description: 'Open in Coinbase Wallet app.',
  //   href: 'https://go.cb-w.com/mtUDhEZPy1',
  //   color: '#315CF5',
  //   mobile: true,
  //   mobileOnly: true
  // },
  // FORTMATIC: {
  //   connector: fortmatic,
  //   name: 'Fortmatic',
  //   iconName: 'fortmaticIcon.png',
  //   description: 'Login using Fortmatic hosted wallet',
  //   href: null,
  //   color: '#6748FF',
  //   mobile: true
  // },
  // Portis: {
  //   connector: portis,
  //   name: 'Portis',
  //   iconName: 'portisIcon.png',
  //   description: 'Login using Portis hosted wallet',
  //   href: null,
  //   color: '#4A6C9B',
  //   mobile: true
  // }
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 80
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
export const BETTER_TRADE_LINK_THRESHOLD = new Percent(JSBI.BigInt(75), JSBI.BigInt(10000))
