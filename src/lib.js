export const SERVICES=[["12:00","15:00"],["19:00","23:00"]];
export const CLOSED_DAY=1;
export const SLOTS=["12:00","12:30","13:00","13:30","14:00","14:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00"];
export const fcfa=n=>new Intl.NumberFormat("fr-FR").format(n)+" FCFA";
export const iso=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
export const parse=s=>{const [y,m,d]=s.split("-").map(Number);return new Date(y,m-1,d)};
export const hhmm=d=>`${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`;
export const longDate=s=>parse(s).toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long",year:"numeric"});
export const isDayClosed=s=>parse(s).getDay()===CLOSED_DAY;
export const isPast=(s,now=new Date())=>s<iso(now);
export const hash=str=>{let h=0;for(const c of str)h=(h*31+c.charCodeAt(0))|0;return Math.abs(h)};
export const isFull=(date,slot)=>hash(date+slot)%100<22;
export const slotsFor=(date,now=new Date())=>SLOTS.map(t=>({t,off:isFull(date,t)||(date===iso(now)&&t<=hhmm(now))}));
export function openNow(now=new Date()){const d=now.getDay(),t=hhmm(now);
if(d===CLOSED_DAY)return{open:false,next:"mardi à 12h00"};
for(const [a,b] of SERVICES)if(t>=a&&t<b)return{open:true,until:b.replace(":","h")};
const nx=SERVICES.find(([a])=>t<a);return{open:false,next:nx?"aujourd'hui à "+nx[0].replace(":","h"):d===0?"mardi à 12h00":"demain à 12h00"}}
export function monthGrid(y,m){const lead=(new Date(y,m,1).getDay()+6)%7;const n=new Date(y,m+1,0).getDate();return[...Array(lead).fill(null),...Array.from({length:n},(_,i)=>iso(new Date(y,m,i+1)))]}
export const validate=f=>{const e={};if(f.nom.trim().length<3)e.nom=1;if(f.tel.replace(/\D/g,"").length<8)e.tel=1;if(!/^\S+@\S+\.\S+$/.test(f.email))e.email=1;return e};
export const makeCode=()=>"BAO-"+Math.random().toString(36).slice(2,8).toUpperCase();
export const load=()=>{try{return JSON.parse(localStorage.getItem("lb-res"))||[]}catch{return[]}};
export const store=l=>{try{localStorage.setItem("lb-res",JSON.stringify(l))}catch{}};
