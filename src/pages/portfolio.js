import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from '../components/sidebar'
import SidebarContent from '../components/pageContent'

export default function Works() {
  return (
    <Layout>
      <SEO title="Works" />
      <div style={{display: 'flex'}}>
        <Sidebar />
        <SidebarContent>
          <h5>this is works.....</h5>
        </SidebarContent>
      </div>
    </Layout>
  )
}
