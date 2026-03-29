// Site metadata and configuration
export const SITE_CONFIG = {
    name: 'Mustapha Ezzali',
    title: 'Mustapha Ezzali | AI Engineer',
    description: 'AI & Data Science Engineer with around 2 years of experience',
    url: 'https://mustaphaezzali.github.io',
    author: {
        name: 'Mustapha Ezzali',
        email: 'mustaphaezzali2001@gmail.com',
        title: 'AI & Data Science Engineer',
        school: 'ENSIAS (National School of Computer Science and System Analysis)',
        location: 'Rabat, Morocco',
        bio: "Hey! My name is Mustapha Ezzali and I'm an AI & Data Science Engineer with around 2 years of experience. I have a passion for natural language processing, computer vision and reinforcement learning. I graduated from ENSIAS (National School of computer science and system analysis) in Rabat, Morocco.",
        resumeUrl: 'https://drive.google.com/file/d/1-cDVV903m4Cgy6Oeu-STyKeJnl_Ngbh3/view?usp=sharing',
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
        title: 'AI Engineer',
        company: 'Confidential Company',
        location: 'Remote',
        startDate: 'September 2025',
        endDate: 'Present',
        description: 'Focusing on noisy data training, precisely on ASR (Automatic Speech Recognition) models.',
        technologies: ['Python', 'ASR', 'Deep Learning', 'Noisy Data Training'],
    },
    {
        id: 2,
        title: 'Data Scientist',
        company: 'Nucleon Security',
        location: 'Morocco',
        startDate: 'September 2024',
        endDate: 'August 2025',
        description: 'Continued work on malware detection with AI, focusing on improving MLOps practices and building pipelines for model training automation.',
        technologies: ['Python', 'AI/ML', 'MLOps', 'Data Engineering', 'Malware Detection'],
    },
    {
        id: 3,
        title: 'Malware Detection Intern',
        company: 'Nucleon Security',
        location: 'Morocco',
        startDate: 'February 2024',
        endDate: 'August 2024',
        description: 'Internship focused on malware detection using Machine Learning techniques.',
        technologies: ['Python', 'Machine Learning', 'Malware Analysis', 'Cybersecurity'],
    },
    {
        id: 4,
        title: 'Research Engineer Intern',
        company: 'Research Lab',
        location: 'Morocco',
        startDate: 'July 01, 2023',
        endDate: 'August 31, 2023',
        description: 'Finetuning state-of-the-art AI models for speech recognition to help elderly people.',
        technologies: ['Python', 'PyTorch', 'Speech Recognition', 'AI/ML'],
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
