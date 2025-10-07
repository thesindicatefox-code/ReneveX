
import { useState } from 'react';

export default function BookingForm(){
  const [status,setStatus] = useState<string|undefined>();
  async function submit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = Object.fromEntries(fd.entries());
    const res = await fetch('/api/booking',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body)});
    const json = await res.json();
    setStatus(json.ok? 'Thanks! We will confirm via email/Telegram.' : (json.error||'Error'));
  }
  const min = new Date(Date.now()+86400000).toISOString().slice(0,10);
  return (
    <section id="booking" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-blue-600/20 blur-2xl"/>
            <h2 className="text-3xl font-bold">Book Your Detail</h2>
            <p className="mt-2 text-slate-300">Pick a date & package. We'll come to you with water and power.</p>
            <form onSubmit={submit} className="mt-6 grid grid-cols-1 gap-4">
              <input required name="name" placeholder="Full Name" className="mt-1 w-full rounded-xl bg-white text-slate-900 px-3 py-2"/>
              <div className="grid sm:grid-cols-2 gap-4">
                <input required name="phone" placeholder="(612) ___‑____" className="w-full rounded-xl bg-white text-slate-900 px-3 py-2"/>
                <input required name="email" type="email" placeholder="you@example.com" className="w-full rounded-xl bg-white text-slate-900 px-3 py-2"/>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input required name="date" type="date" min={min} className="w-full rounded-xl bg-white text-slate-900 px-3 py-2"/>
                <select required name="time" className="w-full rounded-xl bg-white text-slate-900 px-3 py-2">
                  <option value="">Time…</option><option>8:00 AM</option><option>10:30 AM</option><option>1:00 PM</option><option>3:30 PM</option>
                </select>
              </div>
              <select required name="package" className="w-full rounded-xl bg-white text-slate-900 px-3 py-2">
                <option value="">Choose package…</option>
                <option>Express Wash</option>
                <option>Interior Standard</option>
                <option>Full Detail</option>
                <option>Premium Protection</option>
              </select>
              <input required name="address" placeholder="Street, City" className="w-full rounded-xl bg-white text-slate-900 px-3 py-2"/>
              <textarea name="notes" rows={3} placeholder="Vehicle type, special requests…" className="w-full rounded-xl bg-white text-slate-900 px-3 py-2"/>
              <div className="flex items-center gap-3 text-sm">
                <a href="https://t.me/vpnxl" target="_blank" className="underline">Telegram (@vpnxl)</a>
                <a href="mailto:vladyslavpukas08@gmail.com" className="underline">Email</a>
              </div>
              <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-2xl bg-blue-600 text-white py-3 font-semibold shine">Request Booking</button>
              {status && <div className="text-sm mt-2">{status}</div>}
            </form>
          </div>
          <div className="grid content-start gap-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold">Why Book Early?</h3>
              <ul className="mt-3 space-y-2 text-slate-600 text-sm">
                <li>• Lock your preferred date & time</li>
                <li>• Early Bird 10% discount (7+ days in advance)</li>
                <li>• Priority service during peak season</li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold">Service Policy</h3>
              <ul className="mt-3 space-y-2 text-slate-600 text-sm">
                <li>• We bring water and power—self‑contained</li>
                <li>• Final price confirmed on‑site; size/condition may affect cost</li>
                <li>• 24h reschedule policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
