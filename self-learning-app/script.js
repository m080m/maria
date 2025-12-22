// API Configuration moved to Backend (api/generate.js)

// Translations
const TRANSLATIONS = {
    en: {
        tagline: "Learn anything, faster and easier.",
        searchTitle: "What do you want to learn? (e.g. English, Java)",
        placeholder: "Type a topic or language...",
        btnSearch: "Search",
        loading: "AI is gathering the best resources...",
        fallbackTitle: "Oops... AI is busy.",
        fallbackDesc: "But here are some smart links for",
        cardVideo: "Video Tutorial",
        cardWiki: "Wikipedia",
        cardSearch: "Google Search",
        // Profile
        profileHeader: "Welcome, Learner!",
        profileSub: "Please sign in to personalize your journey.",
        placeholderName: "Enter your nickname",
        btnConfirm: "Confirm",
        dashboardHeader: "Your Preferences",
        btnSignOut: "Sign Out",
        q_interests: "What are you most interested in?",
        q_style: "How do you prefer to learn?",
        q_pace: "Your preferred learning pace?",
        q_level: "What is your current skill level?",
        q_time: "How much time do you have daily?",
        q_reminders: "Do you want daily reminders?",
        // Quiz Options
        opt_tech: "Technology 💻",
        opt_science: "Science 🧬",
        opt_arts: "Arts 🎨",
        opt_history: "History 🏛️",
        opt_languages: "Languages 🗣️",
        opt_everything: "Everything 🌍",
        opt_videos: "Watching Videos 🎥",
        opt_games: "Playing Games 🎮",
        opt_reading: "Reading Facts 📚",
        opt_coding: "Interactive Coding ⌨️",
        opt_fast: "Fast & Intense 🚀",
        opt_slow: "Slow & Deep 🐢",
        opt_casual: "Just Casual ☕",
        opt_beginner: "Beginner 🌱",
        opt_intermediate: "Intermediate 🌿",
        opt_advanced: "Advanced 🌳",
        opt_5m: "5 Minutes ⏱️",
        opt_15m: "15-30 Minutes ⏳",
        opt_1h: "1 Hour+ 🕰️",
        opt_yes: "Yes ✅",
        opt_no: "No ❌"
    },
    am: {
        tagline: "Սովորիր ամեն ինչ, ավելի արագ ու հեշտ։",
        searchTitle: "Ի՞նչ ես ուզում սովորել այսօր։ (օր.՝ Ծրագրավորում)",
        placeholder: "Գրիր ոլորտը կամ լեզուն...",
        btnSearch: "Փնտրել",
        loading: "AI-ը փնտրում է լավագույն նյութերը...",
        fallbackTitle: "Ups... AI-ը չափազանց զբաղված է։",
        fallbackDesc: "Բայց ահա որոշ օգտակար հղումներ",
        cardVideo: "Վիդեո Դասեր",
        cardWiki: "Վիքիպեդիա",
        cardSearch: "Google Որոնում",
        // Profile
        profileHeader: "Բարի գալուստ, Սովորող",
        profileSub: "Մուտք գործեք՝ ձեր ուսուցումը անհատականացնելու համար:",
        placeholderName: "Գրեք ձեր նիկնեյմը",
        btnConfirm: "Հաստատել",
        dashboardHeader: "Ձեր Նախասիրությունները",
        btnSignOut: "Դուրս Գալ",
        q_interests: "Ինչո՞վ եք ամենաշատը հետաքրքրված:",
        q_style: "Ինչպե՞ս եք նախընտրում սովորել:",
        q_pace: "Ուսուցման ո՞ր տեմպն եք նախընտրում:",
        q_level: "Ո՞րն է ձեր ներկայիս հմտության մակարդակը:",
        q_time: "Օրական որքա՞ն ժամանակ ունեք:",
        q_reminders: "Ցանկանու՞մ եք ստանալ ամենօրյա հիշեցումներ:",
        // Quiz Options
        opt_tech: "Տեխնոլոգիա 💻",
        opt_science: "Գիտություն 🧬",
        opt_arts: "Արվեստ 🎨",
        opt_history: "Պատմություն 🏛️",
        opt_languages: "Լեզուներ 🗣️",
        opt_everything: "Ամեն Ինչ 🌍",
        opt_videos: "Դիտել Վիդեոներ 🎥",
        opt_games: "Խաղալ Խաղեր 🎮",
        opt_reading: "Կարդալ Փաստեր 📚",
        opt_coding: "Ինտերակտիվ Կոդավորում ⌨️",
        opt_fast: "Արագ և Ինտենսիվ 🚀",
        opt_slow: "Դանդաղ և Խորը 🐢",
        opt_casual: "Պարզապես Սիրողական ☕",
        opt_beginner: "Սկսնակ 🌱",
        opt_intermediate: "Միջին 🌿",
        opt_advanced: "Առաջադեմ 🌳",
        opt_5m: "5 Րոպե ⏱️",
        opt_15m: "15-30 Րոպե ⏳",
        opt_1h: "1 Ժամ+ 🕰️",
        opt_yes: "Այո ✅",
        opt_no: "Ոչ ❌"
    },
    ru: {
        tagline: "Изучай всё, что угодно, быстрее и проще.",
        searchTitle: "Что ты хочешь изучить? (например, Java)",
        placeholder: "Напиши тему или язык...",
        btnSearch: "Найти",
        loading: "ИИ ищет лучшие материалы...",
        fallbackTitle: "Упс... ИИ перегружен.",
        fallbackDesc: "Но вот полезные ссылки для",
        cardVideo: "Видеоурок",
        cardWiki: "Википедия",
        cardSearch: "Google Поиск",
        // Profile
        profileHeader: "Добро пожаловать!",
        profileSub: "Войдите, чтобы персонализировать обучение.",
        placeholderName: "Введите ваш никнейм",
        btnConfirm: "Подтвердить",
        dashboardHeader: "Ваши предпочтения",
        btnSignOut: "Выйти",
        q_interests: "Что вас больше всего интересует?",
        q_style: "Как вы предпочитаете учиться?",
        q_pace: "Какой темп обучения вы предпочитаете?",
        q_level: "Какой ваш текущий уровень навыков?",
        q_time: "Сколько времени у вас есть в день?",
        q_reminders: "Хотите получать ежедневные напоминания?",
        // Quiz Options
        opt_tech: "Технологии 💻",
        opt_science: "Наука 🧬",
        opt_arts: "Искусство 🎨",
        opt_history: "История 🏛️",
        opt_languages: "Языки 🗣️",
        opt_everything: "Всё 🌍",
        opt_videos: "Смотреть Видео 🎥",
        opt_games: "Играть в Игры 🎮",
        opt_reading: "Читать Факты 📚",
        opt_coding: "Интерактивный Кодинг ⌨️",
        opt_fast: "Быстро и Интенсивно 🚀",
        opt_slow: "Медленно и Глубоко 🐢",
        opt_casual: "Просто для Души ☕",
        opt_beginner: "Новичок 🌱",
        opt_intermediate: "Средний 🌿",
        opt_advanced: "Продвинутый 🌳",
        opt_5m: "5 Минут ⏱️",
        opt_15m: "15-30 Минут ⏳",
        opt_1h: "1 Час+ 🕰️",
        opt_yes: "Да ✅",
        opt_no: "Нет ❌"
    }
};

