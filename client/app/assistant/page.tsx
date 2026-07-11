"use client";

import { useState, useRef, useEffect } from "react";
import ChatBubble from "@/components/Assistant/ChatBubble";
import ChatInput from "@/components/Assistant/ChatInput";
import TypingIndicator from "@/components/Assistant/TypingIndicator";

type Message = {
  sender: string;
  text: string;
};

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "assistant",
      text: "Hello! I'm VoyageAI Assistant. How can I help you plan your trip today?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl h-[80vh] flex flex-col">

        <div className="border-b p-6">
          <h1 className="text-3xl font-bold text-slate-800">
            VoyageAI Assistant
          </h1>

          <p className="text-gray-500 mt-2">
            Your personal AI travel companion.
          </p>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">

          {messages.map((msg, index) => (
            <ChatBubble
              key={index}
              sender={msg.sender}
              text={msg.text}
            />
          ))}

          {loading && <TypingIndicator />}

          <div ref={bottomRef} />

        </div>

        <ChatInput
          messages={messages}
          setMessages={setMessages}
          loading={loading}
          setLoading={setLoading}
        />

      </div>
    </main>
  );
}