export type Store={id:string;city:string;name:string;revenue:number;prevRevenue:number;customers:number;basket:number;area:number;employees:number;margin:number;costs:number;signal:string};
export const stores:Store[]=[
{id:'vie',city:'Vienna',name:'Wien Donaustadt',revenue:487240,prevRevenue:461100,customers:1142,basket:14.27,area:796,employees:28,margin:.314,costs:121500,signal:'High revenue'},
{id:'grz',city:'Graz',name:'Graz Zentrum',revenue:354900,prevRevenue:347500,customers:905,basket:15.08,area:640,employees:22,margin:.342,costs:93000,signal:'High margin'},
{id:'lnz',city:'Linz',name:'Linz Süd',revenue:298300,prevRevenue:329800,customers:842,basket:13.62,area:610,employees:21,margin:.296,costs:88400,signal:'Declining'},
{id:'szg',city:'Salzburg',name:'Salzburg Nord',revenue:402600,prevRevenue:358200,customers:1010,basket:15.32,area:700,employees:24,margin:.326,costs:103200,signal:'Fast growth'},
{id:'ibk',city:'Innsbruck',name:'Innsbruck West',revenue:331800,prevRevenue:322100,customers:1090,basket:11.71,area:590,employees:20,margin:.303,costs:89700,signal:'High traffic / low basket'},
{id:'stp',city:'St. Pölten',name:'St. Pölten Mitte',revenue:276400,prevRevenue:269500,customers:610,basket:17.43,area:520,employees:18,margin:.335,costs:74400,signal:'Low traffic / high basket'}];
export const monthly=[382,391,398,406,419,425,431,438,447,459,472,487].map((v,i)=>({month:['Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct'][i],revenue:v}));
export const categories=[{name:'Bakery',value:18},{name:'Beverages',value:16},{name:'Fruit & Veg',value:15},{name:'Dairy',value:14},{name:'Meat',value:12},{name:'Ready-to-eat',value:10},{name:'Other',value:15}];
