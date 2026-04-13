# BLURR Component Library

Herbruikbare Astro componenten voor BLURR Marketing websites. Stack: **Astro + GSAP + Tailwind**.

## Gebruik

Kopieer een component uit de gewenste categorie naar je project. Elk component is standalone en heeft geen externe dependencies behalve GSAP (optioneel, voor animaties).

## Categorieën

| Categorie | Componenten |
|-----------|-------------|
| [nav/](src/components/nav/) | NavSimple, NavSticky |
| [hero/](src/components/hero/) | HeroCentered, HeroSplit, HeroFullscreen |
| [sections/](src/components/sections/) | ManifestBlock, FeaturesGrid, FeaturesAlternating, ProcessSteps, PricingCards |
| [social-proof/](src/components/social-proof/) | TestimonialsGrid, LogoBar, MarqueeTicker, StatsBar |
| [cta/](src/components/cta/) | CTABanner, CTACard |
| [forms/](src/components/forms/) | ContactForm, NewsletterBar |
| [footer/](src/components/footer/) | FooterSimple, FooterFull |
| [ui/](src/components/ui/) | Button, Badge, Card, AccordionFAQ |

## Conventies

- Alle componenten accepteren props voor tekst/content — geen hardcoded copy
- CSS custom properties voor kleuren (`--color-primary`, `--color-accent`, `--color-bg`, `--color-text`)
- GSAP animaties zijn optioneel en graceful degraden zonder GSAP
- Mobile-first responsive

## CSS Variabelen (standaard)

```css
:root {
  --color-primary: #0a0a0a;
  --color-accent: #6366f1;
  --color-bg: #ffffff;
  --color-text: #0a0a0a;
  --color-muted: #6b7280;
  --font-sans: 'Plus Jakarta Sans', sans-serif;
  --font-display: var(--font-sans);
  --radius: 0.5rem;
}
```

## Vault documentatie

Zie `Websites/componenten/` in de BLURR Obsidian Vault voor uitgebreide docs per component.
