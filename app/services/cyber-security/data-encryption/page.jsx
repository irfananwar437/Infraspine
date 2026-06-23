import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RelatedServices from '@/components/ui/RelatedServices'
import {
  Shield, FileText, Mail, Database, Settings, Cloud,
  ChevronRight, ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'Data Encryption Services Pakistan | Enterprise Encryption',
  description: 'Infraspine provides enterprise data encryption services in Pakistan — AES-256 full disk encryption, file encryption, email encryption, database encryption, and key management. FIPS 140-2 compliant.',
  alternates: {
    canonical: 'https://www.infraspine.com/services/cyber-security/data-encryption',
  },
  openGraph: {
    title: 'Data Encryption Services Pakistan | Infraspine',
    description: 'End-to-end encryption for data at rest, in transit, and in use. Key management and encryption strategy consulting.',
    url: 'https://www.infraspine.com/services/cyber-security/data-encryption',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Data Encryption Services',
  provider: { '@type': 'Organization', name: 'Infraspine', url: 'https://www.infraspine.com' },
  areaServed: 'Pakistan',
  description: 'End-to-end encryption for data at rest, in transit, and in use. Key management, FIPS 140-2 compliance, and encryption strategy consulting.',
  url: 'https://www.infraspine.com/services/cyber-security/data-encryption',
}

const STATS = [
  { value: 'AES-256', label: 'Encryption Standard', color: '#0891B2' },
  { value: 'FIPS', label: 'FIPS 140-2 Compliant', color: '#0891B2' },
  { value: 'Full', label: 'Disk & File Encryption', color: '#0891B2' },
  { value: 'Zero-K', label: 'Zero-Knowledge Architecture', color: '#0891B2' },
]

const CAPABILITIES = [
  {
    icon: Shield,
    title: 'Full Disk Encryption',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Full disk encryption (FDE) ensures that every byte stored on a device is cryptographically protected — making data on a lost or stolen laptop completely inaccessible to an attacker without the decryption key. Infraspine deploys and manages full disk encryption across all Windows endpoints using BitLocker with TPM 2.0 integration, and across macOS devices using FileVault 2. Recovery keys are centrally escrowed in Microsoft Entra ID or an on-premises key management server, ensuring that authorised users can always regain access without involving the security team for routine cases. We configure pre-boot authentication to require a PIN in addition to TPM binding for high-security environments, providing defence-in-depth against offline cold boot attacks. Server disk encryption is implemented using dm-crypt with LUKS on Linux servers and BitLocker on Windows Server. Encryption status is monitored centrally with automated alerting for any device that is not in compliance with the encryption policy.',
    points: ['BitLocker and FileVault 2 deployment', 'TPM 2.0 integration with pre-boot PIN', 'Centralised recovery key escrow', 'Compliance monitoring and alerting'],
  },
  {
    icon: FileText,
    title: 'File & Folder Encryption',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'File and folder encryption provides a more granular layer of protection than full disk encryption — targeting specific sensitive data while allowing the rest of the file system to operate normally. This approach is ideal for protecting high-sensitivity data stores such as HR records, financial documents, intellectual property repositories, and customer data folders. Infraspine implements file-level encryption using Microsoft Information Protection (MIP) sensitivity labels for Microsoft 365 environments, and VeraCrypt or native OS encryption for non-cloud file stores. MIP-protected documents carry their encryption with them — the file remains encrypted even when emailed or copied to a USB drive, and access is controlled by the label policy regardless of where the file travels. We integrate file encryption with your data classification policy so that files tagged as Confidential or Restricted are automatically encrypted without requiring manual action from users. Key management is integrated with your directory service so authorised users experience seamless transparent decryption.',
    points: ['Microsoft Information Protection label-based encryption', 'Persistent protection that travels with documents', 'Automatic encryption based on classification labels', 'Transparent decryption for authorised users'],
  },
  {
    icon: Mail,
    title: 'Email Encryption',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Email is one of the highest-risk channels for sensitive data exposure — messages can be intercepted in transit, misdirected to wrong recipients, or stored unprotected in recipient inboxes for years. Infraspine implements enterprise email encryption using S/MIME certificates, Microsoft 365 Message Encryption (OME), and Proofpoint Encryption depending on your environment and requirements. S/MIME provides end-to-end cryptographic signing and encryption using recipient public key certificates, ensuring only the intended recipient can decrypt the message. Microsoft 365 OME provides policy-driven email encryption without requiring recipients to have S/MIME certificates installed — external recipients receive a link to a secure message portal. We configure Transport Rules that automatically encrypt messages matching defined criteria — messages to external recipients containing financial data, health information, or PII — without requiring users to manually choose to encrypt. Email signing with S/MIME certificates also provides non-repudiation, allowing recipients to verify the message was not tampered with in transit.',
    points: ['S/MIME certificate deployment and management', 'Microsoft 365 OME policy-driven encryption', 'Automatic encryption based on content and recipient', 'Non-repudiation through digital signing'],
  },
  {
    icon: Database,
    title: 'Database Encryption',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Databases are the most concentrated repositories of sensitive data in most organisations — a single unencrypted database breach can expose millions of customer records. Infraspine implements database encryption at multiple layers to ensure data is protected both against external attackers and against insider threats including DBAs with direct server access. Transparent Data Encryption (TDE) is implemented for SQL Server, PostgreSQL, and MySQL databases, encrypting the database files at the storage layer so that physical access to the underlying storage does not yield readable data. Column-level encryption is applied to particularly sensitive fields — passwords (hashed with bcrypt/Argon2), payment card numbers (tokenised), and national identity numbers — so that even users with legitimate database access cannot read these values. Application-level encryption is implemented for the most sensitive data where database-level encryption alone is insufficient. All encryption keys are stored in a separate Key Management Service (KMS) rather than on the database server itself.',
    points: ['Transparent Data Encryption (TDE) for SQL/PostgreSQL', 'Column-level encryption for sensitive fields', 'Password hashing with bcrypt/Argon2', 'Separate KMS for encryption key storage'],
  },
  {
    icon: Settings,
    title: 'Encryption Key Management',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Encryption is only as strong as the security of the keys that control it. Weak key management — storing keys alongside the data they protect, using the same key for all data, never rotating keys — can undermine technically strong encryption. Infraspine designs and implements enterprise key management solutions using Hardware Security Modules (HSMs) and cloud-native KMS services (AWS KMS, Azure Key Vault, Google Cloud KMS) to provide a centralised, audited, and hardened key store. We implement key lifecycle management covering key generation (using cryptographically secure random sources), key distribution, key rotation schedules, key escrow and backup, and secure key destruction. Role-based access controls ensure that key access is logged and restricted to authorised services and administrators. Separation of duties policies ensure that no individual can both access encrypted data and access the keys that encrypt it. Key usage audit logs are retained for compliance evidence and are protected against modification.',
    points: ['HSM and cloud KMS deployment', 'Full key lifecycle management', 'Automated key rotation policies', 'Separation of duties enforcement'],
  },
  {
    icon: Cloud,
    title: 'Cloud Storage Encryption',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Cloud storage presents specific encryption challenges — data is physically stored on infrastructure controlled by a third party, potentially accessible to cloud provider staff and subject to government data access requests in the provider\'s jurisdiction. Infraspine implements customer-managed key (CMK) encryption for cloud storage across AWS S3, Azure Blob Storage, and Google Cloud Storage, ensuring that only your organisation holds the encryption keys — the cloud provider stores only ciphertext. We configure server-side encryption with CMK for all storage buckets and containers used to store sensitive data. For the highest security requirements, client-side encryption is implemented using the cloud provider\'s client-side encryption SDK or a third-party solution such as Virtru or Boxcryptor — data is encrypted by your application before it leaves your environment, providing zero-knowledge guarantees that neither the cloud provider nor any third party can access plaintext data. We audit all cloud storage encryption configurations and alert on any bucket or container created without CMK encryption.',
    points: ['Customer-managed key (CMK) encryption', 'Client-side encryption for zero-knowledge guarantee', 'Encryption configuration audit and compliance monitoring', 'Coverage across AWS, Azure, and GCP'],
  },
]

const FAQS = [
  {
    question: 'What is data encryption?',
    answer: 'Data encryption is the process of converting readable data (plaintext) into an unreadable format (ciphertext) using a cryptographic algorithm and an encryption key. Only parties holding the correct decryption key can convert the ciphertext back to readable plaintext. Encryption protects data from unauthorised access — if a device is stolen, a database is breached, or data is intercepted in transit, the attacker sees only ciphertext that is computationally infeasible to decrypt without the key. Modern enterprise encryption uses AES-256, which provides sufficient security against all known attacks including those from future quantum computers when combined with appropriate key lengths.',
  },
  {
    question: 'What is the difference between encryption at rest and in transit?',
    answer: 'Encryption at rest protects data that is stored — on hard drives, SSDs, databases, file servers, and cloud storage. It ensures that physical access to the storage media or a breach of the storage system does not yield readable data. Encryption in transit protects data as it moves between systems — over networks, through email, via API calls. It ensures that network interception (man-in-the-middle attacks) cannot expose data content. Both are necessary — data can be exposed at rest through server compromise or physical theft, and in transit through network interception. A third category, encryption in use, protects data while it is being processed in memory, using technologies like Intel SGX or AMD SEV.',
  },
  {
    question: 'Does encryption affect system performance?',
    answer: 'With modern hardware, the performance impact of encryption is negligible for most use cases. AES-NI hardware acceleration is built into all modern Intel and AMD processors and offloads AES encryption/decryption from the CPU, making full disk encryption essentially transparent to users. Database TDE adds approximately 3-5% overhead on most workloads — imperceptible in normal use. Network encryption (TLS 1.3) similarly benefits from hardware acceleration and has minimal latency impact. Client-side application encryption has a slightly higher overhead due to software-based implementation, but this is typically measurable only in high-throughput bulk operations. We conduct performance testing before and after encryption deployment to confirm there is no user-perceptible degradation.',
  },
  {
    question: 'How do you manage encryption keys?',
    answer: 'Key management is the most critical and technically complex aspect of an encryption deployment. We implement a tiered key management architecture: a root key (Key Encrypting Key) stored in a Hardware Security Module (HSM) or cloud KMS is used to encrypt data encryption keys (DEKs), which in turn encrypt the actual data. This hierarchy means no single key compromise exposes all data, and root keys never leave the HSM. Keys are rotated on a defined schedule — typically annually for at-rest encryption keys and immediately upon any suspected compromise. Recovery keys are escrowed in a secure location accessible to authorised administrators but protected by multi-person access controls. All key access and usage is logged in a tamper-evident audit trail.',
  },
  {
    question: 'Is encryption enough to protect against a breach?',
    answer: 'Encryption is a critical control but not a complete security strategy. Encryption protects data from attackers who gain access to raw storage — a stolen laptop, a copied database file, a network eavesdrop. But encryption does not protect against attackers who authenticate as legitimate users (using stolen or phished credentials), against vulnerabilities in the applications that process decrypted data, or against malicious insiders with legitimate access. Encryption works best as part of a layered security strategy that also includes strong authentication, least-privilege access controls, vulnerability management, endpoint protection, and security monitoring. We help clients implement encryption in context — understanding what threat scenarios it addresses and ensuring complementary controls cover the gaps.',
  },
]

export default function DataEncryptionPage() {
  const accent = '#0891B2'
  const heroBg = '#00101a'
  const statBg = '#ECFEFF'
  const borderColor = '#A5F3FC'

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
              <li style={{ color: accent }} className="font-semibold">Data Encryption</li>
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
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: accent }}>Cybersecurity — Data Encryption</span>
              </div>
              <h1 className="text-[30px] sm:text-[46px] lg:text-[52px] font-black leading-[1.06] tracking-tight text-white mb-5">
                Enterprise Data Encryption<br />
                <span style={{ color: accent }}>Services in Pakistan</span>
              </h1>
              <p className="text-[15px] sm:text-[17px] leading-relaxed mb-5 max-w-2xl" style={{ color: '#94A3B8' }}>
                End-to-end encryption for data at rest, in transit, and in use. AES-256 standard, FIPS 140-2 compliant key management, and zero-knowledge architecture options — protecting your data even when attackers breach the perimeter.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                  style={{ background: accent, color: '#fff' }}
                >
                  Get Encryption Consultation <ArrowRight size={15} />
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
                Data Encryption Capabilities
              </h2>
              <p className="text-[14px] max-w-xl mx-auto" style={{ color: '#64748B' }}>
                Six encryption disciplines protecting every layer of your data from storage to transit to cloud.
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
                Common questions about enterprise data encryption services.
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
              style={{ background: 'rgba(8,145,178,0.15)', color: accent, border: `1px solid rgba(8,145,178,0.3)` }}
            >
              <Shield size={12} />
              Encrypt Your Data. Own Your Keys.
            </div>
            <h2 className="text-[24px] sm:text-[36px] font-black text-white mb-4">
              Make Your Data Unreadable<br />
              <span style={{ color: accent }}>Even After a Breach</span>
            </h2>
            <p className="text-[15px] leading-relaxed mb-4 max-w-xl mx-auto" style={{ color: '#94A3B8' }}>
              Infraspine designs and implements enterprise encryption strategies that protect your data at every layer — from device storage to cloud to email — with secure key management that keeps you in control.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: accent, color: '#fff' }}
              >
                Plan Your Encryption Strategy <ArrowRight size={15} />
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

        <RelatedServices currentHref="/services/cyber-security/data-encryption" accent="#DC2626" />

        <Footer />
      </div>
    </>
  )
}
