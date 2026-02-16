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
    name: "text cortext",
    description: "Automated content workflows, reducing manual review time by 60%.",
    role: "AI Automation Consultant",
    duration: "3 months",
    content: "TextCortex needed to scale their content review pipeline without scaling headcount. I mapped their existing workflow — writers submitted drafts, editors reviewed manually, and approvals went through Slack threads that nobody tracked.\n\nI built an automation layer using Make and the OpenAI API that pre-screened every draft for tone, grammar, and brand consistency before it hit an editor's desk. Drafts that passed the AI check went straight to a staging queue. Flagged drafts got inline suggestions sent back to the writer automatically.\n\nThe result: editorial review time dropped by 60%, and the team shipped 3x more content per week without adding a single person. The system also generated weekly quality reports so the content lead could spot trends in common mistakes.",
    url: "https://textcortext.com/",
    hasExternalLink: true,
    slug: "text-cortext",
  },
  {
    id: 2,
    name: "deeply",
    description: "Built AI-driven lead qualification pipelines for the sales team.",
    role: "Automation Engineer",
    duration: "2 months",
    content: "Deeply's sales team was drowning in unqualified leads. Every inbound form submission went into the same queue, and reps spent half their day figuring out which leads were worth calling.\n\nI designed a lead scoring pipeline using n8n that pulled form data, enriched it with Clearbit and LinkedIn data, and ran it through a custom GPT-based classifier. Leads got scored on fit, intent, and timing — then automatically routed to the right rep based on territory and deal size.\n\nHot leads triggered instant Slack notifications with a pre-written outreach draft. Cold leads went into a nurture sequence. The sales team went from 15% connect rates to 38% in the first month because they were only calling people who actually wanted to talk.",
    url: null,
    hasExternalLink: false,
    slug: "deeply",
  },
  {
    id: 3,
    name: "solcard",
    description: "Streamlined onboarding with automated KYC and document processing.",
    role: "AI Automation Consultant",
    duration: "4 months",
    content: "Solcard's user onboarding was a bottleneck. New users submitted ID documents and proof of address, then waited 24–48 hours for manual verification. Drop-off rates at this stage were over 40%.\n\nI built an automated KYC pipeline that used OCR to extract document data, cross-referenced it against verification APIs, and flagged edge cases for human review. Clean submissions got approved in under 2 minutes.\n\nThe document processing used Claude for intelligent extraction — it handled blurry photos, non-standard formats, and multilingual documents that traditional OCR choked on. I also built a Retool dashboard for the compliance team to review flagged cases with one-click approve/reject.\n\nOnboarding completion rates jumped from 58% to 87%, and the compliance team went from reviewing every submission to only handling the 12% that needed human judgment.",
    url: "https://landing.solcard.cc/",
    hasExternalLink: true,
    slug: "solcard",
  },
  {
    id: 4,
    name: "mody",
    description: "Designed automation systems for internal creative operations.",
    role: "Systems Designer",
    duration: "2 months",
    content: "Mody's creative team was using a patchwork of tools — Figma for design, Notion for briefs, Google Drive for assets, and email for approvals. Nothing talked to anything else, and projects regularly stalled because someone missed a handoff.\n\nI designed a unified automation layer that connected all their tools. When a brief was marked ready in Notion, it auto-created a Figma project from a template, notified the assigned designer, and set up the asset folder structure in Drive. When design was done, stakeholders got an approval request with embedded previews — no more downloading files and emailing feedback.\n\nI also built a creative asset tracker that logged every version, approval, and revision so the team could see exactly where every project stood at a glance. Project turnaround time dropped by 45%.",
    url: null,
    hasExternalLink: false,
    slug: "mody",
  },
  {
    id: 5,
    name: "21st",
    description: "Integrated AI tooling into the component design workflow.",
    role: "AI Integration Specialist",
    duration: "3 months",
    content: "21st.dev is a component library platform, and they wanted to use AI to accelerate how designers and developers discover and customize components.\n\nI integrated AI tooling at two levels. First, a natural language search that let users describe what they needed ('a pricing table with toggle and feature comparison') and get matched to the closest component. Second, an AI-powered customization layer that could modify component props, colors, and layout based on plain English instructions.\n\nUnder the hood, this used embeddings for semantic search across their component library and GPT-4 for interpreting customization requests and generating the right prop configurations. The system also learned from usage patterns — popular customizations got surfaced as presets.\n\nComponent discovery time went from browsing a catalog for 10 minutes to finding the right component in under 30 seconds.",
    url: "https://21st.dev/",
    hasExternalLink: true,
    slug: "21st",
  },
  {
    id: 6,
    name: "inbound",
    description: "Shipped automated outreach and CRM sync pipelines.",
    role: "Automation Architect",
    duration: "2 months",
    content: "Inbound needed their outreach to scale without feeling robotic. The challenge was syncing data across their CRM, email sequences, and LinkedIn outreach while keeping everything personalized.\n\nI built pipelines using Make that pulled prospect data from their CRM, enriched profiles with recent activity and company news, then generated personalized outreach using Claude. Each message referenced something specific — a recent blog post, a job listing, a product launch — so it felt hand-written.\n\nThe CRM sync ran bidirectionally: replies and engagement data flowed back automatically, updating lead scores and triggering follow-up sequences based on response sentiment. Positive replies got fast-tracked to a rep with full context. Neutral replies entered a different nurture cadence.\n\nOutbound response rates went from 3% to 11%, and the sales team saved roughly 20 hours per week on manual data entry and follow-ups.",
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
