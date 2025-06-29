'use client'

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
      <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center">
        <div className="w-1 h-2 bg-white animate-bounce mt-1 rounded-full" />
      </div>
    </div>
  )
}
