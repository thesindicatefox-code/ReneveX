
import type { NextApiRequest, NextApiResponse } from 'next';
import { getWallet, addPoints } from '@/lib/rewards';

export default function handler(req: NextApiRequest, res: NextApiResponse){
  const id = (req.headers['x-user'] as string) || 'demo-user';
  if(req.method==='POST'){
    const { code } = req.body||{}; if(!code) return res.status(400).json({ok:false,error:'No code'});
    const inviter = code; // demo mapping
    addPoints(inviter, 100);
    return res.status(200).json({ok:true});
  }
  const w = getWallet(id);
  return res.status(200).json({ok:true, points: w.points});
}
