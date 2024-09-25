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
            <li>CSS / SCSS / SASS / Styled Components / JSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React Js</li>
            <li>Redux, MobX and whateever the state management</li>
            <li>Scripting</li>
            <li>Ant Design, Material UI, Bootstrap, Bulma, Materialize</li>
            <li>And play a bit with Figma...</li>
          </ul>
        </SidebarContent>
      </Wrapper>
    </Layout>
  )
}
