import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import { Zap, Brain, Bot, BarChart2, Cpu, GitMerge, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'AI & Automation Services Pakistan — RPA, LLM, ML & Process Automation | Infraspine',
  description: 'Enterprise AI and automation: RPA with UiPath and Power Automate, custom LLM integrations, machine learning pipelines, AI chatbots, document intelligence, and workflow automation. Infraspine AI.',
  alternates: { canonical: 'https://www.infraspine.com/services/ai-automation' },
  openGraph: {
    title: 'AI & Automation Services Pakistan — RPA, LLM, ML & Process Automation | Infraspine',
    description: 'RPA, LLM integration, ML pipelines, AI chatbots, document intelligence, and process automation. Enterprise AI from Infraspine.',
    url: 'https://www.infraspine.com/services/ai-automation',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI and Automation Services',
  name: 'Infraspine AI & Automation Services',
  description: 'Enterprise AI and automation including RPA, LLM integrations, machine learning pipelines, AI chatbots, document intelligence, and end-to-end workflow automation.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/ai-automation',
}

const STATS = [
  { value: '70%',   label: 'average time saved on automated tasks',     color: '#B7FF58' },
  { value: '6 mo',  label: 'typical automation ROI payback period',     color: '#00C853' },
  { value: '24/7',  label: 'automated workflows run without supervision', color: '#2563EB' },
  { value: '0 err', label: 'error rate vs 4% human data entry average', color: '#D97706' },
]

const USE_CASES = [
  { title: 'Invoice data extraction and ERP posting',         sector: 'Finance',    saving: '6 hrs/day' },
  { title: 'Customer onboarding document verification',        sector: 'Banking',    saving: '80% faster' },
  { title: 'Inventory reconciliation across systems',          sector: 'Retail',     saving: '3 hrs/day' },
  { title: 'HR payroll data aggregation from multiple sources', sector: 'HR',         saving: '4 hrs/week' },
  { title: 'Support ticket triage and routing',               sector: 'IT Support',  saving: '60% auto' },
  { title: 'Regulatory report generation and submission',     sector: 'Compliance',  saving: '90% faster' },
]

const CAPABILITIES = [
  {
    icon: Bot,
    title: 'Robotic Process Automation (RPA)',
    color: '#B7FF58',
    bg: '#F7FFE5',
    colorText: '#365314',
    desc: 'Software robots that perform repetitive rule-based computer tasks exactly as a human would — clicking, typing, copying data between systems — but without errors, without breaks, and at any hour of the day. UiPath, Power Automate, and Automation Anywhere deployments for finance, HR, operations, and IT teams. Each automation includes exception handling, audit logging, and a monitoring dashboard so you always know what the robots are doing and when they fail.',
    points: ['UiPath, Microsoft Power Automate, and Automation Anywhere', 'Exception handling and human-in-the-loop escalation workflows', 'Audit trail logging for compliance and governance requirements', 'ROI measurement dashboard with time-saved metrics per process'],
  },
  {
    icon: Brain,
    title: 'LLM & Generative AI Integration',
    color: '#2563EB',
    bg: '#EFF6FF',
    colorText: '#1E40AF',
    desc: 'Custom integrations connecting OpenAI GPT-4o, Anthropic Claude, or Azure OpenAI into your existing business applications and workflows. AI-powered document summarisation, contract review assistance, customer email drafting, internal knowledge base search, and report generation — all operating within your security boundary with your data. We implement RAG (Retrieval-Augmented Generation) architectures so LLMs answer from your own documents rather than hallucinating from training data.',
    points: ['OpenAI GPT-4o, Anthropic Claude, and Azure OpenAI integrations', 'RAG architecture for document-grounded AI responses', 'Custom AI copilots embedded in your existing software interfaces', 'Data residency and privacy controls — your data stays your data'],
  },
  {
    icon: BarChart2,
    title: 'Machine Learning & Predictive Analytics',
    color: '#7C3AED',
    bg: '#F5F3FF',
    colorText: '#5B21B6',
    desc: 'Machine learning models trained on your business data to predict demand, detect anomalies, classify documents, score leads, or identify at-risk customers — problems where rules-based automation cannot work because the patterns are too complex or too numerous to encode manually. Model development uses scikit-learn, XGBoost, or deep learning frameworks (TensorFlow, PyTorch) depending on the problem. All models are monitored post-deployment for data drift and performance degradation.',
    points: ['Demand forecasting, churn prediction, and anomaly detection models', 'scikit-learn, XGBoost, TensorFlow, and PyTorch frameworks', 'Model monitoring for data drift and performance degradation', 'Business-readable dashboards showing model output and confidence'],
  },
  {
    icon: Zap,
    title: 'Intelligent Document Processing',
    color: '#D97706',
    bg: '#FFFBEB',
    colorText: '#92400E',
    desc: 'Structured data extraction from unstructured documents — invoices, purchase orders, bank statements, contracts, forms — using Azure Document Intelligence, AWS Textract, or custom trained OCR models. Extracted data is validated against business rules, mapped to your ERP or database schema, and posted automatically with exception routing for documents that fall below confidence thresholds. Average accuracy rates exceed 97% after a brief model training period on your document types.',
    points: ['Azure Document Intelligence and AWS Textract deployment', 'Invoice, PO, bank statement, and custom document type extraction', '97%+ extraction accuracy with confidence-threshold exception routing', 'Direct integration to SAP, Oracle, or custom ERP systems'],
  },
  {
    icon: GitMerge,
    title: 'Business Process Automation',
    color: '#0891B2',
    bg: '#ECFEFF',
    colorText: '#164E63',
    desc: 'End-to-end workflow automation that orchestrates multiple systems, human approvals, and automated tasks into a single managed process. Approval workflows, onboarding sequences, order processing pipelines, and exception management — built with Microsoft Power Platform, n8n, or custom API-orchestration code. Every workflow includes a visual monitoring dashboard, SLA tracking, and alerting when processes breach defined time thresholds.',
    points: ['Microsoft Power Platform and n8n workflow orchestration', 'Multi-system process automation with human approval nodes', 'SLA monitoring with breach alerts and escalation paths', 'Full audit trail for all automated business process steps'],
  },
  {
    icon: Cpu,
    title: 'AI Chatbot & Virtual Assistant',
    color: '#DC2626',
    bg: '#FEF2F2',
    colorText: '#991B1B',
    desc: 'Conversational AI assistants for customer support, internal IT help desk, HR FAQ handling, and sales qualification — deployed on your website, Microsoft Teams, WhatsApp Business, or mobile app. Built with retrieval-augmented generation so the chatbot answers from your actual documentation and knowledge base. Handoff to live agents when confidence is low. Full conversation analytics with topic clustering and resolution rate metrics.',
    points: ['Deployment on website, Microsoft Teams, WhatsApp, or mobile app', 'RAG-powered answers from your documentation and knowledge base', 'Seamless handoff to live agents with full conversation context', 'Analytics: resolution rate, topic clusters, unanswered questions'],
  },
]

const FAQS = [
  {
    question: 'How do we know which of our processes are good candidates for automation?',
    answer: 'The best automation candidates are processes that are: high-volume (run many times per day or week), rule-based (the same steps happen in the same order), data-intensive (involve copying data between systems or documents), and error-prone (humans make mistakes that cause rework). We offer a free process discovery workshop where we interview your operations team, map your current workflows, and score each process against these criteria to produce a prioritised automation roadmap.',
  },
  {
    question: 'What happens when an automated process fails or encounters an exception?',
    answer: 'Every automation we build includes exception handling logic. When a process encounters an unexpected situation — a document format it has not seen before, a field that does not match expected patterns, a system that is temporarily unavailable — the exception is logged, the item is moved to a review queue, and an alert is sent to a designated human reviewer. The automation skips that item and continues processing others rather than stopping completely.',
  },
  {
    question: 'Is our data secure when using AI services like OpenAI or Azure OpenAI?',
    answer: 'We always configure enterprise API agreements (not consumer accounts) for all AI integrations. Azure OpenAI Service, for example, runs in your own Azure subscription with your data residency region — Microsoft does not use your data for model training, and your data does not leave your agreed geographic boundary. For highly sensitive data, we deploy open-source models (Llama 3, Mistral) on your own infrastructure so your data never leaves your control.',
  },
  {
    question: 'How long does it take to automate a typical business process?',
    answer: 'A straightforward RPA automation (data entry, report generation, system-to-system data transfer) typically takes 2–4 weeks from requirements to production deployment. A more complex process with multiple decision branches, system integrations, and exception handling takes 4–8 weeks. AI-powered processes (LLM integration, document intelligence, ML models) typically take 6–12 weeks including model training and validation. We provide a firm timeline estimate after the discovery and scoping phase.',
  },
  {
    question: 'What ongoing maintenance do automations require?',
    answer: 'Automations require maintenance when the underlying applications or processes they interact with change. UI-based RPA bots are more sensitive to application interface changes than API-based automations. All our automation deployments include a 90-day warranty period and a monitoring dashboard that alerts us to failures. Post-warranty maintenance retainers are available at a monthly fixed fee. On average, well-built automations require 2–4 hours of maintenance per month.',
  },
  {
    question: 'Can you automate processes that involve multiple different software systems?',
    answer: 'Yes — cross-system automation is actually one of the highest-value use cases. RPA can interact with any application that has a user interface, including legacy systems without APIs. For systems that do expose APIs (ERP, CRM, accounting software), we use API-based integration for reliability. For hybrid scenarios — some systems with APIs, some without — we combine both approaches within a single orchestrated workflow.',
  },
]

export default function AiAutomationPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'AI & Automation' },
      ]} />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-14 sm:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-widest" style={{ background: '#B7FF58', color: '#0A1628' }}>NEW</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#B7FF58' }}>AI & Automation</span>
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white mb-6">
              Automate the Repetitive.<br />
              <span style={{ color: '#B7FF58' }}>Amplify the Strategic.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              Every hour your team spends copying data between systems, generating the same report, processing invoices manually, or answering the same support question is an hour not spent on work that actually requires human intelligence. Infraspine AI builds the automations, integrations, and intelligent tools that eliminate that waste — and deploy them securely within your existing technology environment.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-4 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[20px] font-black mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[10.5px] leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <Link href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-black transition-all hover:opacity-90"
              style={{ background: '#B7FF58', color: '#0A1628' }}>
              Book a Free Process Discovery Workshop <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black mb-3" style={{ color: '#0A1628' }}>
              Automation Use Cases We Have Already Solved
            </h2>
            <p className="text-[15px] max-w-xl mx-auto" style={{ color: '#64748B' }}>
              Real processes automated for real businesses — with measurable time savings per deployment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {USE_CASES.map(({ title, sector, saving }) => (
              <div key={title} className="rounded-xl p-5 border flex items-start gap-4" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#F7FFE5' }}>
                  <Zap size={14} style={{ color: '#365314' }} />
                </div>
                <div>
                  <p className="text-[13.5px] font-bold mb-1" style={{ color: '#0A1628' }}>{title}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full" style={{ background: '#EFF6FF', color: '#2563EB' }}>{sector}</span>
                    <span className="text-[11px] font-bold" style={{ color: '#00C853' }}>{saving} saved</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black mb-4" style={{ color: '#0A1628' }}>AI & Automation Services</h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Six automation and AI disciplines covering the full spectrum from simple RPA through to machine learning and generative AI.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map(cap => (
              <div key={cap.title} className="bg-white rounded-2xl border p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: '#E2E8F0', boxShadow: '0 4px 20px rgba(10,22,40,0.06)' }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: cap.bg }}>
                  <cap.icon size={22} style={{ color: cap.color }} strokeWidth={1.5} />
                </div>
                <h3 className="text-[17px] font-black mb-3" style={{ color: '#0A1628' }}>{cap.title}</h3>
                <p className="text-[13.5px] leading-relaxed mb-5" style={{ color: '#64748B' }}>{cap.desc}</p>
                <ul className="space-y-1.5">
                  {cap.points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-[13px]" style={{ color: '#475569' }}>
                      <CheckCircle size={13} style={{ color: cap.color, marginTop: '2px', flexShrink: 0 }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        title="AI & Automation — Frequently Asked Questions"
        subtitle="Practical answers to the questions business leaders ask before investing in automation and AI."
        faqs={FAQS}
      />

      <CTABanner
        heading="Start Your Automation Journey Today"
        subheading="Book a free process discovery workshop. We will identify your top 3 automation opportunities and estimate the time and cost savings — at no charge."
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
