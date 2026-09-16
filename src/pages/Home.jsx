import { useState } from 'react';
import Hero from '../components/Hero';
import Collection from '../components/Collection';
import Manifesto from '../components/Manifesto';
import ReversibleCoat from '../components/ReversibleCoat';
import SelectionDrawer from '../components/SelectionDrawer';
import NavOrb from '../components/NavOrb';
import Footer from '../components/Footer';

export default function Home(){
  const [selected,setSelected]=useState([]);
  const [drawerOpen,setDrawerOpen]=useState(false);
  const toggle=item=>setSelected(current=>current.some(entry=>entry.id===item.id)?current.filter(entry=>entry.id!==item.id):[...current,item]);
  return <><a className="skip-link" href="#coleccion">Ir a la colección</a><main><Hero/><Collection selected={selected} onToggle={toggle}/><Manifesto/><ReversibleCoat selected={selected.some(item=>item.id==='reversible')} onToggle={()=>toggle({id:'reversible',name:'Campera Reversible Obsidiana',type:'atelier'})}/></main><Footer/><SelectionDrawer items={selected} open={drawerOpen} onOpen={()=>setDrawerOpen(true)} onClose={()=>setDrawerOpen(false)} onRemove={id=>setSelected(current=>current.filter(item=>item.id!==id))}/><NavOrb/></>;
}
