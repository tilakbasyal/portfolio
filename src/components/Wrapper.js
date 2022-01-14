// this is the main wrapper for whole webpage.
import React from 'react';
import PropTypes from "prop-types";
import * as style from "./layout.css";

const Wrapper = ({children}) => {

  return (
    <div className={style.root}>
      {children}
    </div>
  )
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper;
