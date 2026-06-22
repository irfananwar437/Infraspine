import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  Cloud, Shield, Users, Server, CheckCircle, Globe,
  ChevronRight, ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'Cloud Security Services Pakistan | Cloud Infrastructure Protection | Infraspine',
  description: 'Infraspine secures AWS, Azure, and GCP cloud environments in Pakistan. CSPM, CASB, identity management, container security, zero-trust architecture, and 24/7 cloud monitoring.',
  alternates: {
    canonical: 'https://www.infraspine.com/services/cyber-security/cloud-security',
  },
  openGraph: {
    title: 'Cloud Security Services Pakistan | Infraspine',
    description: 'Securing AWS, Azure, and GCP environments with CSPM, CASB, identity management, container security, and cloud compliance.',
    url: 'https://www.infraspine.com/services/cyber-security/cloud-security',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cloud Security Services',
  provider: { '@type': 'Organization', name: 'Infraspine', url: 'https://www.infraspine.com' },
  areaServed: 'Pakistan',
  description: 'Securing AWS, Azure, and GCP environments with CSPM, CASB, identity management, container security, and cloud compliance.',
  url: 'https://www.infraspine.com/services/cyber-security/cloud-security',
}

const STATS = [
  { value: 'AWS', label: 'AWS/Azure/GCP Certified', color: '#16A34A' },
  { value: 'CSPM', label: 'CSPM & CASB Coverage', color: '#16A34A' },
  { value: 'Zero', label: 'Zero-Trust Architecture', color: '#16A34A' },
  { value: '24/7', label: 'Cloud Monitoring', color: '#16A34A' },
]

