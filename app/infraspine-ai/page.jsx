'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQAccordion from '@/components/ui/FAQAccordion'
import CTABanner from '@/components/ui/CTABanner'
import Link from 'next/link'
import {
  Zap, Brain, Bot, Workflow, Cpu, ArrowRight, Check,
  Network, Database, Globe, BarChart3, Shield, Plug,
  ChevronRight, Layers, MessageSquare,
} from 'lucide-react'

/* ── Animated AI orbit visual ──────────────────────────────────────────── */
function AIOrbitVisual() {
  return (
    <div className="relative w-full h-[340px] sm:h-[400px]" aria-hidden="true">
      <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Orbit rings */}
        <ellipse cx="250" cy="200" rx="180" ry="90" stroke="#1E3A8A" strokeWidth="1" strokeDasharray="4 8" opacity="0.5">
          <animateTransform attributeName="transform" type="rotate" from="0 250 200" to="360 250 200" dur="20s" begin="2s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="250" cy="200" rx="130" ry="65" stroke="#0F2158" strokeWidth="1" strokeDasharray="3 10" opacity="0.4" />
        <ellipse cx="250" cy="200" rx="80" ry="40" stroke="#1E3A8A" strokeWidth="1" opacity="0.3" />

        {/* Central AI core */}
        <circle cx="250" cy="200" r="48" fill="#0B1A3B" stroke="#2563EB" strokeWidth="1.5" />
        <circle cx="250" cy="200" r="34" fill="#0F2158" />
        <circle cx="250" cy="200" r="20" fill="#2563EB" opacity="0.9">
          <animate attributeName="r" values="20;24;20" dur="3s" begin="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="250" cy="200" r="55" fill="none" stroke="#2563EB" strokeWidth="1" opacity="0.2">
          <animate attributeName="r" values="48;68;48" dur="3s" begin="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0;0.2" dur="3s" begin="2s" repeatCount="indefinite" />
        </circle>
        {/* AI text in center */}
        <text x="250" y="206" textAnchor="middle" fill="#B7FF58" fontSize="13" fontWeight="900" fontFamily="monospace">AI</text>

        {/* Orbiting nodes */}
        {[
          { cx: 430, cy: 200, label: 'LLM',    color: '#00C853', angle: 0   },
          { cx: 250, cy: 110, label: 'n8n',    color: '#D97706', angle: 90  },
          { cx: 70,  cy: 200, label: 'API',    color: '#7C3AED', angle: 180 },
          { cx: 250, cy: 290, label: 'RPA',    color: '#0891B2', angle: 270 },
        ].map((node, i) => (
          <g key={i}>
            <circle cx={node.cx} cy={node.cy} r="24" fill="#0B1A3B" stroke={node.color} strokeWidth="1.5" />
            <text x={node.cx} y={node.cy + 4} textAnchor="middle" fill={node.color} fontSize="9" fontWeight="900" fontFamily="monospace">{node.label}</text>
            {/* Moving data dot */}
            <circle r="3" fill={node.color} opacity="0.9">
              <animateMotion dur={`${2 + i * 0.5}s`} begin="2s" repeatCount="indefinite"
                path={`M250,200 L${node.cx},${node.cy}`} />
            </circle>
          </g>
        ))}

        {/* Smaller floating nodes */}
        {[
          { cx: 370, cy: 130, r: 16, color: '#00C853', label: 'BOT' },
          { cx: 130, cy: 130, r: 16, color: '#2563EB',  label: 'NLP' },
          { cx: 130, cy: 270, r: 16, color: '#EA580C',  label: 'ML'  },
          { cx: 370, cy: 270, r: 16, color: '#16A34A',  label: 'WF'  },
        ].map((n, i) => (
          <g key={i}>
            <circle cx={n.cx} cy={n.cy} r={n.r} fill="#060E23" stroke={n.color} strokeWidth="1.5" opacity="0.9">
              <animate attributeName="opacity" values="0.9;0.5;0.9" dur={`${2.5 + i * 0.4}s`} begin="2s" repeatCount="indefinite" />
            </circle>
            <text x={n.cx} y={n.cy + 4} textAnchor="middle" fill={n.color} fontSize="7" fontWeight="900" fontFamily="monospace">{n.label}</text>
          </g>
        ))}
      </svg>
    </div>
  )
}

