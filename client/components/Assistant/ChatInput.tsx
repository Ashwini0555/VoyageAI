"use client";

import { useState, useRef } from "react";
import { Mic } from "lucide-react";
import { askAssistant } from "@/services/assistantApi";

type Message = {
  sender: string;
  text: string;
};

type Props = {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ChatInput({
  messages,
  setMessages,
  loading,
  setLoading,
}: Props) {
  const [input, setInput] = useState("");

  const recognitionRef = useRef<any>(null);

  const startListening = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };

    recognition.onerror = (event: any) => {
      console.log(event.error);
    };

    recognition.start();

    recognitionRef.current = recognition;
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentInput = input;

    setInput("");

    setLoading(true);

    try {
      const data = await askAssistant(currentInput);

      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          text: data.reply,
        },
      ]);

      const speech = new SpeechSynthesisUtterance(
        data.reply
      );

      speech.lang = "en-US";

      window.speechSynthesis.speak(speech);

    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          text: "Sorry, I couldn't process your request.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-t bg-white p-5">

      <div className="flex items-center gap-3">

        <input
          type="text"
          placeholder="Ask anything about your trip..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          className="flex-1 border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <button
          onClick={startListening}
          className="p-4 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
          title="Voice Input"
        >
          <Mic size={22} />
        </button>

        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 disabled:bg-gray-400 transition"
        >
          Send
        </button>

      </div>

    </div>
  );
}