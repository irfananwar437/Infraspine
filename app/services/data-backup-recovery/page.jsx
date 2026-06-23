import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import { Database, Cloud, Shield, Activity, RefreshCw, Server, CheckCircle, ArrowRight, AlertTriangle, Clock } from 'lucide-react'

export const metadata = {
  title: 'Data Backup & Disaster Recovery Services Pakistan — Cloud Backup, BDR & DRaaS',
  description: 'Enterprise data backup and disaster recovery: automated cloud backup, immutable backup storage, business continuity planning, disaster recovery as a service (DRaaS), and recovery testing. Infraspine.',
  alternates: { canonical: 'https://www.infraspine.com/services/data-backup-recovery' },
  openGraph: {
    title: 'Data Backup & Disaster Recovery Services Pakistan — Cloud Backup, BDR & DRaaS | Infraspine',
    description: 'Cloud backup, immutable storage, BCP, DRaaS, and recovery testing from Infraspine. Never lose data. Never lose a business.',
    url: 'https://www.infraspine.com/services/data-backup-recovery',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Data Backup and Disaster Recovery Services',
  name: 'Infraspine Data Backup & Disaster Recovery Services',
  description: 'Enterprise backup and DR including automated cloud backup, immutable storage, BCP, DRaaS, and recovery testing.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/data-backup-recovery',
}

const STATS = [
  { value: '15min', label: 'RPO achievable with BDR appliance',  color: '#2563EB' },
  { value: '1hr',   label: 'RTO achievable with DRaaS failover', color: '#00C853' },
  { value: '3-2-1', label: 'backup rule enforced for all clients', color: '#D97706' },
  { value: '100%',  label: 'recovery test success rate',          color: '#7C3AED' },
]

const BACKUP_RULE = [
  { num: '3', label: 'Copies of Data', desc: 'Three independent copies of all critical data at all times.', color: '#2563EB' },
  { num: '2', label: 'Different Media', desc: 'Stored on two different types of storage media or platforms.',  color: '#00C853' },
  { num: '1', label: 'Offsite Copy',   desc: 'At least one copy stored offsite — geographically separate.',   color: '#D97706' },
]

const CAPABILITIES = [
  {
    icon: Cloud,
    title: 'Cloud Backup (BaaS)',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Automated, encrypted cloud backup for servers, workstations, Microsoft 365, and cloud workloads — with daily backup verification and monthly recovery tests so you know your backups actually work, not just that files are being copied. Veeam Cloud Connect, Acronis Cyber Protect, and Azure Backup are our primary platforms depending on your environment. Retention policies configured to match your regulatory and business continuity requirements. Backup monitoring with alert notifications for any failed job.',
    points: ['Veeam, Acronis, or Azure Backup depending on your environment', 'Automated daily backup job completion monitoring and alerting', 'Monthly automated recovery tests with documented results', 'Microsoft 365 backup for Exchange, SharePoint, Teams, and OneDrive'],
  },
  {
    icon: Server,
    title: 'On-Premise BDR Appliance',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'A Backup and Disaster Recovery (BDR) appliance installed on your premises that takes frequent image-based snapshots of your servers (as often as every 15 minutes), stores them locally for fast recovery, and replicates them to cloud storage for offsite protection. In the event of a server failure, the BDR appliance can boot and run your server as a virtual machine within minutes — providing continuity while your primary infrastructure is repaired or rebuilt. This is the fastest path to recovery for physical and virtual server environments.',
    points: ['Image-based snapshots every 15–60 minutes (configurable RPO)', 'Local and cloud replication for 3-2-1 backup compliance', 'Instant virtualisation on BDR appliance during primary server failure', 'Automated screenshot verification of virtual machine boot success'],
  },
  {
    icon: RefreshCw,
    title: 'Disaster Recovery as a Service (DRaaS)',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Cloud-hosted disaster recovery that allows your entire server environment to fail over to a secondary cloud site in under an hour — giving your business the business continuity capabilities that previously only large enterprises with secondary data centres could afford. DRaaS using Azure Site Recovery, Veeam Cloud Connect Replication, or Zerto replicates your on-premise or cloud VMs continuously to the DR site and maintains runbooks for orderly failover with pre-agreed RTO and RPO targets.',
    points: ['Azure Site Recovery, Veeam, or Zerto replication platforms', 'Sub-1-hour RTO for complete environment failover', 'Automated failover runbooks with recovery order sequencing', 'Quarterly DR failover tests with documented RTO measurement'],
  },
  {
    icon: Shield,
    title: 'Ransomware-Resistant Backup',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Standard backup is not sufficient protection against ransomware because ransomware encrypts backup files along with production data. Immutable backup storage — using object-lock technology on AWS S3, Azure Blob, or Wasabi — creates backup copies that cannot be modified or deleted by ransomware, even if it compromises your backup server credentials. Air-gapped tape backup provides a completely offline copy for maximum protection. All Infraspine backup deployments include immutable storage as standard.',
    points: ['Immutable object-lock storage on AWS S3, Azure, or Wasabi', 'Air-gapped tape backup for maximum offline protection', 'Backup server hardening to reduce ransomware attack surface', 'Immutability verification in every monthly recovery test report'],
  },
  {
    icon: Activity,
    title: 'Business Continuity Planning (BCP)',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'A disaster recovery plan that exists only as a document is almost as dangerous as having no plan at all — it creates false confidence without testing whether recovery actually works as planned. Infraspine\'s BCP service starts with a Business Impact Analysis (BIA) identifying your critical systems and their maximum tolerable downtime, develops a written Business Continuity Plan with step-by-step recovery procedures, and conducts live failover exercises at least annually to validate that the plan works.',
    points: ['Business Impact Analysis (BIA) defining RTOs and RPOs per system', 'Written Business Continuity Plan with step-by-step recovery procedures', 'Annual live failover exercise with measured results vs plan targets', 'Post-exercise report with gap analysis and improvement recommendations'],
  },
  {
    icon: Database,
    title: 'Database & Application Backup',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'File-level backup of a running database is not a valid database backup — restoring from it often produces a corrupt or inconsistent database state. Infraspine configures application-consistent backups for SQL Server, MySQL, PostgreSQL, Oracle, and MongoDB using transaction-log backup and native dump utilities to ensure restored databases are in a fully consistent, usable state. Database backup windows are coordinated with application teams to avoid impacting performance during business hours.',
    points: ['Application-consistent SQL Server, MySQL, PostgreSQL, and Oracle backup', 'Transaction-log backup for minimal data loss on critical databases', 'MongoDB replica set and dump-based backup strategies', 'Post-restore database integrity verification as part of every recovery test'],
  },
]

const FAQS = [
  {
    question: 'What is the difference between RPO and RTO?',
    answer: 'RPO (Recovery Point Objective) is the maximum amount of data you can afford to lose — measured in time. If your RPO is 1 hour, you can lose up to 1 hour of transactions before the business impact is unacceptable. RTO (Recovery Time Objective) is the maximum time it can take to restore operations after a failure. If your RTO is 4 hours, the business can survive being down for 4 hours but not longer. Backup and DR design is built around meeting your defined RPO and RTO targets.',
  },
  {
    question: 'Is Microsoft 365 data backed up by Microsoft automatically?',
    answer: 'No — this is one of the most common and dangerous misconceptions in IT. Microsoft\'s service-level agreement covers the availability and uptime of the Microsoft 365 platform, not the recovery of your specific data. Microsoft\'s retention policies are limited (deleted items held for 30–93 days depending on the plan) and they make no commitment to recover your data in cases of accidental deletion, ransomware encryption, or malicious insider deletion. A third-party Microsoft 365 backup (Veeam, Acronis, or Backupify) is essential.',
  },
  {
    question: 'How do we know our backups actually work?',
    answer: 'This is the right question — and most organisations cannot answer it because they never test. Infraspine performs automated daily backup verification (confirming backup jobs completed and data is readable) and monthly recovery tests where we actually restore data from backup to a test environment and confirm it is usable. Monthly recovery test results, including what was restored, how long it took, and whether the restored data was verified as complete, are documented in a report you receive.',
  },
  {
    question: 'What is immutable backup storage and why does it matter for ransomware?',
    answer: 'Immutable storage uses object-lock technology to create backup copies that cannot be modified, overwritten, or deleted — even by administrator credentials — for a defined period. This protects against ransomware that encrypts backup files along with production data (a very common attack pattern) and against insider threats who attempt to sabotage backups before deploying ransomware. Once data is written to immutable storage, only the expiry of the retention period can result in deletion. All Infraspine backup deployments include immutable storage.',
  },
  {
    question: 'How much does backup and disaster recovery cost?',
    answer: 'Backup and DR costs depend on the volume of data protected, the backup frequency, the retention period, and the recovery time targets. A cloud backup solution protecting a typical 50-user business (500 GB of server data, Microsoft 365 included) typically costs PKR 25,000–60,000 per month depending on cloud storage used. A full DRaaS solution with sub-1-hour RTO costs more but significantly less than the cost of a single day of business downtime for most organisations.',
  },
  {
    question: 'What happens if we need to recover data urgently at 3am?',
    answer: 'For managed backup clients, our NOC team monitors all backup jobs 24/7 and is alerted to failures immediately. Emergency recovery requests outside business hours can be submitted via our emergency support line. We triage the recovery request, assess the scope of data loss, and begin recovery procedures as quickly as infrastructure allows. All Infraspine clients have our emergency contact details before they need them — not after a disaster has already started.',
  },
]

export default function DataBackupRecoveryPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Data Backup & Recovery' },
      ]} />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: '#DC2626' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#DC2626' }}>Data Backup & Recovery</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Backups You Can Actually<br />
              <span style={{ color: '#DC2626' }}>Recover From.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              Most organisations have backups. Very few organisations have tested them. The difference only matters when a ransomware attack encrypts your servers at 2am, a server fails the morning before a critical deadline, or an administrator accidentally deletes a year of financial records. Infraspine builds backup and disaster recovery solutions with tested recovery processes — because a backup you have never successfully restored from is not a backup.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-3 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[17px] font-black mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[10.5px] leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <Link href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
              style={{ background: '#DC2626', color: '#fff' }}>
              Get a Free Backup Assessment <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3-2-1 rule */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black mb-3" style={{ color: '#0A1628' }}>The 3-2-1 Backup Rule — Our Non-Negotiable Standard</h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Every Infraspine backup deployment is architected to comply with the 3-2-1 rule — the industry standard that has saved businesses from data loss for decades.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {BACKUP_RULE.map(({ num, label, desc, color }) => (
              <div key={num} className="text-center rounded-2xl p-7 border" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
                <div className="text-[48px] font-black mb-2" style={{ color }}>{num}</div>
                <div className="text-[15px] font-black mb-2" style={{ color: '#0A1628' }}>{label}</div>
                <div className="text-[13px] leading-relaxed" style={{ color: '#64748B' }}>{desc}</div>
              </div>
            ))}
          </div>

          {/* Risk panel */}
          <div className="mt-12 grid lg:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl p-7 border" style={{ background: '#FEF2F2', borderColor: '#FECACA' }}>
              <div className="flex items-center gap-2.5 mb-5">
                <AlertTriangle size={18} style={{ color: '#DC2626' }} />
                <p className="text-[14px] font-black" style={{ color: '#7F1D1D' }}>Data Loss Scenarios We Protect Against</p>
              </div>
              <div className="space-y-2.5">
                {[
                  'Ransomware encrypting all data including backup files',
                  'Hardware failure — disk, server, or storage array',
                  'Accidental deletion by administrator or end user',
                  'Malicious insider sabotage before resignation',
                  'Natural disaster affecting the primary office location',
                  'Software corruption or failed application update',
                  'Cloud vendor outage causing data unavailability',
                ].map(s => (
                  <div key={s} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#DC2626' }} />
                    <span className="text-[13px]" style={{ color: '#7F1D1D' }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-7 border" style={{ background: '#F0FDF4', borderColor: '#BBF7D0' }}>
              <div className="flex items-center gap-2.5 mb-5">
                <Clock size={18} style={{ color: '#00C853' }} />
                <p className="text-[14px] font-black" style={{ color: '#14532D' }}>What Good Backup Monitoring Looks Like</p>
              </div>
              <div className="space-y-2.5">
                {[
                  'All backup jobs monitored — success confirmed every day',
                  'Failed backup jobs alert NOC team immediately',
                  'Backup data size trend tracked for anomaly detection',
                  'Monthly recovery test with documented restore results',
                  'Quarterly immutability verification for ransomware protection',
                  'Annual BCP tabletop or live failover exercise',
                  'Monthly report sent to you showing backup health status',
                ].map(s => (
                  <div key={s} className="flex items-center gap-2.5">
                    <CheckCircle size={13} style={{ color: '#00C853', flexShrink: 0 }} />
                    <span className="text-[13px]" style={{ color: '#14532D' }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black mb-4" style={{ color: '#0A1628' }}>Backup & Recovery Services</h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Six service lines from automated cloud backup through to full disaster recovery and business continuity planning.
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
        title="Data Backup & Recovery — Frequently Asked Questions"
        subtitle="Clear answers to the backup and disaster recovery questions every business should be asking."
        faqs={FAQS}
      />

      <CTABanner
        heading="Find Out If Your Backups Would Actually Save You"
        subheading="Free backup assessment: we review your current backup configuration, test a recovery, and tell you exactly what would happen in a real data loss event."
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
