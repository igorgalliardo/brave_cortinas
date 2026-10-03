import Landing from '@/components/Landing';
import { company } from '@/lib/config';
export default function Page() {
 const schema = {
  '@context':'https://schema.org', '@type':'LocalBusiness', name:company.name,
  telephone:`+${company.whatsapp}`,
  ...(company.siteUrl?{url:company.siteUrl,image:`${company.siteUrl}/images/logo/logo-brave.png`}:{}),
  address:{'@type':'PostalAddress',streetAddress:`${company.address}, ${company.neighborhood}`,addressLocality:company.city,addressRegion:company.state,postalCode:company.postalCode,addressCountry:'BR'},
 };
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/><Landing/></>;
}
