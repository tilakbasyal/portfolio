import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from '../components/sidebar';
import SidebarContent from '../components/pageContent';
import Wrapper from '../components/Wrapper';



export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <Wrapper>
        <Sidebar />

        <SidebarContent>
          <ul style={{fontFamily: 'inherit'}}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React Js</li>
            <li>Redux, MobX</li>
            <li>Bootstrap, Bulma, Material UI, Materialize</li>
            <li>And play a bit with Figma...</li>
          </ul>
        </SidebarContent>
      </Wrapper>
    </Layout>
  )
}
