import  { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import Logo from './Logo';
 

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
            <p className="mt-4 text-secondary">
              MoneyNest is an investing platform where you can invest in stocks, mutual funds, fixed deposits, and US stocks, all in one place.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-heading uppercase tracking-wider">Products</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/stocks" className="text-secondary hover:text-primary">Stocks</Link>
              </li>
              <li>
                <Link to="/mutual-funds" className="text-secondary hover:text-primary">Mutual Funds</Link>
              </li>
              <li>
                <Link to="/fd" className="text-secondary hover:text-primary">Fixed Deposits</Link>
              </li>
              <li>
                <Link to="/us-stocks" className="text-secondary hover:text-primary">US Stocks</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-heading uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/calculators" className="text-secondary hover:text-primary">Calculators</Link>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-primary">Blog</a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-primary">Learn</a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-primary">Help Center</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-heading uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-secondary hover:text-primary">About Us</a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-primary">Careers</a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-primary">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-primary">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Mail size={16} className="text-gray-500" />
              <span className="text-secondary">support@moneynest.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone size={16} className="text-gray-500" />
              <span className="text-secondary">+91 1800-000-0000</span>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} MoneyNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 