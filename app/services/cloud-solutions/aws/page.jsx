import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Server, Database, Globe, Shield, Zap, BarChart2,
  ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'AWS Cloud Services Pakistan — Amazon Web Services Setup & Management | Infraspine',
  description: 'Infraspine AWS Cloud services in Pakistan: SAA-C03 certified engineers for EC2, S3, RDS, Lambda, EKS, IAM and CloudWatch. 30% average cost reduction, global infrastructure, Well-Architected reviews.',
  alternates: { canonical: 'https://www.infraspine.com/services/cloud-solutions/aws' },
  openGraph: {
    title: 'AWS Cloud Services Pakistan — Amazon Web Services Setup & Management | Infraspine',
    description: 'SAA-C03 certified AWS engineers for infrastructure setup, migration and management in Pakistan. EC2, S3, RDS, Lambda, security and FinOps cost optimisation.',
    url: 'https://www.infraspine.com/services/cloud-solutions/aws',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Amazon Web Services Cloud Services',
  name: 'Infraspine AWS Cloud Services',
  description: 'Certified AWS infrastructure setup, migration, EC2, S3, RDS, Lambda, security (IAM, GuardDuty, CloudTrail), and cost optimisation services for businesses in Pakistan.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/cloud-solutions/aws',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: 'SAA-C03', label: 'Certified Engineers', color: '#FF9900' },
  { value: '30%', label: 'Avg Cost Reduction', color: '#00C853' },
  { value: '99.999%', label: 'S3 Durability', color: '#7C3AED' },
  { value: 'Global', label: 'AWS Infrastructure', color: '#2563EB' },
]

