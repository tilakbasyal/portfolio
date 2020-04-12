import React from 'react';
import { Link } from "gatsby"

const pages = [
  { path: '/', name: 'I' },
  { path: '/works/', name: 'DO' },
  { path: '/portfolio/', name: 'STUFFS' },
  { path: '/contact/', name: 'FOR YOU'}
]

const styles = {
  linkParent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh'
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
    border: '1px solid #dedede',
    margin: '25vh 2rem'
  },
  active: {
    borderBottom: '4px solid green'
  }
}

export default function Sidebar() {
  return (
    <React.Fragment>
      <div style={styles.linkParent}>
        {pages.map(singlePageLink => (<Link
            key={singlePageLink.name}
            to={singlePageLink.path}
            activeStyle={styles.active}
            style={styles.link}
          >
            {singlePageLink.name}
          </Link>))}
      </div>
      <div id='line' style={styles.line}></div>
    </React.Fragment>
  )
}
