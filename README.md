# Portfolio Website Project - README

## Overview
This project is a personal portfolio website built using a template originally created by Safak. The template can be found on GitHub: Next Animated Portfolio by Safak.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

From this template, I customized the design, layout, and functionality to better reflect my personal brand and showcase my projects. Below are the modifications and enhancements I made to each part of the website.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Main Modifications

### Global Changes

- Colors: Modified the color scheme for all elements across the site to align with my aesthetic preferences.
- Text: Replaced placeholder text with personalized content for all pages.
- Transitions: Updated transitions for a smoother and more dynamic visual experience.

### Homepage

- Modified the text and color scheme.
- Updated the buttons:
  - "View My Work": Redirects to the Portfolio page.
  - "Contact Me": Redirects to the Contact page.
- Linked the social media stickers (e.g., LinkedIn) to their respective profiles.

### About Page
- Customized the text, photo, and overall color scheme, including every element in the brain diagram, editing each section individually.
- Added a "Download CV" button:
- Allows users to view and download my CV directly from the website.
- Reorganized the Skills section:
- Divided skills into categorized sections.
- Improved the layout to ensure the text no longer overlaps or extends outside the skill boxes when hovering.
- Enhanced the Experience section:
  - Divided experiences into distinct sections for better readability.
- Fixed alignment issues in the timeline:
  - Ensured text and cards align properly.
  - Adjusted zones to prevent overlapping for longer text entries.

### Portfolio Page

- Replaced the example projects with my own, including:
- Support for videos with autoplay and mute functionality to showcase projects in greater detail.
- Added an interactive feature for the POGODO project:
- On hover, a "View More" button appears, redirecting users to a dedicated page providing detailed information about the project. This page was coded entirely from scratch without using a template.
- Included an option at the end of the page to download my CV.

### Contact Page
- Customized the text and integrated a functional contact form using EmailJS:
- Created an email template.
- Linked form inputs to the email template to enable users to send me messages directly from the website.


### Technologies Used
- **Framework** : Next.js
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Email Service**: EmailJS





