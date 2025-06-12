type Props = {
  message: string;
};

export default function ErrorAlert({ message }: Props) {
  return (
    <div className="bg-red-100 text-red-700 border border-red-400 p-4 rounded my-4">
      <strong>Error:</strong> {message}
    </div>
  );
}
