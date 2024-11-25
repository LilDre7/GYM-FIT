import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoSection from './VideoSection';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const nextSectionRef = useRef(null);

  useEffect(() => {
    // Animación de entrada para el título y el párrafo
    gsap.fromTo(
      '.hero-title',
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
    );

    gsap.fromTo(
      '.hero-paragraph',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );

    // Animación de la siguiente sección
    const section = nextSectionRef.current;

    gsap.fromTo(
      section,
      { opacity: 0, scale: 0.8, rotation: 10 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%', // Cuando el top de la sección está al 80% de la ventana
          toggleActions: 'play none none reverse', // Reproducir la animación al entrar y revertir al salir
        },
      }
    );

  }, []);

  return (
    <>
      <header
        id="hero"
        className="section1 relative bg-cover bg-center min-h-screen overflow-hidden"
      >
        <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4 py-12">
          <div className="mt-48 z-10 w-full mx-auto text-center space-y-8">
            {/* Text content */}
            <div className="">
              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl">
                AI FIT - Powered <span className="text-orange-500">Industry</span> Insights
                <br />
                immersives
                <span className="text-yellow-400">*</span>
              </h1>
              <p className="hero-paragraph mt-5 text-sm sm:text-lg text-gray-300">
                AI FIT is a cutting-edge AI-powered platform that provides industry.
              </p>
            </div>
          </div>
        </div>
        <video src="./section1 bg.mp4" muted autoPlay loop></video>
      </header>

      {/* Nueva sección */}
      <section ref={nextSectionRef} className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
      <VideoSection />
      </section>
    </>
  );
}