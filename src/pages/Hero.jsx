import { Github, Youtube } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const startTime = 56;
  const endTime = 160;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.currentTime = startTime;

      const handleTimeUpdate = () => {
        if (video.currentTime >= endTime) {
          video.currentTime = startTime; // Vuelve al inicio en lugar de pausar
          video.play();
        }
      };

      const handleVideoLoaded = () => {
        setIsVideoLoaded(true);
      };

      video.addEventListener("timeupdate", handleTimeUpdate);
      video.addEventListener("loadeddata", handleVideoLoaded);

      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
        video.removeEventListener("loadeddata", handleVideoLoaded);
      };
    }
  }, [startTime, endTime]);

  return (
    <section id="inicio" className="relative w-full h-screen overflow-hidden">
      {/* Content Section */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          {/* Títulos con animación */}
          <div className="space-y-2 sm:space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 animate-fadeIn">
                ¡Subí de nivel
              </span>
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 animate-fadeIn animation-delay-200">
                y convertite en el Messi del código!
              </span>
            </h2>
          </div>

          {/* Descripción con animación */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 animate-fadeIn animation-delay-400 max-w-2xl">
            Tutoriales de video tan zarpados y de alta calidad que hasta tu
            abuela querría aprender a programar, hechos a medida para
            desarrolladores y diseñadores web con onda.
          </p>

          {/* Botones con animación */}
          <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 animate-fadeIn animation-delay-600">
            <button className="px-8 py-3 bg-gradient-to-r from-pink-600 via-red-500 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 hover:brightness-110">
              Iniciar Proyecto
            </button>
            <a
              href="https://dot-dager.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 text-center border-white/30 text-white rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Revisa este proyecto mejorado
            </a>
          </div>

          {/* Social Icons con animación */}
          <div className="flex space-x-6 animate-fadeIn animation-delay-800 text-white">
            <a
              href="#"
              className="transform hover:scale-110 transition-transform duration-300 hover:text-pink-500"
            >
              <Youtube size={32} />
            </a>
            <a
              href="#"
              className="transform hover:scale-110 transition-transform duration-300 hover:text-pink-500"
            >
              <Github size={32} />
            </a>
          </div>
        </div>
      </div>

      {/* Play Button - Solo visible en desktop */}
      <button
        onClick={togglePlay}
        className={`hidden md:block absolute bottom-8 right-8 z-50 bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all duration-300 transform hover:scale-110`}
        aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="white"
            className="transform hover:scale-110 transition-transform duration-300"
          >
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="white"
            className="transform hover:scale-110 transition-transform duration-300"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {/* Background Overlay con gradiente */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 `}
      />

      {/* Video Background con efecto de carga */}
      <div className={`${isPlaying ? "z-20" : "z-10"} absolute inset-0  `}>
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-50" : "opacity-0"
          }`}
          src="/assets/video/DOT.mp4"
          controls={false}
          disablePictureInPicture
          playsInline
          muted
          preload="auto"
        />
      </div>
    </section>
  );
};

export default Hero;
