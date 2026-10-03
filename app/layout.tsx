import type { Metadata } from 'next';
import './globals.css';
import { company, images } from '@/lib/config';
const title = 'Brave Cortinas e Persianas | Cortinas e Persianas Sob Medida em Sumaré';
const description = 'Cortinas, persianas e soluções sob medida em Sumaré. Conheça a Brave Cortinas e Persianas e transforme seus ambientes com elegância, conforto e personalidade.';
export const metadata: Metadata = {
 metadataBase:new URL(company.siteUrl || 'http://localhost:3000'), title, description,
 ...(company.siteUrl?{alternates:{canonical:company.siteUrl}}:{}),
 openGraph:{title,description,locale:'pt_BR',type:'website',siteName:company.name,images:[{url:images.hero,width:1600,height:900}]},
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="pt-BR"><body>{children}</body></html>;}

