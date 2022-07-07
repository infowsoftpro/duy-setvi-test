import { Provider } from 'mobx-react'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { rootStore } from '../stores'
import 'react-toastify/dist/ReactToastify.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider {...rootStore}>
      <ToastContainer theme="colored" />
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
