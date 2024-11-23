import React from "react";
import { data } from "../../public/data/lenguajes/lenguajes";

const StatItem = ({ number, label }) => (
  <li className="flex flex-col items-center">
    <p className="text-xl sm:text-3xl md:text-5xl lg:text-7xl text-white font-extrabold">
      {number}
    </p>
    <p className="text-lg sm:text-xl md:text-2xl text-[#9cb737] font-bold">
      {label}
    </p>
  </li>
);

const PlusSign = () => (
  <li className="text-[#9cb737] font-extrabold text-2xl sm:text-4xl md:text-6xl lg:text-9xl">
    +
  </li>
);

const Proyecto = () => {
  const stats = [
    { number: "500", label: "lecciones" },
    { number: "1500", label: "videos" },
    { number: "350k", label: "Miembros" },
  ];

  return (
    <section
      id="lenguajes"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 z-30 flex flex-col gap-8 sm:gap-12 md:gap-24"
    >
      {/* Stats Section */}
      <div className="w-full overflow-x-auto">
        <ul className="flex justify-between min-w-[320px] md:min-w-0 md:justify-center gap-4 sm:gap-6 md:gap-10">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.label}>
              <StatItem number={stat.number} label={stat.label} />
              {index < stats.length - 1 && <PlusSign />}
            </React.Fragment>
          ))}
        </ul>
      </div>

      {/* Mobile Title */}
      <h2 className="block md:hidden text-3xl sm:text-4xl text-white font-bold text-center">
        Mirá según tu lenguaje de código
      </h2>

      {/* Languages Grid */}
      <div className="w-full">
        <ol className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 gap-6 md:gap-8 justify-items-center">
          {data.map((item) => (
            <li key={item.id} className="w-full">
              <a
                href={item.pagina_oficial}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-center group hover:transform hover:scale-110 transition-transform duration-300"
              >
                <div className="w-16 sm:w-20 aspect-square flex items-center justify-center">
                  <img
                    src={item.logo}
                    alt={item.nombre}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white text-sm sm:text-base group-hover:text-[#9cb737] transition-colors duration-300">
                  {item.nombre}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Proyecto;
