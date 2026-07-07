type DaysInputProps = {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function DaysInput({
  value,
  onChange,
}: DaysInputProps) {
  return (
    <div>
      <label className="block mb-2 text-lg font-semibold text-gray-700">
        📅 Number of Days
      </label>

      <input
        type="number"
        name="days"
        value={value}
        onChange={onChange}
        min="1"
        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
}