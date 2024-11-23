import { StarIcon } from "@heroicons/react/20/solid";

const testimonials = [
  {
    id: 1,
    name: "Abuela de Dager",
    text: "Si estás viendo esto es porque andas perdido",
    size: "large",
    rating: 5,
    color: "bg-black",
  },
  {
    id: 2,
    name: "Juan Pérez",
    text: "Increíble comunidad, me ha cambiado la vida",
    size: "small",
    rating: 4,
    color: "bg-red-900",
  },
  {
    id: 3,
    name: "María García",
    text: "Nunca pensé que aprender pudiera ser tan divertido",
    size: "medium",
    rating: 5,
    color: "bg-violet-900",
  },
  {
    id: 4,
    name: "Carlos Rodríguez",
    text: "Los mejores consejos que he recibido",
    size: "small",
    rating: 4,
    color: "bg-green-900",
  },
  {
    id: 5,
    name: "Ana Martínez",
    text: "Una experiencia única que recomiendo a todos",
    size: "medium",
    rating: 5,
    color: "bg-yellow-900",
  },
];

const TestimonialCard = ({ name, text, size, rating, color }) => {
  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 md:col-span-2 row-span-1 md:row-span-2",
    large: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2",
  };

  return (
    <div
      className={`rounded-lg p-4 md:p-6 shadow-lg ${sizeClasses[size]} z-30 flex flex-col justify-between ${color} text-white transform transition duration-500 hover:scale-105`}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex mb-2 justify-center md:justify-start">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`h-4 w-4 md:h-5 md:w-5 ${
                  i < rating ? "text-yellow-300" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="mb-4 font-medium text-sm md:text-base">{text}</p>
        </div>
        <p className="font-bold text-sm md:text-base">{name}</p>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section
      id="testimonios"
      className="w-full z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 flex flex-col items-center gap-8 md:gap-16"
    >
      <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-white font-bold text-center max-w-4xl">
        Sumate a nuestra comunidad, ¡no te quedes afuera!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 w-full">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            text={testimonial.text}
            size={testimonial.size}
            rating={testimonial.rating}
            color={testimonial.color}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