const CAPABILITIES = [
  {
    icon: Cloud,
    title: 'Cloud Security Posture Management',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'Cloud Security Posture Management (CSPM) continuously monitors your cloud environment for misconfigurations, compliance violations, and security risks — catching issues that manual reviews miss because cloud infrastructure changes hundreds of times per day. Infraspine deploys and manages CSPM solutions across AWS, Azure, and GCP that continuously compare your cloud configuration against security benchmarks including CIS Foundations Benchmarks, AWS Security Hub standards, and regulatory frameworks including SOC 2, PCI-DSS, and ISO 27001. Findings are prioritised by risk level with automated alerts for critical misconfigurations such as publicly accessible storage buckets, overly permissive security groups, disabled MFA for privileged accounts, unencrypted data stores, and logging gaps. CSPM provides a real-time security score for each cloud account that allows you to measure and track your security posture improvement over time. Automated remediation is configured for low-risk, well-understood findings to reduce analyst workload while maintaining human oversight for complex decisions.',
    points: ['Continuous multi-cloud configuration monitoring', 'CIS Benchmark and compliance framework alignment', 'Automated remediation for known misconfigurations', 'Real-time security score and trend tracking'],
  },
  {
    icon: Users,
    title: 'Identity & Access Management',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'Identity is the new perimeter in cloud environments — the majority of cloud breaches involve compromised or overpermissioned credentials rather than network-layer attacks. Infraspine\'s cloud IAM service implements least-privilege access controls across your cloud environment, eliminating the excessive permissions that accumulate over time as teams add access without removing it. We audit all IAM users, roles, service accounts, and API keys for permission sprawl — identifying accounts with administrator access that should have scoped access, and service accounts with cross-account permissions that are no longer needed. Remediation involves right-sizing permissions to the minimum required for each identity, enforcing MFA for all human users including console access, and implementing privileged access management (PAM) for administrator operations. We deploy identity governance tooling to continuously monitor permission creep and alert when new overly permissive policies are created. For organisations using Microsoft Entra ID or Okta as an identity provider, we configure SSO federation to cloud console access with conditional access policies.',
    points: ['IAM permission audit and right-sizing', 'MFA enforcement for all console access', 'Privilege escalation path analysis', 'Continuous permission creep monitoring'],
  },
  {
    icon: Server,
    title: 'Cloud Workload Protection',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'Cloud workloads — virtual machines, serverless functions, and managed compute services — face the same threats as on-premises servers but require cloud-native security tooling to protect effectively. Infraspine deploys Cloud Workload Protection Platform (CWPP) solutions to provide visibility and protection for all cloud compute resources. For virtual machines, we deploy lightweight EDR agents that provide real-time threat detection, vulnerability scanning, and behavioural monitoring without the performance overhead of traditional AV. We implement cloud-native vulnerability management using AWS Inspector, Microsoft Defender for Cloud, or third-party scanners to continuously assess EC2 instances, Azure VMs, and GCP Compute instances for unpatched CVEs. Serverless function security is assessed through static analysis of function code and runtime monitoring of execution behaviour. Cloud Security Groups and Network ACLs are audited against the principle of least network access, with automated alerting for overly permissive rules.',
    points: ['Cloud-native EDR for virtual machines', 'Continuous vulnerability scanning with prioritisation', 'Security group and network ACL auditing', 'Serverless function security assessment'],
  },
  {
    icon: Shield,
    title: 'Container & Kubernetes Security',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'Container and Kubernetes adoption in Pakistan is accelerating, but many organisations deploy containers without the security controls necessary for a production environment. Infraspine\'s container security service covers the entire container lifecycle — from image build to runtime to decommission. Container image scanning is integrated into your CI/CD pipeline to catch vulnerable base images and application dependencies before they reach production. We implement admission controllers in Kubernetes (using OPA Gatekeeper or Kyverno) to enforce security policies at deployment time — blocking pods that run as root, mount host filesystems, or use privileged containers. Runtime container security using Falco or commercial CWPP tools detects suspicious container behaviour — unexpected network connections, shell access to containers, and unusual file system activity — in real time. Kubernetes RBAC configurations are audited for overpermissive cluster roles, and network policies are implemented to enforce pod-to-pod communication restrictions at the namespace level.',
    points: ['CI/CD pipeline image scanning integration', 'Kubernetes admission controller policy enforcement', 'Runtime threat detection with Falco', 'RBAC audit and network policy implementation'],
  },
  {
    icon: CheckCircle,
    title: 'Cloud Compliance Management',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'Cloud environments introduce compliance challenges that differ from on-premises environments — configuration changes happen continuously, shared responsibility boundaries can be misunderstood, and evidence collection for audits requires tooling rather than manual review. Infraspine\'s cloud compliance management service maps your cloud environment to the specific compliance frameworks relevant to your organisation — ISO 27001 Annex A controls, PCI-DSS Requirements 1-12, GDPR technical measures, SOC 2 Trust Services Criteria, and local Pakistani regulatory requirements. We configure automated compliance evidence collection so that audit evidence — configuration snapshots, access logs, change records, and encryption status reports — is captured continuously and stored in a format ready for auditor review. Compliance dashboards provide real-time visibility into your compliance posture with per-control status, evidence links, and remediation ownership. We also assist with the Shared Responsibility Model documentation that is required for most cloud compliance frameworks — clearly delineating which controls are the cloud provider\'s responsibility and which remain yours.',
    points: ['Multi-framework compliance mapping and dashboards', 'Automated evidence collection for audits', 'Shared Responsibility Model documentation', 'Local and international regulatory framework coverage'],
  },
  {
    icon: Globe,
    title: 'Multi-Cloud Security Strategy',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'Operating across multiple cloud providers increases flexibility and avoids vendor lock-in, but it also multiplies the security surface and creates silos that threat actors can exploit — moving from a compromised AWS account to an Azure environment that uses the same credentials. Infraspine\'s multi-cloud security strategy service designs a unified security architecture that applies consistent policies, monitoring, and controls across all cloud providers. We implement a cloud-agnostic SIEM integration that aggregates logs from AWS CloudTrail, Azure Monitor, GCP Cloud Logging, and on-premises infrastructure into a single security data lake for unified threat detection. Identity federation ensures consistent authentication standards across clouds — one identity provider, one MFA policy, one access governance process. We design network security architectures that implement consistent egress filtering and data transfer controls regardless of which cloud provider is used. Unified policy-as-code (using Terraform or OPA) ensures security controls are consistently applied when new cloud resources are provisioned across any provider.',
    points: ['Unified SIEM log aggregation across cloud providers', 'Cross-cloud identity federation and access governance', 'Policy-as-code for consistent control deployment', 'Cross-cloud threat hunting and investigation'],
  },
]