const CAPABILITIES = [
  {
    icon: Server,
    title: 'AWS Account Setup & Architecture',
    color: '#FF9900',
    bg: '#FFF7ED',
    desc: 'A well-architected AWS foundation saves significant cost and security headaches later. We set up AWS accounts following the AWS multi-account strategy — separate accounts for production, staging, development, and shared services — managed through AWS Organizations with consolidated billing. Landing Zone configuration establishes the security baseline, VPC design, Transit Gateway for inter-account connectivity, and Service Control Policies that enforce guardrails across all accounts. Every deployment follows the AWS Well-Architected Framework pillars: operational excellence, security, reliability, performance efficiency, cost optimisation, and sustainability.',
    points: [
      'AWS Organizations multi-account structure with consolidated billing',
      'Landing Zone with security baseline and guardrail policies',
      'VPC design, subnet planning, and Transit Gateway configuration',
      'AWS Well-Architected Framework review and baseline assessment',
    ],
  },
  {
    icon: Globe,
    title: 'EC2 & Auto-Scaling',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'EC2 provides flexible, scalable compute — but getting the instance type, AMI, and Auto Scaling configuration right is essential for both performance and cost control. We size EC2 instances based on actual workload profiles rather than conservative over-provisioning, configure Auto Scaling Groups with appropriate scaling policies (target tracking, step scaling, or scheduled scaling depending on workload patterns), and implement EC2 instance lifecycle management including Spot Instance integration for non-critical workloads to reduce compute costs by up to 90% against On-Demand pricing.',
    points: [
      'Instance type selection based on actual workload performance profiling',
      'Auto Scaling Group configuration with target tracking policies',
      'Spot Instance integration for batch and fault-tolerant workloads',
      'Golden AMI pipeline for consistent and secure instance launches',
    ],
  },
  {
    icon: Database,
    title: 'S3 & CloudFront CDN',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'S3 is the backbone of data storage on AWS — but its flexibility also means misconfiguration is common and costly. We design S3 bucket architectures with appropriate access controls (block public access as default, bucket policies following least-privilege), S3 Intelligent-Tiering for automatic cost optimisation as data ages, Object Lock for compliance and ransomware protection, and Replication for disaster recovery across regions. CloudFront CDN is configured for static asset delivery, API acceleration, and edge-level security through WAF and Shield integration.',
    points: [
      'S3 bucket design with block-public-access and least-privilege IAM policies',
      'S3 Intelligent-Tiering for automatic storage cost optimisation',
      'Object Lock for WORM compliance and ransomware-resistant backups',
      'CloudFront distribution with WAF and custom cache behaviour rules',
    ],
  },
  {
    icon: Database,
    title: 'RDS & Database Services',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'AWS managed database services eliminate the operational burden of running database infrastructure without sacrificing the control your applications need. We deploy Amazon RDS for MySQL, PostgreSQL, and SQL Server with Multi-AZ high availability, automated backups with point-in-time recovery, Performance Insights for query-level monitoring, and encryption at rest and in transit. For high-throughput or complex workloads, Aurora Serverless v2 provides automatic scaling from zero to thousands of connections. DynamoDB, ElastiCache, and Redshift are deployed for NoSQL, caching, and analytics use cases respectively.',
    points: [
      'RDS Multi-AZ deployment for production high availability',
      'Aurora Serverless v2 for variable or spiky workload patterns',
      'Performance Insights and Enhanced Monitoring for query diagnostics',
      'Automated backup with 35-day point-in-time recovery window',
    ],
  },
  {
    icon: Shield,
    title: 'AWS Security (IAM, GuardDuty, CloudTrail)',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'AWS security requires a multi-layered approach across identity, detection, and logging. Our security configuration covers IAM — designing role-based access with least-privilege policies, enforcing MFA for all human users, and eliminating long-lived access keys in favour of IAM roles and instance profiles. GuardDuty provides continuous threat detection across CloudTrail logs, VPC Flow Logs, and DNS logs. CloudTrail is configured for organisation-wide logging with integrity validation and immutable storage. AWS Config enforces configuration compliance rules with automated remediation for common violations.',
    points: [
      'IAM role design with least-privilege following AWS security best practices',
      'GuardDuty deployment for ML-based threat detection across all log sources',
      'CloudTrail organisation-wide logging with integrity validation',
      'AWS Config compliance rules with automated remediation',
    ],
  },
  {
    icon: Zap,
    title: 'Lambda & Serverless Architecture',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Serverless architecture on AWS removes infrastructure management entirely for appropriate workload types — event-driven processing, API backends, scheduled jobs, and data transformation pipelines all run without provisioning or managing servers. We design serverless architectures using Lambda, API Gateway, DynamoDB, SQS, SNS, and EventBridge — the services that form the backbone of event-driven systems on AWS. Infrastructure as Code through Terraform or AWS CDK ensures all serverless resources are version-controlled, reviewable, and reproducible across environments.',
    points: [
      'Lambda function design with appropriate memory, timeout, and concurrency settings',
      'API Gateway REST and HTTP API configuration with authorisation',
      'Event-driven architecture using SQS, SNS, and EventBridge',
      'Infrastructure as Code deployment with Terraform or AWS CDK',
    ],
  },
]

const VENDORS = [
  'Amazon EC2', 'Amazon S3', 'Amazon RDS', 'AWS Lambda',
  'Amazon EKS', 'CloudFront', 'Route 53', 'IAM',
  'Amazon GuardDuty', 'AWS CloudWatch', 'Terraform', 'AWS CDK',
]

