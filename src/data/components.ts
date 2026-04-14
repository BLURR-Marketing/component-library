export type PropDoc = {
  name: string;
  type: string;
  required: boolean;
  default?: string;
  description: string;
};

export type StyleTag =
  | 'minimal' | 'bold' | 'editorial' | 'luxury' | 'modern' | 'dark' | 'light' | 'animated' | 'static'
  | 'fullbleed' | 'split' | 'centered' | 'grid'
  | 'saas' | 'retail' | 'agency' | 'local' | 'hospitality' | 'b2b'
  | 'utility';

export type ComponentEntry = {
  slug: string;
  name: string;
  category: string;
  description: string;
  tags: StyleTag[];
  mockProps: Record<string, unknown>;
  propsDocs: PropDoc[];
  githubPath: string;
};

export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'nav', label: 'Navigation' },
  { id: 'hero', label: 'Hero' },
  { id: 'sections', label: 'Sections' },
  { id: 'social-proof', label: 'Social Proof' },
  { id: 'cta', label: 'CTA' },
  { id: 'forms', label: 'Forms' },
  { id: 'footer', label: 'Footer' },
  { id: 'ui', label: 'UI Elements' },
] as const;

export const COMPONENTS: ComponentEntry[] = [
  // ── NAVIGATION ──────────────────────────────────────────────────────────
  {
    slug: 'nav-simple',
    name: 'NavSimple',
    category: 'nav',
    description: 'Eenvoudige navigatiebalk met logo, links en optionele CTA knop. Ingebouwde hamburger voor mobile.',
    githubPath: 'src/components/nav/NavSimple.astro',
    tags: ['minimal', 'light', 'static', 'agency', 'local', 'saas', 'b2b', 'hospitality'],
    mockProps: {
      logo: 'BLURR',
      links: [
        { label: 'Diensten', href: '#' },
        { label: 'Projecten', href: '#' },
        { label: 'Over ons', href: '#' },
        { label: 'Blog', href: '#' },
      ],
      cta: { label: 'Gratis gesprek', href: '#' },
    },
    propsDocs: [
      { name: 'logo', type: 'string', required: true, description: 'Merknaam of pad naar logo afbeelding' },
      { name: 'logoHref', type: 'string', required: false, default: '"/"', description: 'Link van het logo' },
      { name: 'links', type: '{ label: string; href: string }[]', required: true, description: 'Navigatielinks' },
      { name: 'cta', type: '{ label: string; href: string }', required: false, description: 'CTA knop rechtsboven' },
      { name: 'transparent', type: 'boolean', required: false, default: 'false', description: 'Geen achtergrond voor hero overlap' },
    ],
  },
  {
    slug: 'nav-sticky',
    name: 'NavSticky',
    category: 'nav',
    description: 'Sticky nav die start als transparant en solid wordt na 40px scrollen.',
    githubPath: 'src/components/nav/NavSticky.astro',
    tags: ['modern', 'animated', 'agency', 'saas', 'b2b', 'luxury', 'hospitality', 'retail'],
    mockProps: {
      logo: 'BLURR',
      links: [
        { label: 'Diensten', href: '#' },
        { label: 'Cases', href: '#' },
        { label: 'Contact', href: '#' },
      ],
      cta: { label: 'Offerte aanvragen', href: '#' },
    },
    propsDocs: [
      { name: 'logo', type: 'string', required: true, description: 'Merknaam' },
      { name: 'logoHref', type: 'string', required: false, default: '"/"', description: 'Link van het logo' },
      { name: 'links', type: '{ label: string; href: string }[]', required: true, description: 'Navigatielinks' },
      { name: 'cta', type: '{ label: string; href: string }', required: false, description: 'CTA knop' },
    ],
  },

  // ── HERO ────────────────────────────────────────────────────────────────
  {
    slug: 'hero-centered',
    name: 'HeroCentered',
    category: 'hero',
    description: 'Gecentreerde hero met headline, ondertitel, 1-2 CTA knoppen. 4 achtergrondvarianten.',
    githubPath: 'src/components/hero/HeroCentered.astro',
    tags: ['modern', 'centered', 'light', 'saas', 'agency', 'b2b', 'local'],
    mockProps: {
      eyebrow: 'Online Marketing Bureau',
      headline: 'Meer klanten via Google en Social',
      sub: 'Wij bouwen campagnes die écht converteren. Geen bullshit, wel resultaat.',
      ctaPrimary: { label: 'Gratis strategie-gesprek', href: '#' },
      ctaSecondary: { label: 'Bekijk resultaten →', href: '#' },
      bg: 'gradient',
    },
    propsDocs: [
      { name: 'headline', type: 'string', required: true, description: 'H1 tekst' },
      { name: 'eyebrow', type: 'string', required: false, description: 'Klein label boven headline' },
      { name: 'sub', type: 'string', required: false, description: 'Ondertitel' },
      { name: 'ctaPrimary', type: '{ label: string; href: string }', required: false, description: 'Primaire CTA knop' },
      { name: 'ctaSecondary', type: '{ label: string; href: string }', required: false, description: 'Secundaire CTA knop' },
      { name: 'bg', type: "'default' | 'dark' | 'accent' | 'gradient'", required: false, default: "'default'", description: 'Achtergrondvariant' },
      { name: 'image', type: 'string', required: false, description: 'Optionele preview afbeelding URL' },
    ],
  },
  {
    slug: 'hero-split',
    name: 'HeroSplit',
    category: 'hero',
    description: 'Klassieke split-hero: tekst links, afbeelding rechts (of omgekeerd).',
    githubPath: 'src/components/hero/HeroSplit.astro',
    tags: ['minimal', 'split', 'light', 'modern', 'saas', 'agency', 'local', 'b2b'],
    mockProps: {
      eyebrow: 'Webdesign bureau',
      headline: 'Jouw website in 5 dagen live',
      sub: 'Van briefing tot live in één week. Inclusief SEO, analytics en hosting.',
      ctaPrimary: { label: 'Start vandaag', href: '#' },
      ctaSecondary: { label: 'Bekijk cases', href: '#' },
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
      badge: '✓ In 5 dagen live',
    },
    propsDocs: [
      { name: 'headline', type: 'string', required: true, description: 'H1' },
      { name: 'image', type: 'string', required: true, description: 'Afbeelding URL' },
      { name: 'eyebrow', type: 'string', required: false, description: 'Label boven headline' },
      { name: 'sub', type: 'string', required: false, description: 'Ondertitel' },
      { name: 'ctaPrimary', type: '{ label: string; href: string }', required: false, description: 'Primaire CTA' },
      { name: 'ctaSecondary', type: '{ label: string; href: string }', required: false, description: 'Secundaire CTA' },
      { name: 'imagePosition', type: "'right' | 'left'", required: false, default: "'right'", description: 'Kant van de afbeelding' },
      { name: 'badge', type: 'string', required: false, description: 'Floating badge op afbeelding' },
    ],
  },
  {
    slug: 'hero-fullscreen',
    name: 'HeroFullscreen',
    category: 'hero',
    description: '100vh hero met achtergrondafbeelding of -video + donkere overlay.',
    githubPath: 'src/components/hero/HeroFullscreen.astro',
    tags: ['bold', 'fullbleed', 'dark', 'luxury', 'hospitality', 'retail', 'animated'],
    mockProps: {
      headline: 'Verander de manier waarop jij groeit',
      sub: 'Data-gedreven marketing die schaalbaar en meetbaar is.',
      ctaPrimary: { label: 'Begin nu', href: '#' },
      bg: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80',
      overlayOpacity: 0.55,
      align: 'center',
    },
    propsDocs: [
      { name: 'headline', type: 'string', required: true, description: 'H1 tekst' },
      { name: 'bg', type: 'string', required: true, description: 'URL naar achtergrondafbeelding of video' },
      { name: 'sub', type: 'string', required: false, description: 'Ondertitel' },
      { name: 'ctaPrimary', type: '{ label: string; href: string }', required: false, description: 'CTA knop' },
      { name: 'bgType', type: "'image' | 'video'", required: false, default: "'image'", description: 'Type achtergrond' },
      { name: 'overlayOpacity', type: 'number', required: false, default: '0.5', description: 'Overlay donkerte 0-1' },
      { name: 'align', type: "'center' | 'left'", required: false, default: "'center'", description: 'Tekstuitlijning' },
    ],
  },

  // ── SECTIONS ────────────────────────────────────────────────────────────
  {
    slug: 'manifest-block',
    name: 'ManifestBlock',
    category: 'sections',
    description: 'Genummerde USPs of pijlers. Sober en krachtig.',
    githubPath: 'src/components/sections/ManifestBlock.astro',
    tags: ['minimal', 'grid', 'modern', 'b2b', 'agency', 'saas', 'local'],
    mockProps: {
      headline: 'Waarom kiezen voor BLURR?',
      columns: 3,
      items: [
        { title: 'Resultaatgericht', body: 'Geen fancy rapporten, wel leads en omzet. We meten wat telt.' },
        { title: 'Transparant', body: 'Je ziet wat we doen, wanneer we het doen. Geen zwarte dozen.' },
        { title: 'Snel schakelen', body: 'Campagnes live binnen 48 uur. Geen weken wachten op goedkeuring.' },
      ],
    },
    propsDocs: [
      { name: 'items', type: '{ number?: string; title: string; body: string }[]', required: true, description: 'USP items' },
      { name: 'headline', type: 'string', required: false, description: 'Sectie headline' },
      { name: 'columns', type: '1 | 2 | 3', required: false, default: '3', description: 'Aantal kolommen' },
      { name: 'numbered', type: 'boolean', required: false, default: 'true', description: 'Auto-nummering tonen' },
    ],
  },
  {
    slug: 'features-grid',
    name: 'FeaturesGrid',
    category: 'sections',
    description: 'Feature kaarten grid met icon, titel en beschrijving. 3 visuele varianten.',
    githubPath: 'src/components/sections/FeaturesGrid.astro',
    tags: ['modern', 'grid', 'light', 'saas', 'agency', 'b2b'],
    mockProps: {
      headline: 'Alles wat je nodig hebt',
      sub: 'Eén bureau voor alle online marketing kanalen.',
      columns: 3,
      variant: 'card',
      features: [
        { icon: '🎯', title: 'Google Ads', body: 'Search, Shopping en Performance Max campagnes.' },
        { icon: '📱', title: 'Social Ads', body: 'Meta, TikTok en LinkedIn voor elk budget.' },
        { icon: '📈', title: 'SEO', body: 'Technisch, content en linkbuilding in één.' },
        { icon: '🎨', title: 'Webdesign', body: 'Astro websites die razendsnel laden.' },
        { icon: '📊', title: 'Analytics', body: 'GA4 en dashboards die je begrijpt.' },
        { icon: '🤖', title: 'Automations', body: 'AI-workflows die je team versterken.' },
      ],
    },
    propsDocs: [
      { name: 'features', type: '{ icon?: string; title: string; body: string; href?: string }[]', required: true, description: 'Feature items' },
      { name: 'headline', type: 'string', required: false, description: 'Sectie headline' },
      { name: 'sub', type: 'string', required: false, description: 'Ondertitel' },
      { name: 'columns', type: '2 | 3 | 4', required: false, default: '3', description: 'Aantal kolommen' },
      { name: 'variant', type: "'card' | 'minimal' | 'bordered'", required: false, default: "'card'", description: 'Visuele stijl' },
    ],
  },
  {
    slug: 'process-steps',
    name: 'ProcessSteps',
    category: 'sections',
    description: 'Stappen-sectie voor werkwijze of onboarding. Horizontaal of verticaal.',
    githubPath: 'src/components/sections/ProcessSteps.astro',
    tags: ['minimal', 'modern', 'light', 'local', 'b2b', 'agency', 'saas'],
    mockProps: {
      headline: 'Zo werken we',
      sub: 'Van eerste gesprek tot lopende campagnes in 4 stappen.',
      layout: 'horizontal',
      steps: [
        { title: 'Gesprek', body: 'We leren je bedrijf kennen in 30 minuten.' },
        { title: 'Strategie', body: 'We bouwen een plan op maat.' },
        { title: 'Live', body: 'Campagnes actief binnen 48 uur.' },
        { title: 'Groeien', body: 'Maandelijks optimaliseren en rapporteren.' },
      ],
    },
    propsDocs: [
      { name: 'steps', type: '{ title: string; body: string; icon?: string }[]', required: true, description: 'Stappen array' },
      { name: 'headline', type: 'string', required: false, description: 'Sectie headline' },
      { name: 'sub', type: 'string', required: false, description: 'Ondertitel' },
      { name: 'layout', type: "'horizontal' | 'vertical'", required: false, default: "'horizontal'", description: 'Layout richting' },
    ],
  },
  {
    slug: 'pricing-cards',
    name: 'PricingCards',
    category: 'sections',
    description: 'Prijskaarten met highlighted plan en optionele badge.',
    githubPath: 'src/components/sections/PricingCards.astro',
    tags: ['modern', 'grid', 'light', 'saas', 'b2b'],
    mockProps: {
      headline: 'Kies je pakket',
      sub: 'Transparante prijzen, geen verborgen kosten.',
      plans: [
        {
          name: 'Starter',
          price: '€299',
          period: 'mnd',
          description: 'Voor bedrijven die willen starten.',
          features: ['Google Ads', 'Maandrapportage', 'E-mail support'],
          cta: { label: 'Begin nu', href: '#' },
        },
        {
          name: 'Pro',
          price: '€599',
          period: 'mnd',
          highlighted: true,
          badge: 'Meest gekozen',
          description: 'Voor bedrijven die willen groeien.',
          features: ['Google + Meta Ads', 'SEO', 'Wekelijkse call', '24u support'],
          cta: { label: 'Begin nu', href: '#' },
        },
        {
          name: 'Enterprise',
          price: 'Op maat',
          description: 'Voor grote accounts en agencies.',
          features: ['Alle kanalen', 'Dedicated manager', 'SLA', 'Whitelabel'],
          cta: { label: 'Neem contact op', href: '#' },
        },
      ],
    },
    propsDocs: [
      { name: 'plans', type: 'PricingPlan[]', required: true, description: 'Array van plannen. Zie type in component file.' },
      { name: 'headline', type: 'string', required: false, description: 'Sectie headline' },
      { name: 'sub', type: 'string', required: false, description: 'Ondertitel' },
    ],
  },

  // ── SOCIAL PROOF ────────────────────────────────────────────────────────
  {
    slug: 'testimonials-grid',
    name: 'TestimonialsGrid',
    category: 'social-proof',
    description: 'Klantreviews in grid met sterrating en avatar.',
    githubPath: 'src/components/social-proof/TestimonialsGrid.astro',
    tags: ['modern', 'grid', 'light', 'saas', 'local', 'b2b', 'agency'],
    mockProps: {
      headline: 'Wat klanten zeggen',
      columns: 3,
      testimonials: [
        { quote: 'Binnen 3 maanden was ons aantal leads verdubbeld. BLURR begrijpt ons bedrijf.', author: 'Jan Bakker', role: 'Eigenaar', company: 'Bakker Loodgieters', rating: 5 },
        { quote: 'Eindelijk een bureau dat gewoon doet wat het belooft. Cijfers spreken voor zich.', author: 'Sofie de Vries', role: 'Marketing Manager', company: 'TechCorp BV', rating: 5 },
        { quote: 'Google Ads kostte ons veel geld zonder resultaat. Nu zien we 4× ROAS.', author: 'Pieter Janssen', role: 'Directeur', company: 'Janssen Installatie', rating: 5 },
      ],
    },
    propsDocs: [
      { name: 'testimonials', type: 'Testimonial[]', required: true, description: 'Array van testimonials. Zie type in component.' },
      { name: 'headline', type: 'string', required: false, description: 'Sectie headline' },
      { name: 'columns', type: '2 | 3', required: false, default: '3', description: 'Aantal kolommen' },
    ],
  },
  {
    slug: 'logo-bar',
    name: 'LogoBar',
    category: 'social-proof',
    description: 'Rij met klanten- of partnerlogo\'s. Grayscale optioneel.',
    githubPath: 'src/components/social-proof/LogoBar.astro',
    tags: ['minimal', 'light', 'static', 'b2b', 'saas', 'agency'],
    mockProps: {
      label: 'Vertrouwd door meer dan 80 bedrijven',
      grayscale: true,
      logos: [
        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png', alt: 'Google' },
        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/240px-Facebook_Logo_%282019%29.png', alt: 'Facebook' },
        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/200px-Linkedin_icon.svg.png', alt: 'LinkedIn' },
        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png', alt: 'Amazon' },
        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/160px-Apple_logo_black.svg.png', alt: 'Apple' },
      ],
    },
    propsDocs: [
      { name: 'logos', type: '{ src: string; alt: string; href?: string }[]', required: true, description: 'Logo afbeeldingen' },
      { name: 'label', type: 'string', required: false, description: 'Tekst boven de logos' },
      { name: 'grayscale', type: 'boolean', required: false, default: 'true', description: 'Logos zwart-wit' },
    ],
  },
  {
    slug: 'marquee-ticker',
    name: 'MarqueeTicker',
    category: 'social-proof',
    description: 'Oneindige scrollende ticker. Pauzeert bij hover. Puur CSS.',
    githubPath: 'src/components/social-proof/MarqueeTicker.astro',
    tags: ['animated', 'bold', 'agency', 'retail', 'saas'],
    mockProps: {
      items: ['Google Ads', 'Meta Ads', 'SEO', 'Webdesign', 'Analytics', 'CRO', 'LinkedIn Ads', 'TikTok Ads', 'Email Marketing'],
      speed: 25,
    },
    propsDocs: [
      { name: 'items', type: 'string[]', required: true, description: 'Teksten in de ticker' },
      { name: 'speed', type: 'number', required: false, default: '30', description: 'Animatieduur in seconden' },
      { name: 'direction', type: "'left' | 'right'", required: false, default: "'left'", description: 'Scrollrichting' },
      { name: 'separator', type: 'string', required: false, default: "'·'", description: 'Scheidingsteken' },
      { name: 'bg', type: 'string', required: false, description: 'Achtergrondkleur (CSS waarde)' },
      { name: 'color', type: 'string', required: false, description: 'Tekstkleur (CSS waarde)' },
    ],
  },
  {
    slug: 'stats-bar',
    name: 'StatsBar',
    category: 'social-proof',
    description: 'Statistieken sectie met grote getallen. 3 achtergrondvarianten.',
    githubPath: 'src/components/social-proof/StatsBar.astro',
    tags: ['minimal', 'modern', 'dark', 'b2b', 'saas', 'local'],
    mockProps: {
      bg: 'dark',
      stats: [
        { value: '80+', label: 'Tevreden klanten' },
        { value: '4.2×', label: 'Gemiddeld ROAS' },
        { prefix: '€', value: '12M', suffix: '+', label: 'Gegenereerde omzet' },
        { value: '93%', label: 'Klantretentie' },
      ],
    },
    propsDocs: [
      { name: 'stats', type: '{ value: string; label: string; prefix?: string; suffix?: string }[]', required: true, description: 'Statistieken' },
      { name: 'bg', type: "'default' | 'dark' | 'accent'", required: false, default: "'default'", description: 'Achtergrondvariant' },
    ],
  },

  // ── CTA ─────────────────────────────────────────────────────────────────
  {
    slug: 'cta-banner',
    name: 'CTABanner',
    category: 'cta',
    description: 'Call-to-action sectie. Center of split layout. 4 achtergrondvarianten.',
    githubPath: 'src/components/cta/CTABanner.astro',
    tags: ['modern', 'bold', 'agency', 'saas', 'b2b', 'local', 'retail', 'hospitality'],
    mockProps: {
      headline: 'Klaar om te groeien?',
      sub: 'Boek een gratis strategie-gesprek en ontdek wat er mogelijk is voor jouw bedrijf.',
      ctaPrimary: { label: 'Plan een gesprek', href: '#' },
      ctaSecondary: { label: 'Bekijk cases', href: '#' },
      bg: 'gradient',
      align: 'center',
    },
    propsDocs: [
      { name: 'headline', type: 'string', required: true, description: 'Hoofdtekst' },
      { name: 'ctaPrimary', type: '{ label: string; href: string }', required: true, description: 'Primaire CTA' },
      { name: 'sub', type: 'string', required: false, description: 'Ondertekst' },
      { name: 'ctaSecondary', type: '{ label: string; href: string }', required: false, description: 'Secundaire CTA' },
      { name: 'bg', type: "'default' | 'dark' | 'accent' | 'gradient'", required: false, default: "'dark'", description: 'Achtergrondvariant' },
      { name: 'align', type: "'center' | 'split'", required: false, default: "'center'", description: 'Center of tekst-links/CTA-rechts' },
    ],
  },

  // ── FORMS ────────────────────────────────────────────────────────────────
  {
    slug: 'contact-form',
    name: 'ContactForm',
    category: 'forms',
    description: 'Contactformulier met async submit. Werkt met Formspree, Netlify Forms of eigen API.',
    githubPath: 'src/components/forms/ContactForm.astro',
    tags: ['minimal', 'light', 'static', 'local', 'b2b', 'agency'],
    mockProps: {
      headline: 'Stuur ons een bericht',
      sub: 'We reageren binnen 1 werkdag.',
      action: '#',
      fields: ['phone', 'company'],
    },
    propsDocs: [
      { name: 'action', type: 'string', required: true, description: 'Form submit URL (Formspree, Netlify, eigen endpoint)' },
      { name: 'headline', type: 'string', required: false, default: "'Stuur een bericht'", description: 'Formulier titel' },
      { name: 'sub', type: 'string', required: false, description: 'Ondertitel' },
      { name: 'fields', type: "('phone' | 'company' | 'subject')[]", required: false, default: '[]', description: 'Extra optionele velden' },
      { name: 'netlify', type: 'boolean', required: false, default: 'false', description: 'Netlify Forms support' },
      { name: 'successMessage', type: 'string', required: false, description: 'Bevestigingstekst na submit' },
    ],
  },
  {
    slug: 'newsletter-bar',
    name: 'NewsletterBar',
    category: 'forms',
    description: 'Compacte e-mail aanmeldbalk. Inline of gestapeld.',
    githubPath: 'src/components/forms/NewsletterBar.astro',
    tags: ['minimal', 'light', 'static', 'saas', 'retail', 'hospitality'],
    mockProps: {
      headline: 'Ontvang wekelijkse marketing tips',
      placeholder: 'jouw@email.nl',
      btnLabel: 'Aanmelden',
      action: '#',
      disclaimer: 'Geen spam. Altijd uitschrijfbaar.',
      layout: 'inline',
    },
    propsDocs: [
      { name: 'action', type: 'string', required: true, description: 'Form submit URL' },
      { name: 'headline', type: 'string', required: false, description: 'Boven het formulier' },
      { name: 'placeholder', type: 'string', required: false, default: "'jouw@email.nl'", description: 'Input placeholder' },
      { name: 'btnLabel', type: 'string', required: false, default: "'Aanmelden'", description: 'Knop tekst' },
      { name: 'disclaimer', type: 'string', required: false, description: 'Privacy tekst onder formulier' },
      { name: 'layout', type: "'inline' | 'stacked'", required: false, default: "'inline'", description: 'Inline of gestapeld' },
    ],
  },

  // ── FOOTER ───────────────────────────────────────────────────────────────
  {
    slug: 'footer-simple',
    name: 'FooterSimple',
    category: 'footer',
    description: 'Compacte footer met logo, links, social icons en copyright.',
    githubPath: 'src/components/footer/FooterSimple.astro',
    tags: ['minimal', 'light', 'static', 'local', 'saas', 'retail', 'hospitality'],
    mockProps: {
      logo: 'BLURR',
      links: [
        { label: 'Privacybeleid', href: '#' },
        { label: 'Algemene voorwaarden', href: '#' },
        { label: 'Contact', href: '#' },
      ],
      social: [
        { label: 'LinkedIn', href: '#', icon: 'in' },
        { label: 'Instagram', href: '#', icon: '📷' },
      ],
    },
    propsDocs: [
      { name: 'logo', type: 'string', required: true, description: 'Merknaam' },
      { name: 'links', type: '{ label: string; href: string }[]', required: false, default: '[]', description: 'Footer navigatielinks' },
      { name: 'social', type: '{ label: string; href: string; icon: string }[]', required: false, default: '[]', description: 'Social media links' },
      { name: 'copyright', type: 'string', required: false, description: 'Eigen copyright tekst (auto-gegenereerd als leeg)' },
    ],
  },
  {
    slug: 'footer-full',
    name: 'FooterFull',
    category: 'footer',
    description: 'Volledige footer met navigatiekolommen en optioneel groot achtergrondwoord.',
    githubPath: 'src/components/footer/FooterFull.astro',
    tags: ['modern', 'editorial', 'dark', 'agency', 'b2b', 'saas', 'luxury'],
    mockProps: {
      logo: 'BLURR',
      tagline: 'Online marketing die werkt.',
      bigWord: 'BLURR',
      columns: [
        { title: 'Diensten', links: [{ label: 'Google Ads', href: '#' }, { label: 'Meta Ads', href: '#' }, { label: 'SEO', href: '#' }] },
        { title: 'Bedrijf', links: [{ label: 'Over ons', href: '#' }, { label: 'Cases', href: '#' }, { label: 'Blog', href: '#' }] },
        { title: 'Contact', links: [{ label: 'Gratis gesprek', href: '#' }, { label: 'info@blurr.nl', href: '#' }] },
      ],
      social: [
        { label: 'LinkedIn', href: '#', icon: 'in' },
        { label: 'Instagram', href: '#', icon: '📷' },
      ],
    },
    propsDocs: [
      { name: 'logo', type: 'string', required: true, description: 'Merknaam' },
      { name: 'columns', type: '{ title: string; links: { label: string; href: string }[] }[]', required: true, description: 'Navigatiekolommen' },
      { name: 'tagline', type: 'string', required: false, description: 'Korte slogan' },
      { name: 'social', type: '{ label: string; href: string; icon: string }[]', required: false, default: '[]', description: 'Social links' },
      { name: 'bigWord', type: 'string', required: false, description: 'Groot achtergrondwoord (Brandy-stijl)' },
      { name: 'copyright', type: 'string', required: false, description: 'Eigen copyright tekst' },
    ],
  },

  // ── EDITORIAL (AWW / Sushi Rol) ─────────────────────────────────────────
  {
    slug: 'hero-editorial',
    name: 'HeroEditorial',
    category: 'hero',
    description: 'Full-bleed dark editorial hero. Afbeelding bleedt naar rechts. Ghost-nummer als typografisch anker. Scroll-indicator met geanimeerde accentlijn.',
    githubPath: 'src/components/hero/HeroEditorial.astro',
    tags: ['editorial', 'bold', 'fullbleed', 'dark', 'luxury', 'retail', 'agency'],
    mockProps: {
      eyebrow: 'Premium verpakking · NL-voorraad',
      headline: 'De verpakking<br>die jouw product<br><em>viraal maakt.</em>',
      sub: 'Jouw klanten filmen dit zelf.<br>Dat is de beste marketing die bestaat.',
      ctaPrimary: { label: 'Bestel proefpakket', href: '#' },
      ctaSecondary: { label: 'Bekijk maten', href: '#' },
      image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=900&q=80',
      imageAlt: 'Product detail shot',
      trustItems: ['✓ Food-grade', '✓ EU-cert', '✓ Vanaf 50 stuks', '✓ Morgen in huis'],
      ghostNumber: '01',
      accentColor: '#c43d3a',
    },
    propsDocs: [
      { name: 'headline', type: 'string', required: true, description: 'H1 tekst (HTML toegestaan, <br> voor regelbreuk, <em> voor accent)' },
      { name: 'eyebrow', type: 'string', required: false, description: 'Klein monospace label boven headline' },
      { name: 'sub', type: 'string', required: false, description: 'Ondertitel (HTML toegestaan)' },
      { name: 'ctaPrimary', type: '{ label: string; href: string }', required: false, description: 'Primaire CTA knop' },
      { name: 'ctaSecondary', type: '{ label: string; href: string }', required: false, description: 'Secundaire tekstlink' },
      { name: 'image', type: 'string', required: true, description: 'URL naar hero afbeelding (rechts, bleedt naar rand)' },
      { name: 'imageAlt', type: 'string', required: false, default: '""', description: 'Alt tekst voor afbeelding' },
      { name: 'trustItems', type: 'string[]', required: false, default: '[]', description: 'Kleine trust pills onder CTAs' },
      { name: 'ghostNumber', type: 'string', required: false, default: '"01"', description: 'Groot achtergrond ghost-nummer' },
      { name: 'accentColor', type: 'string', required: false, default: '"#c43d3a"', description: 'CSS kleurwaarde voor accenten' },
      { name: 'bgColor', type: 'string', required: false, default: '"#1a1714"', description: 'Donkere achtergrondkleur' },
    ],
  },
  {
    slug: 'statement-section',
    name: 'StatementSection',
    category: 'sections',
    description: 'Pure typografie moment. Donkere sectie met één grote cursieve display-quote. Verticale accentregel als typografische inleiding.',
    githubPath: 'src/components/sections/StatementSection.astro',
    tags: ['bold', 'editorial', 'dark', 'luxury', 'agency', 'retail'],
    mockProps: {
      quote: '"Jouw klanten<br>filmen dit zelf."',
      attribution: '— De beste marketing die bestaat',
      bgColor: '#0d0b09',
      accentColor: '#c43d3a',
    },
    propsDocs: [
      { name: 'quote', type: 'string', required: true, description: 'Display quote tekst (HTML toegestaan, <br> voor regelbreuk)' },
      { name: 'attribution', type: 'string', required: false, description: 'Kleine tekst onder quote (auteur / context)' },
      { name: 'bgColor', type: 'string', required: false, default: '"#0d0b09"', description: 'Achtergrondkleur (gebruik donkere tint)' },
      { name: 'accentColor', type: 'string', required: false, default: '"#c43d3a"', description: 'Kleur van de verticale accentregel' },
    ],
  },
  {
    slug: 'stats-editorial',
    name: 'StatsEditorial',
    category: 'social-proof',
    description: 'Editoriale statistieken met grote Cormorant-cijfers. Ghost-nummer als anker. Lichte achtergrond, border-left dividers tussen items.',
    githubPath: 'src/components/social-proof/StatsEditorial.astro',
    tags: ['editorial', 'bold', 'light', 'luxury', 'retail', 'agency'],
    mockProps: {
      label: 'Resultaten',
      ghostNumber: '02',
      accentColor: '#c43d3a',
      stats: [
        { value: '185', suffix: '%', label: 'meer social media mentions' },
        { value: '50', suffix: '+', label: 'stuks minimum bestelling' },
        { value: '24', suffix: 'u', label: 'besteld voor 14:00 morgen in huis' },
      ],
    },
    propsDocs: [
      { name: 'stats', type: '{ value: string; label: string; prefix?: string; suffix?: string }[]', required: true, description: 'Array van statistieken' },
      { name: 'label', type: 'string', required: false, description: 'Klein eyebrow label boven de stats' },
      { name: 'ghostNumber', type: 'string', required: false, default: '"02"', description: 'Groot achtergrond ghost-nummer' },
      { name: 'accentColor', type: 'string', required: false, default: '"#c43d3a"', description: 'Kleur voor prefix/suffix van cijfers' },
      { name: 'bgColor', type: 'string', required: false, default: '"#fdfaf6"', description: 'Achtergrondkleur (gebruik lichte tint)' },
    ],
  },
  {
    slug: 'wow-usp',
    name: 'WowUSP',
    category: 'sections',
    description: 'Donkere USP-sectie met groot editorial headline en genummerde items. Ghost-nummer links. 4-kolommen grid met border-left per item.',
    githubPath: 'src/components/sections/WowUSP.astro',
    tags: ['bold', 'editorial', 'dark', 'animated', 'agency', 'retail', 'luxury'],
    mockProps: {
      label: 'Waarom kiezen',
      headline: 'Geen plastic.<br>Geen gedoe.<br><em>Gewoon resultaat.</em>',
      ghostNumber: '04',
      accentColor: '#c43d3a',
      usps: [
        { title: 'Duurzaam materiaal', body: 'Food-grade papier. Je klant voelt het verschil met goedkoop plastic.' },
        { title: 'NL-voorraad', body: 'Besteld voor 14:00 = morgen in huis. Altijd op voorraad.' },
        { title: 'EU-gecertificeerd', body: 'Volledig food-safe en gecertificeerd. Geen risico.' },
        { title: 'Custom branding', body: 'Jouw logo, jouw kleuren. Jouw zaak als visitekaartje.' },
      ],
    },
    propsDocs: [
      { name: 'usps', type: '{ title: string; body: string; number?: string }[]', required: true, description: 'Array van USP items (number auto-gegenereerd als leeg)' },
      { name: 'headline', type: 'string', required: true, description: 'Groot H2 (HTML toegestaan, <em> voor accent)' },
      { name: 'label', type: 'string', required: false, description: 'Klein eyebrow boven headline' },
      { name: 'ghostNumber', type: 'string', required: false, default: '"04"', description: 'Groot achtergrond ghost-nummer' },
      { name: 'accentColor', type: 'string', required: false, default: '"#c43d3a"', description: 'Kleur voor nummers en em in headline' },
      { name: 'bgColor', type: 'string', required: false, default: '"#1a1714"', description: 'Donkere achtergrondkleur' },
    ],
  },
  {
    slug: 'lifestyle-fullbleed',
    name: 'LifestyleFullbleed',
    category: 'sections',
    description: 'Full-bleed 75vh afbeelding met donkere gradient overlay. Quote + attributie + optionele stat overlaid onderaan. Brand-moment tussen product-secties.',
    githubPath: 'src/components/sections/LifestyleFullbleed.astro',
    tags: ['bold', 'fullbleed', 'dark', 'luxury', 'hospitality', 'retail'],
    mockProps: {
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80',
      imageAlt: 'Sfeervolle restaurant scene',
      label: 'Klantervaring',
      quote: '"Onze klanten beginnen<br>spontaan video\'s te maken."',
      authorName: 'Yasmine R.',
      authorRole: 'Eigenaar · Restaurant Amsterdam',
      statValue: '3.000+',
      statLabel: 'views per video gemiddeld',
      accentColor: '#c43d3a',
    },
    propsDocs: [
      { name: 'image', type: 'string', required: true, description: 'URL naar full-bleed afbeelding' },
      { name: 'quote', type: 'string', required: true, description: 'Italic display quote (HTML toegestaan)' },
      { name: 'imageAlt', type: 'string', required: false, default: '""', description: 'Alt tekst voor afbeelding' },
      { name: 'label', type: 'string', required: false, description: 'Klein monospace label boven quote' },
      { name: 'authorName', type: 'string', required: false, description: 'Naam van de getuige' },
      { name: 'authorRole', type: 'string', required: false, description: 'Rol / context (monospace, klein)' },
      { name: 'statValue', type: 'string', required: false, description: 'Stat waarde (bijv. "3.000+")' },
      { name: 'statLabel', type: 'string', required: false, description: 'Stat beschrijving' },
      { name: 'accentColor', type: 'string', required: false, default: '"#c43d3a"', description: 'Kleur voor statValue' },
      { name: 'minHeight', type: 'string', required: false, default: '"75vh"', description: 'Minimale hoogte van de sectie' },
    ],
  },

  // ── UI ELEMENTS ──────────────────────────────────────────────────────────
  {
    slug: 'button',
    name: 'Button',
    category: 'ui',
    description: 'Herbruikbare knop: 4 varianten, 3 groottes, als link of button element.',
    githubPath: 'src/components/ui/Button.astro',
    tags: ['minimal', 'static', 'utility'],
    mockProps: {
      label: 'Klik hier',
      variant: 'primary',
      size: 'md',
    },
    propsDocs: [
      { name: 'label', type: 'string', required: true, description: 'Knop tekst' },
      { name: 'href', type: 'string', required: false, description: 'Als opgegeven: renders als <a>, anders als <button>' },
      { name: 'variant', type: "'primary' | 'secondary' | 'ghost' | 'danger'", required: false, default: "'primary'", description: 'Visuele variant' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", required: false, default: "'md'", description: 'Grootte' },
      { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Uitgeschakeld' },
      { name: 'fullWidth', type: 'boolean', required: false, default: 'false', description: 'Volle breedte' },
    ],
  },
  {
    slug: 'badge',
    name: 'Badge',
    category: 'ui',
    description: 'Pill badge voor status, labels en categorieën. 6 kleurvarianten.',
    tags: ['minimal', 'static', 'utility'],
    githubPath: 'src/components/ui/Badge.astro',
    mockProps: {
      label: 'Nieuw',
      variant: 'accent',
      size: 'md',
    },
    propsDocs: [
      { name: 'label', type: 'string', required: true, description: 'Badge tekst' },
      { name: 'variant', type: "'default' | 'accent' | 'success' | 'warning' | 'danger' | 'outline'", required: false, default: "'default'", description: 'Kleurvariant' },
      { name: 'size', type: "'sm' | 'md'", required: false, default: "'md'", description: 'Grootte' },
      { name: 'dot', type: 'boolean', required: false, default: 'false', description: 'Kleur dot voor de tekst' },
    ],
  },
  {
    slug: 'card',
    name: 'Card',
    category: 'ui',
    description: 'Basis kaart component met slot voor flexibele content. 4 varianten.',
    githubPath: 'src/components/ui/Card.astro',
    tags: ['modern', 'light', 'static', 'utility'],
    mockProps: {
      variant: 'elevated',
      padding: 'md',
    },
    propsDocs: [
      { name: 'variant', type: "'default' | 'bordered' | 'elevated' | 'flat'", required: false, default: "'default'", description: 'Visuele stijl' },
      { name: 'href', type: 'string', required: false, description: 'Maakt kaart klikbaar als link' },
      { name: 'image', type: 'string', required: false, description: 'Optionele header afbeelding' },
      { name: 'padding', type: "'sm' | 'md' | 'lg'", required: false, default: "'md'", description: 'Interne ruimte' },
    ],
  },
  {
    slug: 'accordion-faq',
    name: 'AccordionFAQ',
    category: 'ui',
    description: 'FAQ accordion. Toegankelijk (ARIA), keyboard navigeerbaar.',
    githubPath: 'src/components/ui/AccordionFAQ.astro',
    tags: ['minimal', 'static', 'local', 'b2b', 'saas'],
    mockProps: {
      headline: 'Veelgestelde vragen',
      items: [
        { question: 'Wat kost Google Ads?', answer: 'Dat hangt af van je doelen en markt. We starten vaak met €500-1000 per maand aan advertentiebudget, los van de managementkosten.' },
        { question: 'Hoe snel zie ik resultaat?', answer: 'Eerste leads zijn er vaak binnen 1-2 weken. Structureel betere resultaten zie je na 2-3 maanden optimalisatie.' },
        { question: 'Kunnen jullie ook mijn bestaande campagnes overnemen?', answer: 'Ja, zeker. We doen een gratis audit van je huidige setup en geven eerlijk advies over wat er beter kan.' },
        { question: 'Hebben jullie branche-ervaring?', answer: 'We werken met lokale dienstverlenende bedrijven, e-commerce en B2B. Vraag naar ons track record in jouw sector.' },
      ],
    },
    propsDocs: [
      { name: 'items', type: '{ question: string; answer: string }[]', required: true, description: 'FAQ items' },
      { name: 'headline', type: 'string', required: false, description: 'Sectie titel' },
      { name: 'allowMultiple', type: 'boolean', required: false, default: 'false', description: 'Meerdere items tegelijk open' },
    ],
  },
];

export function getComponent(slug: string): ComponentEntry | undefined {
  return COMPONENTS.find(c => c.slug === slug);
}

export function getByCategory(category: string): ComponentEntry[] {
  if (category === 'all') return COMPONENTS;
  return COMPONENTS.filter(c => c.category === category);
}

export function getByTag(tag: StyleTag): ComponentEntry[] {
  return COMPONENTS.filter(c => c.tags.includes(tag));
}

export function getByTags(tags: StyleTag[], matchAll = false): ComponentEntry[] {
  if (matchAll) return COMPONENTS.filter(c => tags.every(t => c.tags.includes(t)));
  return COMPONENTS.filter(c => tags.some(t => c.tags.includes(t)));
}

// ── STARTER PACKS ───────────────────────────────────────────────────────────
// Curated component sets per brand archetype.
// One slug per page section — select the best fit based on brand guide output.

export type StarterPack = {
  id: string;
  label: string;
  description: string;
  archetype: StyleTag[];
  components: {
    nav: string;
    hero: string;
    sections: string[];
    socialProof: string[];
    cta: string;
    forms?: string;
    footer: string;
  };
};

export const STARTER_PACKS: StarterPack[] = [
  {
    id: 'luxury-retail',
    label: 'Luxury Retail',
    description: 'Editoriale stijl. Donkere palette, serif typography, fullbleed visuals. Geschikt voor premium producten, boutiques, high-end retail.',
    archetype: ['luxury', 'editorial', 'bold', 'retail'],
    components: {
      nav: 'nav-sticky',
      hero: 'hero-editorial',
      sections: ['lifestyle-fullbleed', 'statement-section', 'wow-usp'],
      socialProof: ['stats-editorial', 'marquee-ticker'],
      cta: 'cta-banner',
      footer: 'footer-full',
    },
  },
  {
    id: 'b2b-saas',
    label: 'B2B / SaaS',
    description: 'Schoon, professioneel, conversiegericht. Lichte palette, heldere hiërarchie. Geschikt voor software, agencies, B2B dienstverleners.',
    archetype: ['modern', 'light', 'saas', 'b2b'],
    components: {
      nav: 'nav-sticky',
      hero: 'hero-split',
      sections: ['features-grid', 'pricing-cards', 'process-steps'],
      socialProof: ['logo-bar', 'testimonials-grid'],
      cta: 'cta-banner',
      footer: 'footer-full',
    },
  },
  {
    id: 'local-business',
    label: 'Lokaal Bedrijf',
    description: 'Toegankelijk, warm, vertrouwenwekkend. Lichte palette, persoonlijke toon. Geschikt voor lokale dienstverleners, vakmensen, mkb.',
    archetype: ['minimal', 'light', 'local'],
    components: {
      nav: 'nav-simple',
      hero: 'hero-centered',
      sections: ['process-steps', 'manifest-block'],
      socialProof: ['testimonials-grid', 'stats-bar'],
      cta: 'cta-banner',
      forms: 'contact-form',
      footer: 'footer-simple',
    },
  },
  {
    id: 'creative-agency',
    label: 'Creative Agency',
    description: 'Opvallend, eigenzinnig, motion-rich. Donkere accenten, editorial typografie. Geschikt voor design studios, marketing bureaus, creatieve agencies.',
    archetype: ['bold', 'editorial', 'agency', 'dark'],
    components: {
      nav: 'nav-sticky',
      hero: 'hero-editorial',
      sections: ['wow-usp', 'statement-section', 'manifest-block'],
      socialProof: ['marquee-ticker', 'logo-bar'],
      cta: 'cta-banner',
      footer: 'footer-full',
    },
  },
  {
    id: 'hospitality',
    label: 'Hospitality',
    description: 'Sfeervol, immersief, lifestyle-gedreven. Fullbleed visuals, warme tonen. Geschikt voor restaurants, hotels, spa, wellness, horeca.',
    archetype: ['luxury', 'fullbleed', 'hospitality'],
    components: {
      nav: 'nav-sticky',
      hero: 'hero-fullscreen',
      sections: ['lifestyle-fullbleed', 'manifest-block'],
      socialProof: ['testimonials-grid', 'stats-bar'],
      cta: 'cta-banner',
      forms: 'newsletter-bar',
      footer: 'footer-simple',
    },
  },
  {
    id: 'startup',
    label: 'Startup / Modern',
    description: 'Fris, helder, groei-gefocust. Lichte palette, duidelijke propositie. Geschikt voor startups, apps, nieuwe diensten.',
    archetype: ['modern', 'minimal', 'light', 'saas'],
    components: {
      nav: 'nav-simple',
      hero: 'hero-centered',
      sections: ['features-grid', 'process-steps', 'pricing-cards'],
      socialProof: ['logo-bar', 'stats-bar'],
      cta: 'cta-banner',
      footer: 'footer-full',
    },
  },
];

export function getStarterPack(id: string): StarterPack | undefined {
  return STARTER_PACKS.find(p => p.id === id);
}

export function matchStarterPack(tags: StyleTag[]): StarterPack | undefined {
  // Score each pack by how many archetype tags match
  const scored = STARTER_PACKS.map(pack => ({
    pack,
    score: pack.archetype.filter(t => tags.includes(t)).length,
  }));
  scored.sort((a, b) => b.score - a.score);
  return scored[0]?.score > 0 ? scored[0].pack : undefined;
}
