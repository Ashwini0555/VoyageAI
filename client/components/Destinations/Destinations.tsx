import Image from "next/image";

const destinations = [
  {
    name: "Goa",
    image: "/images/goa.jpeg",
    budget: "₹15,000",
  },
  {
    name: "Manali",
    image: "/images/manali.jpg",
    budget: "₹18,000",
  },
  {
    name: "Munnar",
    image: "/images/munnar.jpeg",
    budget: "₹12,000",
  },
  {
    name: "Kashmir",
    image: "/images/kashmir.jpeg",
    budget: "₹25,000",
  },
  {
    name: "Bali",
    image: "/images/bali.jpeg",
    budget: "₹45,000",
  },
  {
    name: "Japan",
    image: "/images/japan.webp",
    budget: "₹80,000",
  },
];

export default function Destinations() {
  return (
    <section className="py-20 px-10 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Popular Destinations
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {destinations.map((place, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            <Image
              src={place.image}
              alt={place.name}
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />

            <div className="p-5">
              <h3 className="text-2xl font-bold">{place.name}</h3>
              <p className="text-blue-600 font-semibold mt-2">
                Starting from {place.budget}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}