const FAQS = [
  {
    question: 'Why is AWS the most widely used cloud platform globally?',
    answer: 'AWS launched in 2006 and has maintained market leadership ever since, currently holding approximately 31% of the global cloud market. AWS&apos;s advantages include the broadest and deepest service portfolio (over 200 cloud services), the most extensive global infrastructure (33 launched regions with more planned), the largest partner and ISV ecosystem, and the strongest track record across the widest range of workload types — from startup applications to financial trading platforms and government systems. For organisations that need access to the widest range of cloud capabilities or are building for global reach, AWS is often the natural choice.',
  },
  {
    question: 'What is the AWS Well-Architected Framework and why does it matter?',
    answer: 'The AWS Well-Architected Framework is a set of best practice guidance organised across six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimisation, and Sustainability. AWS Well-Architected Reviews assess your existing or planned architecture against these pillars, identifying high-risk issues (HRIs) and medium-risk issues (MRIs) that should be addressed. For our clients, a Well-Architected Review at the start of engagement establishes a baseline of the architecture&apos;s current risk profile and provides a prioritised remediation backlog. AWS also runs a Well-Architected Partner Programme where certified partners can unlock AWS credits to help fund remediation work.',
  },
  {
    question: 'How do you manage AWS costs and prevent bill shock?',
    answer: 'AWS cost management is an ongoing practice, not a one-time exercise. Our cost governance approach includes: AWS Budgets with alert thresholds at 80% and 100% of monthly spend by account and service; Cost Anomaly Detection to flag unusual spending patterns in real time; regular Compute Optimizer and Trusted Advisor review to identify over-provisioned resources; Reserved Instance and Savings Plan modelling for workloads with predictable usage patterns (typically achieving 40–72% discounts on On-Demand pricing); and monthly cost analysis reports attributing spend by environment, team, and workload through mandatory tagging enforcement.',
  },
  {
    question: 'What is the difference between Reserved Instances and Savings Plans?',
    answer: 'Both are AWS commitment discount mechanisms. Reserved Instances commit to a specific instance type, operating system, and region for 1 or 3 years in exchange for discounts up to 72%. They work well for steady-state workloads running specific instance types. Savings Plans are more flexible — you commit to a specific dollar amount of compute spend per hour for 1 or 3 years, and the discount applies across any EC2 instance type, ECS Fargate, or Lambda usage that falls within your commitment. Compute Savings Plans are typically the better choice for organisations running diverse instance types or migrating to containers. We model both options for your specific usage pattern to find the optimal commitment structure.',
  },
  {
    question: 'Can you help us pass a SOC 2 or ISO 27001 audit on AWS?',
    answer: 'AWS itself holds numerous compliance certifications (SOC 1/2/3, ISO 27001, PCI-DSS, and many more), but these cover only AWS&apos;s own infrastructure — not how your organisation configures and uses AWS services. Your compliance responsibility covers the configuration of AWS services (IAM policies, S3 bucket permissions, encryption settings, CloudTrail logging) and the applications and data you run on AWS. Our AWS security service configures the technical controls that satisfy common compliance frameworks, and we can provide evidence packages for specific controls required by SOC 2 Type II or ISO 27001 auditors.',
  },
  {
    question: 'How do you handle disaster recovery on AWS?',
    answer: 'AWS provides multiple tiers of disaster recovery depending on your RTO (recovery time objective) and RPO (recovery point objective) requirements. Backup and restore (lowest cost, hours to recover) uses AWS Backup for snapshots across EC2, RDS, and EFS. Pilot light keeps a minimal version of your infrastructure running in a secondary region (hours to scale up). Warm standby runs a scaled-down but fully functional version of your stack in a second region (minutes to scale up). Multi-site active-active runs full capacity in two regions simultaneously (near-zero downtime, highest cost). We design your DR strategy based on your actual business continuity requirements and budget constraints, not on what sounds most impressive.',
  },
]

