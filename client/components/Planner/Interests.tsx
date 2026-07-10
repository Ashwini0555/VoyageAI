type InterestsProps = {
  selected: string[];
  toggleInterest: (interest: string) => void;
};

const interests = [
  "Adventure",
  "Beaches",
  "Food",
  "Shopping",
  "History",
  "Nature",
  "Photography",
  "Nightlife",
];

export default function Interests({
  selected,
  toggleInterest,
}: InterestsProps) {
  return (
    <div className="md:col-span-2">
      <label className="block mb-4 text-lg font-semibold text-gray-700">
         Choose Your Interests
      </label>

      <div className="flex flex-wrap gap-3">
        {interests.map((interest) => (
          <button
            key={interest}
            type="button"
            onClick={() => toggleInterest(interest)}
            className={`px-5 py-3 rounded-full border transition-all duration-300 ${
              selected.includes(interest)
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 hover:bg-blue-50"
            }`}
          >
            {interest}
          </button>
        ))}
      </div>
    </div>
  );
}