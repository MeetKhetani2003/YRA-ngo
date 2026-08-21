import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicPage } from "@/components/public-pages";
import { PublicShell } from "@/components/site-chrome";

const pages: Record<string,{title:string;description:string}> = {
  about:{title:"About",description:"Learn about the purpose, vision and youth-centred approach of Yuva Rojgar Abhiyan."},
  benefits:{title:"Benefits",description:"Explore employment, self-employment, loan requirement and skill development pathways."},
  "how-it-works":{title:"How It Works",description:"Understand the Yuva Rojgar Abhiyan registration, payment and confirmation journey."},
  eligibility:{title:"Eligibility & Information",description:"Review editable applicant information and document requirements before registration."},
  faq:{title:"Frequently Asked Questions",description:"Find clear answers about registration, payment and registration status."},
  contact:{title:"Contact",description:"Contact the Yuva Rojgar Abhiyan support team about the registration journey."},
  "registration-status":{title:"Registration Status",description:"Check a Yuva Rojgar Abhiyan demonstration registration status."},
  confirmation:{title:"Registration Confirmation",description:"View a printable Yuva Rojgar Abhiyan registration confirmation."},
};

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const page=pages[slug];if(!page)return {};return {title:page.title,description:page.description,robots:["registration-status","confirmation"].includes(slug)?{index:false,follow:false}:undefined,openGraph:{title:`${page.title} | Yuva Rojgar Abhiyan`,description:page.description,type:"website"}}}

export function generateStaticParams(){return Object.keys(pages).map(slug=>({slug}))}

export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!pages[slug])notFound();return <PublicShell><PublicPage slug={slug}/></PublicShell>}
