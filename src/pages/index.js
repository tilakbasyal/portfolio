import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
import SidebarContent from "../components/pageContent"
import Wrapper from "../components/Wrapper"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <Sidebar />
      <SidebarContent>
        <h1>Hello, I am Tilak Basyal.</h1>
        <p>Currently at Logpoint Nepal Pvt. Ltd. as a Software Engineer.</p>
        <p>
          Worked at WAFT Technology for <a href='https://enabley.io/'>Enabley</a> as a frontend Developer from
          <span style={{ display: "inline-block" }}>
            (August 2021 - January 2022)
          </span>
        </p>
        <p>
          Moved Zegal, as a frontend Developer.
          <span style={{ display: "inline-block" }}>
            (January 2020 - August 2021)
          </span>
        </p>
        <p>
          Stared working from Inspiring Lab Pvt. Ltd., as frontend Developer.
          <span style={{ display: "inline-block" }}>
            (June 2018 - December 2019)
          </span>
        </p>
      </SidebarContent>
    </Wrapper>

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
