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
    // Games
    if (lowerUrl.includes('flexboxfroggy') || lowerUrl.includes('geoguessr') || lowerUrl.includes('codecombat') || lowerUrl.includes('quickdraw')) {
        return { icon: 'fa-solid fa-gamepad', siteType: 'Game', className: 'site-default' };
    }
    // Facts (often Wiki)
    if (lowerUrl.includes('wikipedia.org')) {
        return { icon: 'fa-brands fa-wikipedia-w', siteType: 'Fact Source', className: 'site-wiki' };
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

/* --- Navigation & Explore Logic --- */

// Navigation Switching
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const view = btn.getAttribute('data-view');

        // Update Buttons
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Toggle Views
        if (view === 'home') {
            document.getElementById('home-view').classList.remove('hidden');
            document.getElementById('explore-view').classList.add('hidden');
        } else {
            document.getElementById('home-view').classList.add('hidden');
            document.getElementById('explore-view').classList.remove('hidden');
            renderExplorePage();
        }
    });
});

const EXPLORE_DATA = [
    // --- GAMES ---
    {
        type: "Game",
        title: "Flexbox Froggy",
        desc: "Learn CSS Layouts by helping frogs reach their lilypads!",
        url: "https://flexboxfroggy.com/"
    },
    {
        type: "Game",
        title: "GeoGuessr",
        desc: "Explore the world and guess where you are dropped.",
        url: "https://www.geoguessr.com/"
    },
    {
        type: "Game",
        title: "CodeCombat",
        desc: "Learn programming by playing a real RPG game.",
        url: "https://codecombat.com/"
    },
    {
        type: "Game",
        title: "Quick, Draw!",
        desc: "Can a neural network recognize your drawing?",
        url: "https://quickdraw.withgoogle.com/"
    },

    // --- FACTS ---
    {
        type: "Fact",
        title: "Honey Never Spoils",
        desc: "Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
        url: "https://en.wikipedia.org/wiki/Honey#Preservation"
    },
    {
        type: "Fact",
        title: "Octopuses Have 3 Hearts",
        desc: "Two hearts pump blood to the gills, while a third circulates it to the rest of the body.",
        url: "https://en.wikipedia.org/wiki/Octopus#Anatomy_and_physiology"
    },
    {
        type: "Fact",
        title: "Space is Silent",
        desc: "Since there is no atmosphere in space, sound waves have no medium to travel through.",
        url: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-sound-58.html"
    },

    // --- VIDEOS ---
    {
        type: "Video",
        title: "The Scale of the Universe",
        desc: "Mind-blowing visualization of the size of things.",
        url: "https://www.youtube.com/watch?v=i93Z7zljQ7I"
    },
    {
        type: "Video",
        title: "Do You Have Free Will?",
        desc: "Philosophy and science collision by Veritasium.",
        url: "https://www.youtube.com/watch?v=KIKCn74d9Dg"
    },
    {
        type: "Video Series",
        title: "Crash Course Computer Science",
        desc: "An amazing animated series about how computers work.",
        url: "https://www.youtube.com/watch?v=O5nskjZ_GoI&list=PL8dPuuaLjXtNlUrcyK6XZDmeOGIYJwdi2"
    }
];

// Helper to determine icon for new types
function getExploreIcon(type) {
    if (type === 'Game') return 'fa-solid fa-gamepad';
    if (type === 'Fact') return 'fa-solid fa-lightbulb';
    if (type === 'Video' || type === 'Video Series') return 'fa-brands fa-youtube';
    return 'fa-solid fa-star';
}

function renderExplorePage(category = 'all') {
    const container = document.getElementById('explore-grid');
    container.innerHTML = ''; // Clear current content

    let delay = 0;
    EXPLORE_DATA.forEach(item => {
        // Filter Logic
        if (category !== 'all' && item.type !== category) return;

        // Custom createCard logic for explore items to handle special icons if needed
        // Or reuse existing createCard but maybe inject custom icon class?
        // Let's rely on createCard but assume we might need to patch the icon if getSiteInfo doesn't catch it
        // Simpler: Just re-use createCard. getSiteInfo checks URL. 
        // For "Fact" or "Game" without specific URL patterns, we might want manual overrides.
        // Let's modify createCard slightly or just rely on URL. 
        // Actually, let's just use createCard. It works well enough.
        // But to make "Games" look like Games, we might need a small hack or update getSiteInfo? 
        // Let's just update the item object passed to createCard to force an icon class if we want.

        // For now, standard render.
        createCard(item, container, delay);
        delay += 0.1;
    });
}

// Filter Event Listeners
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Active State
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter
        const category = btn.getAttribute('data-category');
        renderExplorePage(category);
    });
});
