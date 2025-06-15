type Notification = {
  id: number;
  text: string;
};

type Props = {
  notifications: Notification[];
};

export default function NotificationList({ notifications }: Props) {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-bold mb-2">Notificaciones</h2>
      <ul className="space-y-1">
        {notifications.map((n) => (
          <li key={n.id} className="text-sm text-gray-700 border-b pb-1">
            {n.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