const FAQS = [
  {
    question: 'What is cloud security?',
    answer: 'Cloud security encompasses the policies, controls, procedures, and technologies that work together to protect cloud-based systems, data, and infrastructure from threats. It covers a broader scope than traditional network security because cloud environments are dynamic — resources are created and destroyed automatically, configurations change continuously, and the attack surface extends to identity permissions, storage access policies, API configurations, and network rules in addition to traditional OS and application vulnerabilities. Effective cloud security requires both cloud-native tooling and a strategy aligned with the specific threat model of cloud environments.',
  },
  {
    question: 'What is Cloud Security Posture Management (CSPM)?',
    answer: 'Cloud Security Posture Management (CSPM) is a category of security tooling that continuously monitors your cloud environment for misconfigurations and compliance violations. CSPM tools connect to your cloud accounts via APIs and check thousands of configuration settings against security benchmarks — identifying issues like publicly accessible storage buckets, overpermissive IAM roles, disabled logging, unencrypted databases, and insecure network rules. CSPM provides a real-time view of your cloud security posture and can be configured to alert your team or automatically remediate specific findings. Most leading CSPM tools also map findings to compliance frameworks, making them valuable for audit preparation.',
  },
  {
    question: 'Do you support multi-cloud environments?',
    answer: 'Yes. Infraspine has expertise across AWS, Microsoft Azure, and Google Cloud Platform. We design and implement security architectures that work consistently across multiple cloud providers, with unified monitoring, identity management, and compliance reporting regardless of which cloud services you use. For organisations migrating from one cloud to another or running workloads across multiple providers, we ensure security controls are applied consistently and that cross-cloud attack paths are identified and closed.',
  },
  {
    question: 'How do you secure containers and Kubernetes?',
    answer: 'Container and Kubernetes security requires coverage at multiple layers. At the image level, we scan container images in your CI/CD pipeline to catch vulnerable dependencies before they reach production. At the cluster level, we audit Kubernetes RBAC configurations, implement admission controllers to enforce security policies at deployment time, and configure network policies to restrict pod-to-pod communication. At runtime, we deploy agent-based monitoring that detects suspicious container behaviour — unexpected process execution, network connections to unusual destinations, and file system modifications. We also assess Kubernetes API server security, etcd encryption, and control plane access controls.',
  },
  {
    question: 'How is cloud security different from on-premise security?',
    answer: 'Cloud security differs from on-premise security in several key ways. First, the attack surface includes identity and configuration layers that do not exist on-premise — a misconfigured IAM role or a publicly accessible storage bucket can expose data without any network-layer attack. Second, cloud environments change continuously — infrastructure is created and destroyed by automation, making manual security reviews impractical; continuous automated monitoring is essential. Third, the shared responsibility model means that different security controls are the cloud provider\'s responsibility (physical security, hypervisor security) versus your responsibility (data encryption, access management, OS hardening). Understanding and implementing the customer-side controls is the core focus of cloud security practice.',
  },
]

