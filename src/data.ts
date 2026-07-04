import type { Project, SkillCategory, Education, Experience } from "./types";

export const PERSONAL_INFO = {
    name: "Md. Imran Ali",
    title: "Full Stack Developer",
    location: "Narayanganj, Dhaka, Bangladesh",
    email: "md.imranali2046@gmail.com",
    phone: "+880 1961698247",
    whatsapp: "https://wa.me/8801961698247",
    twitter: "",
    github: "https://github.com/IGNIT3-xD",
    linkedin: "https://www.linkedin.com/in/imran-ali-mern",
    facebook: "https://www.facebook.com/IGNIT3",
    resumeUrl: "https://drive.google.com/file/d/1BfL0g39E0kG_K4g9gW3FvIun06_g2K6H/view?usp=sharing",
    avatar: "avatar.png",
    about: {
        journey: "My programming journey began in 2021 when I wrote my first line of Python. Seeing immediate visual results on screen captivated me. Over the past few years, I have specialized in the Javascript/Typescript ecosystem, with a deep focus on crafting elegant, interactive frontend interfaces and solid backend architectures.",
        enjoyment: "I thoroughly enjoy bridging the gap between high-fidelity visual design and high-performance engineering. Building fluid web animations with Framer Motion and engineering and e-commerce systems are my absolute favorite sweet spots. I strive for accessibility, responsiveness, and absolute semantic perfection in every pixel I ship.",
        hobbies: "Outside of writing clean code, you can find me playing games on PC, walking outside during golden hours, or watching movies. I believe a healthy, well-rounded perspective feeds creative engineering."
    }
};

export const EDUCATION_DATA: Education[] = [
    {
        degree: "Bachelor of Science in Computer Science & Engineering (B.Sc. CSE)",
        institution: "University Of Scholars",
        duration: "2024 - Dropout",
        details: "Studied core Computer Science subjects including Software Engineering, Database Management Systems, and Human-Computer Interaction. Gained practical experience in web development and software design before discontinuing the program."
    }
];

export const EXPERIENCE_DATA: Experience[] = [
    {
        role: "Shopify Developer",
        company: "Softvence Agency",
        location: "Dhaka, Bangladesh",
        duration: "5 Months",
        description: "Developed and customized premium high-converting Shopify storefronts using Liquid and Javascript. Designed custom section components, 99% setisfaction rate for clients. Collaborated in a fast-paced agency environment with designers and marketing strategists."
    }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: "Frontend Development",
        skills: [
            { name: "React", level: 90, iconName: "React" },
            { name: "Next.js", level: 85, iconName: "Next" },
            { name: "TypeScript", level: 85, iconName: "TypeScript" },
            { name: "JavaScript", level: 85, iconName: "JavaScript" },
            { name: "Tailwind CSS", level: 95, iconName: "Tailwind" },
            { name: "HTML5 & CSS3", level: 95, iconName: "HTML" }
        ]
    },
    {
        title: "Backend & Databases",
        skills: [
            { name: "Node.js & Express", level: 80, iconName: "Node" },
            { name: "MongoDB", level: 78, iconName: "Database" },
            { name: "PostgreSQL", level: 75, iconName: "Database" },
            { name: "Prisma ORM", level: 82, iconName: "Code" },
            { name: "JWT Authentication", level: 88, iconName: "Shield" }
        ]
    },
    {
        title: "E-Commerce & Tools",
        skills: [
            { name: "Shopify", level: 92, iconName: "ShoppingBag" },
            { name: "Liquid Template Engine", level: 90, iconName: "Code" },
            { name: "Git & GitHub", level: 88, iconName: "Git" },
            { name: "Figma", level: 82, iconName: "Figma" },
            { name: "Vercel", level: 82, iconName: "Vercel" },
        ]
    }
];

export const PROJECTS_DATA: Project[] = [
    {
        id: "e-TuitionBD",
        name: "e-TuitionBD - Find Tutors Online",
        tagline: "Ultra-fast Next.js store integrated with Shopify Storefront API.",
        description: "e-TuitionBD is a comprehensive online marketplace built to solve the difficulty of finding reliable, skilled home and online tutors in major cities. The platform serves two primary user roles: Guardians/Students seeking tuition and Tutors looking for assignments.",
        image: "etuition.png",
        techStack: ["React", "Tailwind CSS", "Node / Express.js", "MongoDB", "Firebase Auth"],
        liveLink: "https://etuitionbd-13475.web.app/",
        githubLink: "https://github.com/IGNIT3-xD/eTuitionBd",
        challenges: "User Authentication: Secure sign-up/login for Tutors and Students. Detailed Tutor Profiles: Including academic background, subjects, areas of expertise, and expected salary. Advanced Search & Filtering: Allows guardians to filter tutors by area, class, subject & locations. Application System: Tutors can view and apply for open tuition jobs posted by guardians. Admin Dashboard: For verification of tutors, job moderation, and overall site management.",
        futurePlans: "Introduce live chat feature."
    },
    {
        id: "Warmpaws",
        name: "WarmPaws – Pet Care Services",
        tagline: "A comprehensive online pet care services provider arround the city.",
        description: "A cozy winter companion platform for pet owners to ensure their furry friends stay warm, safe, and healthy during the cold season.",
        image: "warmpaws.png",
        techStack: ["React", "Tailwind CSS"],
        liveLink: "https://warmpaws-assignment-09.web.app/",
        githubLink: "https://github.com/IGNIT3-xD/Warmpaws",
        challenges: "Dynamic search and filtering options",
        futurePlans: "Add an integrated serverless playground where users can test code blocks instantly, and implement AI-generated automatic summaries for answered threads."
    },
    {
        id: "Herohome",
        name: "HeroHome - Local Household Services Providers Online",
        tagline: "A comprehensive household services provider arround the city.",
        description: "HeroHome is a modern web application that connects users with trusted local service providers such as electricians, plumbers, and cleaners. Users can browse services, book appointments, and leave ratings, while providers can manage their listings.",
        image: "herohome.png",
        techStack: ["React", "Tailwind CSS", "React Lootie", "Recharts", "Node/Express.js", "MongoDB"],
        liveLink: "https://herohome-8c1d7.web.app/",
        githubLink: "https://github.com/IGNIT3-xD/HeroHome",
        challenges: "Preventing visual lagging and dropped animation frames when refreshing highly nested Recharts components in real-time. Resolved by memoizing calculations, debouncing window resize events, and utilizing hardware-accelerated transforms.",
        futurePlans: "Develop live collaboration canvases so multiple developers can construct mock pages simultaneously over custom WebSockets."
    }
];
