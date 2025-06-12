'use client';

export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-bold text-center text-primary mb-6">
      {title}
    </h2>
  );
}
