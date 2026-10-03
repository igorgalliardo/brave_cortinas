export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { company } from '@/lib/config';
export default function sitemap(): MetadataRoute.Sitemap { return company.siteUrl ? [{url:company.siteUrl,changeFrequency:'monthly',priority:1}] : []; }
