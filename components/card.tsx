import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  image: string;
  href: string;
}

const Card = ({ title, image, href }: CardProps) => {
  return (
    <Link href={href} className="group relative block overflow-hidden rounded-2xl shadow-xl hover:scale-105 transition-all">
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full h-64 object-cover brightness-75 group-hover:brightness-100 transition duration-300"
      />
      <div className="absolute bottom-0 left-0 w-full px-4 py-3 bg-black/60 text-white text-xl font-semibold backdrop-blur">
        {title}
      </div>
    </Link>
  );
};

export default Card;
