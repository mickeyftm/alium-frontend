import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'
import React from 'react'

const WrapSwapComponent = dynamic(() => import('views/Swap/SwapContainter'), {
  ssr: false,
})

const RedirectOldRemoveLiquidityPathStructure = dynamic(
  () => import('views/RemoveLiquidity/redirects').then((module) => module.RedirectOldRemoveLiquidityPathStructure),
  {
    ssr: false,
  },
)

const RemoveTokens = () => {
  return (
    <WrapSwapComponent>
      <RedirectOldRemoveLiquidityPathStructure />
    </WrapSwapComponent>
  )
}

export default RemoveTokens

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
