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
  category: string;
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

export const experienceCategories = [
  "AI Agents",
  "Lead Generation & Outreach",
  "Client & Business Operations",
  "Content & Social Media",
];

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    name: "AI Appointment Booking Agent",
    description: "A WhatsApp AI agent that handles the entire booking process through natural conversation. No forms, no back and forth, no human needed.",
    role: "AI Automation Consultant",
    duration: "Ongoing",
    category: "AI Agents",
    content: "The Problem\n\nService businesses lose a ridiculous amount of time just trying to schedule meetings. Someone messages you, you reply, they go quiet, you follow up, they suggest a time that doesn't work. It goes on forever. And if you're busy, leads just fall off.\n\nHow I Solved It\n\nBuilt a WhatsApp agent that understands what the person needs, checks real time availability, picks the right slot, and confirms the booking directly in the chat. It also handles rescheduling and sends reminders automatically.\n\nThe Impact\n\nThe entire booking process runs without anyone touching it. Clients book themselves, the calendar fills up, and the business owner is free to focus on actual work.",
    url: null,
    hasExternalLink: false,
    slug: "ai-appointment-booking-agent",
  },
  {
    id: 2,
    name: "Real Estate WhatsApp AI Agent",
    description: "A 24/7 AI agent on WhatsApp built specifically for real estate businesses to handle leads, answer questions, and book site visits automatically.",
    role: "AI Automation Consultant",
    duration: "Ongoing",
    category: "AI Agents",
    content: "The Problem\n\nReal estate leads do not wait. Someone interested at 11pm will message three agents and go with whoever responds first. Most agents miss that window completely because they are asleep, on another call, or just too busy.\n\nHow I Solved It\n\nBuilt a WhatsApp agent trained on the business's properties, pricing, and FAQs. It engages the lead immediately, asks the right qualifying questions, answers property queries, and books site visits directly into the agent's calendar.\n\nThe Impact\n\nLeads get a response in seconds no matter what time it is. Agents wake up to qualified prospects and scheduled visits instead of missed opportunities.",
    url: null,
    hasExternalLink: false,
    slug: "real-estate-whatsapp-ai-agent",
  },
  {
    id: 3,
    name: "AI Customer Support Agent",
    description: "A custom AI agent that handles customer support without a support team behind it.",
    role: "AI Automation Consultant",
    duration: "Ongoing",
    category: "AI Agents",
    content: "The Problem\n\nSmall businesses and agencies lose customers to slow replies but cannot afford to hire a full support team. So either the founder is answering the same questions all day, or customers are waiting too long and leaving.\n\nHow I Solved It\n\nBuilt an AI agent trained on the business's products, common questions, tone, and processes. It handles the majority of incoming queries on its own and only passes things to a human when it genuinely needs to.\n\nThe Impact\n\nMost support queries get resolved instantly without any human involvement. Response times go from hours to seconds and the team stops getting buried in repetitive questions.",
    url: null,
    hasExternalLink: false,
    slug: "ai-customer-support-agent",
  },
  {
    id: 4,
    name: "LinkedIn Lead Scraper",
    description: "An automated system that finds and exports a list of ideal clients from LinkedIn every day without anyone doing it manually.",
    role: "AI Automation Consultant",
    duration: "Ongoing",
    category: "Lead Generation & Outreach",
    content: "The Problem\n\nFinding the right people on LinkedIn takes forever when you do it by hand. You filter, scroll, check profiles, copy paste into a sheet, and by the time you have 20 leads you have wasted half your morning.\n\nHow I Solved It\n\nBuilt an automation that runs targeted searches based on role, industry, location, and company size. It pulls the right profiles, filters out irrelevant ones, and drops everything into a CRM or spreadsheet ready for outreach.\n\nThe Impact\n\nA fresh targeted lead list ready every single day. No manual searching, no wasted mornings, just a pipeline that keeps filling itself.",
    url: null,
    hasExternalLink: false,
    slug: "linkedin-lead-scraper",
  },
  {
    id: 5,
    name: "Client Onboarding Automation",
    description: "A fully automated onboarding system that kicks in the moment a client signs and handles everything that normally gets done manually.",
    role: "AI Automation Consultant",
    duration: "Ongoing",
    category: "Client & Business Operations",
    content: "The Problem\n\nMost agencies and freelancers onboard clients by hand. Send the welcome email, set up the project folder, notify the team, send the contract. It takes time, things get missed, and the client's first experience with you feels slow and messy.\n\nHow I Solved It\n\nBuilt a workflow triggered by a form submission or contract signature. From that single trigger it sends the welcome email, delivers contracts and NDAs, sets up the project workspace, and notifies everyone internally. All of it done before the client even finishes their coffee.\n\nThe Impact\n\nOnboarding goes from a two day back and forth process to something that completes itself in minutes. Clients immediately feel like they are working with a serious, organised operation.",
    url: null,
    hasExternalLink: false,
    slug: "client-onboarding-automation",
  },
  {
    id: 6,
    name: "Automated Invoice & Contract Sender",
    description: "A system that generates, sends, and follows up on invoices and contracts automatically based on project details.",
    role: "AI Automation Consultant",
    duration: "Ongoing",
    category: "Client & Business Operations",
    content: "The Problem\n\nChasing invoices and sending contracts manually is one of those things that eats hours every week without feeling like real work. And when you forget to follow up, you end up waiting weeks to get paid.\n\nHow I Solved It\n\nBuilt an automation that generates the right invoice or contract based on the project, sends it directly to the client, and follows up automatically if they have not acted on it within a set number of days.\n\nThe Impact\n\nNo more manual paperwork, no more awkward payment chasing. Everything goes out on time and follows up on its own.",
    url: null,
    hasExternalLink: false,
    slug: "automated-invoice-contract-sender",
  },
  {
    id: 7,
    name: "LinkedIn Post Writer",
    description: "An AI workflow that takes a topic, researches it properly, and writes a fully formatted LinkedIn post ready to publish.",
    role: "AI Automation Consultant",
    duration: "Ongoing",
    category: "Content & Social Media",
    content: "The Problem\n\nWriting good LinkedIn posts consistently takes real time. Most founders and consultants either post randomly when they find time or outsource it and get generic content that sounds nothing like them.\n\nHow I Solved It\n\nBuilt a workflow where you drop in a topic and the system does a deep research pass, pulls relevant insights, and drafts a post with a strong hook, clean formatting, and a clear call to action. It is written to match a specific voice so it does not feel like it came from a robot.\n\nThe Impact\n\nConsistent quality content without sitting down to write it. The personal brand stays active even during the busiest weeks.",
    url: null,
    hasExternalLink: false,
    slug: "linkedin-post-writer",
  },
  {
    id: 8,
    name: "Social Media Automation Suite",
    description: "A content distribution system that takes one post or blog and publishes it across LinkedIn, Instagram, and X automatically.",
    role: "AI Automation Consultant",
    duration: "Ongoing",
    category: "Content & Social Media",
    content: "The Problem\n\nPosting consistently across multiple platforms is genuinely exhausting. Most businesses either stick to one platform or spend hours reformatting the same content for each one.\n\nHow I Solved It\n\nBuilt a suite that takes a single input, reformats it for each platform, schedules it at the right times, auto-replies to LinkedIn comments, and handles blog to post conversion as part of the same pipeline.\n\nThe Impact\n\nOne piece of content. Multiple platforms covered. A consistent presence without the daily manual effort.",
    url: null,
    hasExternalLink: false,
    slug: "social-media-automation-suite",
  },
  {
    id: 9,
    name: "LinkedIn Viral Post Analyzer",
    description: "An automation that scrapes any LinkedIn profile's top performing posts and produces a structured report on what is actually working.",
    role: "AI Automation Consultant",
    duration: "Ongoing",
    category: "Content & Social Media",
    content: "The Problem\n\nMost LinkedIn creators post based on gut feeling and hope. They have no idea which types of posts actually perform, what hooks work best, or what their audience responds to. So they keep guessing.\n\nHow I Solved It\n\nBuilt a system that pulls the highest performing posts from any profile, analyzes patterns across hooks, format, post length, and topics, and generates a clean report that shows exactly what is driving the engagement.\n\nThe Impact\n\nYou stop guessing and start knowing. Every post you write from that point is backed by real data from what has already worked.",
    url: null,
    hasExternalLink: false,
    slug: "linkedin-viral-post-analyzer",
  },
  {
    id: 10,
    name: "LinkedIn Engagement Automation",
    description: "Built an intelligent LinkedIn automation system for a marketing media company founder managing 4 accounts. The system automatically identifies high-value posts, generates authentic comments matching the founder's voice, and routes them through an approval workflow. Result: 90% reduction in manual work (25 hours/week saved), 45% increase in engagement, and zero additional headcount. Delivered in 2 weeks.",
    role: "AI Automation Consultant",
    duration: "2 weeks",
    category: "Content & Social Media",
    content: "The Problem\n\nA founder running a branding and marketing media company was drowning in LinkedIn engagement.\n\nManaging 4 company accounts meant:\n\n• Hours spent daily scrolling feeds\n\n• Manually crafting comments on dozens of posts\n\n• Zero time for strategic work\n\nScale LinkedIn presence without hiring or losing authenticity.\n\nHow I Solved It\n\n1. Built Smart Filtering\n\nAnalyzed the founder's engagement patterns to understand which posts and commenting styles worked best. Then created a system that automatically identifies high-value posts worth engaging with. No more endless scrolling.\n\n2. Engineered the Founder's Voice\n\nThe make-or-break piece: custom AI prompts that captured the founder's exact tone, insights, and brand positioning.\n\nResult: Comments identical to the founder's own writing.\n\n3. Added Human Oversight\n\nBuilt an approval workflow so the founder reviews AI-generated comments before they go live. Full control maintained.\n\nThe Impact\n\nThe founder now maintains a powerful LinkedIn presence that opens doors and builds valuable relationships without the time sink.\n\nBefore: 25 hours/week manually engaging → After: 90 minutes/week reviewing and approving\n\nOutcome: More engagement, better relationships, zero burnout.",
    url: null,
    hasExternalLink: false,
    slug: "linkedin-engagement-automation",
  },
  {
    id: 11,
    name: "YouTube / Podcast to Shorts & Reels",
    description: "An automated pipeline that turns long form video or audio into short form clips ready to post.",
    role: "AI Automation Consultant",
    duration: "Ongoing",
    category: "Content & Social Media",
    content: "The Problem\n\nCreators record hours of valuable content that barely gets seen because long form does not perform on short form platforms. Editing clips manually is slow and hiring an editor for this is expensive.\n\nHow I Solved It\n\nBuilt a pipeline that takes a YouTube video or podcast episode, finds the most valuable moments, adds captions, formats everything for vertical video, and outputs clips that are ready to post with no manual editing.\n\nThe Impact\n\n10x the content output from the same recording. Long form content finally reaches short form audiences without any extra work.",
    url: null,
    hasExternalLink: false,
    slug: "youtube-podcast-to-shorts-reels",
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
