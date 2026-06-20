import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  BarChart2, Users, AlertTriangle, Database,
  Zap, CheckCircle, ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'IT Project Management Pakistan | Technology Project Delivery | Infraspine',
  description: 'Infraspine IT Project Management: PRINCE2 and PMP-certified project managers delivering technology projects on time and on budget. Agile and Waterfall methodologies. 150+ projects delivered across Pakistan.',
  alternates: { canonical: 'https://www.infraspine.com/services/project-management' },
  openGraph: {
    title: 'IT Project Management Pakistan | Technology Project Delivery | Infraspine',
    description: 'End-to-end IT project management with PRINCE2/PMP-certified PMs. Agile and Waterfall delivery for technology projects across Pakistan.',
    url: 'https://www.infraspine.com/services/project-management',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'IT Project Management',
  name: 'Infraspine IT Project Management',
  description: 'End-to-end management of technology projects from initiation to handover. PRINCE2 and PMP-certified project managers delivering on-time, on-budget results using Agile and Waterfall methodologies.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/project-management',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '150+', label: 'Projects Delivered', color: '#2563EB' },
  { value: '96%', label: 'On-Time Delivery', color: '#00C853' },
  { value: 'PRINCE2 & PMP', label: 'Certified PMs', color: '#7C3AED' },
  { value: '£500K–£5M', label: 'Project Scale', color: '#D97706' },
]

