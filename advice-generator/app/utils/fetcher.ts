const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const adviceFetcher = () => fetcher('https://api.adviceslip.com/advice')

export default fetcher
