type TravelersInputProps = {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TravelersInput({
  value,
  onChange,
}: TravelersInputProps) {
  return (
    <div>
      <label className="block mb-2 text-lg font-semibold text-gray-700">
         Travelers
      </label>

      <input
        type="number"
        name="travelers"
        min="1"
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
}