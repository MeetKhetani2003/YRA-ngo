"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  ArrowRight, ArrowUpRight, BadgeCheck, BookOpen, BriefcaseBusiness, Building2, Check,
  ChevronDown, CircleDollarSign, Clock3, CreditCard, FileCheck2, FileText, GraduationCap,
  HandCoins, Headphones, IdCard, Lightbulb, Mail, MapPin, MessageSquare, Phone, Rocket,
  Search, Send, ShieldCheck, Sparkles, Target, Upload, UserRound, Users
} from "lucide-react";
import { benefits } from "@/data/benefits";
import { faqs } from "@/data/faqs";
import { registrationConfig } from "@/data/registration";
import { ArrowLink, Eyebrow, PageHero, SectionHeading, StatusBadge } from "@/components/ui";
import { Toast } from "@/components/toast";

function BottomCta() {
  return <section className="inner-cta"><div className="container"><div><Eyebrow light>Registration is open</Eyebrow><h2>Make your next move count.</h2><p>Complete one simple, transparent digital registration.</p></div><Link href="/register" className="button button-orange">Register Now — ₹100 <ArrowRight size={17}/></Link></div></section>;
}

export function AboutPage() {
  return <main><PageHero eyebrow="About the initiative" title="About Yuva Rojgar Abhiyan" text="A clear digital starting point for youth exploring work, enterprise, skills and support." image="/images/about/youth-community.jpg"><Link href="/register" className="button button-orange mt-7">Begin registration <ArrowRight size={17}/></Link></PageHero>
    <section className="section"><div className="container editorial-intro"><div><Eyebrow>Our purpose</Eyebrow><h2>Direction creates momentum.</h2></div><div><p className="editorial-lead">Yuva Rojgar Abhiyan is designed as a guided registration experience that helps young people clearly express where they are, what they want to explore, and what support may be relevant.</p><p>This website does not claim a government affiliation or guarantee employment, funding or training. It provides an editable, transparent digital foundation for the administering organisation.</p></div></div></section>
    <section className="section soft-section"><div className="container story-grid"><div className="story-image"><Image src="/images/about/empowerment.jpg" alt="Young professionals planning together" fill sizes="(max-width: 800px) 100vw, 48vw"/></div><div className="story-copy"><SectionHeading eyebrow="Our vision" title="Youth who can see a path forward." text="A future where information is easier to understand, the registration process feels approachable, and every applicant can keep track of their journey."/><div className="mini-values"><div><Target/><b>Clarity first</b><p>Explain every step before asking applicants to act.</p></div><div><Users/><b>Youth-centred</b><p>Design around real goals, contexts and preferences.</p></div></div></div></div></section>
    <section className="section"><div className="container"><SectionHeading center eyebrow="Our approach" title="Structured Around Real Decisions" text="A thoughtful sequence that keeps the experience focused."/><div className="approach-grid">{[{i:MessageSquare,t:"Listen",x:"Capture the applicant’s situation and direction."},{i:Lightbulb,t:"Understand",x:"Organise interests across employment, enterprise and skills."},{i:FileCheck2,t:"Register",x:"Create a consistent record through a guided workflow."},{i:IdCard,t:"Confirm",x:"Provide a clear reference ID after successful registration."}].map(({i:Icon,t,x},n)=><div key={t}><span>0{n+1}</span><Icon/><h3>{t}</h3><p>{x}</p></div>)}</div></div></section>
    <section className="section forest-section"><div className="container two-column-copy"><div><SectionHeading light eyebrow="Youth empowerment" title="Agency starts with useful information." text="The experience encourages applicants to identify their goals without making unsupported promises about outcomes."/></div><div className="quote-block"><Sparkles/><p>“A premium application experience should feel human, calm and clear—especially when someone is taking an important first step.”</p><small>YRA design principle</small></div></div></section>
    <section className="section"><div className="container image-text-row"><div><Eyebrow>Employment & self-employment</Eyebrow><h2>Two pathways.<br/>One purposeful start.</h2><p>Applicants can indicate a job preference, self-employment interest, business area and optional loan requirement. These fields remain editable by the programme team.</p><ArrowLink href="/benefits">Explore the support areas</ArrowLink></div><div className="duo-images"><Image src="/images/benefits/employment.jpg" alt="Career guidance conversation" width={560} height={420}/><Image src="/images/benefits/self-employment.jpg" alt="Young entrepreneur at work" width={400} height={300}/></div></div></section><BottomCta />
  </main>;
}

