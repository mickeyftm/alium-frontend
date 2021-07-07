import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="16" height="18" viewBox="0 0 16 18" fill="none" {...props}>
      <path
        d="M7.71441 0L2.9779 2.75707L4.71928 3.77561L7.71441 2.03707L10.7095 3.77561L12.451 2.75707L7.71441 0Z"
        fill="#F0B90B"
      />
      <path
        d="M10.7095 5.21558L12.451 6.23415V8.27123L9.45576 10.0097V13.4868L7.71441 14.5054L5.97306 13.4868V10.0097L2.9779 8.27123V6.23415L4.71928 5.21558L7.71441 6.95415L10.7095 5.21558Z"
        fill="#F0B90B"
      />
      <path d="M12.4509 9.71118V11.7483L10.7095 12.7668V10.7297L12.4509 9.71118Z" fill="#F0B90B" />
      <path
        d="M10.6919 14.2068L13.687 12.4683V8.99123L15.4284 7.97266V13.4868L10.6919 16.2439V14.2068Z"
        fill="#F0B90B"
      />
      <path
        d="M13.6873 5.51413L11.946 4.49559L13.6873 3.47705L15.4287 4.49559V6.53263L13.6873 7.55121V5.51413Z"
        fill="#F0B90B"
      />
      <path
        d="M5.97298 16.9815V14.9445L7.71433 15.963L9.45568 14.9445V16.9815L7.71433 18L5.97298 16.9815Z"
        fill="#F0B90B"
      />
      <path d="M4.71928 12.7668L2.9779 11.7483V9.71118L4.71928 10.7297V12.7668Z" fill="#F0B90B" />
      <path d="M7.71433 5.51413L5.97298 4.49559L7.71433 3.47705L9.45568 4.49559L7.71433 5.51413Z" fill="#F0B90B" />
      <path
        d="M3.48277 4.49559L1.74137 5.51413V7.55121L0 6.53263V4.49559L1.74137 3.47705L3.48277 4.49559Z"
        fill="#F0B90B"
      />
      <path d="M0 7.97266L1.74137 8.99123V12.4683L4.73655 14.2068V16.2439L0 13.4868V7.97266Z" fill="#F0B90B" />
    </Svg>
  )
}

export default Icon
