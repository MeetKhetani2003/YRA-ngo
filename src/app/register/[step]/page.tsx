import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RegistrationApp from "@/components/registration-app";
export const metadata: Metadata = { title: "Online Registration", description: "Complete the six-step Yuva Rojgar Abhiyan registration journey.", robots:{index:false,follow:false} };
const valid=["personal-details","address-details","education-employment","loan-requirement","review","payment","success"];
export function generateStaticParams(){return valid.map(step=>({step}))}
export default async function Page({params}:{params:Promise<{step:string}>}){const {step}=await params;if(!valid.includes(step))notFound();return <RegistrationApp stepSlug={step}/>}
