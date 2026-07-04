export interface Project {
    id: string;
    name: string;
    tagline: string;
    description: string;
    image: string;
    techStack: string[];
    liveLink: string;
    githubLink: string;
    challenges: string;
    futurePlans: string;
}

export interface SkillCategory {
    title: string;
    skills: { name: string; level: number; iconName: string }[];
}

export interface Education {
    degree: string;
    institution: string;
    duration: string;
    details: string;
}

export interface Experience {
    role: string;
    company: string;
    location: string;
    duration: string;
    description: string;
}