export default function AWSPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Cloud Solutions', href: '/services/cloud-solutions' },
        { label: 'Amazon AWS' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#FF9900,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: '#FF9900' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#FF9900' }}>Amazon Web Services</span>
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white mb-6">
              Amazon Web Services —{' '}
              <span style={{ color: '#FF9900' }}>Scalable Cloud Infrastructure, Managed for You.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              AWS is the world&apos;s most comprehensive cloud platform — over 200 services spanning compute, storage, databases, AI, networking, security, and developer tools. Getting the most from this breadth requires certified expertise and ongoing governance. Infraspine&apos;s SAA-C03 certified AWS engineers design Well-Architected infrastructure, manage costs proactively, and keep your AWS environment secure and optimised month after month.
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
                style={{ background: '#FF9900', color: '#0A1628' }}>
                Start Your AWS Journey <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Well-Architected Review
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
                <div className="h-px w-6" style={{ background: '#FF9900' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#FF9900' }}>The Business Case</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                AWS: The Widest Service Range, the Greatest Need for Expertise
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                AWS&apos;s market leadership is built on one thing: the broadest and deepest cloud service portfolio available anywhere. When a new technology category emerges — serverless computing, machine learning at scale, edge computing, quantum computing — AWS has typically had production-ready services for it before any competitor. For organisations building modern applications or needing access to cutting-edge cloud capabilities, this breadth is genuinely compelling.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The same breadth that makes AWS powerful also makes it complex to manage. Over 200 services with thousands of configuration options, IAM policies covering hundreds of actions, and pricing models that vary by service, region, and usage type create significant opportunity for misconfiguration and cost overruns. The Flexera State of the Cloud report consistently finds that organisations waste 30% of their cloud spend — on AWS as much as any other platform — through idle resources, over-provisioning, and missed commitment discount opportunities.
              </p>
              <p className="text-[15px] leading-relaxed mb-6" style={{ color: '#64748B' }}>
                The AWS Well-Architected Framework provides the architecture principles to build on AWS correctly. Our Well-Architected review process assesses every client environment against these six pillars, identifies high-risk issues, and provides a remediation backlog. Combined with our ongoing cost governance, security management, and managed operations, our clients get the full power of AWS without the overhead of managing its complexity themselves.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#FF9900', text: 'World\'s broadest cloud service portfolio — 200+ services' },
                  { color: '#00C853', text: 'Well-Architected reviews identify risks before they cause incidents' },
                  { color: '#DC2626', text: 'GuardDuty and CloudTrail security baseline from day one' },
                  { color: '#7C3AED', text: 'Reserved Instances and Savings Plans reduce costs by up to 72%' },
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
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>AWS Well-Architected Pillars</p>
              <div className="space-y-3">
                {[
                  { pillar: 'Operational Excellence', desc: 'Operational procedures, workload monitoring, runbooks', color: '#FF9900' },
                  { pillar: 'Security', desc: 'Identity, detection, data protection, incident response', color: '#DC2626' },
                  { pillar: 'Reliability', desc: 'Recovery from failure, demand management, change mgmt', color: '#2563EB' },
                  { pillar: 'Performance Efficiency', desc: 'Compute selection, scaling, monitoring, trade-offs', color: '#7C3AED' },
                  { pillar: 'Cost Optimisation', desc: 'Expenditure awareness, cost-effective resources, demand mgmt', color: '#00C853' },
                  { pillar: 'Sustainability', desc: 'Environmental impact, scaling, managed services adoption', color: '#0891B2' },
                ].map(p => (
                  <div key={p.pillar} className="flex items-start gap-3 py-2 border-b last:border-0" style={{ borderColor: '#E2E8F0' }}>
                    <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: p.color }} />
                    <div>
                      <div className="text-[13px] font-bold mb-0.5" style={{ color: '#0A1628' }}>{p.pillar}</div>
                      <div className="text-[11.5px]" style={{ color: '#64748B' }}>{p.desc}</div>
                    </div>
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
              <div className="h-px w-6" style={{ background: '#FF9900' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#FF9900' }}>AWS Capabilities</span>
              <div className="h-px w-6" style={{ background: '#FF9900' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Core AWS Service Areas
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From account architecture and EC2 through databases, CDN, security, and serverless — all Well-Architected.
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

      {/* ── Vendor Strip ── */}
      <section className="py-12 bg-white border-y" style={{ borderColor: '#E2E8F0' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] mb-8" style={{ color: '#94A3B8' }}>
            AWS Services &amp; Tools We Deploy
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {VENDORS.map(v => (
              <span key={v} className="px-4 py-2 rounded-full text-[12px] font-semibold border"
                style={{ background: '#F8FAFC', borderColor: '#E2E8F0', color: '#374151' }}>
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion faqs={FAQS} accent="#FF9900"
        title="AWS Cloud Questions Answered"
        subtitle="Common questions from organisations starting their AWS journey or optimising existing deployments." />

      <CTABanner
        heading="Start Your AWS Journey with Infraspine"
        subheading="SAA-C03 certified engineers, Well-Architected methodology, proactive cost governance, and ongoing managed operations. The complete AWS partnership."
        primaryCTA={{ label: 'Get Started on AWS', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
