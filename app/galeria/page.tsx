const imagenes = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
]

const Galeria = () => {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Galería de Imágenes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {imagenes.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`imagen ${i + 1}`}
            className="rounded shadow hover:scale-105 transition-transform"
          />
        ))}
      </div>
    </div>
  )
}

export default Galeria
