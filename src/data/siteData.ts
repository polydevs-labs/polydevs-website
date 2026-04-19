import type { ContactLink, FocusArea, NavItem, TeamMember } from '../types';

export const navItems: NavItem[] = [
  { id: 'hero', label: 'Overview', icon: 'fas fa-home' },
  { id: 'research', label: 'Research', icon: 'fas fa-brain' },
  { id: 'quant', label: 'Quant', icon: 'fas fa-chart-line' },
  { id: 'pipeline', label: 'Pipeline', icon: 'fas fa-diagram-project' },
  { id: 'team', label: 'Team', icon: 'fas fa-users' },
  { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' }
];

export const researchFocus: FocusArea = {
  title: 'AI Cognitive Research',
  description:
    'We study reasoning, memory, and adaptive behavior in AI systems to make decision quality more reliable under real uncertainty.',
  bullets: ['Reasoning evaluation frameworks', 'Agentic workflow design', 'Memory-aware model systems']
};

export const quantFocus: FocusArea = {
  title: 'Quant Trading Systems',
  description:
    'We apply mathematical modeling and machine learning to build strategy research workflows that prioritize robustness over hype.',
  bullets: ['Signal research pipeline', 'Risk-aware strategy validation', 'Execution and monitoring architecture']
};

export const methodology: string[] = [
  'Hypothesis framing with measurable constraints',
  'Rapid prototyping against real failure modes',
  'Architecture decisions with operational trade-offs',
  'Delivery handoff with monitoring and governance guidance'
];

export const teamTracks: string[] = [
  'Cognitive AI Research',
  'Quant Strategy Research',
  'Systems Engineering',
  'Applied Mathematics',
  'MLOps & Reliability'
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Zang Vũ',
    role: 'Founder · Principal Research Architect',
    bio: 'Leads research direction across cognitive AI systems and quantitative modeling architecture.',
    skills: ['AI Systems', 'Applied Mathematics', 'Research Strategy'],
    image: 'https://avatars.githubusercontent.com/u/190599945?v=4'
  },
  {
    name: 'KnzkSer',
    role: 'Platform Engineering Lead',
    bio: 'Builds production-grade infrastructure that turns research artifacts into stable operational systems.',
    skills: ['Platform', 'Infrastructure', 'Reliability'],
    image: 'https://avatars.githubusercontent.com/u/115215544?v=4'
  },
  {
    name: 'Mina Trần',
    role: 'Research Scientist · Reasoning Systems',
    bio: 'Designs evaluation protocols for multi-step reasoning quality and uncertainty handling.',
    skills: ['Evaluation', 'Reasoning', 'Experiment Design'],
    image: 'https://i.pravatar.cc/240?img=20'
  },
  {
    name: 'An Phạm',
    role: 'Quant Research Engineer',
    bio: 'Builds signal discovery and risk-screening workflows across market regimes.',
    skills: ['Quant Models', 'Backtesting', 'Risk'],
    image: 'https://i.pravatar.cc/240?img=14'
  },
  {
    name: 'Linh Nguyễn',
    role: 'AI Infrastructure Engineer',
    bio: 'Turns research components into reproducible, monitored pipelines for production use.',
    skills: ['MLOps', 'Observability', 'Automation'],
    image: 'https://i.pravatar.cc/240?img=31'
  }
];

export const contactLinks: ContactLink[] = [
  { label: 'hello@polydevs.uk', href: 'mailto:hello@polydevs.uk', icon: 'fas fa-envelope' },
  { label: 'github.com/polydevs-uk', href: 'https://github.com/polydevs-uk', icon: 'fab fa-github' },
  { label: 'discord.polydevs.uk', href: 'https://discord.polydevs.uk', icon: 'fab fa-discord' }
];
