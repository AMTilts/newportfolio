import { Github, Linkedin } from 'lucide-react'; // Icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-dark text-text-medium py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {/* Replace '#' with actual profile links */}
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hover:text-text-light transition-colors duration-300">
            <Github size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover:text-text-light transition-colors duration-300">
            <Linkedin size={24} />
          </a>
          {/* Add other social links if needed */}
        </div>
        <p className="text-sm">
          &copy; {currentYear} Matthew Price. All rights reserved.
        </p>
         <p className="text-xs mt-1">
          Built with Next.js, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
