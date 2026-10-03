import { ArrowUpRight } from 'lucide-react';
import { whatsappUrl } from '@/lib/config';
import { assetPath } from '@/lib/paths';
export function Brand({variant='header'}:{variant?:'header'|'footer'}) {
 return <span className={`brand official-logo logo-${variant}`}><img src={assetPath(`/images/logo/logo-brave-${variant}.png?v=2`)} alt="BRAVE — Cortinas e Persianas" width={2172} height={724} decoding="async" /></span>;
}
export function CTA({children='Solicitar orçamento',className='button',message}:{children?:React.ReactNode;className?:string;message?:string}) { return <a aria-label={className === 'floating' ? 'Conversar pelo WhatsApp' : undefined} className={className} href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">{children}{className !== 'floating' && <ArrowUpRight size={17}/> }</a>; }
export function Photo({src,alt,className='',hero=false}:{src:string;alt:string;className?:string;hero?:boolean}) {return <img className={className} src={src} srcSet={`${src.replace('.webp', '-small.webp')} 640w, ${src} 1600w`} sizes={hero?'100vw':'(max-width: 700px) 100vw, 50vw'} alt={alt} loading={hero?'eager':'lazy'} fetchPriority={hero?'high':'auto'} decoding="async"/>;}

