type Props = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export default function Card({ title, description, children }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      {children}
    </div>
  );
}
