import React from 'react'
import Svg from './Svg'
import { SvgProps } from './types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path d="M7.999 0.166504C3.582 0.166504 0 3.7625 0 8.1985C0 11.7465 2.292 14.7565 5.472 15.8195C5.872 15.8935 6.018 15.6455 6.018 15.4325C6.018 15.2415 6.011 14.7365 6.007 14.0665C3.782 14.5515 3.312 12.9895 3.312 12.9895C2.949 12.0615 2.424 11.8145 2.424 11.8145C1.697 11.3165 2.478 11.3265 2.478 11.3265C3.281 11.3835 3.703 12.1545 3.703 12.1545C4.417 13.3815 5.576 13.0275 6.032 12.8215C6.104 12.3025 6.311 11.9485 6.54 11.7475C4.764 11.5445 2.896 10.8555 2.896 7.7785C2.896 6.9015 3.208 6.1845 3.72 5.6225C3.637 5.4195 3.363 4.6025 3.798 3.4975C3.798 3.4975 4.47 3.2815 5.998 4.3205C6.636 4.1425 7.32 4.0535 8.001 4.0505C8.68 4.0545 9.365 4.1425 10.004 4.3215C11.531 3.2825 12.202 3.4985 12.202 3.4985C12.638 4.6045 12.364 5.4205 12.282 5.6235C12.795 6.1855 13.104 6.9025 13.104 7.7795C13.104 10.8645 11.234 11.5435 9.452 11.7425C9.739 11.9905 9.995 12.4805 9.995 13.2295C9.995 14.3035 9.985 15.1695 9.985 15.4325C9.985 15.6475 10.129 15.8975 10.535 15.8185C13.71 14.7545 16 11.7455 16 8.1985C16 3.7625 12.418 0.166504 7.999 0.166504Z" fill="#6C5DD3"/>
    </Svg>
  )
}

export default Icon
