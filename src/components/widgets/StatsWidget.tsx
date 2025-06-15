type StatsProps = {
  title: string;
  value: number | string;
};

export default function StatsWidget({ title, value }: StatsProps) {
  return (
    <div className="bg-white p-4 rounded shadow border">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}
