import type { Metadata } from "next";
import AdminApp from "@/components/admin-app";
export const metadata: Metadata = { title: "Admin Dashboard", description: "Yuva Rojgar Abhiyan administration workspace.", robots:{index:false,follow:false} };
export default function Page(){return <AdminApp section="dashboard"/>}
