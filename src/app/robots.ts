import type { MetadataRoute } from "next";
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:"*",allow:"/",disallow:["/admin/","/register/","/registration-status","/confirmation"]},sitemap:"https://yra.example/sitemap.xml"}}
