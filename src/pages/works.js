import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from '../components/sidebar';
import SidebarContent from '../components/pageContent';

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <div style={{display: 'flex'}}>
        <Sidebar />

        <SidebarContent>
          <p>this is about......</p>
        </SidebarContent>
      </div>
    </Layout>
  )
}
