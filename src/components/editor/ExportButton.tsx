type Props = {
  onExport: () => void;
};

export default function ExportButton({ onExport }: Props) {
  return (
    <button
      onClick={onExport}
      className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
      Exportar HTML
    </button>
  );
}
