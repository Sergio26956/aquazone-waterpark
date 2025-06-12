type Testimonial = {
  name: string;
  quote: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'María G.',
    quote: 'Una experiencia increíble, los niños se lo pasaron genial.',
    avatar: '/avatars/avatar1.jpg',
  },
  {
    name: 'Carlos M.',
    quote: '¡Espectacular! Totalmente recomendable para eventos de verano.',
    avatar: '/avatars/avatar2.jpg',
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gray-100 py-10">
      <h3 className="text-center text-2xl font-bold mb-6">Testimonios</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow w-72 text-center">
            <img src={t.avatar} alt={t.name} className="w-16 h-16 mx-auto rounded-full mb-4" />
            <p className="italic">"{t.quote}"</p>
            <p className="mt-2 font-bold">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
