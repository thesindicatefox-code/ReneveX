
import { useMemo, useState } from 'react';
import { calc, CarSize, Soil, Addon } from '@/lib/pricing';

export default function Calculator(){
  const [pkg,setPkg] = useState<'express'|'interior'|'full'|'premium'>('interior');
  const [size,setSize] = useState<CarSize>('sedan');
  const [soil,setSoil] = useState<Soil>('light');
  const [chosen,setChosen] = useState<Addon[]>([]);
  const [early,setEarly] = useState(false);

  const price = useMemo(()=>calc(pkg,size,soil,chosen,early),[pkg,size,soil,chosen,early]);

  function toggle(a:Addon){ setChosen(prev=> prev.includes(a)? prev.filter(x=>x!==a): [...prev,a]); }

  return (
    <section id="calculator" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">Instant Quote Calculator</h2>
        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="rounded-3xl p-6 ring-1 ring-slate-200">
            <label className="block text-sm text-slate-500">Package</label>
            <select className="mt-1 w-full rounded-xl border px-3 py-2" value={pkg} onChange={e=> setPkg(e.target.value as any)}>
              <option value="express">Express Wash</option>
              <option value="interior">Interior Standard</option>
              <option value="full">Full Detail</option>
              <option value="premium">Premium Protection</option>
            </select>
            <label className="block text-sm text-slate-500 mt-4">Car size</label>
            <select className="mt-1 w-full rounded-xl border px-3 py-2" value={size} onChange={e=> setSize(e.target.value as CarSize)}>
              <option value="sedan">Sedan / Coupe</option>
              <option value="suv">SUV / Crossover</option>
              <option value="xl">XL / 3rd Row</option>
            </select>
            <label className="block text-sm text-slate-500 mt-4">Soiling level</label>
            <select className="mt-1 w-full rounded-xl border px-3 py-2" value={soil} onChange={e=> setSoil(e.target.value as Soil)}>
              <option value="light">Light</option>
              <option value="medium">Medium</option>
              <option value="heavy">Heavy</option>
            </select>
            <div className="mt-4 text-sm text-slate-600">Add-ons</div>
            <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
              {(['engine','odor','ceramic','petHair'] as Addon[]).map(a=> (
                <label key={a} className="inline-flex items-center gap-2 ring-1 ring-slate-200 rounded-xl px-3 py-2">
                  <input type="checkbox" checked={chosen.includes(a)} onChange={()=>toggle(a)} />
                  <span className="capitalize">{a}</span>
                </label>
              ))}
            </div>
            <label className="mt-4 inline-flex items-center gap-2">
              <input type="checkbox" checked={early} onChange={e=> setEarly(e.target.checked)} />
              Early Bird (7+ days) — 10% off
            </label>
          </div>
          <div className="rounded-3xl p-6 ring-1 ring-slate-200 lg:col-span-2">
            <h3 className="text-xl font-semibold">Your Estimate</h3>
            <div className="mt-4 grid sm:grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-xs text-slate-500">Subtotal</div>
                <div className="text-3xl font-extrabold">${price.subtotal}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-xs text-slate-500">Discount</div>
                <div className="text-3xl font-extrabold">-${price.discount}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-xs text-slate-500">Total</div>
                <div className="text-3xl font-extrabold">${price.total}</div>
              </div>
            </div>
            <a href="#booking" className="mt-6 inline-flex items-center px-5 py-3 rounded-2xl bg-blue-600 text-white font-semibold">Book this estimate</a>
          </div>
        </div>
      </div>
    </section>
  );
}
