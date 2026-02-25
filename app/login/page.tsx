"use client";
import { createClient } from "@/lib/supabase";
import { useState } from "react";

export default function Login() {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` }
    });
    if (!error) setSent(true);
    else alert(error.message);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-10 rounded-[40px] shadow-2xl border border-gray-50">
        <h1 className="text-3xl font-black text-cyan-600 mb-2 text-center">JOB PORTAL</h1>
        <p className="text-gray-400 text-center mb-10 font-medium">စနစ်ထဲသို့ ဝင်ရောက်ရန်</p>
        
        {sent ? (
          <div className="bg-green-50 text-green-700 p-6 rounded-2xl text-center font-bold">
            Email ပို့လိုက်ပါပြီ။ Check လုပ်ပေးပါ။
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              required
              type="email" 
              placeholder="Your Email Address" 
              className="w-full p-5 rounded-2xl bg-gray-50 border border-gray-100 outline-none focus:ring-4 focus:ring-cyan-100 transition-all" 
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="w-full bg-cyan-600 text-white py-5 rounded-2xl font-bold text-lg shadow-lg hover:bg-cyan-700 transition-all">
              Login Now
            </button>
          </form>
        )}
      </div>
    </div>
  );
}