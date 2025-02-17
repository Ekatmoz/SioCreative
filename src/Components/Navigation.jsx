import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.png';
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from 'react-icons/fa';
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Szolgáltatások', href: '#sevices', current: false },
  { name: 'Projektek', href: '#projects', current: false },
  { name: 'Kapcsolat', href: '#contact', current: false },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//absolute was in the header
  return (
    <header className='absolute inset-x-0 top-0 z-50'> 
      <nav aria-label='Global' className='flex items-center justify-between p-6 lg:px-24'>
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <img alt='' src={logo} className='h-12 w-auto' />
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon aria-hidden='true' className='size-6' />
          </button>
        </div>
        <div className='hidden lg:flex lg:flex-grow lg:gap-x-12'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='relative text-sm/6 font-semibold text-gray-900 
                after:absolute after:left-0 after:-bottom-2 after:h-[4px] after:w-0 
                after:bg-violet-500 after:transition-all after:duration-300 
                hover:after:w-full hover:after:bg-violet-500 after:rounded-sm'
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className='m-8 hidden lg:flex gap-2'>
          <a
            href='https://www.facebook.com/p/Si%C3%B3-Creative-IT-61558465540883/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Visit our Facebook page'
          >
            <FaFacebook />
          </a>
          <FaInstagram />
          {/* <p>en</p>
          <p>hu</p> */}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className='lg:hidden'>
        <div className='fixed inset-0 z-50' />
        <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img alt='' src={logo} className='h-8 w-auto' />
            </a>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon aria-hidden='true' className='size-6' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className='py-6 flex gap-4 justify-start'>
                <a
                  href='https://www.facebook.com/p/Si%C3%B3-Creative-IT-61558465540883/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Visit our Facebook page'
                >
                  <i className='ri-facebook-fill text-2xl'></i>
                </a>
                <a
                  href='https://www.instagram.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Visit our Instagram page'
                >
                  <i className='ri-instagram-line text-2xl'></i>
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navigation;
