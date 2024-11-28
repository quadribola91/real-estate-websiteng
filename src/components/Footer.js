import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-500 text-white p-4">
      {/* Use grid on small screens and flex on larger screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Left content: Copyright */}
        <div className="text-center sm:text-left">
          &copy; {currentYear} RENTWITEASENG
        </div>
        
        {/* Center content: Links */}
        <div className="text-center sm:text-left">
          <a href="#home" className="mr-4 block sm:inline">Home</a>
          <a href="#services" className="mr-4 block sm:inline">Services</a>
          <a href="#booking" className="mr-4 block sm:inline">Book Inspection</a>
          <a href="#contact" className="mr-4 block sm:inline">Contact</a>
        </div>

        {/* Right content: Social Media Icons */}
        <div className="flex justify-center sm:justify-start space-x-4 mt-4 sm:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
            <FaFacebook size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
            <FaInstagram size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
