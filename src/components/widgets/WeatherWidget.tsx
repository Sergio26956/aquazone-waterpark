type WeatherData = {
  temperature: number;
  condition: string;
};

export default function WeatherWidget({ temperature, condition }: WeatherData) {
  return (
    <div className="bg-sky-100 p-4 rounded shadow">
      <h2 className="text-lg font-semibold">Clima actual</h2>
      <p className="text-2xl">{temperature}°C</p>
      <p className="text-sm text-gray-600">{condition}</p>
    </div>
  );
}
