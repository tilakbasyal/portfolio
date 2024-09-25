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
        <a href="/images/CV.pdf" download>
          <img src="/images/resume.png" alt="cv-image" width="104" height="142" />
        </a>

        <p>Currently pursuing my Master degree in Cyber Security at Aalborg University, Copenhagen.</p>

        <p> Worked at Logpoint Nepal Pvt. Ltd. as a Software Engineer.
        <span style={{ display: "inline-block" }}>
            (February 2022 - August 2024)
          </span>
        </p>

        <p>
          Worked at WAFT Technology for <a href='https://enabley.io/'>Enabley</a> as a frontend Developer from
          <span style={{ display: "inline-block" }}>
            (August 2021 - January 2022)
          </span>
        </p>

        <p>
          Moved to <a href="https://zegal.com/">Zegal</a> , as a frontend Developer.
          <span style={{ display: "inline-block" }}>
            (January 2020 - August 2021)
          </span>
        </p>

        <p>
          Stared working from <a href="https://inspiringlab.com.np/"> Inspiring Lab Pvt. Ltd. </a>, as frontend Developer.
          <span style={{ display: "inline-block" }}>
            (June 2018 - December 2019)
          </span>
        </p>
      </SidebarContent>
    </Wrapper>
  </Layout>
)

export default IndexPage
