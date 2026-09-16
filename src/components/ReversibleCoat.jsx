import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from './Image';

const photos={fur:'https://media.base44.com/images/public/6aa843231b11457ee132f93f/afbaef1a4_ChatGPTImage14sept202614_11_08.png',suede:'https://media.base44.com/images/public/6aa843231b11457ee132f93f/f7eaf47f2_ChatGPTImage14sept202614_09_261.png'};

export default function ReversibleCoat({selected,onToggle}){
  const [side,setSide]=useState('fur');
  return <section id="atelier" className="section ruled"><div className="container narrow"><header className="center section-header"><div><p className="eyebrow ghost">03 — Pieza Reversible</p><h2>Una prenda. Dos almas.</h2></div></header><div className="split">
    <motion.div key={side} initial={{opacity:0,x:-12}} animate={{opacity:1,x:0}} transition={{duration:.45}}><Image className="coat-image" contain src={photos[side]} alt={side==='fur'?'Campera reversible lado pelo':'Campera reversible lado gamuza'}/></motion.div>
    <div><h3 className="coat-title">Campera Reversible Obsidiana</h3><p className="eyebrow burnished">Edición Atelier · Hecha a mano</p><p className="body-copy">Dos caras, una misma identidad. Un lado de pelo sintético negro de pelo largo, voluminoso y maximalista; el otro de gamuza mate con cuello y puños de pelo. Una sola pieza que se transforma con un gesto.</p>
      <div className="details"><div><p className="eyebrow ghost">Lado A</p><h3>Pelo Largo</h3><p className="ghost">Volumen · Maximalista</p></div><div><p className="eyebrow ghost">Lado B</p><h3>Gamuza Mate</h3><p className="ghost">Refinado · Estructurado</p></div></div>
      <div className="side-controls" role="group" aria-label="Ver lado de la campera"><span className="eyebrow ghost">Ver lado:</span><button aria-pressed={side==='fur'} onClick={()=>setSide('fur')}>Pelo</button><button aria-pressed={side==='suede'} onClick={()=>setSide('suede')}>Gamuza</button></div>
      <div className="price-row"><div className="eyebrow ghost">Peso · Heavyweight<br/>Talle · Oversized</div><span className="price">$175.000</span></div>
      <button className="liquid-gold-btn full" aria-pressed={selected} onClick={onToggle}><span>{selected?'Quitar de mi selección':'Añadir a mi selección'}</span></button><p className="selection-note ghost" role="status">{selected?'Campera añadida a tu selección. No se realizó ningún pedido.':'Selección temporal en esta página. Compras online aún no habilitadas.'}</p>
    </div>
  </div></div></section>;
}
