---
name: Summit Shield Insurance
description: Calm, trustworthy insurance guidance with one clear path to a free consultation.
colors:
  summit-navy: "#0B2D5C"
  summit-navy-deep: "#081F42"
  trust-blue: "#1E5AA8"
  action-gold: "#C98A3E"
  action-gold-deep: "#B3782F"
  canvas: "#F5F7FA"
  surface: "#FFFFFF"
  ink: "#101828"
  ink-muted: "#4B5A72"
  border: "#E2E8F0"
typography:
  display:
    fontFamily: "Poppins, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Poppins, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Inter, Segoe UI, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  sm: "8px"
  md: "14px"
  lg: "20px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.action-gold}"
    textColor: "{colors.summit-navy}"
    rounded: "{rounded.sm}"
    padding: "14px 26px"
  button-primary-hover:
    backgroundColor: "{colors.action-gold-deep}"
    textColor: "{colors.summit-navy-deep}"
---

# Design System: Summit Shield Insurance

## Overview

**Creative North Star: "The Trusted Advisor's Desk"**

The interface should feel like sitting across from an experienced advisor who has already organized the difficult parts. It is calm, spacious, and specific, with enough visual warmth to feel human and enough structure to feel dependable. Navy carries authority, gold identifies action, and real photography keeps the experience grounded in people rather than policy abstractions.

The system rejects high-pressure lead funnels, interchangeable insurance templates, technical SaaS styling, and decorative motion. Pages reveal detail progressively and keep the consultation path visible without repeating it aggressively.

**Key Characteristics:**

- Trust-first hierarchy
- Plain-language content
- Generous but varied spacing
- Human photography paired with concrete policy details
- One dominant conversion path
- Mobile-first, WCAG 2.2 AA interactions

## Colors

The palette is restrained and institutional without becoming cold. Summit Navy establishes trust, Trust Blue supports navigation and focus, and Action Gold is reserved for the strongest calls to action.

**The Gold Means Action Rule.** Gold is scarce. Use it for primary conversion actions and small emphasis details, never as a decorative section background.

**The Navy Carries Trust Rule.** Headings, navigation, and high-authority surfaces use navy. Body copy remains near-black or muted blue-gray for comfortable reading.

## Typography

**Display Font:** Poppins with Segoe UI and Arial fallbacks
**Body Font:** Inter with Segoe UI and Arial fallbacks

**Character:** Poppins provides clear, approachable authority; Inter keeps policy explanations neutral and highly legible. The pairing is an established part of the project identity and must remain consistent across the static site and GHL export.

### Hierarchy

- **Display** (700, fluid 40–64px, 1.08): hero headlines only, capped near 15 characters per line.
- **Headline** (700, fluid 28–40px, 1.2): major section decisions, generally capped near 19 characters per line.
- **Title** (600, fluid 20–24px, 1.2): service and component titles.
- **Body** (400, 16–18px, 1.65): explanations capped near 62–70 characters per line.
- **Label** (700, 12–13px): short trust or category labels only; uppercase is never used for sentences.

**The Plain-English Measure Rule.** Long copy never exceeds 70 characters per line. Headings balance naturally and must not overflow at narrow widths.

## Elevation

The system is flat by default. Borders and surface color establish structure; soft navy-tinted shadows appear only on interactive cards, the sticky header, the policy summary, and modal layers. Strong shadows are reserved for elements that genuinely float above content.

**The Earned Elevation Rule.** If removing a shadow does not reduce hierarchy or clarify interaction, remove it.

## Components

### Buttons

- **Shape:** Gently squared corners (8px), never oversized pills.
- **Primary:** Action Gold with Summit Navy text and a minimum 44px touch height.
- **Hover / Focus:** Small vertical movement, darker gold, and a visible blue focus outline.
- **Secondary:** Transparent or white surface with a navy border; it must remain subordinate to the primary consultation action.

### Cards / Containers

- **Corner Style:** 14px for cards, 20px for large image frames.
- **Background:** White on the cool canvas.
- **Shadow Strategy:** Flat at rest where possible; soft lift on hover only when the whole surface is interactive.
- **Border:** One-pixel cool gray border.
- **Internal Padding:** 24–40px based on hierarchy.

### Inputs / Fields

- **Style:** Visible label above the field, white surface, one-pixel border, and 8px corners.
- **Focus:** Three-pixel Trust Blue outline with a two-pixel offset.
- **Error / Disabled:** Error text sits beside the relevant field; disabled controls remain visibly non-interactive.

### Navigation

Desktop navigation is quiet and horizontal with a gold underline state. Below 880px it becomes a keyboard-operable menu with 44px controls, full-width links, and one primary consultation action.

### Service Overview

Five coverage choices use a 6-column asymmetric grid on wide screens: two wider priority cards and three supporting cards. The grid collapses to two columns on tablets and one column on phones.

## Do's and Don'ts

### Do:

- **Do** establish trust before requesting personal information.
- **Do** use navy, blue, and gold according to their named roles.
- **Do** use real human situations and specific policy examples.
- **Do** preserve 44px touch targets, visible focus, zoom support, and reduced-motion behavior.
- **Do** keep the static site and GHL export synchronized.

### Don't:

- **Don't** use high-pressure lead-generation funnels with countdown timers, exaggerated urgency, or repeated popups.
- **Don't** reproduce generic insurance templates made from interchangeable blue card grids and stock shield icons.
- **Don't** expose dense policy jargon before establishing relevance.
- **Don't** introduce neon, glassy, or technical SaaS styling.
- **Don't** use heavy animation that compromises clarity, accessibility, performance, or GoHighLevel compatibility.
- **Don't** use gradient text, colored side-stripe cards, repeated decorative eyebrows, or arbitrary shadows.
