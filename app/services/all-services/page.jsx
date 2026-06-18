import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import Link from 'next/link'
import {
  Server, ShieldCheck, Code2, Globe, Wrench, Monitor, Package,
  Network, Wifi, Volume2, Cloud, Shield, Database, ArrowRight,
  CheckCircle, Users, BookOpen, Briefcase, Zap, BarChart2,
  Settings, Camera, Lock, Bell, Fingerprint, FileText,
  Search, RefreshCw, Building2, Phone, Activity,
} from 'lucide-react'

export const metadata = {
  title: 'All IT Services Pakistan — Complete IT Services Directory | Infraspine',
  description: 'Complete directory of every IT service Infraspine delivers in Pakistan: managed IT, field services, cloud, cybersecurity, compliance, software development, networking, physical security, and professional services. Browse all 40+ service areas.',
  alternates: { canonical: 'https://www.infraspine.com/services/all-services' },
  openGraph: {
    title: 'All IT Services Pakistan — Complete IT Services Directory | Infraspine',
    description: 'Browse every IT service Infraspine delivers: 40+ service areas across managed IT, cloud, cybersecurity, networking, software development, and professional services.',
    url: 'https://www.infraspine.com/services/all-services',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Infraspine Complete IT Services Directory',
  description: 'Complete directory of every IT service delivered by Infraspine across Pakistan, covering 40+ service areas in managed IT, cloud, cybersecurity, compliance, software, networking, and professional services.',
  url: 'https://www.infraspine.com/services/all-services',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
}

const CATEGORIES = [
  {
    heading: 'Managed IT & Field Services',
    color: '#2563EB',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    icon: Server,
    intro: 'Outsourced IT operations, 24/7 infrastructure monitoring, and on-site field engineer deployment across Pakistan. Everything your IT department needs — from helpdesk to hardware repair.',
    groups: [
      {
        title: 'Managed IT Services',
        href: '/services/managed-it-services',
        desc: 'Fully managed IT operations covering infrastructure monitoring, helpdesk, patch management, IT asset management, and proactive incident response under a single SLA.',
        services: [
          { label: '24/7 NOC Monitoring', href: '/services/managed-it-services/noc-monitoring', icon: Activity, desc: 'Round-the-clock network operations centre monitoring every server, switch, and endpoint with automated alerting and 15-minute P1 response.' },
          { label: 'Service Desk', href: '/services/managed-it-services/service-desk', icon: Phone, desc: 'Multi-tier IT helpdesk handling all user support requests across phone, email, and portal with structured escalation and SLA tracking.' },
          { label: 'Remote Support', href: '/services/managed-it-services/remote-support', icon: Monitor, desc: 'Secure remote desktop support for immediate resolution of software, configuration, and connectivity issues without on-site engineer dispatch.' },
          { label: 'Patch Management', href: '/services/managed-it-services/patch-management', icon: RefreshCw, desc: 'Scheduled OS and application patching across your entire estate with pre-production testing, change control, and compliance reporting.' },
          { label: 'IT Asset Management', href: '/services/managed-it-services/it-asset-management', icon: Package, desc: 'Complete hardware and software asset tracking covering lifecycle management, warranty status, licence compliance, and refresh planning.' },
          { label: 'Data Backup & Recovery', href: '/services/data-backup-recovery', icon: Database, desc: 'Automated cloud and on-premise backup with immutable storage, tested recovery processes, and 15-minute RPO for business-critical systems.' },
        ],
      },
      {
        title: 'Global Field Services',
        href: '/services/field-services',
        desc: 'Nationwide on-site IT field engineering across Pakistan with 50+ engineers, 4-hour response SLA, and 98% first-visit fix rate for all hardware and infrastructure requirements.',
        services: [
          { label: 'Hardware Break Fix', href: '/services/field-services/hardware-break-fix', icon: Wrench, desc: 'On-site diagnosis and repair of failed servers, workstations, networking equipment, printers, and peripherals with same-day parts availability.' },
          { label: 'Desktop & IT Support', href: '/services/field-services/desktop-support', icon: Monitor, desc: 'On-site and remote end-user support covering OS installation, software deployment, hardware troubleshooting, and asset management.' },
          { label: 'Rollouts & Migrations', href: '/services/field-services/rollouts-migrations', icon: Package, desc: 'Large-scale device rollouts, OS migrations, and office relocations with coordinated multi-site deployment and zero data loss methodology.' },
          { label: 'Network Support', href: '/services/field-services/network-support', icon: Network, desc: 'On-site network fault diagnosis, switch and router configuration, cabling fault finding, and emergency connectivity restoration.' },
          { label: 'Audio Video Support', href: '/services/field-services/audio-video-support', icon: Volume2, desc: 'Professional AV installation and maintenance: Microsoft Teams Rooms, Zoom Rooms, digital signage, projection, PA systems, and AV control.' },
          { label: 'WiFi Services', href: '/services/field-services/wifi-services', icon: Wifi, desc: 'Enterprise wireless network design, RF site surveys, Wi-Fi 6 deployment, guest network segmentation, and ongoing wireless monitoring.' },
        ],
      },
      {
        title: 'Cloud Solutions',
        href: '/services/cloud-solutions',
        desc: 'Cloud migration, architecture, and managed services across Microsoft 365, Azure, AWS, and SharePoint — from initial strategy through to post-migration optimisation and FinOps governance.',
        services: [
          { label: 'Microsoft 365', href: '/services/cloud-solutions/microsoft-365', icon: Cloud, desc: 'Microsoft 365 licensing, deployment, migration from on-premise Exchange, Teams configuration, SharePoint setup, and ongoing administration.' },
          { label: 'Microsoft Azure', href: '/services/cloud-solutions/azure', icon: Cloud, desc: 'Azure infrastructure design, IaaS/PaaS deployments, Azure AD, cloud migration, FinOps cost governance, and 24/7 Azure monitoring.' },
          { label: 'Amazon AWS', href: '/services/cloud-solutions/aws', icon: Cloud, desc: 'AWS architecture, EC2/RDS/S3 deployments, cloud migration using AWS Migration Hub, and managed AWS support services.' },
          { label: 'SharePoint & Power Platform', href: '/services/cloud-solutions/sharepoint', icon: FileText, desc: 'SharePoint intranet design, Power Apps development, Power Automate workflow implementation, and Power BI dashboard deployment.' },
        ],
      },
    ],
  },
  {
    heading: 'Security & Compliance',
    color: '#DC2626',
    bg: '#FEF2F2',
    border: '#FECACA',
    icon: ShieldCheck,
    intro: 'End-to-end cybersecurity covering SOC monitoring, penetration testing, compliance certification, and physical security installation. Protecting your people, data, and infrastructure at every layer.',
    groups: [
      {
        title: 'Cybersecurity',
        href: '/services/cyber-security',
        desc: 'Layered cybersecurity across every attack surface — SOC monitoring, penetration testing, incident response, cloud security, and data protection for Pakistani enterprises.',
        services: [
          { label: 'SOC as a Service', href: '/services/cyber-security/soc', icon: Activity, desc: '24/7 Security Operations Centre monitoring using SIEM platforms with automated threat detection, alert triage, and incident response coordination.' },
          { label: 'Penetration Testing', href: '/services/cyber-security/penetration-testing', icon: Search, desc: 'Manual and automated penetration testing of web applications, APIs, networks, and Active Directory with CVSS-scored findings and free re-test.' },
          { label: 'Vulnerability Assessment', href: '/services/cyber-security/vulnerability-assessment', icon: Shield, desc: 'Comprehensive vulnerability scanning and assessment of all network assets with risk-prioritised remediation roadmap and compliance mapping.' },
          { label: 'Incident Response', href: '/services/cyber-security/incident-response', icon: Bell, desc: 'Rapid containment and forensic investigation of security breaches, ransomware attacks, and data incidents with detailed incident report.' },
          { label: 'Cloud Security', href: '/services/cyber-security/cloud-security', icon: Lock, desc: 'Cloud security posture management, IAM hardening, network security groups, encryption policies, and compliance controls for AWS and Azure.' },
          { label: 'Data Loss Prevention', href: '/services/cyber-security/data-loss-prevention', icon: Shield, desc: 'DLP policy design and implementation across endpoints, email, and cloud storage to prevent sensitive data exfiltration and policy violations.' },
        ],
      },
      {
        title: 'Compliance & Standards',
        href: '/services/cyber-security',
        desc: 'Compliance certification and advisory across ISO 27001, PCI-DSS, Cyber Essentials, NHS-DSPT, and data protection — helping organisations meet regulatory requirements without operational disruption.',
        services: [
          { label: 'ISO 27001 Consulting', href: '/services/cyber-security/iso-27001', icon: FileText, desc: 'Gap analysis, ISMS implementation, risk assessment, Annex A controls, and certification audit support for ISO 27001 accreditation.' },
          { label: 'PCI-DSS Assessments', href: '/services/cyber-security/pci-dss', icon: Shield, desc: 'PCI-DSS scoping, gap assessment, remediation support, SAQ completion, and QSA audit preparation for payment card data environments.' },
          { label: 'Cyber Essentials', href: '/services/cyber-security/cyber-essentials', icon: CheckCircle, desc: 'Cyber Essentials and Cyber Essentials Plus certification support covering all five technical controls and assessment preparation.' },
          { label: 'NHS-DSPT Assessment', href: '/services/cyber-security/nhs-dspt', icon: FileText, desc: 'Data Security and Protection Toolkit assessment support for NHS trusts and healthcare organisations handling patient data.' },
          { label: 'DPO as a Service', href: '/services/cyber-security/dpo-as-a-service', icon: Users, desc: 'Fractional Data Protection Officer service covering GDPR compliance, DPIA management, data breach response, and privacy policy governance.' },
          { label: 'IT Security Auditing', href: '/services/cyber-security/security-auditing', icon: Search, desc: 'Independent security audit of IT controls, access management, configuration standards, and security policy compliance with documented findings.' },
        ],
      },
      {
        title: 'Physical Security',
        href: '/services/physical-security',
        desc: 'Physical security systems design and installation — CCTV surveillance, access control, biometrics, and alarm systems protecting facilities across Pakistan.',
        services: [
          { label: 'CCTV & Surveillance', href: '/services/physical-security/cctv', icon: Camera, desc: 'IP CCTV design and installation with NVR storage, remote monitoring, AI analytics, and integration with access control systems.' },
          { label: 'Access Control', href: '/services/physical-security/access-control', icon: Lock, desc: 'Electronic access control systems covering door controllers, credential management, time-based rules, and multi-site centralised management.' },
          { label: 'Biometric Systems', href: '/services/physical-security/biometrics', icon: Fingerprint, desc: 'Fingerprint and facial recognition biometric access control for high-security zones with HR system integration and attendance management.' },
          { label: 'Alarm Systems', href: '/services/physical-security/alarm-systems', icon: Bell, desc: 'Intruder detection, motion sensors, glass break detectors, and 24/7 monitoring with police-response graded alarm systems.' },
        ],
      },
    ],
  },
  {
    heading: 'Technology & Professional Services',
    color: '#16A34A',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    icon: Code2,
    intro: 'Custom software development, network infrastructure design, and professional advisory services. Building the technology that runs your business and the expertise to lead it.',
    groups: [
      {
        title: 'Software Development',
        href: '/services/software-development',
        desc: 'Custom software development across web, mobile, ERP, and CRM platforms — with full source code ownership, Agile delivery, and post-launch support.',
        services: [
          { label: 'Mobile App Development', href: '/services/software-development/mobile-apps', icon: Monitor, desc: 'Cross-platform iOS and Android app development using React Native with offline capability, push notifications, and app store deployment.' },
          { label: 'Custom ERP Development', href: '/services/software-development/erp', icon: Settings, desc: 'Bespoke ERP systems built for Pakistani manufacturing, retail, and distribution businesses with full localisation and multi-branch support.' },
          { label: 'CRM Implementation', href: '/services/crm', icon: Users, desc: 'CRM platform selection, customisation, and implementation covering Salesforce, HubSpot, Zoho CRM, and bespoke CRM development.' },
          { label: 'AI & Automation', href: '/services/ai-automation', icon: Zap, desc: 'Intelligent process automation using RPA, LLM integration, document intelligence, and AI-powered workflows saving thousands of hours annually.' },
        ],
      },
      {
        title: 'Network & Infrastructure',
        href: '/services/network-infrastructure',
        desc: 'Enterprise network design, structured cabling, VoIP, and data centre services — building the physical and logical infrastructure your organisation depends on.',
        services: [
          { label: 'Network Design & Maintenance', href: '/services/network-infrastructure/network-design', icon: Network, desc: 'Enterprise LAN/WAN design with VLAN segmentation, SD-WAN, redundancy planning, and ongoing network maintenance under a managed service.' },
          { label: 'Structured Cabling', href: '/services/network-infrastructure/structured-cabling', icon: Settings, desc: 'TIA-568 certified copper and fibre structured cabling installation with full documentation, test certification, and 25-year channel warranty.' },
          { label: 'VoIP & Communications', href: '/services/network-infrastructure/voip', icon: Phone, desc: '3CX, Microsoft Teams Direct Routing, and hosted PBX deployment providing enterprise telephony with call recording, IVR, and analytics.' },
          { label: 'Data Center Services', href: '/services/data-center', icon: Server, desc: 'Data centre design, rack and stack, power and cooling planning, colocation management, and ongoing data centre managed services.' },
        ],
      },
      {
        title: 'Professional Services',
        href: '/services',
        desc: 'Strategic advisory, specialist recruitment, leadership services, and outsourcing — the expertise layer that makes your technology investments deliver measurable business outcomes.',
        services: [
          { label: 'Project Management', href: '/services/project-management', icon: BarChart2, desc: 'Dedicated IT project management using PRINCE2 and PMBoK methodologies for complex technology programmes, migrations, and rollouts.' },
          { label: 'IT Recruitment', href: '/services/it-recruitment', icon: Users, desc: 'Specialist IT recruitment for permanent and contract technology roles across Pakistan — sourced, screened, and placed by our technical team.' },
          { label: 'CIO as a Service', href: '/services/cio-as-a-service', icon: Briefcase, desc: 'Fractional Chief Information Officer providing strategic technology leadership, board-level reporting, and IT governance without executive headcount cost.' },
          { label: 'Disaster Recovery', href: '/services/disaster-recovery', icon: Shield, desc: 'Disaster recovery planning, DRaaS implementation, recovery testing, and business continuity documentation to minimise downtime after major incidents.' },
          { label: 'Business Continuity', href: '/services/cyber-security/business-continuity', icon: Activity, desc: 'Business Continuity Management covering BIA, recovery strategies, BCP documentation, crisis communication plans, and tabletop exercises.' },
          { label: 'IT Consultancy', href: '/services/it-consultancy', icon: Search, desc: 'Independent technology advisory covering IT strategy, enterprise architecture, digital transformation, and vendor selection for significant technology decisions.' },
          { label: 'IT Training & Certifications', href: '/services/it-trainings', icon: BookOpen, desc: 'Instructor-led certification training in Azure, AWS, Cisco, cybersecurity, and software development with real lab environments and 94% pass rate.' },
          { label: 'BPO & Outsourcing', href: '/services/bpo-services', icon: Users, desc: 'Managed outsourcing teams for customer support, IT helpdesk, data entry, finance back-office, and HR administration — live within 72 hours.' },
        ],
      },
    ],
  },
]

const STATS = [
  { value: '40+', label: 'Service Areas', color: '#2563EB' },
  { value: '3', label: 'Core Disciplines', color: '#DC2626' },
  { value: 'One', label: 'Partner for All', color: '#16A34A' },
  { value: '10+', label: 'Years Delivering', color: '#D97706' },
]

export default function AllServicesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'All Services' },
      ]} />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#00C853,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Complete Services Directory</span>
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white mb-6">
              Every IT Service Infraspine Delivers —{' '}
              <span style={{ color: '#00C853' }}>All 40+ in One Place.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              From 24/7 NOC monitoring and hardware break-fix through cloud migration, cybersecurity, and ISO 27001 compliance to custom software development and CIO advisory — every service area Infraspine delivers is listed here, with direct links to detailed service pages. One partner. Every layer of your IT.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-4 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[24px] font-black mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[11px] font-semibold leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#00C853', color: '#0A1628' }}>
                Get a Free Consultation <ArrowRight size={14} />
              </Link>
              <Link href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold border transition-all hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>
                Services Overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick nav anchors */}
      <div className="border-b bg-white sticky top-[66px] z-40" style={{ borderColor: '#E2E8F0' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
            {CATEGORIES.map(cat => (
              <a key={cat.heading} href={`#${cat.heading.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[12px] font-semibold whitespace-nowrap transition-all hover:opacity-90 flex-shrink-0"
                style={{ background: `${cat.color}15`, color: cat.color, border: `1px solid ${cat.color}30` }}>
                <cat.icon size={12} strokeWidth={2} />
                {cat.heading}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Service categories */}
      <div className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8 space-y-20">
          {CATEGORIES.map((cat, ci) => (
            <section key={ci} id={cat.heading.toLowerCase().replace(/[^a-z]+/g, '-')}>
              {/* Category header */}
              <div className="flex items-start gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ background: cat.bg, border: `1.5px solid ${cat.border}` }}>
                  <cat.icon size={22} style={{ color: cat.color }} strokeWidth={1.6} />
                </div>
                <div>
                  <h2 className="text-[clamp(1.5rem,2.5vw,2.2rem)] font-black mb-2" style={{ color: '#0A1628' }}>
                    {cat.heading}
                  </h2>
                  <p className="text-[15px] leading-relaxed max-w-2xl" style={{ color: '#64748B' }}>{cat.intro}</p>
                </div>
              </div>

              {/* Groups */}
              <div className="space-y-10">
                {cat.groups.map((group, gi) => (
                  <div key={gi}>
                    {/* Group heading */}
                    <div className="flex items-center justify-between mb-5 pb-3 border-b" style={{ borderColor: cat.border }}>
                      <div>
                        <h3 className="text-[18px] font-black mb-0.5" style={{ color: '#0A1628' }}>{group.title}</h3>
                        <p className="text-[13px] leading-relaxed max-w-xl" style={{ color: '#64748B' }}>{group.desc}</p>
                      </div>
                      <Link href={group.href}
                        className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-[12px] font-bold transition-all hover:opacity-90 flex-shrink-0 ml-4"
                        style={{ background: cat.color, color: '#fff' }}>
                        Overview <ArrowRight size={11} />
                      </Link>
                    </div>

                    {/* Service cards grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {group.services.map(svc => (
                        <Link key={svc.href} href={svc.href}
                          className="group bg-white rounded-xl border p-5 transition-all hover:-translate-y-0.5 hover:shadow-md flex flex-col"
                          style={{ borderColor: '#E2E8F0' }}>
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                              style={{ background: cat.bg }}>
                              <svc.icon size={15} style={{ color: cat.color }} strokeWidth={1.8} />
                            </div>
                            <h4 className="text-[14px] font-bold leading-snug pt-0.5 flex-1" style={{ color: '#0A1628' }}>
                              {svc.label}
                            </h4>
                          </div>
                          <p className="text-[12.5px] leading-relaxed flex-1 mb-3" style={{ color: '#64748B' }}>
                            {svc.desc}
                          </p>
                          <div className="flex items-center gap-1 text-[12px] font-semibold mt-auto transition-all group-hover:gap-2"
                            style={{ color: cat.color }}>
                            Learn more <ArrowRight size={11} />
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Mobile group link */}
                    <div className="sm:hidden mt-4">
                      <Link href={group.href}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-[12px] font-bold transition-all hover:opacity-90"
                        style={{ background: cat.color, color: '#fff' }}>
                        View {group.title} Overview <ArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Bottom value prop */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Why Infraspine</span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              One Partner. Every Layer of Your IT.
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Every service listed here is delivered by the same Infraspine team under a single SLA — eliminating the vendor fragmentation that creates accountability gaps and integration failures.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { color: '#2563EB', title: 'Single SLA', desc: 'One contract, one account manager, and one escalation path for every service area — no blame-shifting between vendors.' },
              { color: '#DC2626', title: 'Security-First', desc: 'Cybersecurity principles are embedded in every network design, cloud deployment, and software project from day one.' },
              { color: '#16A34A', title: 'Full Lifecycle', desc: 'We scope, design, implement, test, document, and support everything end-to-end — no hand-offs to third parties.' },
              { color: '#D97706', title: 'Nationwide', desc: '50+ field engineers and managed service operations covering every major city in Pakistan with 4-hour on-site response.' },
            ].map(p => (
              <div key={p.title} className="rounded-2xl border p-6" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${p.color}15` }}>
                  <CheckCircle size={18} style={{ color: p.color }} />
                </div>
                <h3 className="text-[15px] font-bold mb-2" style={{ color: '#0A1628' }}>{p.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: '#64748B' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Not Sure Which Service You Need?"
        subheading="Book a free 60-minute discovery call. We will audit your current environment, identify the gaps, and recommend only what is genuinely needed."
        primaryCTA={{ label: 'Book a Free Consultation', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
