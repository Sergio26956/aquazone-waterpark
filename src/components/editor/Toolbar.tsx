type Props = {
  onBold: () => void;
  onItalic: () => void;
  onUnderline: () => void;
};

export default function Toolbar({ onBold, onItalic, onUnderline }: Props) {
  return (
    <div className="flex gap-2 border-b border-gray-300 p-2">
      <button onClick={onBold} className="font-bold hover:bg-gray-200 px-2 rounded">B</button>
      <button onClick={onItalic} className="italic hover:bg-gray-200 px-2 rounded">I</button>
      <button onClick={onUnderline} className="underline hover:bg-gray-200 px-2 rounded">U</button>
    </div>
  );
}
