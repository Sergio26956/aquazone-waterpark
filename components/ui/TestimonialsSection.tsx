import TestimonialCard from './TestimonialCard'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Marta López',
      comment: 'Una experiencia inolvidable para toda la familia. ¡Repetiremos sin duda!',
      location: 'Sevilla',
    },
    {
      name: 'Carlos Romero',
      comment: 'Los parques flotantes son una pasada, mis hijos lo disfrutaron muchísimo.',
      location: 'Córdoba',
    },
    {
      name: 'Lucía Fernández',
      comment: 'Las instalaciones son espectaculares y el trato excelente. Muy recomendable.',
      location: 'Madrid',
    },
  ]

  return (
    <section className="py-20 bg-blue-50 px-4">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
        Opiniones de nuestros visitantes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} name={t.name} comment={t.comment} location={t.location} />
        ))}
      </div>
    </section>
  )
}
