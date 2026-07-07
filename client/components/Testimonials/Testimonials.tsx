export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        What Travelers Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-10">

        <div className="shadow-lg rounded-xl p-8">
          <h3 className="font-bold text-xl">Rahul</h3>
          <p className="mt-3 text-gray-600">
            VoyageAI planned my Goa trip perfectly.
          </p>
        </div>

        <div className="shadow-lg rounded-xl p-8">
          <h3 className="font-bold text-xl">Sneha</h3>
          <p className="mt-3 text-gray-600">
            The AI itinerary saved me a lot of time.
          </p>
        </div>

        <div className="shadow-lg rounded-xl p-8">
          <h3 className="font-bold text-xl">Amit</h3>
          <p className="mt-3 text-gray-600">
            Budget tracking was my favourite feature.
          </p>
        </div>

      </div>
    </section>
  );
}