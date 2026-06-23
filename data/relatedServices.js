// Internal-linking data for the "Related Services" component. Grouped by the
// actual app/services/<category> folder structure (not the navbar's
// mega-menu curation, which only surfaces a curated subset of these and
// would leave most of these pages with no siblings to link to).
//
// Each category's `href` points at its index page; `items` are every real
// sibling page in that folder.

export const SERVICE_CATEGORIES = {
  'cyber-security': {
    label: 'Cybersecurity',
    href: '/services/cyber-security',
    items: [
      { label: 'SOC as a Service',          href: '/services/cyber-security/soc' },
      { label: 'Firewall Management',       href: '/services/cyber-security/firewall' },
      { label: 'Penetration Testing',       href: '/services/cyber-security/penetration-testing' },
      { label: 'VAPT',                       href: '/services/cyber-security/vapt' },
      { label: 'Vulnerability Assessment',  href: '/services/cyber-security/vulnerability-assessment' },
      { label: 'Endpoint Protection & EDR', href: '/services/cyber-security/endpoint-protection' },
      { label: 'Email Security',            href: '/services/cyber-security/email-security' },
      { label: 'Incident Response',         href: '/services/cyber-security/incident-response' },
      { label: 'Data Loss Prevention',      href: '/services/cyber-security/data-loss-prevention' },
      { label: 'Data Encryption',           href: '/services/cyber-security/data-encryption' },
      { label: 'Cloud Security',            href: '/services/cyber-security/cloud-security' },
      { label: 'Security Alerts & SIEM',    href: '/services/cyber-security/security-alerts' },
      { label: 'IT Security Auditing',      href: '/services/cyber-security/security-auditing' },
      { label: 'ISO 27001 Consulting',      href: '/services/cyber-security/iso-27001' },
      { label: 'PCI-DSS Assessments',       href: '/services/cyber-security/pci-dss' },
      { label: 'Cyber Essentials',          href: '/services/cyber-security/cyber-essentials' },
      { label: 'NHS DSPT Assessment',       href: '/services/cyber-security/nhs-dspt' },
      { label: 'DPO as a Service',          href: '/services/cyber-security/dpo-as-a-service' },
      { label: 'Business Continuity',       href: '/services/cyber-security/business-continuity' },
    ],
  },
}

/** Returns { category, items } of sibling pages for a given href, excluding itself. */
export function getRelatedServices(currentHref) {
  for (const category of Object.values(SERVICE_CATEGORIES)) {
    const inCategory = currentHref === category.href || category.items.some(i => i.href === currentHref)
    if (inCategory) {
      return {
        category,
        items: category.items.filter(i => i.href !== currentHref),
      }
    }
  }
  return null
}
