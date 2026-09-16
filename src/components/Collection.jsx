import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import Image from './Image';

const root = 'https://media.base44.com/images/public/6aa843231b11457ee132f93f/';
const products = [
  { id:'abrigo', number:'01', name:'Abrigo Estructurado', detail:'Lana virgen · Forro seda', weight:'Pesado / Oversized', img:'494f69d6d_generated_7f9cad95.jpg', story:'Arquitectura textil de hombros definidos y caída profunda. Una silueta pensada para dominar el espacio.' },
  { id:'camisa', number:'02', name:'Camisa Seda Dorada', detail:'Seda japonesa · Hilo oro', weight:'Media / Regular', img:'6773b030a_generated_c00010d7.jpg', story:'Brillo contenido, tacto fluido y terminaciones precisas. Lujo silencioso para una pieza central.' },
  { id:'pantalon', number:'03', name:'Pantalón Sastre Obsidiana', detail:'Franela lana · Hebilla oro', weight:'Media / Slim', img:'775fc23b9_generated_2abfec04.jpg', story:'Sastrería oscura de líneas limpias, interrumpida por un único acento metálico.' },
  { id:'bordado', number:'04', name:'Bordado Macro Oro', detail:'Detalle textil · Macro', weight:'Pieza de arte', img:'08ec0ad03_generated_a53e4773.jpg', story:'Una exploración de textura y luz. El bordado deja de ser detalle y se convierte en protagonista.' }
];

export default function Collection({ selected, onToggle }) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (!active) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const close = event => event.key === 'Escape' && setActive(null);
    document.addEventListener('keydown', close);
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', close); };
  }, [active]);

  return <section id="coleccion" className="section"><div className="container">
    <header className="section-header"><div><p className="eyebrow ghost">01 — La Colección</p><h2>La Rejilla de la Curiosidad</h2></div><p className="eyebrow burnished">Cada prenda, una pieza de museo. Simetría rota, espacio infinito.</p></header>
    <div className="collection-grid">{products.map((product, index) =>
      <motion.article key={product.id} className={'product product-'+index} initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.7}}>
        <button className="product-open" onClick={() => setActive(product)} aria-label={'Ver detalles de '+product.name}>
          <Image src={root+product.img} alt={product.name}/><div className="product-shade"/>
          <span className="product-number">{product.number}</span><span className="product-arrow"><ArrowUpRight/></span>
          <div className="product-info"><div><p className="eyebrow ghost">{product.detail}</p><h3>{product.name}</h3><p className="eyebrow burnished">Peso · {product.weight}</p></div><span className="sold">Agotado</span></div>
        </button>
      </motion.article>
    )}</div>
    <AnimatePresence>{active && <motion.div className="product-modal-shell" role="presentation" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={event => event.target===event.currentTarget && setActive(null)}>
      <motion.section role="dialog" aria-modal="true" aria-labelledby="product-modal-title" className="product-modal" initial={{opacity:0,y:30,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:20}} transition={{duration:.35}}>
        <button className="modal-close" aria-label="Cerrar detalle" onClick={() => setActive(null)}><X/></button>
        <div className="modal-image"><Image src={root+active.img} alt={active.name}/></div>
        <div className="modal-copy"><p className="eyebrow burnished">Archivo {active.number} · Colección MMXXVI</p><h2 id="product-modal-title">{active.name}</h2><p className="body-copy">{active.story}</p>
          <div className="modal-specs"><p><span>Material</span>{active.detail}</p><p><span>Construcción</span>{active.weight}</p><p><span>Estado</span>Agotado</p></div>
          <button className="liquid-gold-btn full" aria-pressed={selected.some(item=>item.id===active.id)} onClick={() => onToggle({...active,type:'inspiración'})}><span>{selected.some(item=>item.id===active.id)?'Quitar de inspiración':'Guardar como inspiración'}</span></button>
        </div>
      </motion.section>
    </motion.div>}</AnimatePresence>
  </div></section>;
}
