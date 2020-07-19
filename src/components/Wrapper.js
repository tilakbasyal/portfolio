// this is the main wrapper for whole webpage.
import React from 'react';
import PropTypes from "prop-types";

const styles = (width) => {return {
  root: {
    display: 'grid',
    gridTemplateColumns: width > 768 && "minmax(210px, 30%) auto 1fr",
    // placeItems: 'center'
  }
}
}

const Wrapper = ({children}) => {
  return (
    <div style={styles(window.screen.width).root}>
      {children}
    </div>
  )
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper;
