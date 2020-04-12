import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from '../components/sidebar';
import SidebarContent from '../components/pageContent';

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <div style={{display: 'flex'}}>
        <Sidebar />
        <SidebarContent>
          <div>Tihs is contact...</div>
        </SidebarContent>
      </div>
    </Layout>
  )
}
