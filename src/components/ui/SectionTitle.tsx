'use client';
export default function SectionTitle({ text }: { text: string }) {
  return (
    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-700 my-10">
      {text}
    </h2>
  );
}
