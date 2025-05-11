export default function HeroSection() {
  return (
    <section className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-center px-4">
          <h1 className="text-4xl font-bold mb-4">¡Bienvenidos a AQUAZONE!</h1>
          <p className="text-xl">Diversión garantizada en parques acuáticos flotantes y terrestres.</p>
        </div>
      </div>
    </section>
  )
}
