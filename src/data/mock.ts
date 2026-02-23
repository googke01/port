export interface ExperienceItem {
  id: number;
  name: string;
  description: string;
  content: string;
  url: string | null;
  hasExternalLink: boolean;
  slug: string;
  role: string;
  duration: string;
}

export interface WritingItem {
  id: number;
  title: string;
  date: string;
  slug: string;
  content: string;
}

export interface ProjectItem {
  id: number;
  name: string;
  description: string;
  url: string;
}

export interface SocialLinks {
  telegram: string;
  bookACall: string;
  twitter: string;
  github: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    name: "LinkedIn Engagement Automation",
    description: "Built an intelligent LinkedIn automation system for a marketing media company founder managing 4 accounts. The system automatically identifies high-value posts, generates authentic comments matching the founder's voice, and routes them through an approval workflow. Result: 90% reduction in manual work (25 hours/week saved), 45% increase in engagement, and zero additional headcount. Delivered in 2 weeks.",
    role: "AI Automation Consultant",
    duration: "2 weeks",
    content: "The Problem\n\nA founder running a branding and marketing media company was drowning in LinkedIn engagement.\n\nManaging 4 company accounts meant:\n\n• Hours spent daily scrolling feeds\n\n• Manually crafting comments on dozens of posts\n\n• Zero time for strategic work\n\nScale LinkedIn presence without hiring or losing authenticity.\n\nHow I Solved It\n\n1. Built Smart Filtering\n\nAnalyzed the founder's engagement patterns to understand which posts and commenting styles worked best. Then created a system that automatically identifies high-value posts worth engaging with. No more endless scrolling.\n\n2. Engineered the Founder's Voice\n\nThe make-or-break piece: custom AI prompts that captured the founder's exact tone, insights, and brand positioning.\n\nResult: Comments identical to the founder's own writing.\n\n3. Added Human Oversight\n\nBuilt an approval workflow so the founder reviews AI-generated comments before they go live. Full control maintained.\n\nThe Impact\n\nThe founder now maintains a powerful LinkedIn presence that opens doors and builds valuable relationships without the time sink.\n\nBefore: 25 hours/week manually engaging → After: 90 minutes/week reviewing and approving\n\nOutcome: More engagement, better relationships, zero burnout.",
    url: null,
    hasExternalLink: false,
    slug: "linkedin-engagement-automation",
  },
];

export const writingData: WritingItem[] = [
  {
    id: 1,
    title: "Why most teams automate the wrong things",
    date: "Jan 31, 2026",
    slug: "automate-wrong-things",
    content:
      "Most teams jump straight to automating the loudest pain point — but that's rarely the right move.\n\nThe real wins come from mapping the entire workflow first. You need to see where time actually disappears: the 15-minute task done 40 times a week, the copy-paste between three tools, the status update that requires opening four tabs.\n\nI start every engagement by shadowing the team. Not asking what they want automated, but watching what they actually do. The gap between those two things is where the biggest opportunities live.\n\nOnce you find the right bottleneck, the automation itself is usually straightforward. The hard part is picking the right problem. Get that right, and the ROI speaks for itself.",
  },
  {
    id: 2,
    title: "My automation stack in 2026",
    date: "Jan 14, 2026",
    slug: "automation-stack",
    content:
      "Here's the stack I use to build automations for clients and my own projects.\n\nCore:\n• Make (Integromat) for multi-step workflow automation\n• n8n for self-hosted, complex pipelines\n• Zapier for quick client-facing integrations\n\nAI layer:\n• OpenAI API for text processing and classification\n• Claude for document analysis and summarization\n• Custom fine-tuned models for domain-specific tasks\n\nData & infra:\n• Supabase for real-time databases and auth\n• Airtable as a flexible data layer for non-technical teams\n• Retool for internal dashboards\n\nCommunication:\n• Telegram bots for alerts and quick actions\n• Slack integrations for team notifications",
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    name: "ikiform",
    description: "automated form builder with AI-powered response analysis.",
    url: "https://www.ikiform.com/",
  },
  {
    id: 2,
    name: "hextaui",
    description: "open-source UI components shipped with automation-first patterns.",
    url: "https://www.hextaui.com/",
  },
];

export const socialLinks: SocialLinks = {
  telegram: "https://www.linkedin.com/in/dhyanptl/",
  bookACall: "https://cal.com/dhyan.contact/30min",
  twitter: "https://x.com/preaboreal",
  github: "https://github.com/preetsuthar17",
};
