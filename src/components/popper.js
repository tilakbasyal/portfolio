import React from 'react';
import { Link } from "gatsby"
import {FaTimes} from 'react-icons/fa';
// import ThreeDots from './pageContent'


const styles = {
  root: {
    position: 'absolute',
    background: 'white',
    color: 'black',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 10
  },
  closeButton: {
    padding: '24px 0',
    // margin: '0 -24px 24px',
  },
  mobileMenu: {
    display: 'grid',
    placeItems: 'center',
    height: '80vh',
    width: '100%'
  },
  link: {
    display: 'flex',
    textDecoration: 'none',
    color: '#000',
    // padding: '16px 0',
    // margin: '8px 0',
    fontFamily: 'Nunito',
    fontSize: '48px',
    maxWidth: '250px',
    lineHeight: 1
  },
}

const pages = [
  { path: '/', name: 'I' },
  { path: '/works/', name: 'DO' },
  { path: '/portfolio/', name: 'STUFFS' },
  { path: '/contact/', name: 'FOR YOU'}
]

const Popper = (props) => {
  return (
    <div style={styles.root}>
      <div id='this-will-be-topbar-of-popper' style={styles.closeButton}>
        <div
          style={{fontSize: '2rem', position: 'absolute', right: 0, marginRight: '18px'}}
          role="button"
          tabIndex={0}
          onClick={props.toggleOpen}
          onKeyDown={props.toggleOpen}
          // id='hamburgerAnchor'
        >
          <FaTimes />
        </div>

        <div id='mobile-menu' style={styles.mobileMenu}>
        {pages.map(singlePageLink => (<Link
            key={singlePageLink.name}
            to={singlePageLink.path}
            onClick={props.toggleOpen}
            onKeyDown={props.toggleOpen}
            // activeStyle={styles.active}
            style={styles.link}
          >
            {singlePageLink.name}
          </Link>))}
        </div>

      </div>
    </div>
  )
}

export default Popper;
