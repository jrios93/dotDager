import { data } from "../../public/data/lenguajes/lenguajes";

const Proyecto = () => {
  return (
    <section className="z-30 flex flex-col gap-10 md:gap-24">
      <ul className="flex md:mx-auto justify-between md:gap-10">
        <li className="text-2xl md:text-7xl text-white flex flex-col items-center">
          <p className="font-extrabold">500</p>
          <p className="text-[#9cb737] font-extrabold">lecciones</p>
        </li>
        <li className="text-[#9cb737] font-extrabold text-4xl md:text-9xl">
          +
        </li>
        <li className="text-2xl md:text-7xl text-white flex flex-col items-center">
          <p className="font-extrabold">1500</p>
          <p className="text-[#9cb737] font-bold">videos</p>
        </li>
        <li className="text-[#9cb737] font-extrabold text-4xl md:text-9xl">
          +
        </li>
        <li className="text-2xl md:text-7xl text-white flex flex-col items-center">
          <p className="font-extrabold">350k</p>
          <p className="text-[#9cb737] font-bold">Miembros</p>
        </li>
      </ul>
      <h2 className="block md:hidden text-5xl text-white font-bold">
        Mirá según tu lenguaje de código
      </h2>
      <div className="mx-auto">
        <ol className="grid grid-cols-2 mx-auto md:grid-cols-12 md:justify-center md:content-center  items-center gap-10">
          {data.map((item) => (
            <li key={item.id} className="text-white">
              <a
                href={item.pagina_oficial}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-center"
              >
                <img src={item.logo} alt={item.nombre} className="h-20 w-20" />
                <span>{item.nombre}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Proyecto;
