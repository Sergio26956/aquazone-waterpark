'use client'

export default function QuoteHighlight() {
  return (
    <blockquote className="bg-blue-50 border-l-4 border-blue-500 text-blue-900 p-6 rounded-xl shadow-sm text-center max-w-3xl mx-auto">
      <p className="text-xl italic font-medium">
        "Una experiencia acuática que jamás olvidarás. Diversión, adrenalina y seguridad en un mismo lugar."
      </p>
      <footer className="mt-4 text-blue-600 font-semibold">— AQUAZONE</footer>
    </blockquote>
  )
}
