// import React from 'react';
// import './Footer.css';

// export default function Footer() {
//     return (
//         <>
//             <div className="compfoot">


//                 <footer className="footer">
//                     <div className='f1'>
//                         <h4>Courses</h4>
//                         <ul>
//                             <li><a href="/">Java</a></li>
//                             <li><a href="/">Springboot</a></li>
//                             <li><a href="/">React</a></li>
//                             <li><a href="/">Flutter</a></li>
//                         </ul>
//                     </div>
//                     <div className='f2'>
//                         <h4>AboutUs</h4>
//                         <ul>
//                             <li><a href="/">Online</a></li>
//                             <li><a href="/">Offline</a></li>
//                             <li><a href="/">Notes Pro</a></li>
//                             <li><a href="/">Affordable Fess</a></li>
//                         </ul>
//                     </div>

//                     <div className='f4'>
//                         <h4>followus On</h4>
//                         <div className="social-links">
//                             <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
//                                 <i className="fab fa-instagram"></i>
//                             </a>
//                             <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
//                                 <i className="fab fa-facebook"></i>
//                             </a>
//                             <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
//                                 <i className="fab fa-whatsapp"></i>
//                             </a>
//                         </div>
//                     </div>
//                 </footer>
//             </div>
//         </>
//     )
// }


import './Footer.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import {
  faLaptopCode,
  faHome,
  faEnvelope,
  faPhone,
  faPrint
} from '@fortawesome/free-solid-svg-icons';


const socialIcons = [
  // { icon: faFacebookF, link: 'https://www.facebook.com', label: 'Facebook' },
  // { icon: faTwitter, link: 'https://www.twitter.com', label: 'Twitter' },
  // { icon: faGoogle, link: 'https://www.google.com', label: 'Google' },
  { icon: faInstagram, link: 'https://www.instagram.com/vitalcodetech/', label: 'Instagram' },
  { icon: faLinkedin, link: 'https://www.linkedin.com', label: 'LinkedIn' },
  // { icon: faGithub, link: 'https://www.github.com', label: 'GitHub' }
];

const FooterColumn = ({ title, items }) => (
  <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-white'>
    <h6 className=' fw-bold mb-4'style={{ fontSize: '1.2rem' }}>{title}</h6>
    {items.map((item, index) => (
      <p key={index}>
        {item.link ? (
          <a href={item.link} className='text-reset' target='_blank' rel='noopener noreferrer ' style={{ textDecoration: 'none' }}>
            {item.label}
          </a>
        ) : (
          <span>{item.label}</span>
        )}
      </p>
    ))}
  </div>
);

export default function App() {
  return (
    <footer className='text-center text-lg-start text-muted' style={{ backgroundColor: '#3e7f91' }}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4'>
        <div className='me-5 d-none d-lg-block text-white'>
          <h5>Get connected with us on social networks:</h5>
        </div>

        <div style={{ color: 'white' }}>
          {socialIcons.map((social, index) => (
            <a key={index} href={social.link} className='me-4 text-reset' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <FooterColumn
              title={<><FontAwesomeIcon icon={faLaptopCode} className='me-3' /> SMiT Solutions</>}
              items={[
                { label: 'Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.' }
              ]}
            />
            <FooterColumn
              title='Products'
              items={[
                { label: 'Angular', link: '#!' },
                { label: 'React', link: '#!' },
                { label: 'Vue', link: '#!' },
                { label: 'Laravel', link: '#!' }
              ]}
            />
            <FooterColumn
              title='Useful links'
              items={[
                { label: 'Pricing', link: '#!' },
                { label: 'Settings', link: '#!' },
                { label: 'Orders', link: '#!' },
                { label: 'Help', link: '#!' }
              ]}
            />
            <FooterColumn
              title='Contact'
              items={[
                { label: <><FontAwesomeIcon icon={faHome} className='me-3' /><a>Solapur, IN</a></> },
                {
                  label: (
                    <>
                      <FontAwesomeIcon icon={faEnvelope} className='me-3' />
                      <a href='mailto:contact@vitalcode.com' className='text-reset' style={{ textDecoration: 'none' }}>contact@vitalcode.com
                      </a>
                    </>
                  )
                },
                { label: <><FontAwesomeIcon icon={faPhone} className='me-3' />+91 1234567890</> },
                { label: <><FontAwesomeIcon icon={faPrint} className='me-3' />+91 1234567890</> }
              ]}
            />
          </div>
        </div>
      </section>

      <div className='text-center p-4 text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 All Rights Reserved. VitalCode
      </div>
    </footer>
  );
}
