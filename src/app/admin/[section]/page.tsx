import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AdminApp from "@/components/admin-app";
export const metadata: Metadata = { title: "Admin Workspace", description: "Yuva Rojgar Abhiyan administration workspace.", robots:{index:false,follow:false} };
const valid=["registrations","payments","reports","districts","talukas","villages","coordinators","documents","settings"];
export function generateStaticParams(){return valid.map(section=>({section}))}
export default async function Page({params}:{params:Promise<{section:string}>}){const {section}=await params;if(!valid.includes(section))notFound();return <AdminApp section={section}/>}
