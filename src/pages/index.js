import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
import SidebarContent from "../components/pageContent";

const styles = {
  root: {
    display: 'flex'
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={styles.root}>
      <Sidebar />
      <SidebarContent>
        <h1>Hello, I am Tilak Basyal.</h1>
        <p>Currently working at Zegal, as a frontend Developer.</p>
        <p>Previously worked at Inspiring Lab Pvt. Ltd., as frontend Developer.</p>
      </SidebarContent>
    </div>


    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
