import { ChainId } from '@alium-official/sdk'

const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xbEAC7e750728e865A3cb39D5ED6E3A3044ae4B98',
  [ChainId.BSCTESTNET]: '0x0Da3335f7F9B0f78c965046b8CF124a51548001E',
  [ChainId.HECOMAINNET]: '0x163668b3293EA61e6405eFB233abc905De1dcEF9',
  [ChainId.HECOTESTNET]: '0x45434b2c51D270BDa028c152DdDDBC1e71B7c199',
  1: '',
  4: '',
  137: '',
  80001: '',
}

export default FACTORY_ADDRESS
