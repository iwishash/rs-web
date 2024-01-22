import Link from 'next/link';
import Container from './container';
import Logo from './logos/rslogo';
import { Twitter, Github, Slack } from 'lucide-react';

const footerLinks = [
  {
    title: 'Product',
    Links: [
      { title: 'RS-STIM', href: '#' },
      { title: 'RS-DETECTION', href: '#' },
      { title: 'AKAS-01', href: '#' },
      { title: 'RS-PROTECTHIP', href: '#' },
    ],
  },
  {
    title: '연구성과',
    Links: [
      { title: '연구성과#1', href: '#' },
      { title: '연구성과#2', href: '#' },
      { title: '연구성과#3', href: '#' },
    ],
  },
  {
    title: 'Company',
    Links: [
      { title: 'About Us', href: '#' },
      { title: 'People', href: '#' },
      { title: 'Contact Us', href: '#' },
      { title: '위치', href: '#' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className='border-t border-transparent-white py-[5.6rem] mt-[5rem] text-sm'>
      <Container className='flex flex-col justify-between lg:flex-row'>
        <div>
          <div className='flex flex-row justify-between h-full lg:flex-col'>
            <div className='flex items-center text-grey'>
              <Logo className='h-10' />
            </div>
            <div className='flex mt-auto gap-x-3 text-grey'>
              <Twitter size={18} />
              <Github size={18} />
              <Slack size={18} />
            </div>
          </div>
        </div>
        <div className='flex flex-wrap'>
          {footerLinks.map(({ title, Links }) => (
            <div key={title} className='min-w-[18rem] mt-10 lg:mt-0'>
              <h3 className='font-medium'>{title}</h3>
              <ul className='mt-3'>
                {Links.map(({ title, href }) => (
                  <li
                    key={title}
                    className='block mb-2 transition-colors text-grey last:mb-0 hover:text-white'
                  >
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
