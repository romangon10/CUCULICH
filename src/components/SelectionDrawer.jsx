import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bookmark, X } from 'lucide-react';

export default function SelectionDrawer({ items, open, onOpen, onClose, onRemove }) {
  useEffect(()=>{
    if(!open)return;
    const previous=document.body.style.overflow;
    document.body.style.overflow='hidden';
    const close=event=>event.key==='Escape'&&onClose();
    document.addEventListener('keydown',close);
    return()=>{document.body.style.overflow=previous;document.removeEventListener('keydown',close);};
  },[open,onClose]);
  return <><button className="selection-trigger glass-obsidian" onClick={onOpen} aria-label={'Abrir selección, '+items.length+' elementos'}><Bookmark size={20}/><span>{items.length}</span></button>
    <AnimatePresence>{open && <motion.div className="drawer-shell" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={event=>event.target===event.currentTarget&&onClose()}>
      <motion.aside className="selection-drawer" role="dialog" aria-modal="true" aria-labelledby="selection-title" initial={{x:'100%'}} animate={{x:0}} exit={{x:'100%'}} transition={{type:'spring',damping:28,stiffness:250}}>
        <header><div><p className="eyebrow burnished">Archivo personal</p><h2 id="selection-title">Mi selección</h2></div><button aria-label="Cerrar selección" onClick={onClose}><X/></button></header>
        {items.length ? <div className="selection-list">{items.map((item,index)=><article key={item.id}><span>{String(index+1).padStart(2,'0')}</span><div><h3>{item.name}</h3><p className="ghost">{item.type==='atelier'?'Pieza Atelier':'Inspiración · Agotado'}</p></div><button onClick={()=>onRemove(item.id)}>Quitar</button></article>)}</div> : <div className="empty-selection"><Bookmark/><h3>Tu archivo está vacío</h3><p className="ghost">Guardá piezas de la colección o añadí la campera reversible.</p></div>}
        <p className="drawer-note ghost">Esta selección es visual. No genera pedidos ni reserva stock.</p>
      </motion.aside>
    </motion.div>}</AnimatePresence></>;
}
