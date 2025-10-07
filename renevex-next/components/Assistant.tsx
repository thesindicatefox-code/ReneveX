
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function advise({ budget, kids, pets, finish, time }: { budget: 'low'|'mid'|'high'; kids:boolean; pets:boolean; finish:'matte'|'gloss'; time:'quick'|'standard'|'deluxe' }){
  let pkg: 'express'|'interior'|'full'|'premium' = 'interior';
  if (budget==='low' && time==='quick') pkg='express';
  if (pets || kids) pkg='full';
  if (finish==='gloss' && budget==='high') pkg='premium';
  if (time==='deluxe') pkg='premium';
  const reason = {
    express: 'Quick refresh for exterior and basics.',
    interior: 'Most popular: cabin-focused clean, plastics and glass.',
    full: 'Inside & out. Great if kids/pets ride often.',
    premium: 'Gloss & protection: polish + ceramic topper.'
  }[pkg];
  return { pkg, reason };
}

export default function Assistant(){
  const [open,setOpen] = useState(false);
  const [state,setState] = useState({ budget:'mid' as 'low'|'mid'|'high', kids:false, pets:false, finish:'gloss' as 'matte'|'gloss', time:'standard' as 'quick'|'standard'|'deluxe' });
  const rec = useMemo(()=>advise(state),[state]);

  return (
    <section id="assistant" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">ReneveX AI Advisor</h2>
        <p className="mt-2 text-slate-600">Answer a few questions — get a tailored package.</p>
        <button onClick={()=>setOpen(true)} className="mt-4 inline-flex items-center px-5 py-3 rounded-2xl bg-blue-600 text-white font-semibold">Start</button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50 bg-black/60 grid place-items-center p-4">
            <motion.div initial={{ y: 24, opacity:0 }} animate={{ y:0, opacity:1 }} exit={{ y:24, opacity:0 }} transition={{ type:'spring', stiffness:260, damping:20 }} className="max-w-xl w-full bg-white rounded-3xl p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-bold">We’ll pick a package</h3>
                <button onClick={()=>setOpen(false)} className="text-slate-500 hover:text-slate-800">✕</button>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-4 text-left">
                <label className="text-sm">Budget
                  <select className="mt-1 w-full rounded-xl border px-3 py-2" value={state.budget} onChange={e=> setState(s=>({...s, budget: e.target.value as any}))}>
                    <option value="low">Low</option><option value="mid">Mid</option><option value="high">High</option>
                  </select>
                </label>
                <label className="text-sm">Finish
                  <select className="mt-1 w-full rounded-xl border px-3 py-2" value={state.finish} onChange={e=> setState(s=>({...s, finish: e.target.value as any}))}>
                    <option value="gloss">Gloss</option><option value="matte">Matte</option>
                  </select>
                </label>
                <label className="text-sm inline-flex items-center gap-2 mt-2">
                  <input type="checkbox" checked={state.kids} onChange={e=> setState(s=>({...s, kids: e.target.checked }))}/> Kids
                </label>
                <label className="text-sm inline-flex items-center gap-2 mt-2">
                  <input type="checkbox" checked={state.pets} onChange={e=> setState(s=>({...s, pets: e.target.checked }))}/> Pets
                </label>
                <label className="text-sm sm:col-span-2">Time
                  <select className="mt-1 w-full rounded-xl border px-3 py-2" value={state.time} onChange={e=> setState(s=>({...s, time: e.target.value as any}))}>
                    <option value="quick">Quick</option><option value="standard">Standard</option><option value="deluxe">Deluxe</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200 text-left">
                <div className="text-sm text-slate-500">Recommendation</div>
                <div className="text-xl font-bold capitalize">{rec.pkg}</div>
                <div className="text-slate-600 mt-1">{rec.reason}</div>
              </div>
              <div className="mt-4 flex gap-3">
                <a href="#booking" className="px-4 py-2 rounded-xl bg-blue-600 text-white">Book now</a>
                <button onClick={()=>setOpen(false)} className="px-4 py-2 rounded-xl ring-1 ring-slate-300">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
