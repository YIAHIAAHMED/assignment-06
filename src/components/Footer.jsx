import React from 'react';
import socialImg from '../assets/social-media.png';

const Footer = () => {
    return (
        <div className="max-w-7xl mx-auto h-auto bg-neutral text-neutral-content ">
            <footer className=''>
                <footer className="footer sm:footer-horizontal pb-7 pt-[120px] px-[200px] text-gray-200 ">
                    <nav>
                        <h6 className="footer-title text-5xl font-bold text-white">DigiTools</h6>
                        <p>Premium digital tools for creators,<br></br> professionals, and businesses. Work smarter <br></br> with our suite of powerful tools.</p>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Product</h6>
                        <a className="link link-hover">Features</a>
                        <a className="link link-hover">Pricing</a>
                        <a className="link link-hover">Templats</a>
                        <a className="link link-hover">Integrations</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Blogs</a>
                        <a className="link link-hover">Career</a>
                        <a className="link link-hover">Press</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Resources</h6>
                        <a className="link link-hover">Documentation</a>
                        <a className="link link-hover">Help Center</a>
                        <a className="link link-hover">Community</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Social Links</h6>
                        <img src={socialImg} alt='social media' ></img>
                    </nav>

                </footer>
                <footer className="">
                    <div className="w-full px-[200px]">
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