const CAPABILITIES = [
  {
    icon: Workflow,
    title: 'n8n Workflow Automation',
    color: '#D97706', bg: '#FFFBEB', border: '#FDE68A',
    desc: 'We build, deploy, and maintain complex n8n automation pipelines that connect every system in your business — ERP, CRM, email, WhatsApp, payment gateways, and 500+ platforms — eliminating manual handoffs between teams.',
  },
  {
    icon: Bot,
    title: 'AI Agent Engineering',
    color: '#00C853', bg: '#F0FDF4', border: '#BBF7D0',
    desc: 'Custom AI agents powered by GPT-4, Claude, and Gemini, embedded directly into your business workflows. Document processing agents, customer query agents, compliance checking agents — each trained on your business data and operating within your defined parameters.',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Business Automation',
    color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE',
    desc: 'WhatsApp Business API integration for automated customer communication — booking bots, order status updates, lead qualification sequences, payment reminders, and AI-powered customer support that handles queries without human involvement.',
  },
  {
    icon: Cpu,
    title: 'LLM Integration & Fine-Tuning',
    color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE',
    desc: 'Integrating large language models into your internal tools — document summarization, contract review, meeting transcript analysis, RFP generation, and knowledge base Q&A — using your proprietary data as context, securely and privately.',
  },
  {
    icon: Plug,
    title: 'Cross-Platform API Integration',
    color: '#0891B2', bg: '#ECFEFF', border: '#A5F3FC',
    desc: 'Enterprise-grade REST and webhook integrations connecting every system in your stack. We handle authentication, error handling, retry logic, rate limiting, and monitoring so your integrations are production-grade and self-healing.',
  },
  {
    icon: BarChart3,
    title: 'Intelligent Analytics & Reporting',
    color: '#EA580C', bg: '#FFF7ED', border: '#FED7AA',
    desc: 'AI-driven business intelligence — automated report generation, anomaly detection in operational data, predictive inventory alerts, sales forecasting models, and natural language dashboards that answer questions in plain English.',
  },
]

const USE_CASES = [
  {
    industry: 'Manufacturing',
    problem: 'Manual production reporting, paper-based job cards, reactive maintenance alerts',
    solution: 'Automated production data capture, AI-powered equipment anomaly alerts, real-time throughput dashboards, and WhatsApp notifications to shift supervisors when targets are missed.',
    result: '60% reduction in unplanned downtime',
    color: '#2563EB', bg: '#EFF6FF',
  },
  {
    industry: 'Financial Services',
    problem: 'Manual KYC document processing, 4-day loan approval cycles, repetitive data entry',
    solution: 'AI document extraction and validation, automated credit scoring pipeline, LLM-powered compliance review, and workflow automation reducing loan approval from 4 days to 6 hours.',
    result: '85% faster loan processing',
    color: '#00C853', bg: '#F0FDF4',
  },
  {
    industry: 'Healthcare',
    problem: 'Manual appointment reminders, missed follow-ups, paper-based patient communication',
    solution: 'WhatsApp appointment bot, automated post-visit follow-up sequences, prescription reminder workflows, and AI triage chatbot handling routine inquiries without staff intervention.',
    result: '40% reduction in no-shows',
    color: '#DC2626', bg: '#FEF2F2',
  },
  {
    industry: 'Logistics & Freight',
    problem: 'Manual shipment status updates, 45-minute customer query resolution, data entry errors',
    solution: 'AI-powered WhatsApp bot answering shipment queries in 90 seconds, automated proof-of-delivery notifications, predictive delay alerts, and full ERP data sync eliminating manual entry.',
    result: '240 staff-hours saved monthly',
    color: '#D97706', bg: '#FFFBEB',
  },
  {
    industry: 'Real Estate',
    problem: 'Lost leads, slow response time, manual follow-up sequences, commission calculation errors',
    solution: 'Automated lead assignment, WhatsApp follow-up sequences triggered by inquiry source, AI-assisted property matching, and automated commission calculation integrated with CRM.',
    result: '6-hour lead response down to 8 minutes',
    color: '#7C3AED', bg: '#F5F3FF',
  },
  {
    industry: 'Retail & eCommerce',
    problem: 'Manual order processing, inventory sync errors across channels, late shipment notifications',
    solution: 'Multi-channel order automation, real-time inventory sync across all marketplaces, automated shipping label generation, customer notification sequences, and return processing bots.',
    result: '95% order processing accuracy',
    color: '#0F766E', bg: '#F0FDFA',
  },
]

