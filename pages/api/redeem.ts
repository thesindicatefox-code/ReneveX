
import type { NextApiRequest, NextApiResponse } from 'next';
import { redeem, getWallet } from '@/lib/rewards';

export default function handler(req: NextApiRequest, res: NextApiResponse){
  const id = (req.headers['x-user'] as string) || 'demo-user';
  if(req.method!=='POST') return res.status(405).json({ok:false});
  const out = redeem(id, 100);
  if(!out) return res.status(400).json({ok:false,error:'Need 100 pts'});
  return res.status(200).json({ok:true, points: getWallet(id).points});
}
