import {useEffect,useState} from "react";import {Routes,Route,Link,NavLink,useLocation} from "react-router-dom";
import {AnimatePresence,motion} from "framer-motion";import {Menu,X} from "lucide-react";
import {Home,MenuPage,Reservation,MyRes,Contact,NotFound} from "./pages.jsx";import {Btn} from "./ui.jsx";
const LINKS=[["/","Accueil"],["/menu","Menu"],["/reservation","Réserver"],["/mes-reservations","Mes réservations"],["/contact","Contact"]];
export default function App(){const loc=useLocation();const [sc,setSc]=useState(false);const [open,setOpen]=useState(false);
useEffect(()=>{const h=()=>setSc(window.scrollY>40);h();window.addEventListener("scroll",h);return()=>window.removeEventListener("scroll",h)},[]);
useEffect(()=>{window.scrollTo(0,0);setOpen(false)},[loc.pathname]);
return <div>
<header className={"fixed inset-x-0 top-0 z-40 transition duration-500 "+(sc||open?"border-b border-gold/20 bg-ink/90 backdrop-blur-md":"bg-transparent")}><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
<Link to="/" className="font-serif text-3xl tracking-wide">Le <span className="text-gold">Baobab</span></Link>
<nav className="hidden items-center gap-8 text-sm lg:flex">{LINKS.slice(0,2).concat(LINKS.slice(3)).map(([to,l])=><NavLink key={to} to={to} className={({isActive})=>"transition hover:text-gold "+(isActive?"text-gold":"")}>{l}</NavLink>)}<Btn as={Link} to="/reservation" className="!px-6 !py-2.5">Réserver</Btn></nav>
<button aria-label="Menu" onClick={()=>setOpen(!open)} className="lg:hidden">{open?<X size={28}/>:<Menu size={28}/>}</button></div></header>
<AnimatePresence>{open&&<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-7 bg-ink/98 bg-ink font-serif text-4xl">{LINKS.map(([to,l],i)=><motion.div key={to} initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:.08*i}}><Link to={to} className="hover:text-gold">{l}</Link></motion.div>)}</motion.div>}</AnimatePresence>
<AnimatePresence mode="wait"><motion.main key={loc.pathname} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.35}}>
<Routes location={loc}><Route path="/" element={<Home/>}/><Route path="/menu" element={<MenuPage/>}/><Route path="/reservation" element={<Reservation/>}/><Route path="/mes-reservations" element={<MyRes/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></motion.main></AnimatePresence>
<footer className="mt-28 border-t border-gold/20 bg-surf py-14 text-center"><p className="font-serif text-3xl">Le <span className="text-gold">Baobab</span></p><p className="mt-3 text-sm text-cream/60">Rue des Cocotiers, Haie Vive, Cotonou · +229 01 00 00 00 00</p><p className="mt-1 text-xs text-cream/40">Mardi à dimanche · 12h-15h et 19h-23h · Projet de démonstration</p></footer></div>}
