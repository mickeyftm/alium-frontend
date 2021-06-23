const getMainDomain = (): string => {
  const host = typeof window !== 'undefined' ? window.location.host : 'alium.finance'
  const arr = host.split('.')
  return arr.length === 1 ? arr[0] : `${arr[arr.length - 2]}.${arr[arr.length - 1]}`
}

export default getMainDomain
