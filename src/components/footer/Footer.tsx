import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-6">
      <div className="flex justify-center gap-6 text-2xl mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} AQUAZONE Water Park. Todos los derechos reservados.</p>
    </footer>
  );
}
