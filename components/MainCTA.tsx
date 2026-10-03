import { MessageCircle } from 'lucide-react';
import { company } from '@/lib/config';
import { CTA } from './UI';
export default function MainCTA() { return <section className="main-cta"><p className="eyebrow">SEU PROJETO COMEÇA AQUI</p><h2>Transforme seu ambiente<br/><em>com a Brave.</em></h2><p>Encontre a combinação ideal de design, conforto<br/>e funcionalidade para o seu espaço.</p><CTA className="button champagne"><MessageCircle size={17}/>Solicitar orçamento</CTA><p className="cta-phone">{company.whatsappLabel}</p></section>; }
