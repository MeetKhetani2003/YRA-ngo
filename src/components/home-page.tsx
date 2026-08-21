"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, BadgeCheck, BookOpen, BriefcaseBusiness, Check, ChevronDown,
  CircleDollarSign, CreditCard, FileCheck2, GraduationCap, HandCoins, IdCard, Leaf,
  Lightbulb, MapPin, MousePointer2, Rocket, Send, ShieldCheck, Sparkles, Target, Users, Zap
} from "lucide-react";
import { applicantProfiles, benefits } from "@/data/benefits";
import { faqs } from "@/data/faqs";
import { ArrowLink, Eyebrow, SectionHeading } from "@/components/ui";

const heroBenefits = [
  { icon: BriefcaseBusiness, title: "Employment Opportunities", text: "Explore relevant career pathways." },
  { icon: Rocket, title: "Self-Employment Support", text: "Shape ideas into possibilities." },
  { icon: HandCoins, title: "Loan Assistance", text: "Record your funding requirement." },
  { icon: GraduationCap, title: "Skill Development", text: "Build skills for your next step." },
];

const process = [
  { icon: FileCheck2, title: "Fill Registration", text: "Complete your details.", image: "/images/how-it-works/registration.jpg" },
  { icon: CreditCard, title: "Pay ₹100", text: "Complete the registration payment.", image: "/images/how-it-works/payment.jpg" },
  { icon: ShieldCheck, title: "Payment Verification", text: "Payment status is verified.", image: "/images/how-it-works/verification.jpg" },
  { icon: IdCard, title: "Registration ID", text: "A unique registration ID is generated.", image: "/images/how-it-works/id-generation.jpg" },
  { icon: Send, title: "Confirmation", text: "Receive your registration confirmation.", image: "/images/how-it-works/confirmation.jpg" },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [previewStep, setPreviewStep] = useState(0);

  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="home-hero">
        {/* Soft background shape */}
        <div className="hero-shape"></div>
        
        <div className="container hero-grid">
          {/* LEFT COLUMN: Text */}
          <div className="hero-text">
            <h1 className="reveal-up">
              <span>Yuva</span>
              <span>Rojgar</span>
              <span>Abhiyan</span>
            </h1>
            <h2 className="reveal-up" style={{animationDelay:"0.1s"}}>Empowering youth, building future</h2>
            <p className="hero-lead reveal-up" style={{animationDelay:"0.18s"}}>
              Register now and take the first step towards employment or self-employment opportunities with government support.
            </p>
            <div className="hero-benefits reveal-up" style={{animationDelay:"0.24s"}}>
              {heroBenefits.map(({ icon: Icon, title }) => (
                <div className="hero-benefit" key={title}>
                  <div className="hero-benefit-icon"><Icon size={14} strokeWidth={2.5}/></div>
                  <b>{title}</b>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Image & Fee Card */}
          <div className="hero-visual reveal-right" style={{animationDelay:"0.2s"}}>
            <div className="hero-img-container">
              <Image src="/images/hero/yra-youth.jpg" alt="Young Indian professionals" fill priority sizes="(max-width: 900px) 100vw, 50vw" className="hero-main-img" />
            </div>
            
            <div className="fee-card float-card">
              <p className="fee-label">Registration Fee</p>
              <div className="fee-amount">
                <strong>₹100/-</strong>
                <span className="fee-only">Only</span>
              </div>
              <Link href="/register" className="fee-register-btn">Register Now</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="benefit-strip" aria-label="Programme goals">
        <div className="container benefit-strip-grid">
          {[{i:Users,t:"Empowering Youth",s:"Confidence to move ahead"},{i:BriefcaseBusiness,t:"Better Employment",s:"Discover your direction"},{i:Lightbulb,t:"Bright Future",s:"Build practical readiness"},{i:Leaf,t:"Stronger India",s:"Youth-led progress"}].map(({i:Icon,t,s})=>
            <div key={t}><span><Icon size={22}/></span><p><b>{t}</b><small>{s}</small></p></div>
          )}
        </div>
      </section>

      <section className="section pillars-section">
        <div className="container">
          <div className="split-heading reveal-up">
            <SectionHeading eyebrow="Explore the possibilities" title="Your Next Opportunity Starts With The Right Direction." text="Explore the key areas through which Yuva Rojgar Abhiyan aims to support young people." />
            <ArrowLink href="/benefits">Explore all benefits</ArrowLink>
          </div>
          <div className="pillar-grid stagger-children">
            {benefits.map((item, index) => <Link href="/benefits" className="pillar-card" key={item.title}>
              <div className="pillar-image"><Image src={item.image} alt="" fill sizes="(max-width: 768px) 100vw, 25vw" /><span>0{index + 1}</span></div>
              <div className="pillar-body"><small>{item.category}</small><h3>{item.title}</h3><p>{item.short}</p><i><ArrowUpRight size={18}/></i></div>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <SectionHeading center eyebrow="A clear five-stage journey" title="Registration Made Simple" text="A transparent path from your first detail to your registration confirmation." />
          <div className="process-line stagger-children">
            {process.map(({icon: Icon,title,text,image},index)=><div className="process-step" key={title}>
              <div className="process-thumb"><Image src={image} alt="" fill sizes="180px" /><span>0{index+1}</span></div>
              <div className="process-icon"><Icon size={21}/></div><h3>{title}</h3><p>{text}</p>
            </div>)}
          </div>
          <div className="center-action reveal-up"><Link href="/how-it-works" className="button button-outline">View the complete process <ArrowRight size={16}/></Link></div>
        </div>
      </section>

      <section className="section why-section"><div className="container why-grid">
        <div className="why-visual"><div className="why-image"><Image src="/images/about/empowerment.jpg" alt="Young people collaborating at a skills centre" fill sizes="(max-width: 800px) 100vw, 48vw" /></div><div className="why-float"><span><Sparkles size={22}/></span><b>One guided journey</b><small>From interest to registration</small></div></div>
        <div className="why-copy"><SectionHeading eyebrow="Why register?" title="Take The First Step Toward Your Future." text="Create one clear profile of your interests, goals and support requirements through a thoughtfully guided experience." />
          <div className="reason-list">
            {[{i:Target,t:"Explore Opportunities",x:"Capture the kind of opportunity you want to explore."},{i:Zap,t:"Build Skills",x:"Identify where learning and practical readiness can help."},{i:Rocket,t:"Explore Self-Employment",x:"Share your entrepreneurial interests and business direction."},{i:CircleDollarSign,t:"Understand Available Support",x:"Record a loan requirement when it is relevant to your plans."}].map(({i:Icon,t,x})=><div key={t}><span><Icon size={20}/></span><p><b>{t}</b><small>{x}</small></p></div>)}
          </div><ArrowLink href="/register">Begin registration</ArrowLink>
        </div>
      </div></section>

      <section className="section profiles-section"><div className="container">
        <div className="split-heading"><SectionHeading eyebrow="Designed for ambition" title="Who Is This For?" text="A flexible registration journey for young people at different stages."/><p className="section-side-note">No two journeys look the same. Start by telling us where you are today.</p></div>
        <div className="profile-grid">{applicantProfiles.map((item,index)=><div className={`profile-card profile-${index+1}`} key={item.title}><span>{item.number}</span>{index===0?<BookOpen/>:index===1?<BriefcaseBusiness/>:index===2?<Rocket/>:<GraduationCap/>}<h3>{item.title}</h3><p>{item.text}</p><Link href="/register" aria-label={`Register as ${item.title}`}><ArrowRight size={17}/></Link></div>)}</div>
      </div></section>

      <section className="section preview-section"><div className="container preview-grid">
        <div className="preview-copy"><SectionHeading eyebrow="See the experience" title="Registration, Designed Around You." text="A calm, step-by-step interface keeps every decision understandable and your progress visible." />
          <div className="preview-points"><p><BadgeCheck/> Clear labels and gentle validation</p><p><MousePointer2/> Save and continue between steps</p><p><ShieldCheck/> Review everything before payment</p></div><Link href="/register" className="button button-primary">Try the registration <ArrowRight size={16}/></Link>
        </div>
        <div className="app-frame">
          <div className="app-frame-top"><div><i/><i/><i/></div><span>registration.yra.in</span><BadgeCheck size={15}/></div>
          <div className="app-frame-body">
            <aside><div className="mini-brand"><Leaf/><b>YRA</b></div>{["Personal Details","Address","Education","Employment","Loan Requirement"].map((item,i)=><button key={item} onClick={()=>setPreviewStep(i)} className={previewStep===i?"active":""}><span>{i<previewStep?<Check size={12}/>:i+1}</span>{item}</button>)}</aside>
            <div className="mock-form"><div className="mock-form-head"><span>Step {previewStep+1} of 5</span><small>{(previewStep+1)*20}% complete</small></div><div className="mock-progress"><i style={{width:`${(previewStep+1)*20}%`}}/></div><h3>{["Tell us about yourself","Where are you located?","Education details","Your work preferences","Loan requirement"][previewStep]}</h3><p>{["Add your primary personal and contact details.","Select your district, taluka and village.","Choose your highest education level.","Share the opportunities you wish to explore.","Tell us whether you want to record a loan need."][previewStep]}</p><div className="mock-inputs"><label>{["Full name","District","Education","Employment status","Loan required?"][previewStep]}<span>{["Enter your name","Select district","Select education","Select status","Yes / No"][previewStep]}</span></label><label>{["Mobile number","Taluka","Specialisation","Job preference","Purpose"][previewStep]}<span>{["Enter mobile number","Select taluka","Enter details","Select preference","Enter purpose"][previewStep]}</span></label></div><div className="mock-actions"><button>Back</button><button onClick={()=>setPreviewStep(Math.min(4,previewStep+1))}>Save & continue <ArrowRight size={14}/></button></div></div>
          </div>
        </div>
      </div></section>

      <section className="section trust-section"><div className="container"><SectionHeading center eyebrow="Built for clarity" title="Simple. Transparent. Digital." text="The important moments of registration are made visible from the beginning."/><div className="trust-grid">
        {[{i:FileCheck2,n:"01",t:"Simple Process",x:"A structured registration journey."},{i:CreditCard,n:"02",t:"Clear Payment",x:"A visible ₹100 payment step."},{i:IdCard,n:"03",t:"Instant Registration ID",x:"A unique ID generated after successful registration."}].map(({i:Icon,n,t,x})=><div className="trust-card" key={t}><span className="trust-number">{n}</span><i><Icon size={25}/></i><h3>{t}</h3><p>{x}</p></div>)}
      </div></div></section>

      <section className="section faq-section"><div className="container faq-grid"><div className="faq-intro"><SectionHeading eyebrow="Common questions" title="Everything You Need To Know." text="Clear answers before you begin. Programme-specific policies can be updated here as they are confirmed."/><Link href="/faq" className="text-link">View all questions <ArrowRight size={16}/></Link></div><div className="accordion">
        {faqs.map((item,i)=><div className={`accordion-item ${openFaq===i?"open":""}`} key={item.q}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)} aria-expanded={openFaq===i}><span>{String(i+1).padStart(2,"0")}</span><b>{item.q}</b><ChevronDown size={19}/></button><div className="accordion-answer"><p>{item.a}</p></div></div>)}
      </div></div></section>

      <section className="final-cta"><Image src="/images/gallery/youth-01.jpg" alt="" fill sizes="100vw"/><div className="final-cta-shade"/><div className="container final-cta-inner"><div><Eyebrow light>Begin today</Eyebrow><h2>Ready To Take<br/>The First Step?</h2></div><div><p>Complete your registration and begin your journey.</p><div><Link href="/register" className="button button-orange">Register Now — ₹100 <ArrowRight size={17}/></Link><Link href="/how-it-works" className="button button-ghost">How It Works</Link></div></div></div>
      </section>
    </main>
  );
}
