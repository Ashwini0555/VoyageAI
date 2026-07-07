export default function Features() {
  const features = [
    "🤖 AI Trip Planner",
    "💰 Budget Tracker",
    "🌦 Weather Updates",
    "🧳 Packing Checklist",
    "📍 Hidden Gems",
    "🎤 Voice Assistant",
  ];

  return (
    <section className="py-20 bg-slate-100">
      <h2 className="text-4xl font-bold text-center mb-12">
        AI Features
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-10">
        {features.map((feature) => (
          <div
            key={feature}
            className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold">
              {feature}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}