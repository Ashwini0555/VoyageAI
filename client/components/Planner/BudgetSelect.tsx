type BudgetSelectProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function BudgetSelect({
  value,
  onChange,
}: BudgetSelectProps) {
  return (
    <div>
      <label className="block mb-2 text-lg font-semibold text-gray-700">
         Budget
      </label>

      <select
        name="budget"
        value={value}
        onChange={(e) => {
  console.log("Budget changed:", e.target.value);
  onChange(e);
}}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <option value="">Select Budget</option>
        <option value="Economy">Economy</option>
        <option value="Medium">Medium</option>
        <option value="Luxury">Luxury</option>
      </select>
    </div>
  );
}