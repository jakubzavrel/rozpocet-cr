export const campaign = {
  id: 'cz-budget-2025-2030',
  title: 'Kariéra ministra financí 2025–2030',
  startYear: 2025,
  endYear: 2030,
  modelVersion: '2.3.0',
  assumptions: {
    2025: { inflation: 0.024, nominalGdpGrowth: 0.045, wageGrowth: 0.055, marginalInterestRate: 0.040, refinancingShare: 0.18, gdp: 8100 },
    2026: { inflation: 0.028, targetExpenseGrowth: 0.055, nominalGdpGrowth: 0.043, wageGrowth: 0.050, marginalInterestRate: 0.039, refinancingShare: 0.18, gdp: 8448 },
    2027: { inflation: 0.026, targetExpenseGrowth: 0.052, nominalGdpGrowth: 0.041, wageGrowth: 0.046, marginalInterestRate: 0.038, refinancingShare: 0.17, gdp: 8794 },
    2028: { inflation: 0.025, targetExpenseGrowth: 0.050, nominalGdpGrowth: 0.040, wageGrowth: 0.043, marginalInterestRate: 0.037, refinancingShare: 0.17, gdp: 9146 },
    2029: { inflation: 0.024, targetExpenseGrowth: 0.048, nominalGdpGrowth: 0.039, wageGrowth: 0.042, marginalInterestRate: 0.037, refinancingShare: 0.16, gdp: 9503 },
    2030: { inflation: 0.023, targetExpenseGrowth: 0.047, nominalGdpGrowth: 0.038, wageGrowth: 0.041, marginalInterestRate: 0.036, refinancingShare: 0.16, gdp: 9864 }
  }
};

export const policyProfiles = {
  'complete-motorway-network': { kind:'investment', duration:10, expense:[19.5,19.5,19.5,19.5,19.5,19.5,19.5,19.5,19.5,19.5], reversible:false },
  'free-school-lunches': { kind:'recurring', expense:14.5, index:'inflation', reversible:true },
  'pension-plus-1000': { kind:'recurring', expense:28.2, index:'wages', reversible:true },
  'teachers-110-average-wage': { kind:'recurring', expense:2.1, index:'wages', reversible:true },
  'letnany-hospital': { kind:'investment', duration:10, expense:[7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5,7.5], reversible:false },
  'lawmakers-pay-minus-50': { kind:'recurring', expense:-0.195, index:'wages', reversible:true },
  'lawmakers-allowances-cancelled': { kind:'recurring', expense:-0.23, index:'inflation', reversible:true },
  'dukovany-two-new-units': { kind:'investment', duration:20, expense:Array(20).fill(21.1), reversible:false },
  'non-teaching-staff-pay-plus-20': { kind:'recurring', expense:8.34, index:'wages', reversible:true },
  'fuel-excise-tax-plus-5': { kind:'recurring', revenue:5, index:'nominalGdp', reversible:true },
  'super-gross-wage-restored': { kind:'recurring', revenue:76, index:'wages', reversible:true },
  'uniform-vat-21-all': { kind:'recurring', revenue:62, index:'nominalGdp', reversible:true },
  'still-wine-excise-tax': { kind:'recurring', revenue:3.4, reversible:true },
  'defence-spending-three-percent-gdp': { kind:'recurring', expenseByYear:{2025:0,2026:16.896,2027:35.176,2028:54.876,2029:76.024,2030:98.64}, reversible:true },
  'public-media-funded-by-state-budget': { kind:'recurring', expense:10, reversible:true },
  'school-starter-grant-1000': { kind:'recurring', expense:0.095, reversible:true },
  'political-party-subsidies-abolished': { kind:'recurring', expenseByYear:{2025:-1.3,2026:-0.6,2027:-0.6,2028:-0.6,2029:-1.3,2030:-0.6}, reversible:true },
  'mortgage-interest-tax-deduction-abolished': { kind:'recurring', revenue:5.1, index:'nominalGdp', reversible:true }
};
