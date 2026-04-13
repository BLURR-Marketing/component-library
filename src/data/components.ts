export type PropDoc = {
  name: string;
  type: string;
  required: boolean;
  default?: string;
  description: string;
};

export type ComponentEntry = {
  slug: string;
  name: string;
  category: string;
  description: string;
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

  // ── UI ELEMENTS ──────────────────────────────────────────────────────────
  {
    slug: 'button',
    name: 'Button',
    category: 'ui',
    description: 'Herbruikbare knop: 4 varianten, 3 groottes, als link of button element.',
    githubPath: 'src/components/ui/Button.astro',
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
