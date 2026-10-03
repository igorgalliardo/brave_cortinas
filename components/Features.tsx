import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { images, whatsappUrl } from '@/lib/config';
import { CTA, Photo } from './UI';
export default function Features({features}: {features: string[][]}) { return (<section id="diferenciais" className="section differences"><div className="section-heading reveal"><div><p className="eyebrow">O CUIDADO FAZ A DIFERENÇA</p><h2>Por que escolher<br/><em>a Brave?</em></h2></div><p>Da primeira conversa ao último detalhe,<br/>uma experiência pensada para você.</p></div><div className="features-grid">{features.map(([title,description],i)=><article className="reveal" key={title}><span className="number">0{i+1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>); }
