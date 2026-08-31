const wageHeavy = new Set(['msmt','interior','justice','health','culture','foreign','finance']);
const investmentHeavy = new Set(['transport','agriculture','industry','environment','regional']);

export function projectionRule(id, type, assumptions) {
  if (type === 'revenue') {
    if (id === 'taxes') return { id:'tax-base', label:'nominální HDP × elasticita 1,02', factor:1 + assumptions.nominalGdpGrowth * 1.02 };
    if (id === 'insurance') return { id:'wage-base', label:'90 % růstu mezd', factor:1 + assumptions.wageGrowth * 0.90 };
    if (id === 'eu') return { id:'eu-envelope', label:'pevná reálná obálka', factor:1 + assumptions.inflation * 0.35 };
    return { id:'other-revenue', label:'80 % nominálního růstu HDP', factor:1 + assumptions.nominalGdpGrowth * 0.80 };
  }
  if (id === 'debtservice') return { id:'debt-model', label:'samostatný model dluhu a refinancování', factor:1 };
  if (id === 'mpsv') return { id:'social-demography', label:'75 % růstu mezd + demografie', factor:1 + assumptions.wageGrowth * 0.75 + 0.003 };
  if (id === 'defence') return { id:'gdp-linked', label:'vazba na nominální HDP', factor:1 + assumptions.nominalGdpGrowth };
  if (wageHeavy.has(id)) return { id:'wage-heavy', label:'60 % mzdy + 40 % inflace', factor:1 + assumptions.wageGrowth * 0.60 + assumptions.inflation * 0.40 };
  if (investmentHeavy.has(id)) return { id:'investment-costs', label:'inflace staveb + 0,5 % reálný růst', factor:1 + assumptions.inflation + 0.005 };
  return { id:'inflation', label:'spotřebitelská inflace', factor:1 + assumptions.inflation };
}

export function childProjectionRule(childId, parentId, assumptions) {
  if (childId.includes('pension') || childId === 'mpsv-care') return { id:'social-demography', factor:1 + assumptions.wageGrowth * 0.75 + 0.003 };
  return projectionRule(parentId, 'expense', assumptions);
}
