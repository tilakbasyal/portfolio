import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from '../components/sidebar'
import SidebarContent from '../components/pageContent'

import TotalIcon from '../images/test.png';

const projects = [
  {icon: TotalIcon, href: 'https://totallogistic.com.np/'},
  // {icon: TotalIcon, href: 'https://totallogistic.com.np/'}
]

const SingleColumnContent = ({icon, link}) => {
  return (
    <a href={link} target='_blank' rel="noopener noreferrer">
      <img src={icon}  alt='Logo'/>
    </a>
  );
}

export default function Works() {
  return (
    <Layout>
      <SEO title="Works" />
      <div style={{display: 'flex'}}>
        <Sidebar />
        <SidebarContent>
          {projects.map(({icon,href}) => (
            <SingleColumnContent icon={icon} link={href} />
          ))}
        </SidebarContent>
      </div>
    </Layout>
  )
}
