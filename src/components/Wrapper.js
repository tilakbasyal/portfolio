// this is the main wrapper for whole webpage.
import React from 'react';
import PropTypes from "prop-types";

const styles = {
  root: {
    display: 'grid',
    gridTemplateColumns: "minmax(210px, 30%) auto 1fr",
    // placeItems: 'center'
  }
}

const Wrapper = ({children}) => {
  return (
    <div style={styles.root}>
      {children}
    </div>
  )
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper;
