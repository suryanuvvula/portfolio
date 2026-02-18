import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const portfolioData = {
    name: 'Surya Nuvvula',
    title: 'Full Stack Developer',
    experience: '10+ Years',
    email: 'suryawebdev9@gmail.com',
    location: 'United States',
    bio: 'Experienced Full Stack Developer with 10+ years of expertise in building scalable web applications. Passionate about creating elegant solutions to complex problems.',
    skills: {
      frontend: ['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML/CSS', 'NextJS'],
      backend: ['Node.js', 'Express', 'NestJS', 'MongoDB'],
      other: ['GenAI', 'REST APIs', 'Git', 'Agile/Scrum']
    },
    companies: [
      {
        name: 'Fidelity Investments',
        role: 'Principal web developer',
        period: '2025 - current',
        technologies: ['Angular', 'Java', 'UI/UX', 'TypeScript'],
        description: 'Leading development of customer-facing financial applications and internal tools',
        logo: 'https://companieslogo.com/img/orig/FIS-7bfd9695.png'
      },
      {
        name: 'Universal Destination and Experiences',
        role: 'Senior Full Stack Developer',
        period: '2023 - 2025',
        technologies: ['React', 'NextJS', 'Node.js', 'TypeScript'],
        description: 'Leading development of customer-facing web applications for theme park tickets and content sites',
        logo: 'https://logos-world.net/wp-content/uploads/2021/02/Universal-Studios-Logo.png'
      },
      {
        name: 'Best Buy',
        role: 'Full Stack Developer',
        period: '2021 - 2023',
        technologies: ['Angular', 'NestJS', 'MongoDB', 'TypeScript'],
        description: 'Developed e-commerce features and microservices',
        logo: 'https://companieslogo.com/img/orig/BBY-7c0fe3d3.png'
      },
      {
        name: 'Axon',
        role: 'Full Stack Developer',
        period: '2019 - 2021',
        technologies: ['React', 'Express', 'Node.js', 'TypeScript'],
        description: 'Built cloud-based evidence management solutions',
        logo: 'https://companieslogo.com/img/orig/AXON-3c370729.png'
      },
      {
        name: 'Nationwide Insurance',
        role: 'Software Developer',
        period: '2017 - 2019',
        technologies: ['Angular', 'Node.js', 'JavaScript'],
        description: 'Developed insurance policy management systems',
        logo: 'https://logos-world.net/wp-content/uploads/2021/03/Nationwide-Logo.png'
      },
      {
        name: 'Universal Orlando',
        role: 'Software Developer',
        period: '2015 - 2017',
        technologies: ['JavaScript', 'HTML/CSS', 'Node.js'],
        description: 'Created interactive web experiences for theme park systems',
        logo: 'https://logos-world.net/wp-content/uploads/2021/02/Universal-Studios-Logo.png'
      },
      {
        name: 'AT&T',
        role: 'UI Developer',
        period: '2014 - 2015',
        technologies: ['JavaScript', 'HTML/CSS'],
        description: 'Worked on front-end development for internal tools and customer portals',
        logo: 'https://companieslogo.com/img/orig/T-39117718.png'
      }
    ],
    techStack: [
      { name: 'React', level: 95, yearsOfExperience: 8, category: 'frontend' },
      { name: 'TypeScript', level: 92, yearsOfExperience: 7, category: 'frontend' },
      { name: 'JavaScript', level: 98, yearsOfExperience: 10, category: 'frontend' },
      { name: 'Angular', level: 88, yearsOfExperience: 6, category: 'frontend' },
      { name: 'Next.js', level: 85, yearsOfExperience: 3, category: 'frontend' },
      { name: 'HTML/CSS', level: 95, yearsOfExperience: 10, category: 'frontend' },
      { name: 'Node.js', level: 93, yearsOfExperience: 9, category: 'backend' },
      { name: 'Express', level: 90, yearsOfExperience: 8, category: 'backend' },
      { name: 'NestJS', level: 85, yearsOfExperience: 4, category: 'backend' },
      { name: 'MongoDB', level: 87, yearsOfExperience: 7, category: 'database' },
      { name: 'PostgreSQL', level: 82, yearsOfExperience: 5, category: 'database' },
      { name: 'Docker', level: 80, yearsOfExperience: 5, category: 'devops' },
      { name: 'AWS', level: 78, yearsOfExperience: 4, category: 'devops' },
      { name: 'Git', level: 95, yearsOfExperience: 10, category: 'tools' },
      { name: 'REST APIs', level: 95, yearsOfExperience: 10, category: 'tools' },
      { name: 'GraphQL', level: 75, yearsOfExperience: 3, category: 'tools' }
    ],
    projects: [
      {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'Built a scalable e-commerce platform with real-time inventory management',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
        image: null
      },
      {
        id: 2,
        title: 'GenAI Chatbot',
        description: 'Developed an AI-powered customer support chatbot',
        technologies: ['React', 'Python', 'OpenAI', 'Node.js'],
        image: null
      },
      {
        id: 3,
        title: 'Analytics Dashboard',
        description: 'Created a real-time analytics dashboard for business metrics',
        technologies: ['Angular', 'NestJS', 'PostgreSQL', 'D3.js'],
        image: null
      }
    ],
    social: {
      github: 'https://github.com/suryanuvvula',
      linkedin: 'https://linkedin.com/in/suryanuvvula',
      email: 'suryawebdev9@gmail.com'
    }
  };

  res.json(portfolioData);
}