export function BenefitsPage() {
  return <main><PageHero eyebrow="Four areas of possibility" title="Support For The Journey Ahead" text="Explore the areas through which Yuva Rojgar Abhiyan can organise youth interests and requirements." image="/images/benefits/skill-development.jpg"/>
    <section className="section"><div className="container benefit-feature-list">{benefits.map((item,index)=><article className="benefit-feature" key={item.title}><div className="benefit-feature-image"><Image src={item.image} alt="" fill sizes="(max-width: 800px) 100vw, 48vw"/><span>0{index+1}</span></div><div><Eyebrow>{item.category}</Eyebrow><h2>{item.title}</h2><p>{index===0?"Create a clear profile of your job interests, preferred work direction and current employment status.":index===1?"Record an interest in independent work, along with the kind of business or livelihood activity you want to explore.":index===2?"Indicate whether funding is relevant, the estimated amount, and the purpose. This records a requirement and does not promise approval.":"Share your education and current direction so future skill-building information can be organised more meaningfully."}</p><ul><li><Check/> Simple guided questions</li><li><Check/> Review details before submission</li><li><Check/> Editable preferences</li></ul><Link href="/register" className="text-link">Add this to your profile <ArrowUpRight size={16}/></Link></div></article>)}</div></section>
    <section className="section soft-section"><div className="container"><SectionHeading center eyebrow="A useful starting point" title="From Interest To A Clear Profile" text="Registration keeps your information organised across four simple stages."/><div className="compact-process">{["Choose a direction","Share your current details","Record your preferences","Review and register"].map((x,i)=><div key={x}><span>0{i+1}</span><i/><h3>{x}</h3></div>)}</div></div></section><BottomCta />
  </main>;
}

const howSteps = [
  {t:"Fill Registration",x:"Begin with personal and contact information, then add your address, education, employment preferences and optional loan requirement.",img:"/images/how-it-works/registration.jpg",icon:FileCheck2},
  {t:"Pay ₹100",x:"Review the registration summary and choose a payment option on the dedicated payment screen.",img:"/images/how-it-works/payment.jpg",icon:CreditCard},
  {t:"Payment Verification",x:"The interface confirms whether the simulated payment was successful, pending or failed.",img:"/images/how-it-works/verification.jpg",icon:ShieldCheck},
  {t:"Registration ID Generation",x:"After successful payment, the platform generates a unique ID in the YRA-YYYY-XXXXX format.",img:"/images/how-it-works/id-generation.jpg",icon:IdCard},
  {t:"Confirmation",x:"Keep the confirmation summary and use your registration ID to view the demonstration status page.",img:"/images/how-it-works/confirmation.jpg",icon:Send},
];

export function HowItWorksPage() {
  return <main><PageHero eyebrow="Simple from start to finish" title="How Registration Works" text="Five visible stages. Six short form steps. One clear confirmation." image="/images/how-it-works/registration.jpg"><Link href="/register" className="button button-orange mt-7">Start step one <ArrowRight size={17}/></Link></PageHero>
    <section className="journey-section"><div className="container"><div className="journey-rail"/>{howSteps.map((step,i)=><article className="journey-step" key={step.t}><div className="journey-copy"><span>STEP {String(i+1).padStart(2,"0")}</span><step.icon/><h2>{step.t}</h2><p>{step.x}</p>{i===1&&<strong>Registration fee: ₹{registrationConfig.fee}.00</strong>}</div><div className="journey-image"><Image src={step.img} alt="" fill sizes="(max-width: 800px) 100vw, 44vw"/><i>0{i+1}</i></div></article>)}</div></section>
    <section className="section soft-section"><div className="container checklist-panel"><div><SectionHeading eyebrow="Before you begin" title="Keep the basics ready." text="A few details make the journey faster."/></div><div>{["Active mobile number","WhatsApp number, if available","Applicant photo","Address information","Education and work preferences"].map(x=><p key={x}><Check/>{x}</p>)}</div></div></section><BottomCta />
  </main>;
}

