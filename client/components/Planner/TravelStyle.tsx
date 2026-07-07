type TravelStyleProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function TravelStyle({
  value,
  onChange,
}: TravelStyleProps) {
  return (
    <div>
      <label className="block mb-2 text-lg font-semibold text-gray-700">
        ✈️ Travel Style
      </label>

      <select
        name="travelStyle"
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <option value="">Choose Style</option>
        <option value="Solo">Solo</option>
        <option value="Family">Family</option>
        <option value="Friends">Friends</option>
        <option value="Couple">Couple</option>
      </select>
    </div>
  );
}