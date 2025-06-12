type Props = {
  text: string;
  color?: 'green' | 'red' | 'blue' | 'gray';
};

const colors = {
  green: 'bg-green-100 text-green-800',
  red: 'bg-red-100 text-red-800',
  blue: 'bg-blue-100 text-blue-800',
  gray: 'bg-gray-100 text-gray-800',
};

export default function Badge({ text, color = 'gray' }: Props) {
  return (
    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${colors[color]}`}>
      {text}
    </span>
  );
}
