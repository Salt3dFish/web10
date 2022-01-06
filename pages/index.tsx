import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from '../components/layout'
import PhotoGallery from '../components/photogallery'

const imgs=['/index/1.jpg','/index/2.jpg','/index/3.jpg','/index/4.jpg','/index/5.jpg','/index/6.jpg']

const Home: NextPage = () => {

  return (
    <Layout>
      <Head>
        <title>10 Studio</title>
        <link rel="icon" href="/ico10.svg" />
      </Head>
      <h1>一零影像工作室</h1>
      <PhotoGallery imgs={imgs} title='gallery' />
      <div>
      </div>
      <style jsx>{`
        .gallery {
          display:flex;
          flex-wrap:wrap;
          justify-content: space-around;

        }
      `}</style>
    </Layout>
  )
}

export default Home
