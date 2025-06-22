export default function SectionSeparator({ title }: { title: string }) {
  return (
    <div className="my-8 border-b-2 border-gray-300">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
    </div>
  );
}
