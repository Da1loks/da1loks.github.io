import './App.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [language, setLanguage] = useState('ru'); // Состояние для текущего языка

  // Словарь с переводами
  const translations = {
    ru: {
      greeting: "Привет! Я",
      bio: "Привет! Мне 14 и я (почти) фуллстак Typescript разработчик. Пишу фронтенд на ReactJS, бекенд и ботов на Bun. Пробую Java для моддинга в свободное время для своего проекта. Сделаю вам фронтенд, бекенд или бота на заказ. Если вы заинтересованы свяжитесь со мной",
      contact: "Связаться со мной",
      darkMode: "Темная тема",
      languages: "Языки программирования",
      active: "Active",
      inProgress: "In progress",
      frameworks: "Фреймворки, планы, прочие навыки, etc.",
      viewAll: "Просмотреть все навыки",
      skillsDescription: "Языки, фреймворки, утилиты с которыми я работаю, и прочие классные штуки!"
    },
    en: {
      greeting: "Hello! I'm",
      bio: "Hi! I'm 14 and I'm an (almost) fullstack TypeScript developer. I write frontend with ReactJS, backend and bots with Bun. I'm trying Java for modding in my free time for my project. I can make frontend, backend or bots for you. If you're interested, contact me",
      contact: "Contact me",
      darkMode: "Dark theme",
      languages: "Programming languages",
      active: "Active",
      inProgress: "In progress",
      frameworks: "Frameworks, plans, other skills, etc.",
      viewAll: "View all skills",
      skillsDescription: "Languages, frameworks, utilities I work with, and other cool stuff!"
    }
  };

  // Функция переключения языка
  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
  };

  // Получаем текущие переводы
  const t = translations[language];

  return (
    <div className="profile-page">
      <div className="container">
        <div className="cards-container">
          {/* Первая карточка - about.md */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="card about-card"
          >
            {/* Файл about.md */}
            <div className="file-header">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM5 5H19V19H5V5ZM7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H13V17H7V15Z" fill="rgba(255,255,255,0.6)"/>
              </svg>
              <span className="file-name">about.arch</span>
            </div>
            
            {/* Профиль */}
            <div className="profile-header">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.2 }}
                className="avatar-container"
              >
                <div className="avatar">
                  <img src={process.env.PUBLIC_URL + '/photo_2025-03-25_01-51-03.jpg'} alt="Profile" onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/100";
                  }} />
                  <div className="avatar-glow"></div>
                </div>
              </motion.div>
              <h1 className="profile-title">
                {t.greeting} <span className="username">@da1loks</span>
              </h1>
            </div>
            
            {/* Технологии */}
            <div className="tech-badges">
              {/* TypeScript */}
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <div className="badge">
                  <svg role="img" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="#3178C6">
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                  </svg>
                  <span>TypeScript</span>
                </div>
              </motion.div>
              
              {/* React вместо Спарклов */}
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <div className="badge">
                  <svg role="img" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="white">
                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
                  </svg>
                  <span>React</span>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="description"
            >
              <p>
                {t.bio}
              </p>
            </motion.div>
            
            {/* Кнопки */}
            <div className="action-buttons">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="https://t.me/da1loks" target="_blank" rel="noopener noreferrer" className="action-button unbounded-button">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.78 18.65L10.06 14.42L17.74 7.48C18.08 7.16 17.67 7.05 17.22 7.33L7.74 13.3L3.64 12C2.76 11.75 2.75 11.14 3.84 10.7L19.81 4.54C20.54 4.21 21.24 4.72 20.96 5.84L18.24 18.65C18.05 19.56 17.5 19.78 16.74 19.36L12.6 16.3L10.61 18.23C10.38 18.46 10.19 18.65 9.78 18.65Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {t.contact}
                </a>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="action-button unbounded-button">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {t.darkMode}
                </button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="action-button lang-button unbounded-button" onClick={toggleLanguage}>
                  {language.toUpperCase()}
                </button>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Вторая карточка - skills.md */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card skills-card"
          >
            <div className="file-header">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" fill="rgba(255,255,255,0.6)"/>
              </svg>
              <span className="file-name">skills.md</span>
            </div>
            
            <h2 className="section-title">{t.languages}</h2>
            
            <div className="skills-grid">
              <motion.div 
                whileHover={{ y: -5 }} 
                transition={{ duration: 0.2 }}
                className="skill-card"
              >
                <div className="skill-icon ts-icon">
                  <svg role="img" viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg" fill="#3178C6">
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                  </svg>
                  <span>TypeScript</span>
                </div>
                <div className="skill-status active">
                  <span className="status-dot"></span>
                  {t.active}
                </div>
              </motion.div>
              
              {/* Java */}
              <motion.div 
                whileHover={{ y: -5 }} 
                transition={{ duration: 0.2 }}
                className="skill-card"
              >
                <div className="skill-icon java-icon">
                  <svg role="img" viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg" fill="#007396">
                    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.93.828-.93-953.696 1.968-6.357 3.317-2.429 4.745 10.69 3.897 19.494-1.756 14.763-3.841M9.292 13.21s-5.545 1.315-1.96 1.793c1.508.201 4.514.155 7.315-.078 2.28-.19 4.569-.596 4.569-.596s-.804.343-1.386.74c-5.593 1.47-16.39.785-13.291-.718 2.614-1.26 4.753-1.142 4.753-1.142M17.127 17.208c5.688-2.953 3.059-5.792 1.222-5.423-.448.092-.646.171-.646.171s.166-.259.483-.372c3.609-1.274 6.39 3.772-1.171 5.774 0 0 .088-.078.112-.15M14.401 0s3.148 3.15-2.988 7.995c-4.912 3.894-1.12 6.107-.002 8.641-2.866-2.585-4.973-4.863-3.559-6.983 2.087-3.125 7.878-4.644 6.549-9.653M9.734 23.924c5.464.348 13.866-.194 14.059-2.79 0 0-.382.984-4.519 1.768-4.672.882-10.436.779-13.846.213 0 0 .7.584 4.306.809"/>
                  </svg>
                  <span>Java</span>
                </div>
                <div className="skill-status progress">
                  <span className="status-dot progress-dot"></span>
                  {t.inProgress}
                </div>
              </motion.div>
              
              {/* Python без логотипа */}
              <motion.div 
                whileHover={{ y: -5 }} 
                transition={{ duration: 0.2 }}
                className="skill-card"
              >
                <div className="skill-icon python-icon">
                  <span>Python</span>
                </div>
                <div className="skill-status progress">
                  <span className="status-dot progress-dot"></span>
                  {t.inProgress}
                </div>
              </motion.div>
            </div>
            
            <h2 className="section-title mt-6">{t.frameworks}</h2>
            
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              transition={{ duration: 0.2 }}
              className="view-all-skills"
            >
              <div className="view-all-skills-button">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" fill="rgba(255,255,255,0.8)"/>
                </svg>
                <span>{t.viewAll}</span>
              </div>
              <p className="skills-description">
                {t.skillsDescription}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;