export default function CloudSecurityPage() {
  const accent = '#16A34A'
  const heroBg = '#001a08'
  const statBg = '#F0FDF4'
  const borderColor = '#BBF7D0'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="border-b" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
          <div className="max-w-6xl mx-auto px-5 lg:px-8 py-3">
            <ol className="flex flex-wrap items-center gap-1.5 text-[12px]" style={{ color: '#64748B' }}>
              <li><Link href="/" style={{ color: '#64748B' }} className="hover:underline">Home</Link></li>
              <li><ChevronRight size={12} /></li>
              <li><Link href="/services" style={{ color: '#64748B' }} className="hover:underline">Services</Link></li>
              <li><ChevronRight size={12} /></li>
              <li><Link href="/services?tab=cyber" style={{ color: '#64748B' }} className="hover:underline">Cybersecurity</Link></li>
              <li><ChevronRight size={12} /></li>
              <li style={{ color: accent }} className="font-semibold">Cloud Security</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section style={{ background: heroBg }} className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '48px 48px' }}
          />
          <div
            className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.08]"
            style={{ background: `radial-gradient(circle,${accent},transparent 70%)` }}
          />
          <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 py-16 sm:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="h-px w-6" style={{ background: accent }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: accent }}>Cybersecurity — Cloud Security</span>
              </div>
              <h1 className="text-[30px] sm:text-[46px] lg:text-[52px] font-black leading-[1.06] tracking-tight text-white mb-5">
                Cloud Security Services<br />
                <span style={{ color: accent }}>AWS, Azure & GCP in Pakistan</span>
              </h1>
              <p className="text-[15px] sm:text-[17px] leading-relaxed mb-5 max-w-2xl" style={{ color: '#94A3B8' }}>
                Securing your cloud environments with CSPM, CASB, identity management, container security, and zero-trust architecture. Certified engineers across AWS, Azure, and GCP with 24/7 cloud monitoring and compliance management.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                  style={{ background: accent, color: '#fff' }}
                >
                  Get Cloud Security Review <ArrowRight size={15} />
                </Link>
                <Link
                  href="/services?tab=cyber"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                  style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}
                >
                  All Cybersecurity Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E8F0', borderTop: '1px solid #E2E8F0' }}>
          <div className="max-w-6xl mx-auto px-5 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center py-8 px-4"
                  style={{ borderRight: i < STATS.length - 1 ? '1px solid #E2E8F0' : 'none' }}
                >
                  <span className="text-[28px] sm:text-[34px] font-black leading-none mb-1" style={{ color: s.color }}>{s.value}</span>
                  <span className="text-[12px] font-medium text-center" style={{ color: '#64748B' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
          <div className="max-w-6xl mx-auto px-5 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-6" style={{ background: accent }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: accent }}>What We Deliver</span>
                <div className="h-px w-6" style={{ background: accent }} />
              </div>
              <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
                Cloud Security Capabilities
              </h2>
              <p className="text-[14px] max-w-xl mx-auto" style={{ color: '#64748B' }}>
                Six cloud security disciplines covering posture, identity, workloads, containers, compliance, and multi-cloud strategy.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CAPABILITIES.map((cap) => {
                const Icon = cap.icon
                return (
                  <div
                    key={cap.title}
                    className="flex flex-col rounded-2xl overflow-hidden border transition-all hover:-translate-y-1 hover:shadow-lg"
                    style={{ background: '#fff', borderColor }}
                  >
                    <div className="p-6 border-b" style={{ background: cap.bg, borderColor }}>
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: '#fff', border: `1.5px solid ${borderColor}` }}
                      >
                        <Icon size={20} style={{ color: cap.color }} strokeWidth={1.7} />
                      </div>
                      <h3 className="text-[16px] font-black mb-1" style={{ color: '#0A1628' }}>{cap.title}</h3>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-[13px] leading-relaxed mb-4" style={{ color: '#475569' }}>{cap.desc}</p>
                      <ul className="space-y-2 mt-auto">
                        {cap.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2 text-[12.5px]" style={{ color: '#64748B' }}>
                            <CheckCircle size={13} style={{ color: cap.color, flexShrink: 0, marginTop: 2 }} />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20" style={{ background: '#fff' }}>
          <div className="max-w-4xl mx-auto px-5 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-6" style={{ background: accent }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: accent }}>FAQs</span>
                <div className="h-px w-6" style={{ background: accent }} />
              </div>
              <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
                Frequently Asked Questions
              </h2>
              <p className="text-[14px]" style={{ color: '#64748B' }}>
                Common questions about cloud security services.
              </p>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl overflow-hidden border bg-white"
                  style={{ borderColor: '#E2E8F0' }}
                >
                  <summary
                    className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none"
                    style={{ color: '#0A1628' }}
                  >
                    <span className="text-[14px] font-bold">{faq.question}</span>
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: statBg, border: `1px solid ${borderColor}` }}
                    >
                      <ChevronRight size={14} style={{ color: accent }} />
                    </div>
                  </summary>
                  <div className="px-6 pb-5">
                    <div className="h-px mb-4" style={{ background: '#F1F5F9' }} />
                    <p className="text-[13.5px] leading-relaxed" style={{ color: '#475569' }}>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-14 sm:py-20" style={{ background: heroBg }}>
          <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] mb-6"
              style={{ background: 'rgba(22,163,74,0.15)', color: accent, border: `1px solid rgba(22,163,74,0.3)` }}
            >
              <Cloud size={12} />
              Secure Your Cloud Today
            </div>
            <h2 className="text-[24px] sm:text-[36px] font-black text-white mb-4">
              Protect Your Cloud Infrastructure<br />
              <span style={{ color: accent }}>Before Attackers Exploit Misconfigurations</span>
            </h2>
            <p className="text-[15px] leading-relaxed mb-4 max-w-xl mx-auto" style={{ color: '#94A3B8' }}>
              Infraspine\'s certified cloud security engineers assess and secure your AWS, Azure, and GCP environments — delivering CSPM, identity governance, container security, and 24/7 monitoring as a managed service.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: accent, color: '#fff' }}
              >
                Start Cloud Security Assessment <ArrowRight size={15} />
              </Link>
              <Link
                href="/services?tab=cyber"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}
              >
                All Cybersecurity Services <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
