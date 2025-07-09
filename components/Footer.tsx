import { FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm">&copy; 2025 AQUAZONE WaterPark. Todos los derechos reservados.</p>
        <div className="flex gap-4 text-xl">
          <a href="#" aria-label="Instagram" className="hover:text-pink-400">
            <FaInstagram />
          </a>
          <a href="#" aria-label="TikTok" className="hover:text-white">
            <FaTiktok />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-blue-500">
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