export function EligibilityPage() {
  return <main><PageHero eyebrow="Applicant information" title="Eligibility & Information" text="A structured, editable guide to the information applicants may need before starting." />
    <section className="notice-bar"><div className="container"><BadgeCheck/><p><b>Important:</b> Formal eligibility criteria have not been provided. The sections below are clearly marked for programme-team review and should not be treated as official policy.</p></div></section>
    <section className="section"><div className="container eligibility-grid">{[
      {i:Users,t:"Who Can Apply?",x:"Eligibility criteria to be confirmed by the programme team.",list:["Age range — to be confirmed","Location criteria — to be confirmed","Other conditions — to be confirmed"]},
      {i:FileText,t:"Required Information",x:"The current registration form collects the following editable information.",list:["Personal and contact details","District, taluka and village","Education and employment preferences","Optional loan requirement"]},
      {i:Upload,t:"Required Documents",x:"Document requirements should be formally approved before launch.",list:["Applicant photo — included in demo","Identity document — to be confirmed","Education document — to be confirmed"]},
      {i:ShieldCheck,t:"Important Information",x:"Applicants should review official criteria once supplied.",list:["Registration does not guarantee an outcome","Fee is shown before payment","Keep the generated registration ID"]},
    ].map(({i:Icon,t,x,list})=><article key={t}><span><Icon/></span><h2>{t}</h2><p>{x}</p><ul>{list.map(y=><li key={y}><Check/>{y}</li>)}</ul></article>)}</div></section>
    <section className="section soft-section"><div className="container editable-callout"><div><Eyebrow>Programme team note</Eyebrow><h2>Designed to be updated.</h2></div><p>All criteria, document requirements and policy language on this page are separated into editable content blocks. Replace placeholders only after the responsible organisation provides verified information.</p></div></section><BottomCta />
  </main>;
}

export function FaqPage() {
  const [open,setOpen]=useState(0);
  return <main><PageHero eyebrow="Help centre" title="Questions, Answered Clearly" text="Everything you need to understand the demonstration registration experience." />
    <section className="section"><div className="container faq-page-grid"><aside><MessageSquare/><h2>Need a little help?</h2><p>Browse the common questions or use the contact page to send a message.</p><Link href="/contact" className="button button-primary">Contact support <ArrowRight size={16}/></Link></aside><div className="accordion">{faqs.map((f,i)=><div className={`accordion-item ${open===i?"open":""}`} key={f.q}><button onClick={()=>setOpen(open===i?-1:i)}><span>{String(i+1).padStart(2,"0")}</span><b>{f.q}</b><ChevronDown/></button><div className="accordion-answer"><p>{f.a}</p></div></div>)}</div></div></section><BottomCta />
  </main>;
}

export function ContactPage() {
  const [toast,setToast]=useState(""); const [loading,setLoading]=useState(false);
  function submit(e:FormEvent){e.preventDefault();setLoading(true);setTimeout(()=>{setLoading(false);setToast("Your message has been recorded in this demo.");},850)}
  return <main><PageHero eyebrow="Get in touch" title="How Can We Help?" text="Send a question about the registration journey or the information shown on this website." />
    <section className="section"><div className="container contact-grid"><div className="contact-info"><SectionHeading eyebrow="Contact support" title="A clear answer can make the next step easier." text="The contact details below are demonstration placeholders and can be replaced with verified programme channels."/>{[{i:Phone,t:"Call us",x:registrationConfig.supportPhone},{i:Mail,t:"Email us",x:registrationConfig.supportEmail},{i:Clock3,t:"Support hours",x:"Monday–Saturday · 10:00–18:00"},{i:MapPin,t:"Office",x:"Address to be confirmed by programme team"}].map(({i:Icon,t,x})=><div className="contact-line" key={t}><span><Icon/></span><p><b>{t}</b><small>{x}</small></p></div>)}</div>
      <form className="contact-form" onSubmit={submit}><div><label>Full Name *</label><input required placeholder="Enter your full name"/></div><div><label>Mobile Number *</label><input required inputMode="numeric" pattern="[0-9]{10}" placeholder="10-digit mobile number"/></div><div className="full"><label>Email Address</label><input type="email" placeholder="name@example.com"/></div><div className="full"><label>Topic *</label><select required defaultValue=""><option value="" disabled>Select a topic</option><option>Registration process</option><option>Payment</option><option>Registration status</option><option>Other</option></select></div><div className="full"><label>Your Message *</label><textarea required rows={5} placeholder="Tell us how we can help"/></div><button className="button button-primary full" disabled={loading}>{loading?<><span className="spinner"/>Sending…</>:<>Send message <Send size={16}/></>}</button></form>
    </div></section>{toast&&<Toast message={toast} onClose={()=>setToast("")}/>}<BottomCta />
  </main>;
}