let currentLang = 'en';

// Language Switcher Logic
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active class
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Change Language
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
    });
});

function setLanguage(lang) {
    currentLang = lang;
    const t = TRANSLATIONS[lang];

    // Update Text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t[key];
    });

    // Update Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t[key];
    });
}


document.getElementById('learning-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const inputVal = document.getElementById('topic').value.trim();
    const resultsContainer = document.getElementById('results-section');
    const submitBtn = document.querySelector('.cta-button');
    const t = TRANSLATIONS[currentLang];

    if (!inputVal) return;

    // UI Loading State
    resultsContainer.classList.remove('hidden');
    resultsContainer.innerHTML = `<div class="loading-spinner">${t.loading}</div>`;
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    try {
        const resources = await fetchAIResources(inputVal);
        renderResults(resources, inputVal);
    } catch (error) {
        console.error('AI Error:', error);
        renderFallback(inputVal);
    } finally {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
    }
});

async function fetchAIResources(topic) {
    const langNames = { en: "English", am: "Armenian", ru: "Russian" };
    const targetLang = langNames[currentLang];

    const prompt = `
    You are a helpful learning assistant. The user wants to learn about: "${topic}".
    Provide a list of 5-6 HIGH QUALITY, specific online resources to learn this topic.
    The response title and description MUST BE IN ${targetLang} language.
    Include a mix of: Video Channels (YouTube), Official Documentation/Websites, Interactive Courses, and Articles.
    
    Return ONLY valid JSON in this format:
    [
      { "type": "Video/Book/Course", "title": "Resource Name", "desc": "Short description in ${targetLang}", "url": "https://link..." },
      ...
    ]
    Do not include markdown formatting like \`\`\`json. Just the raw JSON array.
    `;

    // Call our own Vercel API (proxy) instead of Google directly
    const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: prompt })
    });

    if (!response.ok) {
        throw new Error(`API Request failed: ${response.status}`);
    }

    const data = await response.json();

    // Check if the proxy returned an error
    if (data.error) {
        throw new Error(data.error);
    }

    // The backend returns the raw Gemini response structure
    const text = data.candidates[0].content.parts[0].text;
    const cleanJson = text.replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(cleanJson);
}

