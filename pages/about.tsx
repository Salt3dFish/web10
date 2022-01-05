import type { NextPage } from "next";
import Head from "next/head";

const imgDir = '/about'

const Contact_Num = ({ imgname, text, width, height }: { imgname: string, text: string, width: string, height: string }) => {
  return (
    <li>
      <img src={`${imgDir}/${imgname}`} />
      <p>
        {text}
      </p>
      <style jsx>{`
        img {
          display:inline;
          width:${width};
          height:${height};
        }
        p {
          display:inline;
          padding:1em 1em 1em 1em;
        }
        li{
          list-style-type:none;
        }
      `}</style>
    </li>
  )
}

const Contact_QR = () => {
  return (
    <div id="contact">
      <div>
        <img src={`${imgDir}/mconc.jpg`} />
      </div>
      <div className='num'>
        <ul>
          <Contact_Num imgname="wclogo.png" text='微信: bww1010' width='20px' height='20px' />
          <Contact_Num imgname="qqlogo.png" text='QQ:....' width='25px' height='20px' />
          <Contact_Num imgname="phonelogo.jpg" text='phone...' width='20px' height='20px' />
        </ul>
      </div>
      <style jsx>{`
        img {
          width:200px;
          height:200px;
        }
        ul {
          padding:1em 0 1em 1em;
        }
        .top{
          display:block;
        }
      `}</style>
    </div>
  )
}

const TeamInfo = () => {
  return (
    <div className='main'>
      <img src={`${imgDir}/bgd.jpg`} />
      <div className="intr">
        我们的团队:
        ......
      </div>
      <style jsx>{`
        .main {
          margin:5px 0 5px 0;
        }
      `}</style>
    </div>
  )
}

const SideWidget = () => {
  return (
    <div>
      <a href='#contact'><img src={`${imgDir}/chatico.svg`}/></a>
      <style jsx>{`
        a{
          display:block;
          position:fixed;
          left:0px;
          top:100px;
          border-radius:20%;
          padding:2px 2px 2px 2px;
          background-color:aliceblue;
        }
      `}</style>
    </div>
  )
}


const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>关于我们</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet" />
      </Head>
      <div className="main">
        <SideWidget />
        <TeamInfo />
        <Contact_QR />
      </div>
      <style jsx>{`
        .main{
          display:flex;
          flex-direction:column;
        }
      `}</style>
    </div>
  )
}

export default About