interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
      {title}
    </h2>
  );
}
