import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from '../components/sidebar';
import SidebarContent from '../components/pageContent';

import { FaFacebook, FaTwitterSquare, FaLinkedin, FaGithub} from 'react-icons/fa';

const iconList = [
  {icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/tilak-basyal-14529476/'},
  {icon: <FaFacebook />, link: 'https://www.facebook.com/tilak.basyal.3'},
  {icon: <FaTwitterSquare />, link: 'https://twitter.com/addictstupid'},
  {icon: <FaGithub />, link: 'https://github.com/tilakbasyal'}
]

const Icons = ({icon, link}) => (
  <a href={link} target='_blank' rel="noopener noreferrer" style={{color: 'black'}}>
    {icon}
  </a>
);

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <div style={{display: 'flex', fontFamily: 'Nunito'}}>
        <Sidebar />
        <SidebarContent>
          <p>Contact Me...</p>
          <p>If you want me to work with/for you. Buzz me in any of my socials.</p>
            <h4>Socials:</h4>
          <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '1.5rem'}}>
           {iconList.map(({icon, link}) => (
             <Icons key={link} icon={icon} link={link} />
           ))}
          </div>
        </SidebarContent>
      </div>
    </Layout>
  )
}
