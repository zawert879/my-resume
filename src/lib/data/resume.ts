export interface PersonalInfo {
  name: string;
  age: number;
  birthDate: string;
  position: string;
  salary: string;
  location: string;
  citizenship: string;
  phone: string;
  email: string;
  telegram: string;
  linkedin: string;
  hhUrl: string;
  photo: string;
}

export interface About {
  summary: string;
  highlights: string[];
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  specialty: string;
  period: string;
}

export interface Skill {
  name: string;
  level: string;
}

export interface Skills {
  languages: Skill[];
  frameworks: string[];
  databases: string[];
  protocols: string[];
  messageQueues: string[];
  tools: string[];
  ai: string[];
  practices: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  about: About;
  experience: Experience[];
  education: Education[];
  skills: Skills;
  languages: Language[];
  atsKeywords: string;
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: 'Рожков Игорь',
    age: 27,
    birthDate: '23 февраля 1998',
    position: 'Node.js Backend Developer',
    salary: '350 000 ₽',
    location: 'Ростов-на-Дону',
    citizenship: 'Россия',
    phone: '+7 (999) 693-09-80',
    email: 'zawert23879@gmail.com',
    telegram: 'https://t.me/zawert',
    linkedin: 'https://www.linkedin.com/in/igor-rozhkov-zawert',
    hhUrl: 'https://hh.ru/resume/example',
    photo: '/photo.jpg',
  },

  about: {
    summary: `Backend-разработчик с опытом работы над системами разной сложности — от монолитных приложений до распределённых микросервисных архитектур. Участвовал в разработке и поддержке около 40 микросервисов и общего набора библиотек, используемых несколькими командами.
    Основной фокус — серверная логика, взаимодействие сервисов, устойчивость и предсказуемость систем в продакшене. Работал с API-gateway, маршрутизацией запросов, синхронным и асинхронным взаимодействием сервисов.`,

    highlights: [
      'Разработка и поддержка ~40 микросервисов и общих библиотек',
      'Опыт работы с gateway-сервисами и проксированием запросов',
      'Внедрение gRPC с использованием Protobuf',
      'Работа с real-time логикой и нестандартными оптимизациями в геймдеве',
      'Проектирование и развитие микросервисной архитектуры',
    ],
  },

  experience: [
    {
      company: 'lostLevels',
      position: 'Backend Developer / DevOps Engineer',
      period: 'Август 2025 - Январь 2026',
      duration: '6 месяцев',
      description: 'Разработка высоконагруженной бэкенд-инфраструктуры для Telegram Mini App',
      achievements: [
        'Спроектировал и разработал с нуля высоконагруженную бэкенд-инфраструктуру для Telegram Mini App, включая Core API и два AI-сервиса',
        'Реализовал игровой проект в жанре "Алхимия" с автоматической генерацией ~3 млн рецептов и 1 млн слов через GPT API',
        'Настроил CI/CD пайплайны с GitHub Actions и Docker Swarm для автоматизации деплоя на собственных VPS',
        'Разработал систему мониторинга на базе Grafana для отслеживания нагрузки на LLM и анализа реферальных ссылок',
        'Интегрировал OpenAI API и провел сравнительный анализ различных LLM',
        'Разработал административную панель на React для управления игровым контентом',
      ],
      technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Docker Swarm', 'GitHub Actions', 'OpenAI API', 'React', 'Grafana'],
    },
    {
      company: 'RedNeck Studio',
      position: 'Backend Node.js Developer',
      period: 'Апрель 2023 - Август 2025',
      duration: '2 года 5 месяцев',
      description: 'Разработка серверной части кроссплатформенной MMORPG "Broken Sun" с открытым миром',
      achievements: [
        'Участвовал в проектировании и разработке серверной части ключевых игровых механик: система классов (воин, лучник, маг) и специализаций',
        'Реализовал взаимодействие игроков с открытым миром, включая PvE-составляющую (сражения с мобами, боссами)',
        'Разработал серверную логику для PvP-режимов и массовых сражений',
        'Реализовал клановую систему и внутриигровые ивенты',
        'Разрабатывал и поддерживал микросервисную архитектуру на Node.js и TypeScript',
        'Проектировал API для взаимодействия между клиентом игры (Unity) и бэкендом',
      ],
      technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Unity', 'Microservices'],
    },
    {
      company: 'Syndicate DB',
      position: 'Backend Developer / Unity Developer',
      period: 'Август 2020 - Апрель 2023',
      duration: '2 года 9 месяцев',
      description: 'Полнстек разработка игровых проектов',
      achievements: [
        'Разработка игровых механик на Unity (C#)',
        'Проектирование и разработка серверной части на Node.js',
        'Работа с различными протоколами: REST, TCP, GraphQL (Apollo)',
        'Разработка UI с использованием UIToolkit и Unity UI',
      ],
      technologies: ['Node.js', 'TypeScript', 'Apollo GraphQL', 'REST', 'TCP', 'PostgreSQL', 'Express', 'Koa', 'Redis', 'RabbitMQ', 'Unity', 'C#'],
    },
    {
      company: 'Компания',
      position: 'Backend Developer',
      period: 'Ноябрь 2019 - Август 2020',
      duration: '10 месяцев',
      description: 'Backend разработка на Node.js',
      achievements: [
        'Разработка серверных приложений на Node.js',
        'Проектирование и реализация API',
      ],
      technologies: ['Node.js'],
    },
    {
      company: 'Mentalstack',
      position: 'Backend Developer',
      period: 'Март 2019 - Ноябрь 2019',
      duration: '9 месяцев',
      description: 'Разработка веб-приложений',
      achievements: [
        'Разработка серверных приложений на различных технологиях',
        'Работа с PHP фреймворками и Node.js',
      ],
      technologies: ['Node.js', 'Symfony', 'Laravel'],
    },
    {
      company: '2up',
      position: 'Backend Developer',
      period: 'Январь 2019 - Март 2019',
      duration: '3 месяца',
      description: 'Backend разработка на Laravel',
      achievements: [
        'Разработка серверных приложений на Laravel',
      ],
      technologies: ['Laravel'],
    },
    {
      company: 'Webant',
      position: 'Backend Developer',
      period: 'Декабрь 2017 - Декабрь 2018',
      duration: '1 год 1 месяц',
      description: 'Разработка веб-приложений',
      achievements: [
        'Разработка серверных приложений на Symfony 4',
        'Работа с Node.js',
      ],
      technologies: ['Symfony 4', 'Node.js'],
    },
  ],

  education: [
    {
      institution: 'Донской государственный технический университет',
      degree: 'Среднее специальное',
      specialty: 'Прикладная информатика (Информатика и вычислительная техника)',
      period: '2022',
    },
    {
      institution: 'РКСИ',
      degree: 'Среднее специальное',
      specialty: 'Программирование компьютерных систем',
      period: '2018',
    },
  ],

  skills: {
    languages: [
      { name: 'JavaScript', level: 'expert' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'Node.js', level: 'expert' },
      { name: 'C#', level: 'advanced' },
      { name: 'SQL', level: 'advanced' },
    ],

    frameworks: [
      'Express',
      'Koa',
      'Apollo GraphQL',
      'React',
    ],

    databases: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Firebase',
    ],

    protocols: [
      'REST',
      'GraphQL',
      'gRPC',
      'WebSocket',
      'TCP',
      'UDP',
      'Protobuf',
    ],

    messageQueues: [
      'RabbitMQ',
      'NATS',
    ],

    tools: [
      'Docker',
      'Docker Swarm',
      'Git',
      'GitHub Actions',
      'Grafana',
      'Unity',
    ],

    ai: [
      'OpenAI API',
      'ChatGPT',
      'LLM Integration',
    ],

    practices: [
      'Microservices Architecture',
      'API Gateway',
      'Service-to-service Communication',
      'Distributed Systems',
      'CI/CD',
      'DevOps',
      'REST API Design',
      'Real-time Systems',
    ],
  },

  languages: [
    { name: 'Русский', level: 'Родной' },
  ],

  atsKeywords: `Position: Backend Developer

Contact:
Email: zawert23879@gmail.com
Phone: +7 (999) 693-09-80
Telegram: https://t.me/zawert
LinkedIn: https://www.linkedin.com/in/igor-rozhkov-zawert

Languages & Runtime:
JavaScript, TypeScript, Node.js

Backend & Architecture:
Backend development, Monoliths, Microservices, Distributed Systems, API Gateway, Service-to-service communication

Protocols & APIs:
REST, GraphQL, gRPC, WebSocket, TCP, UDP

Messaging & Transports:
NATS, RabbitMQ, Asynchronous messaging

Data Formats:
Protobuf

Frontend (basic):
React

AI & LLM:
OpenAI API, ChatGPT, LLM Integration, Prompt Engineering

Game Development:
Unity, C#, Real-time systems, Game mechanics

DevOps:
Docker, Docker Swarm, CI/CD, GitHub Actions, Grafana

Experience Highlights:
• Developed and maintained ~40 microservices
• Worked with gateway services and request routing
• Implemented gRPC communication using Protobuf
• Designed and supported distributed systems
• Game development experience with real-time systems and networking
• Built high-load backend infrastructure for Telegram Mini App
• Generated 3M+ game recipes using AI/GPT API
• Developed MMORPG server logic for massive multiplayer battles`,
};
