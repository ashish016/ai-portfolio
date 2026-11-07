// Everything about you lives here. The pages read from this file.
//
// Java / Spring Boot → backend & platform engineer for European and US product teams.
export const site = {
  name: 'Ashish Dash',
  role: 'Java & Spring Boot engineer',
  location: 'Hyderabad, India · based in Europe & US',
  timezone: 'Europe/Dublin',
  email: 'hello@ashishdash.dev',
  available: true,
  intro: 'I build reliable backend systems and platform engineering for B2B SaaS and fintech teams. Java, Spring Boot, event-driven architecture, and clean CI/CD — shipped for European and US clients.',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ashish016/' },
    { label: 'ProductHunt', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'Email', href: 'mailto:hello@ashishdash.dev' },
  ],
  marquee: ['Java & Spring Boot', 'Backend engineering', 'Event-driven architecture', 'Cloud-native platforms', 'CI/CD & DevOps', 'Technical mentoring'],
}

export const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export interface Project {
  slug: string
  title: string
  client: string
  category: string
  year: string
  cover: string
  tint: string
  summary: string
  role: string[]
  deliverables: string[]
  link?: string
  body: string[]
  size: 'large' | 'small'
}

export const projects: Project[] = [
  {
    slug: 'payment-core',
    title: 'Payment Core',
    client: 'European fintech',
    category: 'Spring Boot platform',
    year: '2024–now',
    cover: assetPath('images/payment-core.jpg'),
    tint: '#f5efe6',
    summary: 'A risk and settlement platform processing card, bank transfer and wallet payments for a European fintech, built for scale and auditability.',
    role: ['Java & Spring Boot', 'Architecture', 'Event-driven design'],
    deliverables: ['Payment orchestration engine', 'Settlement engine', 'Risk and exception handling', 'CI/CD pipelines'],
    link: 'https://www.reviewhero.cloud/',
    body: [
      'A European fintech was juggling a spreadsheet of payment rules, a handful of merchants, and a monthly reconciliation that took three people two days. I designed a platform that turns those rules into an auditable, event-driven system with clear separation between the settlement and the risk layer.',
      'The platform now handles card, bank transfer and wallet payments, processes refunds and charge-backs with full traceability, and runs on a pipeline that publishes to staging in under twenty minutes. Regulators get the audit trail without asking for it.',
    ],
    size: 'large',
  },
  {
    slug: 'notification-service',
    title: 'Notification Service',
    client: 'US SaaS startup',
    category: 'Scalable backend service',
    year: '2023–24',
    cover: assetPath('images/notification-service.jpg'),
    tint: '#eaf1f8',
    summary: 'A multi-tenant notification service that moved a US SaaS company from synchronous email spikes to a durable, rate-limited delivery pipeline.',
    role: ['Java & Spring Boot', 'Scaling', 'Observability'],
    deliverables: ['Notification gateway', 'Deduplication engine', 'Rate limiting', 'Metrics dashboard'],
    body: [
      'A US SaaS team was sending thousands of emails a minute from a single Spring Boot process. Any spike — a login trigger, a billing email, a password reset — took down the app and left users waiting.',
      'I rebuilt it as a multi-tenant gateway with in-memory deduplication, per-tenant rate limits, and dead-letter queues, so a single noisy tenant can never take down the whole system. Delivery is now asynchronous, traceable, and much harder to break.',
    ],
    size: 'small',
  },
  {
    slug: 'inventory-api',
    title: 'Inventory API',
    client: 'US e-commerce brand',
    category: 'High-throughput REST API',
    year: '2022–23',
    cover: assetPath('images/inventory-api.jpg'),
    tint: '#e8f0ec',
    summary: 'A low-latency inventory API that cut stock-outs and reservation failures for a US e-commerce brand during peak retail periods.',
    role: ['Java & Spring Boot', 'Performance', 'Data access'],
    deliverables: ['Stock reservation API', 'Read/write splitting', 'Connection pooling', 'Cache layer'],
    body: [
      'The brand\'s inventory API was blocking every page load on a slow, shared database connection pool. Checkout failed under peak retail traffic, and the support tickets rolled in on the same signal.',
      'I tuned the access layer with read/write splitting, connection pooling, and a cache layer for stock lookups, and cut reservation failures by a large margin during peak windows. The brand lost fewer sales and support calls dropped with it.',
    ],
    size: 'small',
  },
  {
    slug: 'api-gateway',
    title: 'API Gateway',
    client: 'European digital agency',
    category: 'Edge & gateway engineering',
    year: '2021–22',
    cover: assetPath('images/api-gateway.jpg'),
    tint: '#f0eaf3',
    summary: 'An API gateway and developer portal that gave a European agency stable access to a fragmented set of legacy and cloud services.',
    role: ['Spring Boot', 'API design', 'Integration'],
    deliverables: ['Gateway routing', 'OAuth2 token handling', 'Developer portal', 'Rate-limiting policies'],
    body: [
      'The agency had five different legacy systems, each with its own auth, its own rate limits, and its own docs. Clients got slow responses and the agency spent every sprint unblocking connections.',
      'I built a gateway that routes, authenticates and rate-limits requests before they reach the legacy services, plus a developer portal that makes the whole surface easy to call. The team stopped maintaining a patchwork of scripts and started shipping features.',

    ],
    size: 'small',
  },
  {
    slug: 'payment-core-dark',
    title: 'Payments Aggregator',
    client: 'US payments company',
    category: 'Multi-provider payments',
    year: '2022–23',
    cover: assetPath('images/payments-aggregator.jpg'),
    tint: '#24304a',
    summary: 'A multi-provider payments aggregator that lets a US payments company switch between processors without changing the merchant onboarding flow.',
    role: ['Java & Spring Boot', 'Provider abstraction', 'Domain modelling'],
    deliverables: ['Provider adapter layer', 'Payment state machine', 'Reconciliation reports', 'Merchant onboarding'],
    body: [
      'A US payments company was tied to one processor, and every outage or downgrade was a direct hit to revenue. Switching providers meant rewriting core flows — until we stopped treating processors as the domain.',
      'I designed a provider-agnostic abstraction with a shared payment state machine and per-provider adapters, so the company can route around failures, compare pricing, and onboard different processors without touching the merchant experience.',
    ],
    size: 'small',
  },
  {
    slug: 'auth-service',
    title: 'Auth & IdP Bridge',
    client: 'European health startup',
    category: 'Identity and access',
    year: '2023–24',
    cover: assetPath('images/auth-service.jpg'),
    tint: '#f7f4ec',
    summary: 'An identity bridge that connects a European health startup\'s app to corporate IdPs and device enrollment, so clinicians can sign in securely during on-call shifts.',
    role: ['Java & Spring Boot', 'Security', 'Plugin architecture'],
    deliverables: ['SOC2-friendly auth flows', 'SCIM provisioning', 'Device enrollment', 'Audit logging'],
    body: [
      'A health startup needed clinicians to sign in with their corporate credentials and have their devices enrolled automatically, without rushing through a separate sign-up flow.',
      'I built an identity bridge that plugs into corporate IdPs, enforces MFA and device checks, and keeps every login in an immutable audit log. Clinicians spend less time on authentication and more time on patients.',
    ],
    size: 'small',
  },
]

