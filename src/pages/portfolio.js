import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from '../components/sidebar'
import SidebarContent from '../components/pageContent'
import Wrapper from '../components/Wrapper';

import TotalIcon from '../images/totalLogistics.png';
import RatnaNagar from '../images/ratnanagar.png';
import AmyStudio from '../images/amy-studios.png';

const projects = [
  {icon: TotalIcon, href: 'https://totallogistic.com.np/', name: 'Total Logistics'},
  {icon: RatnaNagar, href: '#', name: 'Digital Information Board'},
  {icon: AmyStudio, href: 'https://amystudiosnepal.com/', name: 'Amy Studios'},
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
      color: 'black',
      // margin: '0 24px 24px 0'
    }
  }
  return (
    <a href={link} style={styles.link} rel="noopener noreferrer">
      <img style={styles.imgstyle} src={icon}  alt='Logo'/>
      <p>{name}</p>
    </a>
  );
}

export default function Works() {
  return (
    <Layout>
      <SEO title="Works" />
      <Wrapper>
        <Sidebar />
        <SidebarContent>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px'}}>
            {projects.map(({icon,href,name}) => (
              <SingleColumnContent key={name} icon={icon} link={href} name={name} />
            ))}
          </div>
        </SidebarContent>
      </Wrapper>
    </Layout>
  )
}
