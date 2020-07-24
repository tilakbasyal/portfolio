import React from 'react';
import { Link } from "gatsby"

const pages = [
  { path: '/', name: 'I' },
  { path: '/works/', name: 'DO' },
  { path: '/portfolio/', name: 'STUFFS' },
  { path: '/contact/', name: 'FOR YOU'}
]

const styles = (width) => {return {
  linkParent: {
    display: width > 768 ? 'flex' : 'none',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    margin: '0 24px'
  },
  link: {
    display: 'flex',
    textDecoration: 'none',
    color: '#000',
    padding: '16px 0',
    margin: '8px 0',
    fontFamily: 'Nunito',
    fontSize: '48px',
    maxWidth: '250px',
    lineHeight: 1
  },
  line: {
    display: width > 768 ? 'flex' : 'none',
    border: '1px solid #dedede',
    margin: '25vh 0'
  },
  active: {
    borderBottom: '4px solid green'
  }
}}

export default function Sidebar() {

  const [screenWidth, setScreenWidth] = React.useState(0);

  React.useEffect(() => {
    setScreenWidth(window.screen.width)
  }, [screenWidth])

  return (
    <React.Fragment>
      <div style={styles(screenWidth).linkParent}>
        {pages.map(singlePageLink => (<Link
            key={singlePageLink.name}
            to={singlePageLink.path}
            activeStyle={styles().active}
            style={styles().link}
          >
            {singlePageLink.name}
          </Link>))}
      </div>
      <div id='line' style={styles(screenWidth).line}></div>
    </React.Fragment>
  )
}
