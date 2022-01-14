// this is the main wrapper for whole webpage.
import React from "react"
import PropTypes from "prop-types"
import * as wrapperStyles from "./Wrapper.module.css"

const Wrapper = ({ children }) => {
  return <div className={wrapperStyles.root}>{children}</div>
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