function renderResults(data, topic) {
    const resultsContainer = document.getElementById('results-section');
    resultsContainer.innerHTML = '';

    if (!data || data.length === 0) {
        renderFallback(topic);
        return;
    }

    let delay = 0;
    data.forEach(item => {
        createCard(item, resultsContainer, delay);
        delay += 0.1;
    });
}

function renderFallback(topic) {
    const t = TRANSLATIONS[currentLang];
    const resultsContainer = document.getElementById('results-section');
    resultsContainer.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: rgba(255,255,255,0.7);">
        <h3>${t.fallbackTitle}</h3>
        <p>${t.fallbackDesc} «${topic}»</p>
    </div>`;

    const smartLinks = generateSmartLinks(topic);
    let delay = 0;
    smartLinks.forEach(item => {
        createCard(item, resultsContainer, delay);
        delay += 0.1;
    });
}

function getSiteInfo(url) {
    if (!url) return { icon: 'fa-solid fa-globe', siteType: 'Website', className: 'site-default' };

    const t = TRANSLATIONS[currentLang];
    const lowerUrl = url.toLowerCase();

    // Define site types mapping
    if (lowerUrl.includes('youtube.com') || lowerUrl.includes('youtu.be')) {
        return { icon: 'fa-brands fa-youtube', siteType: 'Video Platform', className: 'site-youtube' };
    }
    if (lowerUrl.includes('wikipedia.org')) {
        return { icon: 'fa-brands fa-wikipedia-w', siteType: 'Encyclopedia', className: 'site-wiki' };
    }
    if (lowerUrl.includes('google.com')) {
        return { icon: 'fa-brands fa-google', siteType: 'Search Engine', className: 'site-google' };
    }
    if (lowerUrl.includes('github.com')) {
        return { icon: 'fa-brands fa-github', siteType: 'Code Repository', className: 'site-github' };
    }
    if (lowerUrl.includes('stackoverflow.com')) {
        return { icon: 'fa-brands fa-stack-overflow', siteType: 'Q&A Community', className: 'site-stackoverflow' };
    }
    if (lowerUrl.includes('medium.com')) {
        return { icon: 'fa-brands fa-medium', siteType: 'Blog Platform', className: 'site-medium' };
    }
    if (lowerUrl.includes('udemy.com') || lowerUrl.includes('coursera.org') || lowerUrl.includes('edx.org')) {
        return { icon: 'fa-solid fa-graduation-cap', siteType: 'Online Course', className: 'site-course' };
    }
    if (lowerUrl.includes('w3schools.com') || lowerUrl.includes('mozilla.org')) {
        return { icon: 'fa-solid fa-code', siteType: 'Documentation', className: 'site-docs' };
    }

    // Default return
    return { icon: 'fa-solid fa-globe', siteType: 'Website', className: 'site-default' };
}

function extractYouTubeID(url) {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

function createCard(item, container, delay) {
    const url = item.url || item.link;
    const card = document.createElement('div'); // Changed to div to support iframes
    card.className = 'result-card';
    card.style.animationDelay = `${delay}s`;

    const siteInfo = getSiteInfo(url);
    const youtubeID = extractYouTubeID(url);

    // If it's NOT a video, make the card clickable like a link
    if (!youtubeID) {
        card.style.cursor = 'pointer';
        card.onclick = (e) => {
            // Prevent if clicking internal interactive elements (if any)
            window.open(url, '_blank');
        };
    } else {
        // If it IS a video, specific style or behavior?
        card.classList.add('video-card');
    }

    let mediaContent = '';
    if (youtubeID) {
        mediaContent = `
            <div class="video-container">
                <iframe 
                    src="https://www.youtube.com/embed/${youtubeID}" 
                    title="${item.title}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        `;
    }

    card.innerHTML = `
        <div class="card-header">
            <span class="card-tag">${item.type}</span>
            <div class="site-badge ${siteInfo.className}">
                <i class="${siteInfo.icon}"></i>
                <span>${siteInfo.siteType}</span>
            </div>
        </div>
        ${mediaContent}
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.desc || item.description}</p>
    `;

    container.appendChild(card);
}

