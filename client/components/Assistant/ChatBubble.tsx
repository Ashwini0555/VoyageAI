type Props = {
  sender: string;
  text: string;
};

export default function ChatBubble({
  sender,
  text,
}: Props) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[75%] rounded-2xl px-5 py-4 shadow-md ${
          isUser
            ? "bg-blue-600 text-white rounded-br-md"
            : "bg-white border border-gray-200 text-gray-800 rounded-bl-md"
        }`}
      >
        <p className="text-sm font-semibold mb-2">
          {isUser ? "You" : "VoyageAI"}
        </p>

        <p className="whitespace-pre-wrap leading-7">
          {text}
        </p>
      </div>
    </div>
  );
}