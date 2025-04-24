
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cybernash-dark py-12 text-white border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex flex-col items-start">
              <span className="text-2xl font-bold text-gradient">CyberNash</span>
              <span className="text-white text-lg">Technologies</span>
            </Link>
            <p className="mt-4 text-gray-300">
              Your trusted partner in software development and cybersecurity solutions.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-cybernash-turquoise transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-cybernash-turquoise transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-cybernash-turquoise transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-cybernash-turquoise transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cybernash-turquoise transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services#software" className="text-gray-300 hover:text-cybernash-turquoise transition-colors">Software Engineering</Link></li>
              <li><Link to="/services#security" className="text-gray-300 hover:text-cybernash-turquoise transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services#coverage" className="text-gray-300 hover:text-cybernash-turquoise transition-colors">Security Coverage</Link></li>
              <li><Link to="/services#training" className="text-gray-300 hover:text-cybernash-turquoise transition-colors">Corporate Training</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-300">
              <p>123 Tech Avenue</p>
              <p>Nashville, TN 37203</p>
              <p className="mt-2">
                <a href="mailto:info@cybernash.tech" className="text-cybernash-turquoise hover:underline">
                  info@cybernash.tech
                </a>
              </p>
              <p>
                <a href="tel:+16151234567" className="text-cybernash-turquoise hover:underline">
                  (615) 123-4567
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} CyberNash Technologies. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-cybernash-turquoise transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-cybernash-turquoise transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
