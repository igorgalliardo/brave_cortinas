'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/lib/config';
export default function Testimonials() {
 const [slide,setSlide] = useState(0);
 return <section className="testimonials section"><p className="eyebrow">EXPERIÊNCIAS QUE INSPIRAM</p><h2>A experiência de quem<br/><em>escolheu a Brave.</em></h2>{testimonials.length ? <><div className="quote" aria-live="polite"><span className="quote-mark">“</span><blockquote>{testimonials[slide].quote}</blockquote><p>— {testimonials[slide].name}</p></div>{testimonials.length>1&&<div className="slider-controls"><button aria-label="Depoimento anterior" onClick={()=>setSlide((slide+testimonials.length-1)%testimonials.length)}><ChevronLeft size={20}/></button><span>{String(slide+1).padStart(2,'0')}<i/>{String(testimonials.length).padStart(2,'0')}</span><button aria-label="Próximo depoimento" onClick={()=>setSlide((slide+1)%testimonials.length)}><ChevronRight size={20}/></button></div>}</>:<p className="testimonials-pending">Em breve, histórias reais de ambientes transformados.<br/>Cada projeto começa com uma conversa e um olhar atento ao seu espaço.</p>}</section>;
}
