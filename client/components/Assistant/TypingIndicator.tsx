export default function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-5 py-4 shadow-md">
        <p className="text-sm font-semibold mb-2">
          VoyageAI
        </p>

        <div className="flex gap-2">
          <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></span>
          <span
            className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
            style={{ animationDelay: "0.15s" }}
          ></span>
          <span
            className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></span>
        </div>
      </div>
    </div>
  );
}