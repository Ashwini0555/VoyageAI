export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-100 to-cyan-50">
      <h1 className="text-6xl font-bold">
        Plan Smart.
      </h1>

      <h2 className="text-6xl font-bold text-blue-600 mt-2">
        Travel Better.
      </h2>

      <p className="mt-6 text-gray-600 text-xl max-w-2xl">
        Your AI-powered travel companion that plans, manages and enhances every journey.
      </p>

      <button className="mt-10 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700">
        Start Planning
      </button>
    </section>
  );
}