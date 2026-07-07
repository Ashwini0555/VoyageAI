export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Your Trip",
      description:
        "Enter your destination, travel dates, budget and interests.",
    },
    {
      number: "02",
      title: "AI Generates Your Plan",
      description:
        "VoyageAI creates a personalized itinerary using AI.",
    },
    {
      number: "03",
      title: "Travel Smarter",
      description:
        "Track expenses, weather, packing list and enjoy your trip.",
    },
  ];

  return (
    <section className="py-20 px-10 bg-slate-50">
      <h2 className="text-4xl font-bold text-center mb-12">
        How VoyageAI Works
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <div className="text-5xl font-bold text-blue-600 mb-4">
              {step.number}
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              {step.title}
            </h3>

            <p className="text-gray-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}