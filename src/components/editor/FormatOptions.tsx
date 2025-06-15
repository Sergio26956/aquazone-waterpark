type Props = {
  onAlignLeft: () => void;
  onAlignCenter: () => void;
  onAlignRight: () => void;
};

export default function FormatOptions({ onAlignLeft, onAlignCenter, onAlignRight }: Props) {
  return (
    <div className="flex gap-2 mt-2">
      <button onClick={onAlignLeft} className="hover:bg-gray-200 px-2 py-1 rounded">⯇</button>
      <button onClick={onAlignCenter} className="hover:bg-gray-200 px-2 py-1 rounded">↔</button>
      <button onClick={onAlignRight} className="hover:bg-gray-200 px-2 py-1 rounded">⯈</button>
    </div>
  );
}
