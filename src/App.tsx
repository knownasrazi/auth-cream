import { useState } from "react";
export default function App(){
  const [email,setEmail]=useState(""); const [sent,setSent]=useState(false);
  function send(){ if(!email.includes("@")) return alert("Enter email"); setSent(true); }
  return (
    <main className="bg-[#fdfcfa] min-h-screen text-[#1a1a1a] flex items-center justify-center px-6">
      <div className="w-full max-w-sm rounded-2xl border border-[#ebe7e0] bg-white p-6">
        <h1 className="text-xl font-light">auth-cream</h1>
        <p className="text-sm text-[#5a5754]">Magic link sign in — no passwords.</p>
        {!sent ? (
          <div className="mt-4 space-y-3">
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" className="w-full rounded-xl border border-[#ebe7e0] px-3 py-2 text-sm" />
            <button onClick={send} className="w-full rounded-xl bg-[#1a1a1a] py-2 text-sm text-white">Send magic link</button>
            <div className="flex gap-2">
              <button className="flex-1 rounded-xl border border-[#ebe7e0] py-2 text-sm">GitHub</button>
              <button className="flex-1 rounded-xl border border-[#ebe7e0] py-2 text-sm">Google</button>
            </div>
          </div>
        ) : <p className="mt-4 text-sm text-[#5a5754]">Check your email — link sent to {email}</p>}
      </div>
    </main>
  );
}
