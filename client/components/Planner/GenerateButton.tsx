type GenerateButtonProps = {
  onClick: () => void;
};

export default function GenerateButton({
  onClick,
}: GenerateButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-lg font-semibold transition duration-300"
    >
      ✨ Generate My Trip
    </button>
  );
}