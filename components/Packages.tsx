
import { useState } from 'react';
import clsx from 'clsx';

type PkgKey = 'express'|'interior'|'full'|'premium';
const data = {
  express: { title:'Express Wash', price:'$75–$95', items:['Pre‑rinse & foam','Two‑bucket wash & dry','Wheels, tires & windows'] },
  interior:{ title:'Interior Standard', price:'$130–$160', items:['Full vacuum incl. crevices','Plastics cleaned & dressed','Glass inside/out'] },
  full:    { title:'Full Detail', price:'$220–$280', items:['Express Wash + Interior','Clay where needed','Spray sealant 3–4 months'] },
  premium: { title:'Premium Protection', price:'$350–$450', items:['Decon (iron/tar)','One‑step polish','Ceramic spray 6–9 mo'] },
} as const;

export default function Packages(){
  const [selected, setSelected] = useState<PkgKey>('interior');
  return (
    <section id="packages" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Service Packages — Minnesota average</h2>
          <p className="mt-2 text-slate-600">SUVs/3rd row +$20–$40; heavy soiling/pet hair quoted on arrival.</p>
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-sm">Selected: <b>{selected}</b></div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          { (Object.keys(data) as PkgKey[]).map(key=>{
            const pkg = data[key];
            const isSel = selected===key;
            return (
              <div key={key} className={clsx('bg-white rounded-3xl p-6 shadow-sm ring-1 ring-slate-200 flex flex-col transition', isSel && 'ring-2 ring-blue-600 shadow-md')}> 
                <h3 className="text-xl font-semibold">{pkg.title}</h3>
                <p className="mt-2 text-slate-600">{key==='interior'?'Most requested': key==='premium'?'Gloss & durability':'Quick refresh'}</p>
                <div className="mt-4 text-4xl font-extrabold">{pkg.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {pkg.items.map(s=> <li key={s}>• {s}</li>)}
                </ul>
                <button onClick={()=> setSelected(key)} className={clsx('mt-6 inline-flex items-center justify-center rounded-xl text-white py-2.5 font-semibold transition', isSel ? 'bg-blue-600' : 'bg-slate-900 hover:bg-slate-800')}>
                  {isSel? 'Selected' : 'Select'}
                </button>
              </div>
            );
          }) }
        </div>
      </div>
    </section>
  );
}
