import { FC } from 'react'
import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;

  @media screen and (min-width: 768px) {
    margin: 160px 0;
  }

  .loading {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .loading:after {
    content: ' ';
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border-width: 4px;
    border-style: solid;
    border-color: #6c5dd3 #6c5dd3 transparent transparent;
    animation: loading 2s linear infinite;
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .title {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.3px;
    color: #0b1359;
    margin-top: 24px;
  }
`

export const Step3Migrating: FC = () => {
  return (
    <Root>
      <div className='loading' />
      <div className='title'>Migrating</div>
    </Root>
  )
}
