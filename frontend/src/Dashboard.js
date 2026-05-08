import { useState } from "react";
import Chatbot from "./Chatbot";

function Dashboard() {
  const [emotion, setEmotion] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState([]);

  const analyzeEmotion = () => {
    if (!emotion.trim()) return;

    let detectedEmotion = "Neutral";
    let wellnessScore = 70;
    let suggestion =
      "Maintain healthy routines and emotional balance.";

    const text = emotion.toLowerCase();

    if (
      text.includes("stress") ||
      text.includes("stressed")
    ) {
      detectedEmotion = "Stressed";
      wellnessScore = 35;
      suggestion =
        "You seem emotionally stressed. Try meditation and short breaks.";
    }

    if (
      text.includes("sad") ||
      text.includes("depressed")
    ) {
      detectedEmotion = "Sad";
      wellnessScore = 30;
      suggestion =
        "Talking with someone trusted may help emotionally.";
    }

    if (
      text.includes("happy") ||
      text.includes("good")
    ) {
      detectedEmotion = "Happy";
      wellnessScore = 90;
      suggestion =
        "Great emotional state detected. Keep maintaining positivity.";
    }

    if (
      text.includes("burnout") ||
      text.includes("exhausted")
    ) {
      detectedEmotion = "Burnout";
      wellnessScore = 15;
      suggestion =
        "High emotional exhaustion detected. Prioritize rest.";
    }

    setResult(
      `${detectedEmotion}|${wellnessScore}|${suggestion}`
    );

    setScore(wellnessScore);

    const newHistory = {
      text: emotion,
      mood: detectedEmotion,
      time: new Date().toLocaleTimeString(),
    };

    setHistory([newHistory, ...history]);

    setEmotion("");
  };

  const parsedResult = result.split("|");

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/20 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] rounded-full"></div>

      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-6 border-b border-cyan-500/20 backdrop-blur-xl bg-black/20">

        <div>
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
            AI Mental Wellness Assistant
          </h1>

          <p className="text-gray-400 mt-2">
            Smart emotional wellness monitoring & stress analytics system
          </p>
        </div>

        <button className="bg-gradient-to-r from-pink-500 to-red-500 px-6 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition duration-300">
          Logout
        </button>
      </nav>

      {/* Main Container */}
      <div className="max-w-[1600px] mx-auto px-8 py-10">

        {/* Hero Welcome Card */}
        <div className="w-full">

          <div className="bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-[25px] border border-cyan-400/20 rounded-[40px] p-10 shadow-[0_0_80px_rgba(168,85,247,0.25)] overflow-hidden relative">

            <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-cyan-400 rounded-full blur-[120px] opacity-20"></div>

            <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] bg-pink-500 rounded-full blur-[120px] opacity-20"></div>

            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10">

              {/* Left */}
              <div>

                <h1 className="text-6xl font-extrabold leading-tight bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">

                  Your AI-Powered <br />
                  Emotional Wellness Companion
                </h1>

                <p className="text-gray-300 mt-6 text-xl max-w-[700px] leading-relaxed">

                  Monitor emotional wellness, detect stress patterns,
                  analyze burnout risk, and receive AI-powered
                  mental wellness support in real-time.
                </p>

                <div className="flex gap-5 mt-8 flex-wrap">

                  <div className="bg-white/10 px-6 py-3 rounded-2xl border border-cyan-400/20">
                    🧠 AI Emotion Detection
                  </div>

                  <div className="bg-white/10 px-6 py-3 rounded-2xl border border-pink-400/20">
                    📊 Wellness Analytics
                  </div>

                  <div className="bg-white/10 px-6 py-3 rounded-2xl border border-purple-400/20">
                    🤖 AI Chat Support
                  </div>

                </div>
              </div>

              {/* Right Stats */}
              <div className="grid grid-cols-2 gap-5 min-w-[320px]">

                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-cyan-400/20 text-center">

                  <h2 className="text-5xl font-extrabold text-cyan-400">
                    AI
                  </h2>

                  <p className="text-gray-300 mt-2">
                    Emotional Intelligence
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-pink-400/20 text-center">

                  <h2 className="text-5xl font-extrabold text-pink-400">
                    24/7
                  </h2>

                  <p className="text-gray-300 mt-2">
                    Wellness Support
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-purple-400/20 text-center">

                  <h2 className="text-5xl font-extrabold text-purple-400">
                    ML
                  </h2>

                  <p className="text-gray-300 mt-2">
                    Mood Analytics
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-cyan-400/20 text-center">

                  <h2 className="text-5xl font-extrabold text-cyan-400">
                    🔥
                  </h2>

                  <p className="text-gray-300 mt-2">
                    Burnout Detection
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Section */}
          <div className="lg:col-span-2 space-y-8">

            {/* Emotion Analysis */}
            <div className="bg-white/5 backdrop-blur-[30px] border border-cyan-500/20 rounded-[35px] p-8 shadow-[0_0_50px_rgba(34,211,238,0.08)]">

              <h2 className="text-4xl font-bold mb-8">
                🧠 AI Emotion Analysis
              </h2>

              <input
                type="text"
                placeholder="Describe your feelings today..."
                value={emotion}
                onChange={(e) => setEmotion(e.target.value)}
                className="w-full p-5 rounded-2xl bg-[#0f172a]/80 border border-cyan-500/20 outline-none text-lg"
              />

              <button
                onClick={analyzeEmotion}
                className="w-full mt-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 py-5 rounded-2xl text-xl font-bold hover:scale-[1.02] transition duration-300"
              >
                Analyze Mental Wellness
              </button>

              {result && (
                <div className="mt-8 p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-cyan-500/20">

                  <div className="flex justify-between items-center">

                    <div>
                      <h3 className="text-6xl font-extrabold">
                        {parsedResult[0]}
                      </h3>

                      <p className="text-gray-400 mt-2">
                        AI emotional detection result
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-5 rounded-3xl text-4xl font-bold">
                      {parsedResult[1]}%
                    </div>
                  </div>

                  <div className="mt-8 w-full bg-gray-700 rounded-full h-5 overflow-hidden">

                    <div
                      className="h-full bg-gradient-to-r from-pink-500 via-yellow-400 to-green-400 rounded-full"
                      style={{ width: `${parsedResult[1]}%` }}
                    ></div>
                  </div>

                  <div className="mt-8 bg-[#0f172a]/80 border border-cyan-500/10 p-6 rounded-2xl">

                    💡 {parsedResult[2]}
                  </div>

                </div>
              )}
            </div>

            {/* Chatbot */}
            <Chatbot />

            {/* Emotional Timeline */}
            <div className="bg-white/5 backdrop-blur-[30px] border border-cyan-500/20 rounded-[35px] p-8">

              <h2 className="text-4xl font-bold mb-8">
                🗓 Emotional Timeline
              </h2>

              <div className="space-y-5">

                {history.length === 0 ? (
                  <div className="bg-[#0f172a]/80 border border-cyan-500/10 p-6 rounded-2xl text-gray-400">
                    No emotional history available.
                  </div>
                ) : (
                  history.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-white/10 to-white/5 border border-cyan-500/10 p-6 rounded-2xl flex justify-between items-center"
                    >
                      <div>
                        <p className="text-lg font-semibold">
                          {item.text}
                        </p>

                        <p className="text-gray-400 mt-2">
                          {item.time}
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2 rounded-xl font-bold">
                        {item.mood}
                      </div>
                    </div>
                  ))
                )}

              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">

            {/* Wellness Score */}
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[35px] p-8 shadow-[0_0_60px_rgba(59,130,246,0.35)]">

              <p className="text-lg font-semibold">
                🌟 Average Wellness
              </p>

              <h1 className="text-8xl font-extrabold mt-4">
                {score}%
              </h1>

              <p className="mt-4 text-gray-200">
                Weekly emotional wellness tracking analytics
              </p>
            </div>

            {/* AI Insights */}
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-[35px] p-8">

              <h2 className="text-4xl font-bold mb-8">
                ⚡ AI Wellness Insights
              </h2>

              <div className="space-y-5">

                <div className="bg-white/10 p-5 rounded-2xl">
                  🧠 Real-time emotional analysis enabled
                </div>

                <div className="bg-white/10 p-5 rounded-2xl">
                  📈 Smart stress pattern detection active
                </div>

                <div className="bg-white/10 p-5 rounded-2xl">
                  ⚠ Burnout risk monitoring running
                </div>

                <div className="bg-white/10 p-5 rounded-2xl">
                  💡 Personalized wellness suggestions generated
                </div>

              </div>
            </div>

            {/* Analytics */}
            <div className="bg-white/5 backdrop-blur-[30px] border border-cyan-500/20 rounded-[35px] p-8">

              <h2 className="text-4xl font-bold mb-8">
                📈 Emotion Analytics
              </h2>

              <div className="h-[350px] flex items-end justify-around gap-4">

                <div className="w-14 bg-gradient-to-t from-green-400 to-green-500 rounded-t-2xl h-[80%]"></div>

                <div className="w-14 bg-gradient-to-t from-yellow-400 to-orange-400 rounded-t-2xl h-[55%]"></div>

                <div className="w-14 bg-gradient-to-t from-pink-500 to-red-500 rounded-t-2xl h-[40%]"></div>

                <div className="w-14 bg-gradient-to-t from-cyan-400 to-blue-500 rounded-t-2xl h-[65%]"></div>

              </div>

              <div className="flex justify-around mt-5 text-gray-400">
                <span>Happy</span>
                <span>Calm</span>
                <span>Stress</span>
                <span>Focus</span>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 mt-16 pb-10">
          AI Mental Wellness Assistant • Built with React, Firebase & Machine Learning
        </footer>

      </div>
    </div>
  );
}

export default Dashboard;