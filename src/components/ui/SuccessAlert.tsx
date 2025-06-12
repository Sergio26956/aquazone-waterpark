type Props = {
  message: string;
};

export default function SuccessAlert({ message }: Props) {
  return (
    <div className="bg-green-100 text-green-700 border border-green-400 p-4 rounded my-4">
      <strong>Éxito:</strong> {message}
    </div>
  );
}
