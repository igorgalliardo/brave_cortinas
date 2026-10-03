import { assetPath } from './paths';
export const company = {
  name: 'Brave Cortinas e Persianas',
  whatsapp: '5519982768475',
  whatsappLabel: '(19) 98276-8475',
  message: 'Olá! Visitei o site da Brave Cortinas e Persianas e gostaria de solicitar um orçamento.',
  email: '',
  instagram: '',
  hours: '',
  city: 'Sumaré',
  state: 'SP',
  address: 'R. Izaíra Ôngaro Zague, 136',
  neighborhood: 'Jardim São Carlos',
  postalCode: '13170-110',
  country: 'Brasil',
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/$/, ''),
};
export const fullAddress = `${company.address}, ${company.neighborhood}, ${company.city} - ${company.state}, CEP ${company.postalCode}`;
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;
export function whatsappUrl(message = company.message) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}
export const images = {
 hero: assetPath('/images/hero/cinematic.webp'),
 about: assetPath('/images/about/interior.webp'),
 products: [assetPath('/images/products/curtains.webp'), assetPath('/images/products/blinds.webp'), assetPath('/images/products/motorized.webp'), assetPath('/images/products/blackout.webp'), assetPath('/images/products/wallpaper.webp')],
 projects: [assetPath('/images/projects/01.webp'),assetPath('/images/projects/02.webp'),assetPath('/images/projects/03.webp'),assetPath('/images/projects/04.webp'),assetPath('/images/projects/05.webp'),assetPath('/images/projects/06.webp')],
 automation: assetPath('/images/automation/room.webp'),
};
export type Product = { id: string; title: string; description: string; image: string };
export const products: Product[] = [
 { id:'cortinas', title:'Cortinas sob medida', description:'Tecidos, texturas e acabamentos para compor ambientes acolhedores, elegantes e personalizados.', image:images.products[0] },
 { id:'persianas', title:'Persianas', description:'Soluções que equilibram design, privacidade e controle da luminosidade em cada ambiente.', image:images.products[1] },
 { id:'motorizadas', title:'Persianas motorizadas', description:'Praticidade e conforto para transformar a experiência de viver o seu espaço. Consulte as possibilidades para o seu projeto.', image:images.products[2] },
 { id:'blackout', title:'Blackout', description:'Mais privacidade e controle de luz, com opções pensadas para combinar com a decoração do seu ambiente.', image:images.products[3] },
 { id:'papel-de-parede', title:'Papel de parede', description:'Texturas e composições que dão personalidade às paredes e valorizam a identidade do seu espaço.', image:images.products[4] },
];
export type Testimonial = {quote:string;name:string};
export const testimonials: Testimonial[] = []; // Adicione somente avaliações reais autorizadas.

