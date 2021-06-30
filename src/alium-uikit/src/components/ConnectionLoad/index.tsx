import React, { FC } from 'react'
import styled from 'styled-components'
import { Spinner } from '../Spinner'
type Props = {
  load: boolean
}
const WrapConnection = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  background: #2128672e;
`
const ConnectionLoad: FC<Props> = ({ load }) => {
  if (!load) {
    return null
  }
  return (
    <WrapConnection>
      <Spinner />
    </WrapConnection>
  )
}
export default ConnectionLoad
