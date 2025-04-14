import Navbar from './Navbar';
import Footer from './Footer';

// Layout component wraps every page, providing consistent Navbar and Footer
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Main content area grows to fill available space */}
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
