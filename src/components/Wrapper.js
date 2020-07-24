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
  const [screenWidth, setScreenWidth] = React.useState(0);

  React.useEffect(() => {
    setScreenWidth(window.screen.width)
  }, [screenWidth])

  return (
    <div style={styles(screenWidth).root}>
      {children}
    </div>
  )
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper;
