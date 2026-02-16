export interface ExperienceItem {
  id: number;
  name: string;
  description: string;
  url: string | null;
  hasExternalLink: boolean;
  slug: string;
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
    name: "text cortext",
    description: "Automated content workflows, reducing manual review time by 60%.",
    url: "https://textcortext.com/",
    hasExternalLink: true,
    slug: "text-cortext",
  },
  {
    id: 2,
    name: "deeply",
    description: "Built AI-driven lead qualification pipelines for the sales team.",
    url: null,
    hasExternalLink: false,
    slug: "deeply",
  },
  {
    id: 3,
    name: "solcard",
    description: "Streamlined onboarding with automated KYC and document processing.",
    url: "https://landing.solcard.cc/",
    hasExternalLink: true,
    slug: "solcard",
  },
  {
    id: 4,
    name: "mody",
    description: "Designed automation systems for internal creative operations.",
    url: null,
    hasExternalLink: false,
    slug: "mody",
  },
  {
    id: 5,
    name: "21st",
    description: "Integrated AI tooling into the component design workflow.",
    url: "https://21st.dev/",
    hasExternalLink: true,
    slug: "21st",
  },
  {
    id: 6,
    name: "inbound",
    description: "Shipped automated outreach and CRM sync pipelines.",
    url: "https://inbound.new/",
    hasExternalLink: true,
    slug: "inbound",
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
  telegram: "https://t.me/preetsuthar",
  bookACall: "https://cal.com/preetsuthar",
  twitter: "https://x.com/preaboreal",
  github: "https://github.com/preetsuthar17",
};
