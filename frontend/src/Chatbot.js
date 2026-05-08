import { useState } from "react";

function Chatbot() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const generateReply = (input) => {
    const text = input.toLowerCase();

    if (
      text.includes("stress") ||
      text.includes("stressed")
    ) {
      return "You seem emotionally stressed. Try taking short breaks, deep breathing, and avoid overworking yourself.";
    }

    if (
      text.includes("sad") ||
      text.includes("depressed")
    ) {
      return "I'm sorry you're feeling low. Talking with someone trusted and taking care of yourself may help.";
    }

    if (
      text.includes("anxious") ||
      text.includes("anxiety")
    ) {
      return "Anxiety can feel overwhelming. Try mindfulness and calming exercises.";
    }

    if (
      text.includes("burnout") ||
      text.includes("exhausted")
    ) {
      return "You may be mentally exhausted. Proper rest and reducing workload may help.";
    }

    if (
      text.includes("happy") ||
      text.includes("good")
    ) {
      return "That's wonderful to hear. Keep maintaining healthy emotional habits.";
    }

    return "I'm here to support your mental wellness. Remember to prioritize self-care and emotional balance.";
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    const aiResponse = generateReply(message);

    setReply(aiResponse);
  };

  return (
    <div className="bg-white/5 backdrop-blur-[30px] border border-cyan-500/20 rounded-[35px] p-8 mt-8">

      <h2 className="text-3xl font-bold mb-6">
        🤖 AI Wellness Chatbot
      </h2>

      <textarea
        placeholder="Talk with AI therapist..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-5 rounded-2xl bg-[#0f172a]/80 border border-cyan-500/20 text-white outline-none h-[150px]"
      />

      <button
        onClick={sendMessage}
        className="mt-5 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 py-4 rounded-2xl text-xl font-bold hover:scale-[1.02] transition duration-300"
      >
        Ask AI
      </button>

      {reply && (
        <div className="mt-6 bg-[#0f172a]/80 p-6 rounded-2xl border border-cyan-500/10">
          <p className="text-lg leading-relaxed">
            {reply}
          </p>
        </div>
      )}
    </div>
  );
}

export default Chatbot;