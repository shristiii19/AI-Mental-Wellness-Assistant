import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";

import { auth } from "./firebase";

function Signup({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Signup successful ✅");

      setIsLoggedIn(true);

    } catch (error) {
      alert(error.message);
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login successful ✅");

      setIsLoggedIn(true);

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white px-6">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-[25px] border border-cyan-500/20 rounded-[35px] p-10 shadow-[0_0_60px_rgba(34,211,238,0.15)]">

        <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">

          AI Mental Wellness
        </h1>

        <p className="text-center text-gray-400 mt-4">
          Secure Login & Signup
        </p>

        <div className="mt-10 space-y-5">

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full p-5 rounded-2xl bg-[#0f172a]/80 border border-cyan-500/20 outline-none"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full p-5 rounded-2xl bg-[#0f172a]/80 border border-cyan-500/20 outline-none"
          />

          <button
            onClick={signup}
            className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 py-4 rounded-2xl text-xl font-bold hover:scale-[1.02] transition duration-300"
          >
            Sign Up
          </button>

          <button
            onClick={login}
            className="w-full bg-white/10 border border-cyan-500/20 py-4 rounded-2xl text-xl font-bold hover:bg-white/20 transition duration-300"
          >
            Login
          </button>

        </div>
      </div>
    </div>
  );
}

export default Signup;