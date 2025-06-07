import SocialIcons from '../social/SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-black text-white p-6 text-center">
      <p className="mb-2">© {new Date().getFullYear()} AQUAZONE Water Park</p>
      <SocialIcons />
    </footer>
  );
}
