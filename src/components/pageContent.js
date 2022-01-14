import React from "react"
import PropTypes from "prop-types"
import { FaBars } from "react-icons/fa"
import Popper from "./popper.js"
import * as pageContentCss from "./pageContent.module.css"

const ThreeDots = props => {
  const handleClick = () => {
    props.toggleOpen()
  }
  return (
    <div className={pageContentCss.threeDots}>
      <div
        style={{ fontSize: "2rem", float: "right", marginRight: "18px" }}
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleClick}
        id="hamburgerAnchor"
      >
        <FaBars />
      </div>
    </div>
  )
}

const SidebarContent = ({ children }) => {
  const [open, setOpen] = React.useState(false)

  const [screenWidth, setScreenWidth] = React.useState(0)

  React.useEffect(() => {
    setScreenWidth(window.screen.width)
  }, [screenWidth])

  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <div className={pageContentCss.pageContent}>
      <ThreeDots toggleOpen={handleToggle} />
      {open && <Popper toggleOpen={handleToggle} />}
      {children}
    </div>
  )
}

SidebarContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SidebarContent
