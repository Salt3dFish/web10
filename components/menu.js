import Link from "next/link"

const Menu = () => {
  return (
    <div className="root">
      <img src='/ico10.svg' alt='logo' />
      <div className="nav">
        <Link href='/'><a>主页</a></Link>
        <Link href='/gallery'><a>画廊</a></Link>
        <Link href='/about'><a>关于我们</a></Link>
      </div>
      <style jsx>{`
        div.root{
          display:flex;
          justify-content:space-between;
          box-shadow:0 0 20px 0 rgb(201, 223, 241);
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;
        }
        .nav {
          display:flex;
          justify-content:flex-end;
        }
        a {
          display:inline-block;
          padding:0.5em 2em 0.5em;
          margin:0.5em 1em;
          color:#0070f3;
          font-size:95%;
          background-color:aliceblue;
          border: 1px aliceblue solid;
          border-radius:20%;
        }
        a:hover{
          text-decoration: underline solid black;
        }
      `}</style>
    </div>
  )
}


export default Menu