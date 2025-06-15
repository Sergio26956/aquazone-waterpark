import NotificationList from "./NotificationList";

const dummyNotifications = [
  { id: 1, text: "Nuevo mensaje recibido" },
  { id: 2, text: "Actualización disponible" },
];

export default function NotificationPanel() {
  return (
    <div className="absolute right-0 mt-2 w-64">
      <NotificationList notifications={dummyNotifications} />
    </div>
  );
}
