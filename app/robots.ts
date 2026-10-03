export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { company } from '@/lib/config';
export default function robots(): MetadataRoute.Robots { return { rules: {userAgent:'*',allow:'/'}, ...(company.siteUrl ? {sitemap:`${company.siteUrl}/sitemap.xml`} : {}) }; }
