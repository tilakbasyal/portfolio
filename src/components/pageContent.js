import React from 'react';
import PropTypes from "prop-types";
import {FaBars} from 'react-icons/fa';

const styles = {
  pageContent: {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '0 24px'
},
threeDots: {
  padding: '24px 0',
  margin: '0 -24px',
  boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
}
}

const ThreeDots = () => {
  const handleClick = () => {
    console.log('Hello hwllo hlll', document.getElementById("hamburgerAnchor"))
    // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_popup
  }
  return (
  <div style={styles.threeDots}>
    <div style={{fontSize: '2rem', float: 'right', marginRight: '18px'}} onClick={handleClick} id='hamburgerAnchor'>
      <FaBars />
    </div>
  </div>
)}

const SidebarContent = ({children}) => {
  const screenWidth = window.screen.width;
  return (
    <div style={styles.pageContent}>
      {screenWidth < 768 && <ThreeDots />}
      {children}
    </div>
  )
}

SidebarContent.propTypes = {
  children: PropTypes.node.isRequired
}

export default SidebarContent;
