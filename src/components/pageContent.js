import React from 'react';
import PropTypes from "prop-types";
import {FaBars} from 'react-icons/fa';
import Popper from './popper.js';

const styles = {
  pageContent: {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '0 24px'
},
threeDots: {
  padding: '24px 0',
  margin: '0 -24px 24px',
  boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
}
}

const ThreeDots = (props) => {
  const handleClick = () => {
    props.toggleOpen();
  }
  return (
  <div style={styles.threeDots}>
    <div
      style={{fontSize: '2rem', float: 'right', marginRight: '18px'}}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleClick}
      id='hamburgerAnchor'
    >
      <FaBars />
    </div>
  </div>
)}

const SidebarContent = ({children}) => {
  const screenWidth = window.screen.width;
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  }

  return (
    <div style={styles.pageContent}>
      {screenWidth < 768 && <ThreeDots toggleOpen={handleToggle} />}
      {open && <Popper toggleOpen={handleToggle} />}
      {children}
    </div>
  )
}

SidebarContent.propTypes = {
  children: PropTypes.node.isRequired
}

export default SidebarContent;
