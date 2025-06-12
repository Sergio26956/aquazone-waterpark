export default function MapEmbed() {
  return (
    <div className="w-full h-96 mt-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
        className="rounded shadow"
      ></iframe>
    </div>
  );
}
