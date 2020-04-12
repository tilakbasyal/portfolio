import React from 'react';
import PropTypes from "prop-types";

const styles = {
  pageContent: {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}
}

const SidebarContent = ({children}) => {
  return (
    <div style={styles.pageContent}>
      {children}
    </div>
  )
}

SidebarContent.propTypes = {
  children: PropTypes.node.isRequired
}

export default SidebarContent;
