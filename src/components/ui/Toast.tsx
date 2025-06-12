type Props = {
  message: string;
  type?: 'success' | 'error';
};

export default function Toast({ message, type = 'success' }: Props) {
  const bgColor = type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';

  return (
    <div className={`fixed bottom-4 right-4 px-4 py-3 rounded shadow-lg ${bgColor}`}>
      {message}
    </div>
  );
}