function generateSmartLinks(topic) {
    const t = TRANSLATIONS[currentLang];
    return [
        {
            type: t.cardVideo,
            title: `YouTube: ${topic}`,
            description: `YouTube Search for ${topic}`,
            link: `https://www.youtube.com/results?search_query=${encodeURIComponent(topic + ' tutorial')}`
        },
        {
            type: t.cardSearch,
            title: `Google: ${topic}`,
            description: `Google Search for ${topic}`,
            link: `https://www.google.com/search?q=${encodeURIComponent(topic + ' learning resources')}`
        },
        {
            type: t.cardWiki,
            title: `Wiki: ${topic}`,
            description: `Wikipedia article`,
            link: `https://${currentLang}.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(topic)}`
        }
    ];
}

/* --- Navigation & Home/Search Logic --- */

// Navigation Switching
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const view = btn.getAttribute('data-view');

        // Update Buttons
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');


        // Toggle Views : UPDATE with Profile
        if (view === 'home') {
            document.getElementById('home-view').classList.remove('hidden');
            document.getElementById('search-view').classList.add('hidden');
            document.getElementById('profile-view').classList.add('hidden');
            renderHomePage();
        } else if (view === 'search') {
            document.getElementById('home-view').classList.add('hidden');
            document.getElementById('search-view').classList.remove('hidden');
            document.getElementById('profile-view').classList.add('hidden');
        } else if (view === 'profile') {
            document.getElementById('home-view').classList.add('hidden');
            document.getElementById('search-view').classList.add('hidden');
            document.getElementById('profile-view').classList.remove('hidden');
            initProfileView();
        }
    });
});

/* --- User Profile & Quiz Logic --- */
let userProfile = JSON.parse(localStorage.getItem('learnfast_user')) || null;
let quizCurrentIndex = 0;
let quizAnswers = {};

const QUIZ_QUESTIONS = [
    {
        id: 'interests',
        textKey: 'q_interests',
        options: ['opt_tech', 'opt_science', 'opt_arts', 'opt_history', 'opt_languages', 'opt_everything']
    },
    {
        id: 'style',
        textKey: 'q_style',
        options: ['opt_videos', 'opt_games', 'opt_reading', 'opt_coding']
    },
    {
        id: 'pace',
        textKey: 'q_pace',
        options: ['opt_fast', 'opt_slow', 'opt_casual']
    },
    {
        id: 'level',
        textKey: 'q_level',
        options: ['opt_beginner', 'opt_intermediate', 'opt_advanced']
    },
    {
        id: 'time',
        textKey: 'q_time',
        options: ['opt_5m', 'opt_15m', 'opt_1h']
    },
    {
        id: 'reminders',
        textKey: 'q_reminders',
        options: ['opt_yes', 'opt_no']
    }
];

function initProfileView() {
    const signinContainer = document.getElementById('signin-container');
    const quizContainer = document.getElementById('quiz-container');
    const profileDashboard = document.getElementById('profile-dashboard');

    // Force language update to ensure static texts are correct
    setLanguage(currentLang);

    if (!userProfile) {
        signinContainer.classList.remove('hidden');
        quizContainer.classList.add('hidden');
        profileDashboard.classList.add('hidden');
    } else if (!userProfile.onboardingComplete) {
        signinContainer.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        profileDashboard.classList.add('hidden');
        startQuiz();
    } else {
        signinContainer.classList.add('hidden');
        quizContainer.classList.add('hidden');
        profileDashboard.classList.remove('hidden');
        renderProfileDashboard();
    }
}

// Sign In Form
document.getElementById('signin-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('username-input').value.trim();
    if (name) {
        userProfile = { name: name, onboardingComplete: false, preferences: {} };
        localStorage.setItem('learnfast_user', JSON.stringify(userProfile));
        initProfileView();
    }
});

// Quiz Logic
function startQuiz() {
    quizCurrentIndex = 0;
    quizAnswers = {};
    renderQuestion();
}

