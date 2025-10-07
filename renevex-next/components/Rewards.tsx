
import { useEffect, useState } from 'react';

export default function Rewards(){
  const [code,setCode] = useState('');
  const [pts,setPts] = useState(0);
  useEffect(()=>{
    const key='rx_code'; let c=localStorage.getItem(key);
    if(!c){ c='RX-'+Math.random().toString(36).slice(2,8).toUpperCase(); localStorage.setItem(key,c); }
    setCode(c); refresh();
  },[]);
  async function refresh(){ const r=await fetch('/api/referral'); const j=await r.json(); setPts(j.points||0); }
  async function redeem(){ const r=await fetch('/api/redeem',{method:'POST'}); const j=await r.json(); if(j.ok){ setPts(j.points||pts);} else { alert(j.error||'Need 100 pts'); } }
  return (
    <section id="rewards" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Referral & Rewards</h2>
          <p className="mt-2 text-slate-600">Invite friends, earn points, convert to $$ on next detail. 100 pts = $10.</p>
        </div>
        <div className="bg-slate-50 rounded-3xl p-6 ring-1 ring-slate-200 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">Your Referral Code</h3>
            <div className="mt-2 flex gap-2 items-center">
              <input className="w-full rounded-xl border px-3 py-2" readOnly value={code} />
              <button onClick={()=>{navigator.clipboard.writeText(code)}} className="px-3 py-2 rounded-xl bg-blue-600 text-white">Copy</button>
            </div>
            <p className="mt-2 text-sm text-slate-600">Each completed booking via your code gives <b>100 pts</b>.</p>
          </div>
          <div>
            <h3 className="font-semibold">Your Balance</h3>
            <div className="mt-2 text-2xl font-bold"><span>{pts}</span> pts ≈ ${Math.floor(pts/10)}</div>
            <p className="text-sm text-slate-600">Redeem at checkout.</p>
            <button onClick={redeem} className="mt-3 px-3 py-2 rounded-xl ring-1 ring-slate-300">Redeem 100 pts</button>
          </div>
        </div>
      </div>
    </section>
  );
}
