import { useEffect } from 'react'
import { observer } from 'mobx-react'
import Head from 'next/head'
import HomePage from 'components/Pages/HomePage'
import { useStores } from 'hooks/useStores'

const Home = () => {
  const { postsStore } = useStores()

  useEffect(() => {
    postsStore.fetchPosts()
  }, [])

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  )
}

export default observer(Home)
