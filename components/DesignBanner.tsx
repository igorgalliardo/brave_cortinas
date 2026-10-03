import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { images, whatsappUrl } from '@/lib/config';
import { CTA, Photo } from './UI';
export default function DesignBanner() { return (<section className="feature-banner"><Photo src={images.projects[2]} alt="Ambiente residencial com luz suave e grandes janelas"/><div className="banner-shade"/><div className="banner-content reveal"><p className="eyebrow">BELEZA QUE VOCÊ SENTE</p><h2>Design que vai<br/>além da <em>estética.</em></h2><p>Controle de luz, privacidade, conforto térmico e beleza.<br/>Tudo em uma solução desenvolvida para o seu espaço.</p><CTA className="button light">Encontre a solução ideal</CTA></div></section>); }
