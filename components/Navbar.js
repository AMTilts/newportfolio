import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence here
import { Menu, X } from 'lucide-react'; // Using lucide-react for icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for the mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-secondary-dark sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Brand Name */}
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold text-accent hover:text-accent-hover transition-colors duration-300">
            Matthew Price
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} legacyBehavior>
              <a className="text-text-medium hover:text-text-light transition-colors duration-300 font-medium">
                {item.name}
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text-light focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* AnimatePresence ensures the exit animation plays */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-secondary-dark absolute w-full shadow-lg pb-4"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit" // Apply exit animation
          >
            <ul className="flex flex-col items-center space-y-4 pt-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} legacyBehavior>
                    <a
                      className="block text-text-medium hover:text-text-light transition-colors duration-300 py-2"
                      onClick={() => setIsOpen(false)} // Close menu on click
                    >
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