export const bySlug = (slug: string) => projects.find((p) => p.slug === slug)

export const services = [
  {
    title: 'Backend engineering',
    body: 'Java and Spring Boot applications designed for correctness, observability and long-term maintainability. Rest APIs, background workers, scheduling and resilience patterns.',
  },
  {
    title: 'Platform engineering',
    body: 'CI/CD, containerisation, cloud infrastructure and automated release pipelines so your team can ship and roll back with confidence.',
  },
  {
    title: 'Event-driven architecture',
    body: 'Kafka and event streaming, outbox patterns, idempotent consumers and exactly-once semantics that make systems that scale without breaking.',
  },
  {
    title: 'Technical mentoring & code review',
    body: 'Code reviews, architecture sessions and hands-on mentoring for developers building backend systems for European and US teams.',
  },
]

export const testimonials = [
  {
    quote: 'Ashish took our payment platform from a spreadsheet of rules to a system that ships every week. He understands both the engineering and the compliance side of European fintech.',
    name: 'Elena Marchetti',
    role: 'CTO, European fintech',
  },
  {
    quote: 'We cut authentication failures and support tickets by half after Ashish rebuilt our identity bridge. Clean, secure and fast to integrate.',
    name: 'Marcus Jensen',
    role: 'Engineering lead, US health startup',
  },
  {
    quote: 'His Spring Boot code is a pleasure to work with. Clear, testable, and the CI/CD pipeline we shipped together now goes from commit to staging in under twenty minutes.',
    name: 'Priya Nair',
    role: 'Product manager, US e-commerce brand',
  },
]

export const experience = [
  { period: '2021 to now', title: 'Backend engineer (Europe & US)', detail: 'Professional journey building Java and Spring Boot systems for fintech and SaaS teams.' },
]
