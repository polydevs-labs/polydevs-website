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
  title: 'Autonomous Cognitive AI',
  description:
    'We design and train natural-language AI systems that sustain coherent behavior over long-running interactions, with emphasis on adaptive reasoning, memory quality, and stable social dynamics.',
  bullets: ['Natural-language quality for modern user behavior', 'Long-horizon autonomous agent design', 'Cognitive and behavioral modeling frameworks']
};

export const quantFocus: FocusArea = {
  title: 'Quantitative Intelligence Systems',
  description:
    'We build decision-focused quant agents that combine advanced search, time-series forecasting, and reinforcement learning to improve precision while minimizing non-systematic bias.',
  bullets: ['Scenario-based opportunity search', 'Market bias estimation and validation', 'Adaptive execution and risk-aware learning loops']
};

export const methodology: string[] = [
  'Define behavioral objectives and measurable constraints before model scaling',
  'Train and evaluate language, reasoning, and consistency under long-horizon tasks',
  'Integrate cognition loops with robust infrastructure, monitoring, and fail-safe controls',
  'Deploy iteratively with stress tests, governance checkpoints, and production feedback'
];

export const teamTracks: string[] = [
  'Autonomous AI Design',
  'Natural Language Training',
  'Cognitive Systems Engineering',
  'Quantitative Agent Research',
  'Infrastructure and MLOps'
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Giang T. Vu',
    role: 'Core AI & Infrastructure Lead',
    bio: 'Leads end-to-end AI architecture, training direction, and infrastructure execution across all core initiatives.',
    skills: ['Machine Intelligence', 'Cognitive Science', 'Quantitative Systems', 'Applied Mathematics', 'Optimization', 'Computational Finance'],
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 240'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%2320222b'/><stop offset='100%' stop-color='%23323a52'/></linearGradient></defs><rect width='240' height='240' fill='url(%23g)'/><circle cx='74' cy='88' r='48' fill='%23f29a66' fill-opacity='0.82'/><circle cx='162' cy='148' r='56' fill='%23798cff' fill-opacity='0.7'/><path d='M28 170c32-24 62-19 96 5 24 17 52 26 88 20v45H28z' fill='%23ffffff' fill-opacity='0.14'/></svg>",
    github: 'https://github.com/zvwgvx'
  },
  {
    name: 'Svyatopolk Ieronimovich',
    role: 'Security, DevOps & Backend Engineer',
    bio: 'Leads cybersecurity, DevOps operations, backend services, and system-level testing to ensure stable and secure delivery.',
    skills: ['Cybersecurity', 'DevOps', 'Backend Systems', 'System Testing'],
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 240'><defs><linearGradient id='g2' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%231b2434'/><stop offset='100%' stop-color='%2328374e'/></linearGradient></defs><rect width='240' height='240' fill='url(%23g2)'/><circle cx='166' cy='72' r='44' fill='%23f29a66' fill-opacity='0.85'/><circle cx='86' cy='146' r='62' fill='%237ea1ff' fill-opacity='0.72'/><path d='M18 188c40-18 84-14 118 8 26 17 50 21 86 16v28H18z' fill='%23ffffff' fill-opacity='0.16'/></svg>",
    github: 'https://github.com/svyatopolk'
  },
  {
    name: 'Kien T. Nguyen',
    role: 'Data Scientist',
    bio: 'Builds data pipelines, modeling workflows, and evaluation frameworks to turn research hypotheses into measurable outcomes.',
    skills: ['Data Science', 'Statistical Modeling', 'Feature Engineering', 'Experiment Analysis'],
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 240'><defs><linearGradient id='g3' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%231f2f46'/><stop offset='100%' stop-color='%23415f8f'/></linearGradient></defs><rect width='240' height='240' fill='url(%23g3)'/><circle cx='72' cy='82' r='42' fill='%23f0a36f' fill-opacity='0.86'/><circle cx='162' cy='154' r='60' fill='%2398b4ff' fill-opacity='0.68'/><path d='M14 178c44-20 88-10 122 12 20 14 44 20 90 14v36H14z' fill='%23ffffff' fill-opacity='0.15'/></svg>",
    github: 'https://github.com/chieukhonggianthu8-commits'
  }
];

export const contactLinks: ContactLink[] = [
  { label: 'contact@polydevs.org', href: 'mailto:contact@polydevs.org', icon: 'fas fa-envelope' },
  { label: 'github.com/polydevs-labs', href: 'https://github.com/polydevs-labs', icon: 'fab fa-github' },
  { label: 'discord.polydevs.org', href: 'https://discord.polydevs.org', icon: 'fab fa-discord' }
];
