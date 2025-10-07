
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method!=='POST') return res.status(405).json({ok:false,error:'Method not allowed'});
  try{
    const { name, phone, email, date, time, address, notes, package: pkg } = req.body || {};
    if(!name||!phone||!email||!date||!time||!address){
      return res.status(400).json({ok:false,error:'Missing fields'});
    }
    if(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID){
      const msg = `🧽 New booking\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nWhen: ${date} ${time}\nPkg: ${pkg||'-'}\nAddress: ${address}\nNotes: ${notes||'-'}`;
      await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,{
        method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ chat_id: process.env.TELEGRAM_CHAT_ID, text: msg })
      });
    }
    return res.status(200).json({ok:true});
  } catch(err:any){
    return res.status(500).json({ok:false,error:err.message});
  }
}
