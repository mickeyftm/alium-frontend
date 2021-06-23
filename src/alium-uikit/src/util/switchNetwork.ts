import { chainIdLocationKey } from '../config'

const switchNetwork = (value: string, withReload: boolean): void => {
  if (typeof window !== 'undefined') {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set(chainIdLocationKey, value)
    const newurl = `${window.location.protocol}//${window.location.host}${
      window.location.pathname
    }?${searchParams.toString()}`
    window.history.pushState({ path: newurl }, '', newurl)
    if (withReload) window.location.reload()
  }
}

export default switchNetwork
