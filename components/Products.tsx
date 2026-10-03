import { ArrowUpRight } from 'lucide-react';
import { whatsappUrl, type Product } from '@/lib/config';
import { Photo } from './UI';
export default function Products({products}: {products: Product[]}) {
 return <section id="solucoes" className="section solutions"><div className="section-heading reveal"><div><p className="eyebrow">NOSSAS SOLUÇÕES</p><h2>Pensadas para o seu espaço.<br/><em>Feitas para a sua vida.</em></h2></div><p>Cortinas, persianas e decoração em Sumaré.<br/>Encontre o equilíbrio ideal para o seu ambiente.</p></div><div className="product-grid">{products.map(({title,description,id,image},i)=><article id={id} className="product reveal" key={id}><a href={whatsappUrl(`Olá! Visitei o site da Brave Cortinas e Persianas e gostaria de saber mais sobre ${title.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer" className="product-image"><Photo src={image} alt={`Interior de inspiração para ${title.toLowerCase()}`}/><span className="image-label">{String(i+1).padStart(2,'0')} / {title.toUpperCase()}</span><span className="image-arrow"><ArrowUpRight/></span></a><div className="product-copy"><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>;
}
