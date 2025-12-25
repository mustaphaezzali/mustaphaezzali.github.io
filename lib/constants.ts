// Site metadata and configuration
export const SITE_CONFIG = {
    name: 'Mustapha Ezzali',
    title: 'Mustapha Ezzali | AI Engineering Student',
    description: 'AI & data science engineering student available for an end of studies internship (PFE)',
    url: 'https://mustaphaezzali.github.io',
    author: {
        name: 'Mustapha Ezzali',
        email: 'mustapha_ezzali@um5.ac.ma',
        title: 'AI & Data Science Engineering Student',
        school: 'ENSIAS (National School of Computer Science and System Analysis)',
        location: 'Rabat, Morocco',
        bio: "Hey! My name is Mustapha Ezzali and I'm an AI engineering student with a passion for natural language processing, computer vision and reinforcement learning. I'm currently a third year student at ENSIAS (National School of computer science and system analysis) in Rabat, Morocco.",
        resumeUrl: 'https://drive.google.com/file/d/1-cDVV903m4Cgy6Oeu-STyKeJnl_Ngbh3/view?usp=sharing',
        image: '/images/pphoto1.png',
    },
    social: {
        github: 'https://github.com/mustaphaezzali/',
        linkedin: 'https://www.linkedin.com/in/mustapha-ezzali/',
    },
}

// Experience data
export const EXPERIENCES = [
    {
        id: 1,
        title: 'Research Engineer Intern',
        company: 'Research Lab',
        location: 'Morocco',
        startDate: 'July 01, 2023',
        endDate: 'August 31, 2023',
        description: 'Finetuning state-of-the-art AI models for speech recognition to help elderly people.',
        technologies: ['Python', 'PyTorch', 'Speech Recognition', 'AI/ML'],
    },
    {
        id: 2,
        title: 'Chatbot Developer Intern',
        company: 'Architeo',
        location: 'Morocco',
        startDate: 'August 01, 2022',
        endDate: 'September 15, 2022',
        description: 'Automate the recruitment process using chatbots. The chatbot is responsible for collecting information from both the recruiter and the candidate, and then transmitting this data to the company (Architeo) for the final decision.',
        technologies: ['Python', 'NLP', 'Chatbot Development', 'Automation'],
    },
]

// Projects data
export const PROJECTS = [
    {
        id: 1,
        title: 'Arabic Information Retrieval',
        description: 'Using NLP techniques to build a search engine for Arabic documents.',
        image: '/images/search.png',
        technologies: ['Python', 'SCSS', 'JavaScript', 'Docker'],
        liveUrl: 'http://www.ensias-nlp.ma/nlp/RechercheIinformation/',
        githubUrl: 'https://github.com/mustaphaezzali/Information-Retrieval-Arabic',
        featured: true,
    },
    {
        id: 2,
        title: 'Topic Modeling',
        description: 'Detecting trends from Moroccan comments using state of the art NLP models like BERTopic and visualizing this information in a dashboard.',
        image: '/images/topicModeling.png',
        technologies: ['Python', 'Dash', 'Selenium', 'Plotly'],
        liveUrl: '#',
        githubUrl: 'https://github.com/mustaphaezzali/Moroccan-social-media-monitoring',
        featured: true,
    },
    {
        id: 3,
        title: 'Train Optimizer Website',
        description: 'Solving correspondences problem in Moroccan railway website using shortest path algorithms.',
        image: '/images/trainOptimizer.png',
        technologies: ['Python', 'Django', 'PostgreSQL', 'JavaScript'],
        liveUrl: '#',
        githubUrl: 'https://github.com/mustaphaezzali/Train-optimizer',
        featured: true,
    },
]

// Skills/Technologies
export const SKILLS = {
    'Natural Language Processing': ['BERT', 'Transformers', 'BERTopic', 'spaCy', 'NLTK'],
    'Machine Learning': ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost'],
    'Computer Vision': ['OpenCV', 'CNN', 'Image Processing'],
    'Programming Languages': ['Python', 'JavaScript', 'TypeScript', 'SQL'],
    'Web Development': ['React', 'Next.js', 'Django', 'FastAPI', 'Node.js'],
    'Tools & Technologies': ['Docker', 'Git', 'PostgreSQL', 'MongoDB', 'Linux'],
}

// Navigation links
export const NAV_LINKS = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
]
