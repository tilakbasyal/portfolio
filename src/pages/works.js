import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from '../components/sidebar';
import SidebarContent from '../components/pageContent';



export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <div style={{display: 'flex', fontFamily: 'Nunito'}}>
        <Sidebar />

        <SidebarContent>
          <ul style={{fontFamily: 'inherit'}}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React Js</li>
            <li>Redux</li>
            <li>MobX</li>
            <li>And play a bit with Figma...</li>
          </ul>
        </SidebarContent>
      </div>
    </Layout>
  )
}
