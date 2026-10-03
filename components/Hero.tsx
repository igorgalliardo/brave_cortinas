import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { images } from '@/lib/config';
import { CTA, Photo } from './UI';
export default function Hero() {
 return <section id="inicio" className="hero"><Photo src={images.hero} alt="Sala sofisticada com grandes janelas e cortinas em tons naturais" hero/><div className="hero-shade"/><div className="hero-content"><p className="eyebrow">BRAVE <span>CORTINAS E PERSIANAS</span></p><h1>Elegância que transforma<br/>cada <em>ambiente.</em></h1><p className="hero-description">Cortinas e persianas sob medida para projetos que<br/>valorizam design, conforto e personalidade.</p><div className="hero-actions"><CTA className="button champagne">Solicitar orçamento</CTA><a href="#solucoes" className="text-link">Conhecer soluções<ArrowUpRight size={17}/></a></div></div><div className="hero-bottom"><a href="#sobre"><ArrowDown size={15}/>Descubra a Brave</a><span>DESIGN QUE ACOLHE. QUALIDADE QUE PERMANECE.</span><span>SUMARÉ — SP</span></div></section>;
}
