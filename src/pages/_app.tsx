import '../styles/global.css'

import { ChallangeContextProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChallangeContextProvider>
      <Component {...pageProps} />
    </ChallangeContextProvider>
  )
}

export default MyApp