const FAQS = [
  {
    q: 'What is Infraspine AI, and how is it different from generic AI tools?',
    a: 'Infraspine AI is not a generic chatbot or an off-the-shelf AI product. It is our end-to-end AI automation practice — we architect, build, and manage custom AI solutions tailored to your business processes. Unlike generic tools, everything we build uses your data, integrates with your existing systems, and is engineered for enterprise-grade reliability and security.',
  },
  {
    q: 'Do we need to have an existing tech stack to use Infraspine AI?',
    a: 'No. We work with businesses at every stage of technology maturity. If you have an existing ERP, CRM, or set of tools, we integrate our AI layer into them. If you are starting from scratch, we can design the full technology stack alongside the AI automation. The starting point does not matter — what matters is the outcome you want to achieve.',
  },
  {
    q: 'Is our business data kept private when AI agents are deployed?',
    a: 'Yes, absolutely. Data privacy and security are non-negotiable. All AI models we deploy are configured to use your data privately — no training data is shared with public models. We can deploy models on-premise, in your private cloud, or in isolated environments depending on your security requirements. Full data processing agreements are included in every engagement.',
  },
  {
    q: 'How long does it take to deploy an AI automation workflow?',
    a: 'Simple automation workflows (e.g., a WhatsApp lead qualification bot or a single-trigger n8n pipeline) can go live in 1–2 weeks. Complex multi-system automation projects with AI agents, custom integrations, and analytics layers typically take 4–8 weeks depending on the number of systems involved and the data preparation required.',
  },
  {
    q: 'What happens if an automation fails or an AI agent gives wrong output?',
    a: 'Every automation we build includes error handling, retry logic, failure notifications, and a monitoring dashboard. AI agents are deployed with output validation rules and human-in-the-loop checkpoints for high-stakes decisions. Our team monitors all live automations and receives alerts when any workflow encounters errors or anomalies.',
  },
  {
    q: 'Can Infraspine AI integrate with software we already use?',
    a: 'Yes. We have built integrations with 200+ platforms including Salesforce, HubSpot, SAP, Oracle, Xero, QuickBooks, Shopify, WooCommerce, and hundreds of others through REST APIs and pre-built n8n connectors. If your platform has an API, we can connect it.',
  },
]