function renderQuestion() {
    const q = QUIZ_QUESTIONS[quizCurrentIndex];
    const t = TRANSLATIONS[currentLang];

    // Use translated text
    document.getElementById('quiz-question').textContent = t[q.textKey] || q.textKey;

    // Progress
    const progress = ((quizCurrentIndex) / QUIZ_QUESTIONS.length) * 100;
    document.getElementById('quiz-progress').style.width = `${progress}%`;

    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';

    q.options.forEach(optKey => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.textContent = t[optKey] || optKey;
        btn.onclick = () => handleAnswer(q.id, t[optKey] || optKey);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(questionId, answer) {
    quizAnswers[questionId] = answer;
    quizCurrentIndex++;

    if (quizCurrentIndex < QUIZ_QUESTIONS.length) {
        renderQuestion();
    } else {
        completeQuiz();
    }
}

function completeQuiz() {
    userProfile.preferences = quizAnswers;
    userProfile.onboardingComplete = true;
    localStorage.setItem('learnfast_user', JSON.stringify(userProfile));
    initProfileView();
}

// Dashboard
function renderProfileDashboard() {
    document.getElementById('profile-name').textContent = userProfile.name;
    const prefList = document.getElementById('preferences-list');
    prefList.innerHTML = '';

    // Refresh static localized texts
    setLanguage(currentLang);

    // Map keys to readable labels if needed, or just iterate values
    Object.entries(userProfile.preferences).forEach(([key, value]) => {
        const li = document.createElement('li');
        // Translate key if possible, e.g. "interests" -> "Interests"
        // For simple display, Capitalizing first letter is okay
        li.innerHTML = `<strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}`;
        prefList.appendChild(li);
    });

    // Logout
    document.getElementById('logout-btn').onclick = () => {
        localStorage.removeItem('learnfast_user');
        userProfile = null;
        // Optionally clear inputs
        document.getElementById('username-input').value = '';
        initProfileView();
    };
}

// Initial Render
renderHomePage();

const HOME_DATA = [
    {
        category: "Games 🎮",
        items: [
            {
                type: "Game",
                title: "CodeCombat",
                desc: "Learn to code by playing a real game.",
                url: "https://codecombat.com/"
            },
            {
                type: "Game",
                title: "GeoGuessr",
                desc: "Explore the world and test your geography skills.",
                url: "https://www.geoguessr.com/"
            },
            {
                type: "Game",
                title: "Quick, Draw!",
                desc: "Can a neural network recognize your drawing?",
                url: "https://quickdraw.withgoogle.com/"
            }
        ]
    },
    {
        category: "Videos 🎥",
        items: [
            {
                type: "Video",
                title: "Kurzgesagt – In a Nutshell",
                desc: "Beautiful animated science videos.",
                url: "https://www.youtube.com/watch?v=sNhhvQGsMEc"
            },
            {
                type: "Video",
                title: "Veritasium",
                desc: "The element of truth - science and engineering videos.",
                url: "https://www.youtube.com/watch?v=Gj8Lerh9s2k"
            },
            {
                type: "Video",
                title: "TED-Ed",
                desc: "Lessons worth sharing from great educators.",
                url: "https://www.youtube.com/watch?v=P_6vDLq64gE"
            }
        ]
    },
    {
        category: "Facts 💡",
        items: [
            {
                type: "Fact",
                title: "Did you know?",
                desc: "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
                url: ""
            },
            {
                type: "Fact",
                title: "Space Fact",
                desc: "One day on Venus is longer than one year on Venus. It takes Venus longer to rotate once on its axis than to orbit the Sun.",
                url: ""
            },
            {
                type: "Fact",
                title: "Bio Fact",
                desc: "Octopuses have three hearts, nine brains, and blue blood.",
                url: ""
            }
        ]
    }
];

function renderHomePage() {
    const container = document.getElementById('home-grid');
    // Only render if empty to avoid duplicates
    if (container.innerHTML.trim() !== "") return;

    let delay = 0;

    HOME_DATA.forEach(section => {
        // Section Title
        const sectionTitle = document.createElement('h2');
        sectionTitle.className = 'section-title';
        sectionTitle.textContent = section.category;
        sectionTitle.style.gridColumn = "1 / -1"; // Span full width
        sectionTitle.style.marginTop = "2rem";
        sectionTitle.style.color = "var(--accent-color)";
        sectionTitle.style.animation = `fadeIn ${0.5 + delay}s ease forwards`;
        container.appendChild(sectionTitle);

        section.items.forEach(item => {
            createCard(item, container, delay);
            delay += 0.05;
        });
    });
}
