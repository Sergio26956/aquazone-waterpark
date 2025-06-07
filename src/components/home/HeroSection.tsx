import VideoBackground from '../videos/VideoBackground';
import AnimateOnScroll from '../animations/AnimateOnScroll';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white text-center z-10">
      <VideoBackground />
      <div className="z-10 px-4">
        <AnimateOnScroll>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            Bienvenido a AQUAZONE Water Park
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-md">
            Diversión acuática sin límites para todas las edades
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
