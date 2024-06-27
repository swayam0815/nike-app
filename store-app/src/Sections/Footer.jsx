import { copyrightSign } from '../assets/icons';
import {footerLogo} from '../assets/images';
import {socialMedia, footerLinks} from '../Constants';

const Footer = () => {
  return (
    <footer className="bg-black text-white max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
          <img src={footerLogo} width={150} height={46}/>
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat max-w-sm'>Get your shoes today and be ready for tommorow!</p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map(
              (social) => (
                <div className="bg-white flex justify-center items-center w-12 h-12 rounded-full cursor-pointer  hover:bg-coral-red  transition-all" key={social.alt}>
                  <img src={social.src} alt={social.alt} width={24} height={24}/>
                </div>
              )
            )}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {
              footerLinks.map(
                (link) => (
                  <div className="" key={link.title}>
                      <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6'>{link.title}</h4>
                      <ul>
                        {link.links.map(
                          (point) => (
                            <li key={point.name} className='mt-3 font-montserrat text-base leading-normal hover:text-coral-red'>
                              <a href={point.link}>{point.name}</a>
                            </li>
                          )
                        )}
                      </ul>
                  </div>
                )
              )
            }
        </div>
      </div>
      <div className="flex justify-between mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer hover:text-coral-red">
            <p>© Copyright. All Rights Reserved.</p>
        </div>
        <p className='cursor-pointer hover:text-coral-red'>Terms & Conditions.</p>
      </div>
    </footer>
  )
}

export default Footer