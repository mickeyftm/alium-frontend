import { useBridgeContext } from 'contexts/BridgeContext'
import { BigNumber } from 'ethers'
import { useActiveWeb3React } from 'hooks'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { logError } from 'utils/bridge/helpers'
import { fetchTokenBalance } from 'utils/bridge/token'
import BridgeNetwork from '../BridgeNetwork'

export const useDelay = (fn, ms) => {
  const timer = useRef(null)

  const delayCallBack = useCallback(
    (...args) => {
      clearTimeout(timer.current)
      // eslint-disable-next-line @typescript-eslint/no-invalid-this
      timer.current = setTimeout(fn.bind(this, ...args), ms || 0)
    },
    [fn, ms],
  )

  return delayCallBack
}

export const FromToken = React.memo(() => {
  const { account, chainId } = useActiveWeb3React()
  const { fromToken: token, setFromBalance: setBalance, amountInput: input } = useBridgeContext()

  const [balanceLoading, setBalanceLoading] = useState(false)

  useEffect(() => {
    if (token && account && chainId === token.chainId && !balanceLoading) {
      setBalanceLoading(true)
      fetchTokenBalance(token, account)
        .catch((fromBalanceError) => {
          logError({ fromBalanceError })
          setBalance(BigNumber.from(0))
          setBalanceLoading(false)
        })
        .then((b) => {
          setBalance(b)
          setBalanceLoading(false)
        })
    }
  }, [token, account, chainId])

  return (
    <div>
      <BridgeNetwork type='fromNetwork' value={input} token={token} balanceLoading={balanceLoading} />
      {/* <h2>{`Balance: ${formatValue(balance, token?.decimals)}`}</h2>
      <input onKeyUp={delayedSetAmount} onChange={(e) => setInput(e.target.value)} value={input} /> */}
    </div>
  )
})
