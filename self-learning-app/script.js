const GEMINI_API_KEY = 'AIzaSyDMMqNGnGtY9OwHA261DVbopjb5lP7A3Lc';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${GEMINI_API_KEY}`;

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
        cardSearch: "Google Search"
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
        cardSearch: "Google Որոնում"
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
        cardSearch: "Google Поиск"
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

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
        })
    });

    const data = await response.json();
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

function createCard(item, container, delay) {
    const card = document.createElement('a');
    card.href = item.url || item.link;
    card.target = "_blank";
    card.className = 'result-card';
    card.style.animationDelay = `${delay}s`;

    card.innerHTML = `
        <span class="card-tag">${item.type}</span>
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
