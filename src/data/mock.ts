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
    duration: "",
    category: "AI Agents",
    content: "A WhatsApp AI agent that handles the entire booking process through natural conversation. No forms, no back and forth, no human needed.\n\nThe Problem\n\nService businesses lose a ridiculous amount of time just trying to schedule meetings. Someone messages you, you reply, they go quiet, you follow up, they suggest a time that doesn't work. It goes on forever. And if you're busy, leads just fall off.\n\n• Hours wasted in back-and-forth scheduling\n• Leads dropping off due to slow response times\n• No scalable way to handle booking volume\n\nHow I Solved It\n\n1. Built Conversational Booking Flow\n\nDesigned a WhatsApp agent that understands what the person needs through natural language. No forms, no links, just a conversation.\n\n2. Real-Time Calendar Integration\n\nConnected the agent to live calendar availability so it picks the right slot and confirms the booking directly in the chat.\n\n3. Automated Follow-Ups\n\nAdded automatic rescheduling handling and reminder sequences so no-shows drop significantly.\n\nThe Impact\n\nThe entire booking process now runs without anyone touching it.\n\nBefore: Manual scheduling taking 3-5 messages per booking → After: Fully automated booking in under 60 seconds\n\nOutcome: Clients book themselves, the calendar fills up, and the business owner focuses on actual work.",
    url: null,
    hasExternalLink: false,
    slug: "ai-appointment-booking-agent",
  },
  {
    id: 2,
    name: "Real Estate WhatsApp AI Agent",
    description: "A 24/7 AI agent on WhatsApp built specifically for real estate businesses to handle leads, answer questions, and book site visits automatically.",
    role: "AI Automation Consultant",
    duration: "",
    category: "AI Agents",
    content: "A 24/7 AI agent on WhatsApp built specifically for real estate businesses to handle leads, answer questions, and book site visits automatically.\n\nThe Problem\n\nReal estate leads do not wait. Someone interested at 11pm will message three agents and go with whoever responds first. Most agents miss that window completely.\n\n• Leads lost to competitors due to slow response\n• Agents overwhelmed managing inquiries across hours\n• No consistent qualification process\n\nHow I Solved It\n\n1. Property Knowledge Base\n\nTrained the agent on the business's full property portfolio, pricing, layouts, and FAQs so it answers accurately every time.\n\n2. Lead Qualification Engine\n\nBuilt smart qualifying questions into the conversation flow (budget, timeline, location preferences) so only serious leads get through.\n\n3. Automated Site Visit Booking\n\nConnected directly to the agent's calendar to book site visits without any human involvement.\n\nThe Impact\n\nLeads get a response in seconds no matter what time it is.\n\nBefore: 2-4 hour average response time, 40% lead drop-off → After: Instant responses 24/7, leads qualified and visits booked automatically\n\nOutcome: Agents wake up to qualified prospects and scheduled visits instead of missed opportunities.",
    url: null,
    hasExternalLink: false,
    slug: "real-estate-whatsapp-ai-agent",
  },
  {
    id: 3,
    name: "AI Customer Support Agent",
    description: "A custom AI agent that handles customer support without a support team behind it.",
    role: "AI Automation Consultant",
    duration: "",
    category: "AI Agents",
    content: "A custom AI agent that handles customer support queries instantly, without a support team behind it.\n\nThe Problem\n\nSmall businesses and agencies lose customers to slow replies but cannot afford to hire a full support team.\n\n• Founders buried answering the same questions all day\n• Customers leaving due to slow response times\n• No budget for dedicated support staff\n\nHow I Solved It\n\n1. Custom Knowledge Training\n\nTrained the agent on the business's products, common questions, tone, and internal processes so responses feel authentic.\n\n2. Smart Escalation Logic\n\nBuilt a handoff system that only passes conversations to a human when the AI genuinely cannot resolve the issue.\n\n3. Continuous Learning Loop\n\nAdded feedback tracking so the agent improves over time based on real interactions.\n\nThe Impact\n\nMost support queries get resolved instantly without any human involvement.\n\nBefore: Hours-long response times, repetitive manual replies → After: Instant AI-powered responses, 80% of queries resolved automatically\n\nOutcome: Response times go from hours to seconds and the team stops getting buried in repetitive questions.",
    url: null,
    hasExternalLink: false,
    slug: "ai-customer-support-agent",
  },
  {
    id: 4,
    name: "LinkedIn Lead Scraper",
    description: "An automated system that finds and exports a list of ideal clients from LinkedIn every day without anyone doing it manually.",
    role: "AI Automation Consultant",
    duration: "",
    category: "Lead Generation & Outreach",
    content: "An automated system that finds and exports a fresh list of ideal clients from LinkedIn every single day, without anyone doing it manually.\n\nThe Problem\n\nFinding the right people on LinkedIn takes forever when you do it by hand.\n\n• Endless scrolling and filtering through profiles\n• Copy-pasting leads into spreadsheets manually\n• Half the morning gone before outreach even starts\n\nHow I Solved It\n\n1. Smart Search Automation\n\nBuilt targeted searches based on role, industry, location, and company size that run automatically on a daily schedule.\n\n2. Intelligent Filtering\n\nAdded filters to remove irrelevant profiles, duplicates, and already-contacted leads before they hit the list.\n\n3. CRM Integration\n\nPiped everything directly into the CRM or spreadsheet, tagged and ready for outreach.\n\nThe Impact\n\nA fresh targeted lead list ready every single day with zero manual effort.\n\nBefore: 2-3 hours/day manually scraping 20-30 leads → After: Hundreds of qualified leads delivered automatically every morning\n\nOutcome: No manual searching, no wasted mornings. Just a pipeline that keeps filling itself.",
    url: null,
    hasExternalLink: false,
    slug: "linkedin-lead-scraper",
  },
  {
    id: 5,
    name: "Client Onboarding Automation",
    description: "A fully automated onboarding system that kicks in the moment a client signs and handles everything that normally gets done manually.",
    role: "AI Automation Consultant",
    duration: "",
    category: "Client & Business Operations",
    content: "A fully automated onboarding system that kicks in the moment a client signs, handling everything that normally gets done manually.\n\nThe Problem\n\nMost agencies and freelancers onboard clients by hand. It takes time, things get missed, and the client's first experience feels slow.\n\n• Welcome emails sent late or forgotten\n• Project folders set up inconsistently\n• Team not notified about new clients\n• Contracts and NDAs delayed\n\nHow I Solved It\n\n1. Single Trigger Workflow\n\nBuilt a workflow triggered by a form submission or contract signature that kicks off the entire onboarding sequence.\n\n2. Automated Document Delivery\n\nWelcome emails, contracts, and NDAs go out instantly without anyone pressing send.\n\n3. Internal Team Notifications\n\nThe right team members get notified with all project details immediately.\n\nThe Impact\n\nOnboarding goes from a multi-day process to something that completes itself in minutes.\n\nBefore: 2-day manual onboarding with missed steps → After: Fully automated onboarding completed in under 5 minutes\n\nOutcome: Clients immediately feel like they are working with a serious, organised operation.",
    url: null,
    hasExternalLink: false,
    slug: "client-onboarding-automation",
  },
  {
    id: 6,
    name: "Automated Invoice & Contract Sender",
    description: "A system that generates, sends, and follows up on invoices and contracts automatically based on project details.",
    role: "AI Automation Consultant",
    duration: "",
    category: "Client & Business Operations",
    content: "A system that generates, sends, and follows up on invoices and contracts automatically, based on project details.\n\nThe Problem\n\nChasing invoices and sending contracts manually eats hours every week without feeling like real work.\n\n• Invoices sent late or forgotten entirely\n• Awkward manual follow-ups for overdue payments\n• Contracts sitting in drafts instead of reaching clients\n\nHow I Solved It\n\n1. Auto-Generation Engine\n\nBuilt a system that generates the correct invoice or contract based on project type, scope, and pricing automatically.\n\n2. Scheduled Delivery\n\nDocuments go out to the client immediately upon trigger. No manual sending required.\n\n3. Smart Follow-Up Sequences\n\nIf a client hasn't acted within a set number of days, the system follows up automatically with escalating reminders.\n\nThe Impact\n\nNo more manual paperwork, no more awkward payment chasing.\n\nBefore: 3-5 hours/week on invoicing and follow-ups → After: Fully automated with zero manual intervention\n\nOutcome: Everything goes out on time and follows up on its own.",
    url: null,
    hasExternalLink: false,
    slug: "automated-invoice-contract-sender",
  },
  {
    id: 7,
    name: "LinkedIn Post Writer",
    description: "An AI workflow that takes a topic, researches it properly, and writes a fully formatted LinkedIn post ready to publish.",
    role: "AI Automation Consultant",
    duration: "",
    category: "Content & Social Media",
    content: "An AI workflow that takes a topic, does deep research, and writes a fully formatted LinkedIn post ready to publish.\n\nThe Problem\n\nWriting good LinkedIn posts consistently takes real time. Most founders either post randomly or outsource it and get generic content.\n\n• Inconsistent posting schedule hurting visibility\n• Hours spent writing a single post\n• Outsourced content that sounds nothing like you\n\nHow I Solved It\n\n1. Deep Research Pipeline\n\nBuilt a system that takes a topic and runs a thorough research pass, pulling relevant insights, data, and angles.\n\n2. Voice-Matched Writing\n\nEngineered prompts that capture the founder's exact tone, vocabulary, and positioning so every post sounds authentic.\n\n3. Ready-to-Publish Output\n\nPosts come out with a strong hook, clean formatting, and a clear call to action. No editing needed.\n\nThe Impact\n\nConsistent quality content without sitting down to write it.\n\nBefore: 1-2 hours per post, inconsistent schedule → After: Research-backed posts generated in minutes, ready to publish daily\n\nOutcome: The personal brand stays active even during the busiest weeks.",
    url: null,
    hasExternalLink: false,
    slug: "linkedin-post-writer",
  },
  {
    id: 8,
    name: "Social Media Automation Suite",
    description: "A content distribution system that takes one post or blog and publishes it across LinkedIn, Instagram, and X automatically.",
    role: "AI Automation Consultant",
    duration: "",
    category: "Content & Social Media",
    content: "A content distribution system that takes one post or blog and publishes it across LinkedIn, Instagram, and X automatically.\n\nThe Problem\n\nPosting consistently across multiple platforms is genuinely exhausting.\n\n• Hours spent reformatting the same content for each platform\n• Inconsistent posting across channels\n• Most businesses stick to one platform and ignore the rest\n\nHow I Solved It\n\n1. Cross-Platform Reformatting\n\nBuilt a suite that takes a single input and reformats it for each platform's requirements: tone, length, hashtags, and format.\n\n2. Smart Scheduling\n\nSchedules posts at optimal times for each platform based on audience engagement data.\n\n3. Engagement Automation\n\nAuto-replies to LinkedIn comments and handles blog-to-post conversion as part of the same pipeline.\n\nThe Impact\n\nOne piece of content. Multiple platforms covered.\n\nBefore: 4-5 hours/week manually posting across 3 platforms → After: Single input, all platforms published automatically\n\nOutcome: A consistent presence without the daily manual effort.",
    url: null,
    hasExternalLink: false,
    slug: "social-media-automation-suite",
  },
  {
    id: 9,
    name: "LinkedIn Viral Post Analyzer",
    description: "An automation that scrapes any LinkedIn profile's top performing posts and produces a structured report on what is actually working.",
    role: "AI Automation Consultant",
    duration: "",
    category: "Content & Social Media",
    content: "An automation that scrapes any LinkedIn profile's top performing posts and produces a structured report on what is actually working.\n\nThe Problem\n\nMost LinkedIn creators post based on gut feeling and hope. They have no idea what actually performs.\n\n• No visibility into which post types drive engagement\n• Content strategy based on guesswork\n• Wasted effort on formats that don't resonate\n\nHow I Solved It\n\n1. Performance Scraping\n\nBuilt a system that pulls the highest performing posts from any LinkedIn profile automatically.\n\n2. Pattern Analysis Engine\n\nAnalyzes patterns across hooks, format, post length, topics, and engagement metrics to identify what's driving results.\n\n3. Actionable Report Generation\n\nGenerates a clean, structured report that shows exactly what is working and why, with specific recommendations.\n\nThe Impact\n\nYou stop guessing and start knowing.\n\nBefore: Content strategy based on gut feeling with inconsistent results → After: Data-backed content decisions with clear performance patterns identified\n\nOutcome: Every post you write from that point is backed by real data from what has already worked.",
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
    content: "Built an intelligent LinkedIn automation system for a marketing media company founder managing 4 accounts. The system automatically identifies high-value posts, generates authentic comments, and routes them through an approval workflow.\n\nThe Problem\n\nA founder running a branding and marketing media company was drowning in LinkedIn engagement.\n\nManaging 4 company accounts meant:\n\n• Hours spent daily scrolling feeds\n\n• Manually crafting comments on dozens of posts\n\n• Zero time for strategic work\n\nScale LinkedIn presence without hiring or losing authenticity.\n\nHow I Solved It\n\n1. Built Smart Filtering\n\nAnalyzed the founder's engagement patterns to understand which posts and commenting styles worked best. Then created a system that automatically identifies high-value posts worth engaging with. No more endless scrolling.\n\n2. Engineered the Founder's Voice\n\nThe make-or-break piece: custom AI prompts that captured the founder's exact tone, insights, and brand positioning.\n\nResult: Comments identical to the founder's own writing.\n\n3. Added Human Oversight\n\nBuilt an approval workflow so the founder reviews AI-generated comments before they go live. Full control maintained.\n\nThe Impact\n\nThe founder now maintains a powerful LinkedIn presence that opens doors and builds valuable relationships without the time sink.\n\nBefore: 25 hours/week manually engaging → After: 90 minutes/week reviewing and approving\n\nOutcome: More engagement, better relationships, zero burnout.",
    url: null,
    hasExternalLink: false,
    slug: "linkedin-engagement-automation",
  },
  {
    id: 11,
    name: "YouTube / Podcast to Shorts & Reels",
    description: "An automated pipeline that turns long form video or audio into short form clips ready to post.",
    role: "AI Automation Consultant",
    duration: "",
    category: "Content & Social Media",
    content: "An automated pipeline that turns long form video or audio into short form clips, ready to post on YouTube Shorts, Instagram Reels, and TikTok.\n\nThe Problem\n\nCreators record hours of valuable content that barely gets seen because long form does not perform on short form platforms.\n\n• Manual clip editing is slow and expensive\n• Hiring an editor just for repurposing isn't cost-effective\n• Valuable content trapped in long-form format\n\nHow I Solved It\n\n1. Intelligent Moment Detection\n\nBuilt a pipeline that analyzes the full recording and identifies the most valuable, engaging moments automatically.\n\n2. Auto-Formatting Engine\n\nAdds captions, formats everything for vertical video, and adjusts aspect ratios for each platform.\n\n3. Ready-to-Post Output\n\nClips come out fully formatted and ready to upload. No manual editing required.\n\nThe Impact\n\n10x the content output from the same recording.\n\nBefore: 1 long-form video = 1 piece of content → After: 1 recording = 10+ short-form clips across all platforms\n\nOutcome: Long form content finally reaches short form audiences without any extra work.",
    url: null,
    hasExternalLink: false,
    slug: "youtube-podcast-to-shorts-reels",
  },
];

export const processSteps = [
  {
    heading: "Discovery Call",
    text: "We talk about your business, your biggest bottlenecks, and what you actually want fixed. You do not need to know anything about automation. That is my job.",
  },
  {
    heading: "Deep Dive",
    text: "I study how your team works, where time is being lost, and what a real solution looks like for your specific situation. Not a template. Yours.",
  },
  {
    heading: "Proposal",
    text: "You get a clear breakdown of what I will build, the timeline, and the cost. No vague scope, no surprises later.",
  },
  {
    heading: "Contract and Kickoff",
    text: "We sign, you pay 50% upfront, and the build starts. Simple.",
  },
  {
    heading: "Build",
    text: "I build and keep you updated. You will always know where things stand without needing to chase me.",
  },
  {
    heading: "Testing",
    text: "Everything gets tested against real scenarios before it goes anywhere near your actual business.",
  },
  {
    heading: "Deployment",
    text: "Goes live. I walk you through it so you know exactly what is running and why.",
  },
  {
    heading: "Monthly Retainer (Optional)",
    text: "Your business changes. Your automations should keep up. Monthly audits and maintenance to make sure everything keeps running the way it should.",
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
