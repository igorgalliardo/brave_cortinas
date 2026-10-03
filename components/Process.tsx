import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { images, whatsappUrl } from '@/lib/config';
import { CTA, Photo } from './UI';
export default function Process({steps}: {steps: string[][]}) { return (<section className="process section"><p className="eyebrow reveal">DO PRIMEIRO CONTATO À TRANSFORMAÇÃO</p><h2 className="reveal">Um processo simples.<br/><em>Um resultado especial.</em></h2><div className="timeline">{steps.map(([title,description],i)=><article className="reveal" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{description}</p></article>)}</div><CTA className="text-link dark">Vamos começar seu projeto</CTA></section>); }