export function RegistrationStatusPage() {
  const [id,setId]=useState(""); const [searched,setSearched]=useState(false); const [loading,setLoading]=useState(false);
  function check(e:FormEvent){e.preventDefault();setLoading(true);setSearched(false);setTimeout(()=>{setLoading(false);setSearched(true)},700)}
  const exists=["YRA-2026-00001","YRA-2026-00002","YRA-2026-00003"].includes(id.toUpperCase());
  const pending=id.toUpperCase()==="YRA-2026-00002";
  return <main className="status-page"><section className="status-hero"><div className="container"><Eyebrow>Registration lookup</Eyebrow><h1>Check Your Registration</h1><p>Enter your unique registration ID to view the latest demonstration status.</p><form onSubmit={check}><div><IdCard/><input value={id} onChange={e=>setId(e.target.value)} required placeholder="YRA-2026-00001" aria-label="Registration ID"/></div><button className="button button-orange" disabled={loading}>{loading?<><span className="spinner"/>Checking…</>:<>Check Status <Search size={17}/></>}</button></form><small>Try demo ID: YRA-2026-00001</small></div></section>
    <section className="section"><div className="container status-result-wrap">{searched&&(exists?<div className="status-result"><div className="status-result-head"><span><BadgeCheck/></span><div><small>Registration found</small><h2>{id.toUpperCase()}</h2></div><StatusBadge status={pending?"Pending":"Successful"}/></div><div className="status-details">{[["Applicant Name",pending?"Sunita Patil":"Rohit Kumar"],["Registration Status",pending?"Pending":"Successful"],["Payment Status",pending?"Pending":"Paid"],["Registration Date","18 Aug 2026"]].map(([a,b])=><div key={a}><small>{a}</small><b>{b}</b></div>)}</div><div className="status-foot"><ShieldCheck/><p>This is a local demonstration record. Production status should be connected to an approved service.</p></div></div>:<div className="empty-result"><Search/><h2>No registration found</h2><p>Check the ID and try again. Use YRA-2026-00001 for the demo record.</p></div>)}</div></section>
  </main>;
}

export function ConfirmationPage() {
  return <main className="confirmation-page"><div className="container"><div className="confirmation-sheet"><div className="confirmation-top"><span><BadgeCheck/></span><div><small>Yuva Rojgar Abhiyan</small><h1>Registration Confirmation</h1><p>Your registration summary is ready for reference.</p></div></div><div className="confirmation-id"><small>REGISTRATION ID</small><strong>YRA-2026-00001</strong><StatusBadge status="Successful"/></div><div className="confirmation-grid">{[["Applicant","Rohit Kumar"],["Payment Amount","₹100.00"],["Payment Status","Successful"],["Registration Date","18 Aug 2026"],["District","Pune"],["Taluka","Haveli"]].map(([a,b])=><div key={a}><small>{a}</small><b>{b}</b></div>)}</div><div className="confirmation-note"><ShieldCheck/><p>Keep your registration ID available when checking status or communicating with the programme team.</p></div><div className="confirmation-actions"><button onClick={()=>window.print()} className="button button-outline">Download / Print <FileText size={16}/></button><Link href="/registration-status" className="button button-primary">Check Status <ArrowRight size={16}/></Link></div></div></div></main>;
}

export function PublicPage({ slug }: { slug: string }) {
  if(slug==="about") return <AboutPage/>;
  if(slug==="benefits") return <BenefitsPage/>;
  if(slug==="how-it-works") return <HowItWorksPage/>;
  if(slug==="eligibility") return <EligibilityPage/>;
  if(slug==="faq") return <FaqPage/>;
  if(slug==="contact") return <ContactPage/>;
  if(slug==="registration-status") return <RegistrationStatusPage/>;
  if(slug==="confirmation") return <ConfirmationPage/>;
  return null;
}
