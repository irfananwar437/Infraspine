import { SITE_URL } from '@/lib/site'
import { BLOG_POSTS } from '@/data/blogPosts'
import { CATEGORIES } from './blog/data'
import { PROJECT_SLUGS } from '@/data/projects'
import { WEBINARS } from './resources/webinar-data'
import { INDUSTRY_DATA } from './industries/[industry]/page'

// Static routes that don't already come from a generateStaticParams data
// source below. This list was previously the *only* source for the sitemap
// and had drifted badly out of sync with the real app/ directory (missing
// ~25 real pages, e.g. every physical-security and several cyber-security
// sub-pages). Cross-checked against `find app -name page.jsx` — keep this
// in sync when adding a new static page; dynamic routes never need a manual
// entry here since they're derived from their own data file above.
//
// Deliberately excluded: /about and /contact (redirect-only, 308 to
// /about-us and /contact-us — including a redirecting URL in a sitemap
// signals duplicate/thin content to crawlers for no benefit).
const STATIC_ROUTES = [
  { url: '/',                                                   priority: 1.0,  changeFrequency: 'weekly'  },
  { url: '/about-us',                                           priority: 0.9,  changeFrequency: 'monthly' },
  { url: '/our-organization',                                   priority: 0.8,  changeFrequency: 'monthly' },
  { url: '/contact-us',                                         priority: 0.9,  changeFrequency: 'monthly' },
  { url: '/book-meeting',                                       priority: 0.8,  changeFrequency: 'monthly' },
  { url: '/request-quote',                                      priority: 0.8,  changeFrequency: 'monthly' },
  { url: '/case-studies',                                       priority: 0.85, changeFrequency: 'weekly'  },
  { url: '/projects',                                           priority: 0.85, changeFrequency: 'weekly'  },
  { url: '/products',                                           priority: 0.85, changeFrequency: 'monthly' },
  { url: '/solutions',                                          priority: 0.9,  changeFrequency: 'monthly' },
  { url: '/infraspine-ai',                                      priority: 0.9,  changeFrequency: 'weekly'  },
  { url: '/bpo-services',                                       priority: 0.85, changeFrequency: 'monthly' },
  { url: '/trainings',                                          priority: 0.85, changeFrequency: 'monthly' },
  { url: '/resources',                                          priority: 0.8,  changeFrequency: 'weekly'  },
  { url: '/blog',                                               priority: 0.9,  changeFrequency: 'weekly'  },
  { url: '/privacy-policy',                                     priority: 0.3,  changeFrequency: 'yearly'  },
  { url: '/terms-of-service',                                   priority: 0.3,  changeFrequency: 'yearly'  },
  { url: '/industries',                                         priority: 0.9,  changeFrequency: 'monthly' },

  { url: '/services',                                           priority: 0.95, changeFrequency: 'weekly'  },
  { url: '/services/all-services',                              priority: 0.9,  changeFrequency: 'monthly' },
  { url: '/services/managed-it-services',                       priority: 0.9,  changeFrequency: 'monthly' },
  { url: '/services/managed-it-services/noc-monitoring',        priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/managed-it-services/service-desk',          priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/managed-it-services/remote-support',        priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/managed-it-services/device-monitoring',     priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/managed-it-services/patch-management',      priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/managed-it-services/helpdesk-support',      priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/managed-it-services/it-asset-management',   priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/server-management',                         priority: 0.85, changeFrequency: 'monthly' },

  { url: '/services/cloud-solutions',                           priority: 0.9,  changeFrequency: 'monthly' },
  { url: '/services/cloud-solutions/aws',                       priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/cloud-solutions/azure',                     priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/cloud-solutions/microsoft-365',             priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/cloud-solutions/sharepoint',                priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/data-center',                                priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/data-backup-recovery',                      priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/disaster-recovery',                         priority: 0.85, changeFrequency: 'monthly' },

  { url: '/services/cyber-security',                            priority: 0.9,  changeFrequency: 'monthly' },
  { url: '/services/cyber-security/soc',                        priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/cyber-security/firewall',                   priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/cyber-security/vapt',                       priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/cyber-security/penetration-testing',        priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/cyber-security/vulnerability-assessment',   priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/cyber-security/endpoint-protection',        priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/cyber-security/email-security',             priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/cyber-security/incident-response',          priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/cyber-security/data-loss-prevention',       priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/cyber-security/data-encryption',             priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/cyber-security/cloud-security',              priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/cyber-security/security-alerts',             priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/cyber-security/security-auditing',           priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/cyber-security/iso-27001',                   priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/cyber-security/pci-dss',                     priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/cyber-security/cyber-essentials',            priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/cyber-security/nhs-dspt',                    priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/cyber-security/dpo-as-a-service',            priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/cyber-security/business-continuity',         priority: 0.85, changeFrequency: 'monthly' },

  { url: '/services/network-infrastructure',                     priority: 0.9,  changeFrequency: 'monthly' },
  { url: '/services/network-infrastructure/network-design',      priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/network-infrastructure/structured-cabling',  priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/network-infrastructure/voip',                priority: 0.85, changeFrequency: 'monthly' },

  { url: '/services/physical-security',                          priority: 0.9,  changeFrequency: 'monthly' },
  { url: '/services/physical-security/cctv',                     priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/physical-security/access-control',           priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/physical-security/biometrics',                priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/physical-security/alarm-systems',             priority: 0.85, changeFrequency: 'monthly' },

  { url: '/services/software-development',                       priority: 0.9,  changeFrequency: 'monthly' },
  { url: '/services/software-development/erp',                    priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/software-development/mobile-apps',            priority: 0.85, changeFrequency: 'monthly' },

  { url: '/services/field-services',                              priority: 0.9,  changeFrequency: 'monthly' },
  { url: '/services/field-services/hardware-break-fix',           priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/field-services/desktop-support',              priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/field-services/rollouts-migrations',          priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/field-services/network-support',              priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/field-services/audio-video-support',          priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/field-services/wifi-services',                priority: 0.85, changeFrequency: 'monthly' },

  { url: '/services/ai-automation',                               priority: 0.9,  changeFrequency: 'monthly' },
  { url: '/services/crm',                                         priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/bpo-services',                                priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/it-trainings',                                priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/it-consultancy',                              priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/it-procurement',                              priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/it-recruitment',                              priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/project-management',                          priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/cio-as-a-service',                            priority: 0.85, changeFrequency: 'monthly' },
  { url: '/services/va-services',                                 priority: 0.85, changeFrequency: 'monthly' },
]

export default function sitemap() {
  const now = new Date().toISOString()

  const staticPages = STATIC_ROUTES.map(route => ({
    url: `${SITE_URL}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const industryPages = Object.keys(INDUSTRY_DATA).map(slug => ({
    url: `${SITE_URL}/industries/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const projectPages = PROJECT_SLUGS.map(slug => ({
    url: `${SITE_URL}/projects/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const blogCategoryPages = CATEGORIES
    .filter(cat => cat.slug !== null)
    .map(cat => ({
      url: `${SITE_URL}/blog/category/${cat.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    }))

  const blogPostPages = BLOG_POSTS.map(post => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date).toISOString() : now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  const webinarPages = WEBINARS.map(webinar => ({
    url: `${SITE_URL}/resources/webinars/${webinar.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    ...staticPages,
    ...industryPages,
    ...projectPages,
    ...blogCategoryPages,
    ...blogPostPages,
    ...webinarPages,
  ]
}
