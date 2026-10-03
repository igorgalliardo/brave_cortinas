'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { company, mapsUrl, mapsEmbedUrl } from '@/lib/config';
import { CTA } from './UI';
export default function Location() {
 const section = useRef<HTMLElement>(null);
 const [loadMap,setLoadMap] = useState(false);
 useEffect(()=>{const observer=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){setLoadMap(true);observer.disconnect();}},{rootMargin:'250px'});if(section.current)observer.observe(section.current);return()=>observer.disconnect();},[]);
 return <section id="localizacao" ref={section} className="section location"><div className="location-copy"><p className="eyebrow">VISITE A BRAVE</p><h2>Conheça nossas soluções<br/><em>de perto.</em></h2><p>Cortinas e persianas sob medida em Sumaré, com um olhar cuidadoso para cada ambiente. Visite a Brave e conheça as possibilidades para o seu projeto.</p><address>{company.address}<br/>{company.neighborhood}<br/>{company.city} - {company.state}<br/>CEP {company.postalCode}</address><a className="location-phone" href={`tel:+${company.whatsapp}`}>{company.whatsappLabel}</a><div className="location-actions"><a className="button black" href={mapsUrl} target="_blank" rel="noopener noreferrer">Como chegar<ArrowUpRight size={17}/></a><CTA className="text-link dark">Falar pelo WhatsApp</CTA></div></div><div className="map-frame">{loadMap?<iframe title="Localização da Brave Cortinas e Persianas em Sumaré" src={mapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/>:<div className="map-placeholder"><span>BRAVE</span><p>Sumaré · São Paulo</p></div>}<a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="map-caption">R. Izaíra Ôngaro Zague, 136<ArrowUpRight size={16}/></a></div></section>;
}
