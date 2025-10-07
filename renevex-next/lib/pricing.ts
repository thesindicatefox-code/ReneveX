
export type CarSize = 'sedan'|'suv'|'xl';
export type Soil = 'light'|'medium'|'heavy';
export type Addon = 'engine'|'odor'|'ceramic'|'petHair';

const base = { express: 85, interior: 145, full: 250, premium: 400 };
const sizeK: Record<CarSize, number> = { sedan: 1, suv: 1.15, xl: 1.3 };
const soilK: Record<Soil, number> = { light: 1, medium: 1.15, heavy: 1.35 };
const addons: Record<Addon, number> = { engine: 40, odor: 35, ceramic: 180, petHair: 45 };

export function calc(pkg: keyof typeof base, size: CarSize, soil: Soil, chosen: Addon[], earlyBird=false){
  let subtotal = base[pkg] * sizeK[size] * soilK[soil] + chosen.reduce((s,a)=> s+addons[a], 0);
  const discount = earlyBird ? subtotal * 0.10 : 0;
  const total = Math.round((subtotal - discount));
  return { subtotal: Math.round(subtotal), discount: Math.round(discount), total };
}
