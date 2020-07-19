import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from '../components/sidebar'
import SidebarContent from '../components/pageContent'

import TotalIcon from '../images/totalLogistics.png';
import RatnaNagar from '../images/ratnanagar.png';

const projects = [
  {icon: TotalIcon, href: 'https://totallogistic.com.np/', name: 'Total Logistics'},
  {icon: RatnaNagar, href: 'http://badapatra.karmaconsult.com.np/', name: 'Digital Information Board'}
]

const SingleColumnContent = ({icon, link, name}) => {
  const styles = {
    imgstyle: {
      height: '180px',
      width: '290px',
      objectFit: 'cover',

      //how to do this here and not in css
      // filter: 'grayscale(100%)',
      // '&::hover': {
      //   filter: 'grayscale(0)'
      // }
    },
    link: {
      textDecoration: 'none',
      textAlign: 'center',
      color: 'black'
    }
  }
  return (
    <a href={link} style={styles.link} target='_blank' rel="noopener noreferrer">
      <img style={styles.imgstyle} src={icon}  alt='Logo'/>
      <p>{name}</p>
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
          {projects.map(({icon,href,name}) => (
            <SingleColumnContent icon={icon} link={href} name={name} />
          ))}
        </SidebarContent>
      </div>
    </Layout>
  )
}
