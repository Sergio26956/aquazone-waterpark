import Link from "next/link";

interface Props {
  title: string;
  href: string;
  description: string;
}

export default function CategoryCard({ title, href, description }: Props) {
  return (
    <Link href={href}>
      <div className="border-2 border-white rounded-2xl p-6 bg-white/10 backdrop-blur-md hover:scale-105 transition-all text-white cursor-pointer">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </Link>
  );
}
