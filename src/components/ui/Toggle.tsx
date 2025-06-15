type Props = {
  enabled: boolean;
  onToggle: () => void;
};

export default function Toggle({ enabled, onToggle }: Props) {
  return (
    <div
      onClick={onToggle}
      className={`w-12 h-6 flex items-center bg-gray-300 rounded-full cursor-pointer px-1 ${
        enabled ? 'bg-blue-600' : ''
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform ${
          enabled ? 'translate-x-6' : 'translate-x-0'
        } transition-transform`}
      />
    </div>
  );
}
