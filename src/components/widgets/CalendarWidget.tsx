export default function CalendarWidget() {
  const today = new Date().toLocaleDateString();

  return (
    <div className="bg-green-100 p-4 rounded shadow">
      <h2 className="text-lg font-semibold">Calendario</h2>
      <p className="text-sm">{today}</p>
    </div>
  );
}
