import { Bell } from "lucide-react";

export default function NotificationBell() {
  return (
    <button className="relative">
      <Bell className="w-6 h-6 text-gray-600" />
      <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping" />
    </button>
  );
}
