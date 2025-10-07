
export type Wallet = { points: number };
const memory = new Map<string, Wallet>();
export function getWallet(id: string){ if(!memory.has(id)) memory.set(id,{points:0}); return memory.get(id)!; }
export function addPoints(id: string, pts: number){ const w=getWallet(id); w.points+=pts; return w; }
export function redeem(id: string, pts:number){ const w=getWallet(id); if(w.points<pts) return null; w.points-=pts; return w; }
