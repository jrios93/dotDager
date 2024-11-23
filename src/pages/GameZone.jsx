const GameZone = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 z-20 flex flex-col items-center">
      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white font-bold mb-6 sm:mb-8 md:mb-12 text-center">
        Juga mientras te la pensas
      </h3>

      <div className="w-full max-w-[600px] aspect-[1/2] relative rounded-lg overflow-hidden shadow-2xl">
        <iframe
          title="Lumber Jack Game"
          src="https://tbot.xyz/lumber/"
          className="absolute top-0 left-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default GameZone;