export default function InfraspineAIPage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#060E23' }}>
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Infraspine AI' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#060E23' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -top-40 left-1/4 w-[700px] h-[700px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#2563EB,transparent 65%)' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute top-20 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle,#B7FF58,transparent 65%)' }}
          aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-28 pb-20 sm:pt-32 sm:pb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left */}
            <div className="flex-1 max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-black uppercase tracking-[0.14em]"
                  style={{ background: 'rgba(183,255,88,0.12)', border: '1px solid rgba(183,255,88,0.3)', color: '#B7FF58' }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#B7FF58' }} />
                  NEW — Infraspine AI
                </span>
              </div>

              <h1 className="text-[clamp(2.2rem,5vw,4.5rem)] font-black leading-[1.04] tracking-tight text-white mb-6"
                style={{ fontFamily: 'var(--font-display)' }}>
                Intelligent Automation<br />
                <span style={{ color: '#B7FF58' }}>Engineered for Enterprise.</span>
              </h1>

              <div className="h-px w-20 mb-6" style={{ background: 'linear-gradient(90deg,#2563EB,#B7FF58)' }} aria-hidden="true" />

              <p className="text-[16px] sm:text-[18px] leading-relaxed mb-5" style={{ color: '#94A3B8' }}>
                Infraspine AI is our dedicated AI automation practice — the division that designs, builds, and operates custom artificial intelligence and workflow automation solutions for enterprise businesses.
              </p>
              <p className="text-[15px] leading-relaxed mb-8" style={{ color: '#64748B' }}>
                We do not sell AI software licences. We engineer AI-powered systems that become core operational infrastructure — from autonomous n8n workflows and WhatsApp business bots to LLM agents that process documents, qualify leads, and generate reports without human intervention.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                  style={{ background: '#B7FF58', color: '#0A1628' }}>
                  Start Your AI Project <ArrowRight size={15} />
                </Link>
                <Link href="/services/ai-automation"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                  style={{ border: '2px solid rgba(255,255,255,0.18)', color: '#fff' }}>
                  AI Service Details <ChevronRight size={14} />
                </Link>
              </div>

              <div className="flex flex-wrap gap-5">
                {[
                  { value: '200+', label: 'Integrations supported' },
                  { value: '50+',  label: 'AI workflows deployed' },
                  { value: '4 hrs', label: 'Average time to first automation' },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="text-[22px] font-black" style={{ color: '#B7FF58' }}>{value}</div>
                    <div className="text-[11px] font-medium" style={{ color: '#475569' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: AI visual */}
            <div className="lg:w-[480px] flex-shrink-0 w-full max-w-[480px] mx-auto lg:mx-0">
              <AIOrbitVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Build ── */}
      <section className="py-16 sm:py-24" style={{ background: '#0B1A3B' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#B7FF58' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#B7FF58' }}>Core Capabilities</span>
              <div className="h-px w-6" style={{ background: '#B7FF58' }} />
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.8rem)] font-black mb-4 text-white">
              Six Areas Where Infraspine AI Operates
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Our AI practice covers the full spectrum of intelligent automation — from workflow engineering to custom AI agent development and enterprise-scale deployment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((cap, i) => (
              <div key={i} className="rounded-2xl p-6 border transition-all hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid rgba(255,255,255,0.08)` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${cap.color}18` }}>
                  <cap.icon size={22} style={{ color: cap.color }} strokeWidth={1.5} />
                </div>
                <h3 className="text-[15px] font-bold mb-3 text-white">{cap.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: '#64748B' }}>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Build AI Solutions ── */}
      <section className="py-16 sm:py-24" style={{ background: '#060E23' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#2563EB' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>Our Process</span>
              <div className="h-px w-6" style={{ background: '#2563EB' }} />
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.8rem)] font-black mb-4 text-white">
              How We Deliver AI Automation Projects
            </h2>
            <p className="text-[15px] max-w-xl mx-auto" style={{ color: '#64748B' }}>
              Every Infraspine AI engagement follows a structured methodology that ensures your automation is production-grade, secure, and built to scale.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: '01', title: 'Process Discovery', color: '#00C853', desc: 'We audit your current workflows, identify automation opportunities, calculate time/cost savings, and prioritize by ROI. You get a clear automation roadmap before any development begins.' },
              { step: '02', title: 'Solution Architecture', color: '#2563EB', desc: 'We design the complete automation architecture — data flows, integrations, AI model selection, fallback logic, and monitoring plan. Every design decision is documented and client-approved.' },
              { step: '03', title: 'Build & Test', color: '#D97706', desc: 'Development in staged environments with extensive unit and integration testing. AI agents are validated with real data samples before production deployment. QA gates at every milestone.' },
              { step: '04', title: 'Deploy & Monitor', color: '#B7FF58', desc: 'Production deployment with live monitoring dashboards, error alerting, and Infraspine on-call support. Every automation is tracked for accuracy, throughput, and anomalies from day one.' },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl p-6 border"
                style={{ background: 'rgba(255,255,255,0.03)', borderColor: `${s.color}30` }}>
                <div className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: s.color }}>{s.step}</div>
                <h3 className="text-[15px] font-bold mb-3 text-white">{s.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: '#64748B' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases by Industry ── */}
      <section className="py-16 sm:py-24" style={{ background: '#0B1A3B' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#B7FF58' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#B7FF58' }}>Industry Applications</span>
              <div className="h-px w-6" style={{ background: '#B7FF58' }} />
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.8rem)] font-black mb-4 text-white">
              Infraspine AI in Action — Real Results Across Industries
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {USE_CASES.map((uc, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <div className="p-5 border-b" style={{ background: `${uc.color}12`, borderColor: `${uc.color}25` }}>
                  <h3 className="text-[15px] font-black" style={{ color: '#fff' }}>{uc.industry}</h3>
                </div>
                <div className="p-5" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: '#475569' }}>Challenge</p>
                  <p className="text-[13px] leading-relaxed mb-4" style={{ color: '#64748B' }}>{uc.problem}</p>
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: '#475569' }}>AI Solution</p>
                  <p className="text-[13px] leading-relaxed mb-4" style={{ color: '#94A3B8' }}>{uc.solution}</p>
                  <div className="pt-3 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                    <span className="text-[13px] font-bold" style={{ color: uc.color }}>→ {uc.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology Stack ── */}
      <section className="py-14" style={{ background: '#060E23', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-8" style={{ color: '#475569' }}>
            AI & Automation Technology Stack
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {[
              { name: 'n8n',         color: '#EA4B71' },
              { name: 'OpenAI',      color: '#00A67E' },
              { name: 'Claude AI',   color: '#D97706' },
              { name: 'WhatsApp API',color: '#25D366' },
              { name: 'Langchain',   color: '#00C853' },
              { name: 'Pinecone',    color: '#2563EB' },
              { name: 'Python',      color: '#F7DC6F' },
              { name: 'Node.js',     color: '#68A063' },
            ].map(t => (
              <div key={t.name}
                className="py-3 px-2 rounded-xl flex items-center justify-center text-[11px] font-black tracking-tight"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: t.color }}>
                {t.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion faqs={FAQS} dark={true} accent="#B7FF58"
        title="Common Questions About Infraspine AI"
        subtitle="Everything enterprise teams want to know before starting an AI automation engagement." />

      {/* Dark CTA */}
      <section className="py-20 sm:py-28" style={{ background: '#0B1A3B', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-6" style={{ background: '#B7FF58' }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#B7FF58' }}>Start Now</span>
            <div className="h-px w-6" style={{ background: '#B7FF58' }} />
          </div>
          <h2 className="text-[clamp(1.7rem,3.5vw,3rem)] font-black text-white mb-5">
            Ready to Eliminate Manual Work<br />from Your Business?
          </h2>
          <p className="text-[15px] sm:text-[17px] leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: '#64748B' }}>
            Book a free AI automation discovery session. We will map your current manual processes, identify the highest-ROI automation opportunities, and present a concrete implementation roadmap — at no charge.
          </p>
          <Link href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[15px] font-bold transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: '#B7FF58', color: '#0A1628' }}>
            Book Free AI Discovery Session <ArrowRight size={16} />
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-5 mt-8">
            {['No cost, no obligation', 'Senior AI engineer on every call', '48-hour response guarantee'].map(item => (
              <div key={item} className="flex items-center gap-2 text-[12px] font-semibold" style={{ color: '#475569' }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#B7FF58' }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
