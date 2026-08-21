import type { Metadata } from "next";
import RegistrationApp from "@/components/registration-app";
export const metadata: Metadata = { title: "Online Registration", description: "Begin the Yuva Rojgar Abhiyan registration journey.", robots:{index:false,follow:false} };
export default function Page(){return <RegistrationApp/>}
