export const averageBasket=(revenue:number,transactions:number)=>transactions>0?revenue/transactions:null;
export const revenuePerSqm=(revenue:number,area:number)=>area>0?revenue/area:null;
export const revenuePerEmployee=(revenue:number,employees:number)=>employees>0?revenue/employees:null;
export const grossProfit=(revenue:number,margin:number)=>revenue*margin;
export const operatingProfit=(revenue:number,margin:number,costs:number)=>grossProfit(revenue,margin)-costs;
export const growthRate=(current:number,previous:number)=>previous!==0?(current-previous)/previous:null;
export function openingHoursScenario(employees:number,hourlyCost:number,days:number,customersPerDay:number,basket:number,margin:number){const labor=employees*hourlyCost*days;const revenue=customersPerDay*basket*days;const gp=revenue*margin;return {labor,revenue,grossProfit:gp,contribution:gp-labor,breakEvenCustomers:basket*margin>0?labor/(basket*margin):null};}
