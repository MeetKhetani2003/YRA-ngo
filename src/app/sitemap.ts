import type { MetadataRoute } from "next";
export default function sitemap():MetadataRoute.Sitemap{const base="https://yra.example";return ["","/about","/benefits","/how-it-works","/eligibility","/faq","/contact"].map(path=>({url:`${base}${path}`,lastModified:new Date("2026-01-01"),changeFrequency:path?"monthly":"weekly",priority:path?0.8:1}))}
