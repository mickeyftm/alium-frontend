import dynamic from 'next/dynamic'
import React from 'react'

const WrapInvestorsAccounComponent = dynamic(() => import('pages/InvestorsAccount/InvestorsAccountContainer'), {
  ssr: false,
})

const InvestorsAccount = dynamic(() => import('pages/InvestorsAccount'), { ssr: false })

const Account = () => {
  return (
    <WrapInvestorsAccounComponent>
      <InvestorsAccount />
    </WrapInvestorsAccounComponent>
  )
}

export default Account
