import { ArrowUpRight } from 'lucide-react';
import { images } from '@/lib/config';
import { Photo } from './UI';
export default function About() {
 return <section id="sobre" className="section about"><div className="about-photo reveal"><Photo src={images.about} alt="Interior com cortinas de tecido natural"/><span className="photo-note">A beleza está na forma de sentir o espaço.</span></div><div className="about-copy reveal"><p className="eyebrow">BRAVE CORTINAS E PERSIANAS</p><h2>Detalhes que transformam<br/>espaços em <em>experiências.</em></h2><span className="gold-line"/><p>Na Brave Cortinas e Persianas, cada projeto é pensado de forma única.</p><p>Unimos design, funcionalidade e acabamento para criar soluções sob medida que valorizam a arquitetura e tornam cada ambiente mais confortável, elegante e acolhedor.</p><p>Do primeiro atendimento à instalação, buscamos oferecer uma experiência personalizada e cuidadosa em cada detalhe.</p><a href="#solucoes" className="text-link dark">Conheça o que podemos criar<ArrowUpRight size={18}/></a></div></section>;
}
