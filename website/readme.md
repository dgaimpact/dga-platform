# DGA Website - GitHub Pages Hosting

**Repository:** `dga-website`  
**Platform:** GitHub Pages + Jekyll  
**Domain:** `digitalgrowthautomation.com` (example)  
**Status:** Development

## Overview

This website serves as the public-facing presence for Digital Growth Automation (DGA), providing marketing information, documentation, and subscriber resources.

## Site Structure

```
dga-website/
├── index.md                    # Homepage
├── _config.yml                 # Jekyll configuration
├── _includes/                  # Reusable components
├── _layouts/                   # Page templates
├── _sass/                      # Stylesheets
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── pages/
│   ├── mp-playbook.md          # MP Playbook product page
│   ├── rea-solo.md            # REA Solo product page
│   ├── how-it-works.md        # Process explanation
│   ├── pricing.md             # Pricing tiers
│   └── contact.md             # Contact form
├── docs/
│   ├── index.md               # Documentation hub
│   ├── mp-guides/             # Mortgage Professional resources
│   ├── rea-guides/            # Real Estate Agent resources
│   └── technical/             # Technical documentation
└── blog/
    ├── index.md               # Blog homepage
    └── _posts/                # Blog articles
```

## Content Strategy

### Target Audiences:
1. **Mortgage Professionals** (Primary - Playbook subscribers)
2. **Real Estate Agents** (Secondary - Solo subscribers)
3. **Industry Partners** (Tertiary - Integration partners)

### Key Messages:
- "Systematic GEO/AIO visibility for real estate professionals"
- "Done-for-you content that dominates local search"
- "Partnership-driven growth, not just software"

## Implementation Plan

### Phase 1: Foundation (Week 1)
- [ ] Set up Jekyll site structure
- [ ] Create basic layout and navigation
- [ ] Implement responsive design
- [ ] Set up GitHub Pages deployment

### Phase 2: Core Pages (Week 2)
- [ ] Homepage with value proposition
- [ ] MP Playbook product page
- [ ] REA Solo product page
- [ ] How It Works process explanation
- [ ] Basic documentation structure

### Phase 3: Enhanced Content (Week 3)
- [ ] Pricing page with tier comparisons
- [ ] Contact forms and lead capture
- [ ] Blog with initial content
- [ ] Case studies and testimonials
- [ ] Integration documentation

### Phase 4: Optimization (Week 4)
- [ ] SEO optimization
- [ ] Performance tuning
- [ ] Analytics integration
- [ ] Mobile optimization
- [ ] Accessibility compliance

## Key Pages Detail

### Homepage (`index.md`)
- Hero section: "Dominate Your Market with AI-Optimized Content"
- Value proposition: GEO/AIO visibility, done-for-you content, partnership growth
- Audience targeting: Clear paths for MPs and REAs
- Social proof: Testimonials, partner logos
- Call-to-action: Territory availability check

### MP Playbook Page (`pages/mp-playbook.md`)
- Target: Mortgage Professionals
- Focus: Building REA referral networks systematically
- Features: Territory exclusivity, REA management tools, cross-promotion
- Social proof: MP success stories
- CTA: Schedule demo + check territory

### REA Solo Page (`pages/rea-solo.md`)
- Target: Real Estate Agents  
- Focus: Niche domination and local visibility
- Features: Niche protection, content packages, implementation support
- Social proof: REA visibility improvements
- CTA: Niche availability check

## Documentation Integration

### Docs Hub (`docs/index.md`)
- **For MPs:** Recruitment scripts, performance tracking, partnership management
- **For REAs:** Implementation guides, best practices, troubleshooting
- **Technical:** API documentation, integration guides, workflow specs

### File Organization:
- Keep operational docs in main `dga-system` repository
- Sync relevant documentation to website via GitHub Actions
- Use Jekyll collections for organized documentation

## Technical Specifications

### Jekyll Configuration (`_config.yml`)
```yaml
title: "Digital Growth Automation"
description: "GEO/AIO visibility solutions for real estate professionals"
baseurl: ""
url: "https://digitalgrowthautomation.com"

# Collections
collections:
  docs:
    output: true
    permalink: /docs/:path/

# Defaults
defaults:
  - scope:
      path: "docs"
    values:
      layout: "docs"
  - scope:
      path: "pages" 
    values:
      layout: "page"
```

### Deployment:
- **Branch:** `main` (or `gh-pages` depending on setup)
- **CI/CD:** GitHub Actions for automated deployment
- **Custom Domain:** Configured via GitHub Pages settings
- **SSL:** Automatic via GitHub Pages

## Content Management

### Blog Strategy:
- Weekly articles on GEO/AIO trends
- Case studies from pilot program
- How-to guides for subscribers
- Industry insights and updates

### Documentation Updates:
- Automated sync from main repository
- Versioned documentation releases
- Search functionality via Algolia or similar
- Feedback mechanisms for docs improvement

## Success Metrics

### Website KPIs:
- Lead conversion rate (demo requests, signups)
- Documentation engagement (time on page, bounce rate)
- Blog subscriber growth
- Organic search traffic growth
- Mobile user engagement

### Technical KPIs:
- Page load speed (< 3 seconds)
- Mobile responsiveness score (> 90)
- SEO performance (keyword rankings)
- Uptime (99.9% target)

## Maintenance & Updates

### Regular Tasks:
- Weekly content updates (blog, case studies)
- Monthly documentation reviews and updates
- Quarterly design and UX reviews
- Annual technical audit and upgrades

### Team Responsibilities:
- **Content Team:** Blog posts, case studies, updates
- **Technical Team:** Documentation, technical specs, integrations  
- **Marketing Team:** SEO, analytics, conversion optimization
- **Customer Success:** User feedback, improvement suggestions

---

**Next Steps:**
1. Set up Jekyll site structure in new repository
2. Create basic layout and design system
3. Develop homepage and core product pages
4. Integrate documentation from main DGA system
5. Launch initial version and begin content creation
```

This gives you a complete plan for building a professional GitHub-hosted website that serves both marketing and documentation purposes. The site will be tightly integrated with your existing documentation while providing a public face for DGA.

**Ready to start building the actual website files?** I can begin with the Jekyll configuration and core page templates.
