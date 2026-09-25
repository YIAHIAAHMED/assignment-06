import React from 'react';
import socialImg from '../assets/social-media.png';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className="max-w-7xl lg:p-12 md:p-6 p-10 mx-auto h-auto bg-neutral text-neutral-content ">
            <footer className=''>
                <footer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center text-center lg:text-left">
                    <nav className='flex flex-col items-center lg:items-start text-center lg:text-left'>
                        <h6 className="footer-title text-4xl font-bold text-white text-center">DigiTools</h6>
                        <p>Premium digital tools for creators,<br></br> professionals, and businesses. Work smarter <br></br> with our suite of powerful tools.</p>
                    </nav>
                    <nav className='flex flex-col items-center lg:items-start text-center lg:text-left'>
                        <h6 className="footer-title text-2xl">Product</h6>
                        <a className="link link-hover">Features</a>
                        <a className="link link-hover">Pricing</a>
                        <a className="link link-hover">Templats</a>
                        <a className="link link-hover">Integrations</a>
                    </nav>
                    <nav className='flex flex-col items-center lg:items-start text-center lg:text-left'>
                        <h6 className="footer-title text-2xl">Company</h6>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Blogs</a>
                        <a className="link link-hover">Career</a>
                        <a className="link link-hover">Press</a>
                    </nav>
                    <nav className='flex flex-col items-center lg:items-start text-center lg:text-left'>
                        <h6 className="footer-title text-2xl">Resources</h6>
                        <a className="link link-hover">Documentation</a>
                        <a className="link link-hover">Help Center</a>
                        <a className="link link-hover">Community</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav className='flex flex-col items-center lg:items-start text-center lg:text-left'>
                        <h6 className="footer-title text-2xl">Social Links</h6>
                        <div className="flex justify-between gap-4 ">
                            <button className='btn w-12 h-12 rounded-full'><FaSquareInstagram /></button>
                           <button className='btn w-12 h-12 rounded-full'> <FaFacebookSquare /></button>
                            <button className='btn w-12 h-12 rounded-full'><FaXTwitter /></button>
                        </div>
                    </nav>

                </footer>
                <footer className="">
                    <div className="w-full">
                        <div className="flex justify-between text-gray-200 border-t border-gray-200 pt-8 pb-6 text-center text-gray-600">
                            <p>&copy; {new Date().getFullYear()} Digitools. All rights reserved.</p>
                            <div className="flex justify-between gap-4">
                                <p>Privacy Policy</p>
                                <p>Terms of Service  </p>
                                <p> Cookies</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </footer>
        </div>
    );
};

export default Footer;