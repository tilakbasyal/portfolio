import React from "react"
import { Link } from "gatsby"
import * as sideBarCss from "./sidebar.module.css"

const pages = [
  { path: "/", name: "I" },
  { path: "/works/", name: "DO" },
  { path: "/portfolio/", name: "STUFFS" },
  { path: "/contact/", name: "FOR YOU" },
]

const styles = () => {
  return {
    active: {
      borderBottom: "4px solid green",
    },
  }
}

export default function Sidebar() {
  return (
    <React.Fragment>
      <div className={sideBarCss.linkParent}>
        {pages.map(singlePageLink => (
          <Link
            key={singlePageLink.name}
            to={singlePageLink.path}
            activeStyle={styles().active}
            className={sideBarCss.link}
          >
            {singlePageLink.name}
          </Link>
        ))}
      </div>
      <div id="line" className={sideBarCss.line}></div>
    </React.Fragment>
  )
}
