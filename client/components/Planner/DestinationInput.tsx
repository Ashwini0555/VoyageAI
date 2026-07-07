type DestinationInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function DestinationInput({
  value,
  onChange,
}: DestinationInputProps) {
  return (
    <div>
      <label className="block mb-2 text-lg font-semibold text-gray-700">
        🌍 Destination
      </label>

      <input
        type="text"
        name="destination"
        value={value}
        onChange={onChange}
        placeholder="Example: Japan"
        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
}