const CAPABILITIES = [
  {
    icon: BarChart2,
    title: 'Project Initiation & Planning',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Every successful technology project begins with a rigorous initiation phase that establishes clear scope, measurable objectives, and a realistic delivery plan. Our project managers work alongside your senior stakeholders to define the business case, document requirements, agree on acceptance criteria, and produce a project initiation document that all parties sign off before a single line of work begins. We develop a detailed project schedule using industry-standard tools, break down the work into manageable packages with clear ownership, and establish baseline cost and schedule against which progress will be measured throughout the engagement. Poor planning is the root cause of most project failures — we invest the time at the start to avoid costly rework and scope creep later.',
    points: [
      'Business case development and benefits mapping',
      'Scope definition, WBS creation, and baseline scheduling',
      'Resource planning and skills gap identification',
      'Project governance framework and RACI matrix setup',
    ],
  },
  {
    icon: Users,
    title: 'Stakeholder Management',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Technology projects fail far more often because of people problems than technical ones. Misaligned expectations, poor communication, and insufficient senior sponsorship are consistently ranked as the top causes of project failure. Our project managers take stakeholder management seriously as a formal discipline. We identify all stakeholders at initiation, assess their level of influence and interest, and develop a tailored communications plan that keeps the right people informed at the right frequency with the right level of detail. Executive sponsors receive concise progress dashboards focused on risk and budget. Technical teams receive detailed task assignments and impediment escalation paths. End users receive change management communications that prepare them for the transition ahead.',
    points: [
      'Stakeholder register and influence-interest mapping',
      'Tailored communications plan by audience and frequency',
      'Executive dashboard reporting with RAG status',
      'Change management and end-user transition planning',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Risk & Issue Management',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Risk management is not a checkbox exercise — it is an ongoing discipline that determines whether a project lands in the success or failure column. Our project managers maintain a live risk and issue register updated at every project meeting. Risks are assessed for probability and impact, assigned to an owner, and tracked against agreed mitigation actions. When a risk materialises into an issue, we escalate it through a defined process with a recommended response and decision timeline so that your leadership is never surprised by a project crisis that could have been anticipated. We conduct formal risk reviews at every stage gate, ensuring that the risk profile of the project is reassessed as scope and circumstances evolve.',
    points: [
      'Risk register maintained and updated throughout the project lifecycle',
      'Probability and impact scoring with prioritised mitigation actions',
      'Issue escalation process with defined response timelines',
      'Stage gate risk reviews and change control board facilitation',
    ],
  },
  {
    icon: Database,
    title: 'Budget & Resource Control',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Budget overruns and resource conflicts are two of the most common reasons technology projects disappoint. Our project managers implement earned value management principles to track cost performance against the baseline, giving you early warning when spend is trending above plan rather than an unwelcome surprise at project closure. We produce monthly cost reports that show actual spend versus budget, forecast cost at completion, and variance analysis that explains every deviation. Resource management includes tracking utilisation across the project team, identifying over-allocation before it causes missed deadlines, and managing third-party vendor delivery against contracted milestones and payment schedules.',
    points: [
      'Earned value management with cost performance index tracking',
      'Monthly budget reports with forecast-to-complete analysis',
      'Resource utilisation monitoring and conflict resolution',
      'Vendor management and milestone payment verification',
    ],
  },
  {
    icon: Zap,
    title: 'Agile & Waterfall Delivery',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'Different technology projects require different delivery approaches. Infrastructure rollouts, compliance programmes, and ERP implementations often benefit from a structured Waterfall approach where requirements are fully defined before build begins and sequential phases provide clear governance checkpoints. Software development, digital transformation initiatives, and product builds are better served by Agile delivery frameworks that allow requirements to evolve through regular sprint cycles. Our project managers are certified and experienced in both methodologies and can recommend the right approach for your project — or a hybrid model that applies Waterfall governance to a project with Agile delivery phases where this serves the outcome best.',
    points: [
      'Agile delivery using Scrum and Kanban frameworks',
      'Waterfall project management with formal stage gates',
      'Hybrid methodology design for complex programmes',
      'Sprint planning, velocity tracking, and retrospective facilitation',
    ],
  },
  {
    icon: CheckCircle,
    title: 'Project Handover & Benefits Realisation',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Project completion is not the end of the value story — it is the beginning. Many organisations invest significantly in technology projects and then fail to capture the intended business benefits because the handover is rushed and the operational team is not prepared to run what has been delivered. Our project managers develop a formal handover plan that includes knowledge transfer sessions, operational runbooks, trained super-users, and a post-implementation support window. We document lessons learned in a structured format and conduct a post-project benefits review at an agreed interval after go-live to assess whether the business case objectives have been realised and identify any follow-on actions required.',
    points: [
      'Formal handover plan with acceptance sign-off documentation',
      'Knowledge transfer sessions and operational runbook delivery',
      'Lessons learned review and project closure report',
      'Post-implementation benefits review against original business case',
    ],
  },
]

const FAQS = [
  {
    question: 'What does an IT project manager do?',
    answer: 'An IT project manager is responsible for planning, executing, and closing technology projects within agreed scope, time, cost, and quality parameters. They define the project structure during initiation, build and maintain a detailed project schedule, manage the project team and third-party vendors, track budget and resource spend, identify and mitigate risks, communicate progress to stakeholders, and manage change control when scope or requirements evolve. Their role is to act as the single point of accountability for delivery — providing your leadership team with visibility and confidence that the project is progressing as planned and escalating issues before they become crises.',
  },
  {
    question: 'What methodologies do you use — Agile or Waterfall?',
    answer: 'We are experienced and certified in both Agile and Waterfall methodologies and select the appropriate approach based on the nature of your project. Waterfall is well-suited to projects with fixed requirements, regulatory compliance obligations, or infrastructure-heavy scope where sequential phases provide the best governance and audit trail. Agile is better suited to software development, digital product builds, and transformation programmes where requirements evolve and frequent delivery of working increments provides business value earlier. We also design hybrid models for complex programmes — for example, applying Waterfall governance at a programme level with Agile sprints within individual workstreams.',
  },
  {
    question: 'How do you manage project risks?',
    answer: 'Risk management is a continuous process throughout the project lifecycle, not a one-time exercise at the start. We maintain a live risk register that captures every identified risk with its probability rating, potential impact, risk owner, and agreed mitigation or contingency action. The register is reviewed and updated at every project team meeting and presented to the project board at each stage gate. When a risk materialises into an actual issue, we activate the issue management process — escalating with a recommended response, decision authority, and timeline. We also conduct proactive risk horizon scanning to identify emerging risks before they impact the schedule or budget.',
  },
  {
    question: 'Can you manage projects in our existing tools like Jira or Monday.com?',
    answer: 'Yes. We adapt to your existing toolset wherever possible to avoid introducing unnecessary new systems and to ensure that our project reporting integrates naturally with your internal processes. Our project managers are experienced with Jira, Monday.com, Microsoft Project, Asana, Trello, ServiceNow, and Azure DevOps. We can manage projects natively within your chosen platform, configure dashboards for your stakeholders, and maintain our risk registers and status reports in your environment. Where a project requires tooling you do not currently have, we can recommend and configure the most appropriate platform for the scale and complexity of the work.',
  },
  {
    question: 'What is included in the project handover?',
    answer: 'A thorough project handover is essential to ensure that your organisation can operate and maintain what has been delivered without dependency on the project team. Our standard handover package includes a project closure report documenting what was delivered against the original scope, a lessons learned register for future project reference, technical documentation and operational runbooks for the delivered system or infrastructure, knowledge transfer sessions with your operational team, a trained super-user group capable of supporting end users, and a post-implementation support window during which the project team remains available to resolve any teething issues. We also schedule a benefits realisation review at an agreed interval post-go-live to confirm that the business case objectives are being achieved.',
  },
]

export default function ProjectManagementPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Project Management', href: '/services/project-management' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#00082a' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#2563EB,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#2563EB' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>IT Project Management</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Technology Projects Delivered{' '}
              <span style={{ color: '#2563EB' }}>On Time. On Budget. First Time.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Most technology projects fail not because of bad technology — they fail because of poor planning, unclear ownership, and insufficient risk management. Infraspine provides PRINCE2 and PMP-certified project managers who take end-to-end accountability for your IT projects from initiation through to handover, ensuring that what was promised is what gets delivered. We have managed over 150 technology projects across Pakistan, from infrastructure rollouts to enterprise software implementations, at project values between £500,000 and £5 million.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-3 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[22px] font-black mb-1 leading-tight" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[11px] font-semibold leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#2563EB', color: '#fff' }}>
                Discuss Your Project <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Request a PM Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Business Case ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="h-px w-6" style={{ background: '#2563EB' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>Why Projects Fail</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                70% of Technology Projects Miss Their Targets. Ours Don\'t.
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The Standish Group\'s CHAOS Report consistently finds that fewer than one-third of technology projects are delivered on time, on budget, and with the full scope originally intended. The most common causes are scope creep, inadequate stakeholder engagement, poor risk management, and the absence of experienced project governance. These are not technology problems — they are management problems.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                When organisations try to deliver technology projects using internal IT staff who are simultaneously responsible for keeping systems running, the result is predictable. The project gets deprioritised every time an operational issue arises, deadlines slip, the budget drifts, and what eventually gets delivered is a fraction of what was originally scoped. An experienced, dedicated project manager changes this dynamic completely.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Infraspine\'s project managers bring PRINCE2 and PMP certifications, deep technology sector experience, and a track record of successful delivery across infrastructure, cloud migration, ERP implementation, and digital transformation projects. We take singular accountability for delivery so that your leadership team can focus on running the business.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#2563EB', text: '96% of projects delivered on time against agreed baseline' },
                  { color: '#7C3AED', text: 'PRINCE2 and PMP certified — not just coordinators with a Gantt chart' },
                  { color: '#00C853', text: 'Single point of accountability from initiation to handover' },
                  { color: '#D97706', text: 'Full benefits realisation tracking post go-live' },
                ].map(({ color, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${color}15` }}>
                      <CheckCircle size={12} style={{ color }} />
                    </div>
                    <span className="text-[14px]" style={{ color: '#374151' }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border p-8" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>Project Delivery Comparison</p>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2 text-[10px] font-bold uppercase tracking-wider pb-1 border-b" style={{ color: '#94A3B8', borderColor: '#E2E8F0' }}>
                  <div></div><div>Without PM</div><div>Infraspine PM</div>
                </div>
                {[
                  { label: 'On-Time Delivery', internal: 'Industry avg: 30%', managed: '96% with Infraspine', color: '#00C853' },
                  { label: 'Budget Adherence', internal: 'Frequent overruns', managed: 'Earned value tracking', color: '#00C853' },
                  { label: 'Risk Management', internal: 'Reactive', managed: 'Proactive register', color: '#00C853' },
                  { label: 'Stakeholder Updates', internal: 'Ad hoc', managed: 'Structured cadence', color: '#00C853' },
                  { label: 'PM Certification', internal: 'Often absent', managed: 'PRINCE2 & PMP', color: '#00C853' },
                  { label: 'Benefits Review', internal: 'Rarely done', managed: 'Post-go-live included', color: '#00C853' },
                ].map(p => (
                  <div key={p.label} className="grid grid-cols-3 gap-2 py-2 border-b last:border-0 text-[12px]" style={{ borderColor: '#E2E8F0' }}>
                    <div className="font-semibold" style={{ color: '#0A1628' }}>{p.label}</div>
                    <div style={{ color: '#DC2626' }}>{p.internal}</div>
                    <div className="font-semibold" style={{ color: '#00C853' }}>{p.managed}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#2563EB' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>Service Capabilities</span>
              <div className="h-px w-6" style={{ background: '#2563EB' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Core Project Management Disciplines
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From project initiation and stakeholder alignment through risk management, Agile delivery, and formal benefits realisation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map(cap => (
              <div key={cap.title}
                className="bg-white rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: '#E2E8F0' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: cap.bg }}>
                  <cap.icon size={20} style={{ color: cap.color }} />
                </div>
                <h3 className="text-[16px] font-bold mb-3" style={{ color: '#0A1628' }}>{cap.title}</h3>
                <p className="text-[13.5px] leading-relaxed mb-4" style={{ color: '#64748B' }}>{cap.desc}</p>
                <ul className="space-y-2">
                  {cap.points.map(pt => (
                    <li key={pt} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: cap.color }} />
                      <span className="text-[13px]" style={{ color: '#475569' }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion faqs={FAQS} accent="#2563EB"
        title="IT Project Management Questions Answered"
        subtitle="Common questions from organisations planning technology projects." />

      <CTABanner
        heading="Ready to Deliver Your Next IT Project on Time?"
        subheading="Speak to a certified project manager about your upcoming technology initiative. We take accountability for delivery from day one."
        primaryCTA={{ label: 'Discuss Your Project', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
