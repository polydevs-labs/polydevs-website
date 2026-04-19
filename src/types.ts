export type NavItem = { id: string; label: string; icon: string };

export type FocusArea = {
  title: string;
  description: string;
  bullets: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  image: string;
  github: string;
};

export type ContactLink = {
  label: string;
  href: string;
  icon: string;
};
