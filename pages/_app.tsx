import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Menu from '../components/menu'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Menu />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp