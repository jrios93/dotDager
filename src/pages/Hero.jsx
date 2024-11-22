import { useRef, useState, useEffect } from "react";

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Establece el tiempo de inicio y fin en segundos
  const startTime = 56; // Empieza a los 60 segundos (1 minuto)
  const endTime = 160; // Termina a los 120 segundos (2 minutos)
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

  // Usamos useEffect para manejar el inicio y fin del video
  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Configura el tiempo de inicio del video al cargar
      video.currentTime = startTime;

      // Maneja el evento timeupdate para detener el video cuando llegue al tiempo de fin
      const handleTimeUpdate = () => {
        if (video.currentTime >= endTime) {
          video.pause(); // Detiene el video al alcanzar el tiempo de fin
        }
      };

      video.addEventListener("timeupdate", handleTimeUpdate);

      // Limpieza del event listener
      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [startTime, endTime]); // Este efecto se ejecutará cuando cambien startTime o endTime

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Content Section */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 lg:px-12">
        <div className="max-w-2xl space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Construyendo
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              experiencias digitales
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-gray-300">
            Desarrollador full-stack especializado en la creación de
            aplicaciones web innovadoras y fáciles de usar.
          </p>

          <div className="flex space-x-4">
            <button className="px-8 py-3 bg-gradient-to-r from-pink-600 via-red-500 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95">
              Iniciar Proyecto
            </button>
            <button className="px-6 py-3 border-2 border-white/30 text-white rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95">
              Ver Showreel
            </button>
          </div>
        </div>
      </div>

      {/* Play Button */}
      <button
        onClick={togglePlay}
        className="absolute bottom-8 right-8 z-30 bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all duration-300"
        aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="white"
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
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {/* Background Overlay */}
      <div className="absolute inset-0  bg-black z-0"></div>

      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src="/assets/video/DOT.mp4"
        controls={false}
        disablePictureInPicture
        playsInline
        loop
      />
    </section>
  );
};

export default Hero;
