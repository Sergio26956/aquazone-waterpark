'use client'

type SuccessNotificationProps = {
  message: string
}

export default function SuccessNotification({ message }: SuccessNotificationProps) {
  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg animate-bounce z-50">
      {message}
    </div>
  )
}
