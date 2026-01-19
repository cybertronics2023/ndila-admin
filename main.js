// ============================================
// Jane Ndila Admin - Content Management System
// ============================================

// Default content data
const defaultContent = {
    settings: {
        brandName: "Jane Ndila",
        tagline: "Addiction Counsellor | Executive Coach | Trainer",
        motto: "Empowered for Transformation",
        contact: {
            email: "jandilam77@gmail.com",
            phone: "+254 721 205 993",
            address: "Utawala, Nairobi, Kenya"
        },
        hours: {
            weekday: "Monday - Friday: 9:00 AM - 6:00 PM",
            saturday: "Saturday: 10:00 AM - 2:00 PM",
            sunday: "Sunday: Closed"
        }
    },
    homepage: {
        hero: {
            title: "Jane Ndila",
            subtitle: "Addiction Counsellor | Executive Coach | Trainer",
            description: '"Empowered for Transformation"',
            image: "images/hero-portrait.jpg"
        },
        approach: {
            title: "My Approach",
            description: '"Healing begins with listening." I believe in creating a safe, non-judgmental space where you can explore your thoughts and feelings openly. My approach combines evidence-based techniques with genuine compassion and understanding.',
            image: "images/Janes-approach.JPG"
        },
        services: [
            { title: "Individual Therapy", description: "One-on-one sessions tailored to your personal challenges and growth goals." },
            { title: "Couples Therapy", description: "Strengthen your relationship and improve communication with your partner." },
            { title: "Family Counselling", description: "Help your family navigate challenges and build healthier relationships." },
            { title: "Child & Adolescent", description: "Specialized support for young people facing emotional and behavioral challenges." },
            { title: "Trauma Recovery", description: "Healing from past trauma in a safe, supportive environment." },
            { title: "Online Sessions", description: "Flexible virtual counselling from the comfort of your home." }
        ]
    },
    about: {
        hero: {
            title: "About Jane Ndila",
            subtitle: "Licensed Psychologist & Certified Counsellor",
            quote: '"Healing begins when we feel heard, understood, and supported in our journey toward wellness."',
            image: "images/about-profile.jpg"
        },
        journey: {
            text: "With over 8 years of experience in mental health care, I have dedicated my career to helping individuals and families navigate life's challenges and discover their inner strength.",
            stats: [
                { value: "8+", label: "Years Experience" },
                { value: "500+", label: "Clients Helped" },
                { value: "3", label: "Professional Certifications" }
            ]
        },
        qualifications: {
            education: [
                "Masters in Clinical Psychology - University of Nairobi",
                "Bachelor of Arts in Psychology - Kenyatta University",
                "Diploma in Counselling Psychology - Kenya Institute of Professional Counselling"
            ],
            certifications: [
                "Licensed Clinical Psychologist - KCPA",
                "Certified Trauma Professional",
                "Gottman Method Couples Therapy (Level 1 & 2)",
                "Cognitive Behavioral Therapy Certification"
            ],
            memberships: [
                "Kenya Counselling and Psychological Association (KCPA)",
                "African Association of Psychologists",
                "International Association of Cognitive Psychotherapy"
            ]
        },
        philosophy: {
            quote: '"Every person has the capacity for growth and healing. My role is to provide the safe space and guidance needed for that transformation to occur."',
            approaches: [
                { title: "Client-Centered Approach", description: "I believe you are the expert on your own life. My role is to walk alongside you, offering professional guidance and support as you navigate your journey." },
                { title: "Evidence-Based Practice", description: "I integrate proven therapeutic approaches including CBT, psychodynamic therapy, and solution-focused techniques tailored to your unique needs." },
                { title: "Cultural Sensitivity", description: "I honor and respect the diverse cultural backgrounds and experiences that each client brings to the therapeutic space." }
            ]
        },
        benefits: [
            { title: "Proven Expertise", description: "8+ years of specialized experience with proven results across diverse client needs." },
            { title: "Compassionate Care", description: "Genuine empathy and non-judgmental support in a safe, confidential environment." },
            { title: "Personalized Approach", description: "Treatment plans tailored to your unique circumstances, goals, and preferences." },
            { title: "Flexible Options", description: "In-person sessions in Nairobi or convenient online therapy from anywhere in Kenya." }
        ]
    },
    services: {
        heroImage: "",
        overview: "I believe in providing holistic care that addresses not just symptoms, but the root causes of emotional distress. My integrative approach combines the best of evidence-based therapies with genuine human connection.",
        items: [
            {
                title: "Individual Therapy",
                description: "One-on-one sessions focused on your personal growth, emotional well-being, and specific challenges.",
                expectations: ["Personalized treatment plan", "Confidential, supportive space", "Evidence-based techniques", "Progress tracking and feedback"],
                duration: "50-60 minutes",
                format: "In-person or Online"
            },
            {
                title: "Couples Therapy",
                description: "Strengthen your relationship through improved communication, conflict resolution, and deeper emotional connection.",
                expectations: ["Communication skills", "Conflict resolution", "Intimacy and connection", "Trust rebuilding"],
                duration: "75-90 minutes",
                format: "In-person or Online"
            },
            {
                title: "Family Counselling",
                description: "Help your family navigate challenges, improve communication, and build healthier relationships.",
                expectations: ["Parent-child conflicts", "Blended family dynamics", "Communication breakdowns", "Life transitions"],
                duration: "60-90 minutes",
                format: "In-person Preferred"
            },
            {
                title: "Child & Adolescent Therapy",
                description: "Specialized support for children and teenagers facing emotional, behavioral, or social challenges.",
                expectations: ["Anxiety and depression", "School-related stress", "Behavioral issues", "Social skills development"],
                duration: "45-60 minutes",
                format: "Play-based & Talk Therapy"
            },
            {
                title: "Trauma Recovery",
                description: "Healing from past trauma in a safe, supportive environment using trauma-informed approaches.",
                expectations: ["Trauma-Focused CBT", "EMDR techniques", "Somatic experiencing", "Mindfulness practices"],
                duration: "60-75 minutes",
                format: "Gentle, paced approach"
            },
            {
                title: "Online Therapy",
                description: "Flexible virtual counselling from the comfort of your home with secure video sessions.",
                expectations: ["Convenience and flexibility", "No travel required", "Comfort of your own space", "Same professional standards"],
                duration: "Varies",
                format: "Secure Video Call"
            }
        ],
        process: [
            { step: 1, title: "Initial Consultation", description: "We'll discuss your concerns, goals, and determine if we're a good fit for working together." },
            { step: 2, title: "Assessment & Planning", description: "Comprehensive evaluation and creation of your personalized treatment plan." },
            { step: 3, title: "Regular Sessions", description: "Weekly or bi-weekly sessions implementing your tailored therapy approach." },
            { step: 4, title: "Progress & Adjustment", description: "Regular progress reviews and adjustments to ensure we're meeting your goals." }
        ]
    },
    projects: [
        { title: "Youth Empowerment Program", description: "Helping young people build resilience, develop healthy coping mechanisms, and prepare for successful futures through mentorship and counselling." },
        { title: "Community Wellness Initiative", description: "Bringing mental health awareness and resources to underserved communities through workshops, seminars, and accessible counselling services." },
        { title: "Corporate Training Program", description: "Customized training modules for organizations focused on workplace wellness, stress management, and team dynamics." },
        { title: "Addiction Recovery Support", description: "Comprehensive programs supporting individuals and families through the journey of addiction recovery with compassion and evidence-based approaches." },
        { title: "Mental Health Education", description: "Educational initiatives aimed at reducing stigma and promoting mental health literacy in schools and community organizations." },
        { title: "Executive Coaching Program", description: "Tailored coaching for business leaders focusing on personal development, leadership skills, and work-life balance." }
    ],
    portfolio: {
        certifications: [
            { category: "Addiction Counselling", items: ["Certified Addiction Counsellor (CAC)", "Substance Abuse Professional Training", "Recovery Coach Certification"] },
            { category: "Executive Coaching", items: ["ICF Certified Coach", "Leadership Development Specialist", "Corporate Wellness Consultant"] },
            { category: "Training & Facilitation", items: ["Certified Professional Trainer", "Workshop Facilitation Specialist", "Adult Learning Methodology"] }
        ],
        achievements: [
            { title: "500+ Clients Served", description: "Successfully supported hundreds of individuals and families on their wellness journey." },
            { title: "50+ Workshops Conducted", description: "Led numerous workshops on mental health, addiction recovery, and personal development." },
            { title: "10+ Years Experience", description: "A decade of dedicated service in mental health and counselling services." },
            { title: "Community Impact", description: "Made lasting positive changes in communities through outreach and education programs." }
        ],
        journey: "My journey in mental health and counselling began over a decade ago, driven by a deep passion for helping others overcome their challenges and transform their lives."
    },
    videos: {
        featured: {
            title: "Empowered for Transformation",
            description: "Discover the key principles behind lasting personal change and how to unlock your potential for growth and healing.",
            url: ""
        },
        items: [
            { title: "Understanding Addiction", description: "An in-depth look at the psychology of addiction and the path to recovery.", duration: "15 min", date: "Dec 2024" },
            { title: "Building Resilience", description: "Practical strategies for developing mental strength and overcoming adversity.", duration: "12 min", date: "Nov 2024" },
            { title: "Healthy Relationships", description: "Tips for nurturing meaningful connections and improving communication.", duration: "18 min", date: "Oct 2024" },
            { title: "Managing Stress", description: "Effective techniques for managing daily stress and maintaining balance.", duration: "10 min", date: "Sep 2024" },
            { title: "Parenting with Purpose", description: "Guidance for parents on raising emotionally healthy children.", duration: "20 min", date: "Aug 2024" },
            { title: "Self-Care Essentials", description: "Building a sustainable self-care routine for mental wellness.", duration: "14 min", date: "Jul 2024" }
        ]
    },
    gallery: [
        { title: "Professional Event", description: "Engaging with the community", category: "events", image: "images/gallery/WhatsApp Image 2025-12-18 at 16.25.59.jpeg", featured: true },
        { title: "Workshop Session", description: "Training and development", category: "workshops", image: "images/gallery/WhatsApp Image 2025-12-18 at 16.25.57.jpeg" },
        { title: "Community Outreach", description: "Making a difference", category: "community", image: "images/gallery/WhatsApp Image 2025-12-18 at 16.25.58.jpeg" },
        { title: "Professional Moment", description: "Dedication to excellence", category: "professional", image: "images/gallery/WhatsApp Image 2025-12-18 at 16.25.58 (1).jpeg" },
        { title: "Special Event", description: "Creating memorable moments", category: "events", image: "images/gallery/WhatsApp Image 2025-12-18 at 16.25.59 (1).jpeg" },
        { title: "Training Workshop", description: "Empowering through education", category: "workshops", image: "images/gallery/WhatsApp Image 2025-12-18 at 16.26.00.jpeg" },
        { title: "Community Engagement", description: "Building connections", category: "community", image: "images/gallery/WhatsApp Image 2025-12-18 at 16.26.01.jpeg" },
        { title: "Professional Development", description: "Continuous growth", category: "professional", image: "images/gallery/WhatsApp Image 2025-12-18 at 16.26.01 (1).jpeg" },
        { title: "Event Highlight", description: "Celebrating achievements", category: "events", image: "images/gallery/WhatsApp Image 2025-12-18 at 16.26.02.jpeg" }
    ],
    faq: [
        { question: "How do I know if therapy is right for me?", answer: "Therapy can benefit anyone facing life challenges, emotional distress, or seeking personal growth. If you're experiencing persistent sadness, anxiety, relationship issues, or simply want to understand yourself better, therapy can help. I offer a free 15-minute consultation to discuss your needs." },
        { question: "What can I expect in the first session?", answer: "The first session is about getting to know each other. We'll discuss what brings you to therapy, your goals, and your background. It's a safe space for you to share as much or as little as you feel comfortable with. There's no pressure - we'll go at your pace." },
        { question: "Is online therapy as effective as in-person?", answer: "Yes, research shows online therapy can be just as effective as in-person sessions for many concerns. The key is finding a quiet, private space where you feel comfortable. Online therapy offers flexibility and accessibility while maintaining the same professional standards." },
        { question: "How long does therapy typically last?", answer: "The duration varies depending on your goals and needs. Some clients benefit from short-term therapy (8-12 sessions), while others prefer longer-term support. We'll regularly review your progress and adjust as needed." },
        { question: "Is my information kept confidential?", answer: "Absolutely. Confidentiality is a fundamental aspect of therapy. Your information is protected by professional ethics and privacy laws. The only exceptions are if there's risk of harm to yourself or others." },
        { question: "Do you accept insurance?", answer: "I'm a private practitioner and work directly with clients. While I don't work directly with insurance companies, I can provide receipts for you to submit to your insurance provider for potential reimbursement." }
    ],
    // Page hero images
    contact: {
        heroImage: ""
    },
    book: {
        heroImage: ""
    },
    projectsPage: {
        heroImage: ""
    },
    portfolioPage: {
        heroImage: ""
    },
    galleryPage: {
        heroImage: ""
    },
    privacyPage: {
        heroImage: ""
    }
};

// Global state
let content = {};
let currentSection = 'dashboard';
let supabaseClient = null;
let isConnected = false;

// Supabase configuration
const SUPABASE_CONFIG_KEY = 'janeNdilaSupabaseConfig';

// Initialize app
document.addEventListener('DOMContentLoaded', async () => {
    await initSupabase();
    await loadContent();
    setupNavigation();
    setupSaveButton();
    setupExportButton();
    setupSupabaseModal();
    renderSection('dashboard');
    updateSyncStatus();
});

// Initialize Supabase client
async function initSupabase() {
    const url = 'https://avezwecbtvtkbtctsbzh.supabase.co';
    const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2ZXp3ZWNidHZ0a2J0Y3RzYnpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4MTk1MDEsImV4cCI6MjA4NDM5NTUwMX0.qa-Tnzl37ts25QAtQ_ek6BljCo-ndZjS-2rD0T03bhM';

    try {
        supabaseClient = window.supabase.createClient(url, key);
        isConnected = true;

        // Use timeout to wait for DOM elements if they aren't ready immediately
        setTimeout(() => {
            const urlInput = document.getElementById('supabaseUrl');
            const keyInput = document.getElementById('supabaseKey');
            if (urlInput) urlInput.value = url;
            if (keyInput) keyInput.value = key;
        }, 0);
    } catch (e) {
        console.error('Failed to initialize Supabase:', e);
        isConnected = false;
    }
}

// Update sync status indicator
function updateSyncStatus(status = null) {
    const syncStatus = document.getElementById('syncStatus');
    const syncIcon = syncStatus.querySelector('.sync-icon');
    const syncText = syncStatus.querySelector('.sync-text');
    const configBtn = document.getElementById('configBtn');

    syncStatus.classList.remove('connected', 'syncing', 'error');

    if (status === 'syncing') {
        syncStatus.classList.add('syncing');
        syncIcon.setAttribute('data-lucide', 'loader-2');
        syncText.textContent = 'Syncing...';
    } else if (status === 'error') {
        syncStatus.classList.add('error');
        syncIcon.setAttribute('data-lucide', 'alert-triangle');
        syncText.textContent = 'Sync Error';
    } else if (isConnected) {
        syncStatus.classList.add('connected');
        syncIcon.setAttribute('data-lucide', 'cloud');
        syncText.textContent = 'Cloud';
        configBtn.innerHTML = '<i data-lucide="check-circle"></i> Connected';
    } else {
        syncIcon.setAttribute('data-lucide', 'hard-drive');
        syncText.textContent = 'Local';
        configBtn.innerHTML = '<i data-lucide="cloud"></i> Connect';
    }
    // Re-initialize Lucide icons for the updated elements
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Setup Supabase configuration modal
function setupSupabaseModal() {
    const modal = document.getElementById('configModal');
    const configBtn = document.getElementById('configBtn');
    const closeBtn = document.getElementById('closeModal');
    const connectBtn = document.getElementById('connectBtn');
    const disconnectBtn = document.getElementById('disconnectBtn');

    configBtn.addEventListener('click', () => modal.classList.add('show'));
    closeBtn.addEventListener('click', () => modal.classList.remove('show'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('show');
    });

    connectBtn.addEventListener('click', async () => {
        const url = document.getElementById('supabaseUrl').value.trim();
        const key = document.getElementById('supabaseKey').value.trim();

        if (!url || !key) {
            showToast('Please enter both URL and Key', 'error');
            return;
        }

        try {
            // Test connection by initializing client
            supabaseClient = window.supabase.createClient(url, key);

            // Try to load content to verify connection
            updateSyncStatus('syncing');
            const { data, error } = await supabaseClient
                .from('site_content')
                .select('content')
                .limit(1);

            if (error) throw error;

            // Save config
            localStorage.setItem(SUPABASE_CONFIG_KEY, JSON.stringify({ url, key }));
            isConnected = true;

            // If cloud has data, load it
            if (data && data.length > 0 && data[0].content) {
                content = data[0].content;
                localStorage.setItem('janeNdilaContent', JSON.stringify(content));
                renderSection(currentSection);
                showToast('Connected! Content loaded from cloud.', 'success');
            } else {
                // Upload current local content to cloud
                await saveToSupabase();
                showToast('Connected! Local content synced to cloud.', 'success');
            }

            updateSyncStatus();
            modal.classList.remove('show');
        } catch (e) {
            console.error('Connection failed:', e);
            updateSyncStatus('error');
            showToast('Connection failed: ' + e.message, 'error');
            isConnected = false;
            supabaseClient = null;
        }
    });

    disconnectBtn.addEventListener('click', () => {
        localStorage.removeItem(SUPABASE_CONFIG_KEY);
        supabaseClient = null;
        isConnected = false;
        document.getElementById('supabaseUrl').value = '';
        document.getElementById('supabaseKey').value = '';
        updateSyncStatus();
        showToast('Disconnected from cloud', 'success');
        modal.classList.remove('show');
    });
}

// Load content from Supabase or localStorage
async function loadContent() {
    // First, try localStorage for immediate display
    const saved = localStorage.getItem('janeNdilaContent');
    content = saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(defaultContent));

    // If connected, try to load from Supabase
    if (isConnected && supabaseClient) {
        try {
            updateSyncStatus('syncing');
            const { data, error } = await supabaseClient
                .from('site_content')
                .select('content')
                .order('updated_at', { ascending: false })
                .limit(1);

            if (error) throw error;

            if (data && data.length > 0 && data[0].content) {
                content = data[0].content;
                localStorage.setItem('janeNdilaContent', JSON.stringify(content));
            }
            updateSyncStatus();
        } catch (e) {
            console.error('Failed to load from Supabase:', e);
            updateSyncStatus('error');
        }
    }
}

// Save content to Supabase
async function saveToSupabase() {
    if (!isConnected || !supabaseClient) return;

    try {
        // Check if a row exists
        const { data: existing } = await supabaseClient
            .from('site_content')
            .select('id')
            .limit(1);

        if (existing && existing.length > 0) {
            // Update existing row
            const { error } = await supabaseClient
                .from('site_content')
                .update({
                    content: content,
                    updated_at: new Date().toISOString()
                })
                .eq('id', existing[0].id);

            if (error) throw error;
        } else {
            // Insert new row
            const { error } = await supabaseClient
                .from('site_content')
                .insert({ content: content });

            if (error) throw error;
        }
    } catch (e) {
        console.error('Failed to save to Supabase:', e);
        throw e;
    }
}

// Collect all form data into content object before saving
function collectFormData() {
    // Helper to get input value by ID
    const getValue = (id) => {
        const el = document.getElementById(id) || document.querySelector(`[data-field="${id}"]`);
        return el ? el.value : null;
    };

    // --- Settings ---
    if (content.settings) {
        const brandName = getValue('settings_brandName');
        if (brandName !== null) content.settings.brandName = brandName;

        const tagline = getValue('settings_tagline');
        if (tagline !== null) content.settings.tagline = tagline;

        const motto = getValue('settings_motto');
        if (motto !== null) content.settings.motto = motto;

        // Ensure contact object exists
        if (!content.settings.contact) {
            content.settings.contact = {};
        }

        const email = getValue('settings_email');
        if (email !== null) {
            content.settings.contact.email = email;
            content.settings.email = email; // Also update top-level for compatibility
        }

        const phone = getValue('settings_phone');
        if (phone !== null) {
            content.settings.contact.phone = phone;
            content.settings.phone = phone; // Also update top-level for compatibility
        }

        const address = getValue('settings_address');
        if (address !== null) {
            content.settings.contact.address = address;
            content.settings.address = address; // Also update top-level for compatibility
        }

        // Ensure hours object exists
        if (!content.settings.hours) {
            content.settings.hours = {};
        }

        const weekday = getValue('settings_hours_weekday');
        if (weekday !== null) content.settings.hours.weekday = weekday;

        const saturday = getValue('settings_hours_saturday');
        if (saturday !== null) content.settings.hours.saturday = saturday;

        const sunday = getValue('settings_hours_sunday');
        if (sunday !== null) content.settings.hours.sunday = sunday;
    }

    // --- Homepage ---
    if (content.homepage) {
        if (content.homepage.hero) {
            const heroTitle = getValue('homepage_hero_title');
            if (heroTitle !== null) content.homepage.hero.title = heroTitle;

            const heroSubtitle = getValue('homepage_hero_subtitle');
            if (heroSubtitle !== null) content.homepage.hero.subtitle = heroSubtitle;

            const heroDesc = getValue('homepage_hero_description');
            if (heroDesc !== null) content.homepage.hero.description = heroDesc;
        }
        if (content.homepage.approach) {
            const approachTitle = getValue('homepage_approach_title');
            if (approachTitle !== null) content.homepage.approach.title = approachTitle;

            const approachDesc = getValue('homepage_approach_description');
            if (approachDesc !== null) content.homepage.approach.description = approachDesc;
        }
    }

    // --- About ---
    if (content.about) {
        if (content.about.hero) {
            const aboutTitle = getValue('about_hero_title');
            if (aboutTitle !== null) content.about.hero.title = aboutTitle;

            const aboutSubtitle = getValue('about_hero_subtitle');
            if (aboutSubtitle !== null) content.about.hero.subtitle = aboutSubtitle;

            const aboutQuote = getValue('about_hero_quote');
            if (aboutQuote !== null) content.about.hero.quote = aboutQuote;
        }
        if (content.about.journey) {
            const journeyText = getValue('about_journey_text');
            if (journeyText !== null) content.about.journey.text = journeyText;
        }
        if (content.about.philosophy) {
            const philQuote = getValue('about_philosophy_quote');
            if (philQuote !== null) content.about.philosophy.quote = philQuote;
        }
    }

    // --- Services ---
    if (content.services) {
        const overview = getValue('services_overview');
        if (overview !== null) content.services.overview = overview;
    }

    // --- Portfolio ---
    if (content.portfolio) {
        const journey = getValue('portfolio_journey');
        if (journey !== null) content.portfolio.journey = journey;
    }

    // --- Videos ---
    if (content.videos && content.videos.featured) {
        const featTitle = getValue('videos_featured_title');
        if (featTitle !== null) content.videos.featured.title = featTitle;

        const featDesc = getValue('videos_featured_description');
        if (featDesc !== null) content.videos.featured.description = featDesc;

        const featUrl = getValue('videos_featured_url');
        if (featUrl !== null) content.videos.featured.url = featUrl;
    }

    // --- Hero Images ---
    const getHeroImage = (id) => getValue(id);

    const homepageHero = getHeroImage('homepage_hero_image');
    if (homepageHero !== null && content.homepage && content.homepage.hero) content.homepage.hero.image = homepageHero;

    const aboutHero = getHeroImage('about_hero_image');
    if (aboutHero !== null && content.about && content.about.hero) content.about.hero.image = aboutHero;

    const servicesHero = getHeroImage('services_hero_image');
    if (servicesHero !== null) {
        if (!content.services) content.services = {};
        content.services.heroImage = servicesHero;
    }

    const contactHero = getHeroImage('contact_hero_image');
    if (contactHero !== null) {
        if (!content.contact) content.contact = {};
        content.contact.heroImage = contactHero;
    }

    const bookHero = getHeroImage('book_hero_image');
    if (bookHero !== null) {
        if (!content.book) content.book = {};
        content.book.heroImage = bookHero;
    }

    const projectsHero = getHeroImage('projects_hero_image');
    if (projectsHero !== null) {
        if (!content.projectsPage) content.projectsPage = {};
        content.projectsPage.heroImage = projectsHero;
    }

    const portfolioHero = getHeroImage('portfolio_hero_image');
    if (portfolioHero !== null) {
        if (!content.portfolioPage) content.portfolioPage = {};
        content.portfolioPage.heroImage = portfolioHero;
    }

    const videosHero = getHeroImage('videos_hero_image');
    if (videosHero !== null) {
        if (!content.videos) content.videos = {};
        content.videos.heroImage = videosHero;
    }

    const galleryHero = getHeroImage('gallery_hero_image');
    if (galleryHero !== null) {
        if (!content.galleryPage) content.galleryPage = {};
        content.galleryPage.heroImage = galleryHero;
    }

    const privacyHero = getHeroImage('privacy_hero_image');
    if (privacyHero !== null) {
        if (!content.privacyPage) content.privacyPage = {};
        content.privacyPage.heroImage = privacyHero;
    }

    console.log('Form data collected:', content.settings);
}

// Save content to localStorage and Supabase
async function saveContent() {
    // Always save to localStorage first (offline fallback)
    localStorage.setItem('janeNdilaContent', JSON.stringify(content));

    if (isConnected && supabaseClient) {
        try {
            updateSyncStatus('syncing');
            await saveToSupabase();
            updateSyncStatus();
            showToast('Saved to cloud! ☁️', 'success');
        } catch (e) {
            updateSyncStatus('error');
            showToast('Saved locally. Cloud sync failed.', 'error');
        }
    } else {
        showToast('Changes saved locally', 'success');
    }
}

// ============================================
// Image Upload Functions
// ============================================

// Helper to escape HTML special characters
function escapeHtml(unsafe) {
    if (!unsafe) return '';
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Create image upload component HTML
function createImageUpload(fieldId, currentValue, label = 'Image') {
    const hasImage = currentValue && currentValue.length > 0;
    const isBase64 = currentValue && currentValue.startsWith('data:');
    const displaySrc = isBase64 ? currentValue : (currentValue ? `../jane-ndila/${currentValue}` : '');

    return `
        <div class="form-group">
            <label>${label}</label>
            <div class="image-upload-container">
                <div class="image-preview-box" id="preview_${fieldId}">
                    ${hasImage ? `<img src="${displaySrc}" alt="Preview" class="preview-img">` : '<span class="no-image">No image</span>'}
                </div>
                <div class="image-upload-actions">
                    <label class="btn btn-secondary upload-btn">
                        <i data-lucide="camera"></i> Upload Image
                        <input type="file" accept="image/*" onchange="handleImageUpload('${fieldId}', this)" hidden>
                    </label>
                    <input type="text" data-field="${fieldId}" value="${currentValue || ''}" placeholder="Or enter image path" class="image-path-input">
                    ${hasImage ? `<button type="button" class="btn btn-delete" onclick="clearImage('${fieldId}')">Remove</button>` : ''}
                </div>
            </div>
            <p class="form-hint">Upload an image or enter a path relative to the website folder</p>
        </div>
    `;
}

// Handle image file upload
async function handleImageUpload(fieldId, input) {
    const file = input.files[0];
    if (!file) return;

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
        showToast('Image too large. Max size is 5MB.', 'error');
        return;
    }

    // Show loading state
    const previewBox = document.getElementById(`preview_${fieldId}`);
    previewBox.innerHTML = '<span class="loading">Uploading...</span>';

    try {
        // Try Supabase Storage if connected
        if (isConnected && supabaseClient) {
            const imageUrl = await uploadToSupabaseStorage(file, fieldId);
            if (imageUrl) {
                updateImageField(fieldId, imageUrl, imageUrl);
                return;
            }
        }

        // Fallback to base64
        const base64 = await fileToBase64(file);
        updateImageField(fieldId, base64, base64);

    } catch (e) {
        console.error('Image upload failed:', e);
        showToast('Image upload failed', 'error');
        previewBox.innerHTML = '<span class="no-image">Upload failed</span>';
    }
}

// Upload to Supabase Storage
async function uploadToSupabaseStorage(file, fieldId) {
    try {
        const fileName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
        const { data, error } = await supabaseClient.storage
            .from('images')
            .upload(fileName, file, { upsert: true });

        if (error) throw error;

        // Get public URL
        const { data: urlData } = supabaseClient.storage
            .from('images')
            .getPublicUrl(fileName);

        return urlData.publicUrl;
    } catch (e) {
        console.warn('Supabase Storage upload failed, using base64:', e);
        return null;
    }
}

// Convert file to base64
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Update image field value and preview
function updateImageField(fieldId, value, displaySrc) {
    // Update hidden input
    const input = document.querySelector(`[data-field="${fieldId}"]`);
    if (input) input.value = value;

    // Update preview
    const previewBox = document.getElementById(`preview_${fieldId}`);
    if (previewBox) {
        previewBox.innerHTML = `<img src="${displaySrc}" alt="Preview" class="preview-img">`;
    }

    // Update content object
    const parts = fieldId.split('_');
    setNestedValue(content, parts, value);
}

// Clear image
function clearImage(fieldId) {
    updateImageField(fieldId, '', '');
    const previewBox = document.getElementById(`preview_${fieldId}`);
    if (previewBox) {
        previewBox.innerHTML = '<span class="no-image">No image</span>';
    }
}

// Handle gallery image upload
async function handleGalleryImageUpload(index, input) {
    const file = input.files[0];
    if (!file) return;

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
        showToast('Image too large. Max size is 5MB.', 'error');
        return;
    }

    try {
        let imageValue;

        // Try Supabase Storage if connected
        if (isConnected && supabaseClient) {
            imageValue = await uploadToSupabaseStorage(file, `gallery_${index}`);
        }

        // Fallback to base64
        if (!imageValue) {
            imageValue = await fileToBase64(file);
        }

        // Update the content
        if (content.gallery && content.gallery[index]) {
            content.gallery[index].image = imageValue;
        }

        // Update the input field
        const imageInput = document.querySelector(`[data-field="gallery_${index}_image"]`);
        if (imageInput) imageInput.value = imageValue;

        // Re-render the gallery section
        renderSection('gallery');

        showToast('Image uploaded successfully!', 'success');
    } catch (e) {
        console.error('Gallery image upload failed:', e);
        showToast('Image upload failed', 'error');
    }
}

// Setup navigation
function setupNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = item.dataset.section;

            // Collect data from current section before switching
            // This ensures edits aren't lost when the DOM is replaced
            if (typeof collectFormData === 'function') {
                collectFormData();
            }

            // Update active state
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            currentSection = section;
            renderSection(section);
        });
    });
}

// Setup save button
function setupSaveButton() {
    document.getElementById('saveBtn').addEventListener('click', async () => {
        collectFormData();
        await saveContent();
    });
}

// Setup export button
function setupExportButton() {
    document.getElementById('exportBtn').addEventListener('click', exportSite);
}

// Show toast notification
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.querySelector('.toast-message').textContent = message;
    toast.className = `toast show ${type}`;
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Render section
function renderSection(section) {
    document.getElementById('sectionTitle').textContent = getSectionTitle(section);
    const contentArea = document.getElementById('contentArea');

    switch (section) {
        case 'dashboard': contentArea.innerHTML = renderDashboard(); break;
        case 'settings': contentArea.innerHTML = renderSettings(); break;
        case 'homepage': contentArea.innerHTML = renderHomepage(); break;
        case 'about': contentArea.innerHTML = renderAbout(); break;
        case 'services': contentArea.innerHTML = renderServices(); break;
        case 'projects': contentArea.innerHTML = renderProjects(); break;
        case 'portfolio': contentArea.innerHTML = renderPortfolio(); break;
        case 'videos': contentArea.innerHTML = renderVideos(); break;
        case 'gallery': contentArea.innerHTML = renderGallery(); break;
        case 'faq': contentArea.innerHTML = renderFAQ(); break;
        default: contentArea.innerHTML = '<p>Section not found</p>';
    }

    setupListActions();

    // Re-initialize Lucide icons for dynamically rendered content
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function getSectionTitle(section) {
    const titles = {
        dashboard: 'Dashboard',
        settings: 'Site Settings',
        homepage: 'Homepage Content',
        about: 'About Page',
        services: 'Services',
        projects: 'Projects',
        portfolio: 'Portfolio',
        videos: 'Videos',
        gallery: 'Gallery',
        faq: 'FAQ'
    };
    return titles[section] || 'Content Editor';
}

// Dashboard
function renderDashboard() {
    return `
        <div class="section-intro">
            <h3>Welcome to the Admin Dashboard</h3>
            <p>Manage all content for the Jane Ndila website from this central location. Use the sidebar to navigate to different sections.</p>
        </div>
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-icon"><i data-lucide="briefcase"></i></div>
                <div class="value">${content.services?.items?.length || 6}</div>
                <div class="label">Services</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon"><i data-lucide="folder-open"></i></div>
                <div class="value">${content.projects?.length || 6}</div>
                <div class="label">Projects</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon"><i data-lucide="video"></i></div>
                <div class="value">${content.videos?.items?.length || 6}</div>
                <div class="label">Videos</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon"><i data-lucide="image"></i></div>
                <div class="value">${content.gallery?.length || 9}</div>
                <div class="label">Gallery Items</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon"><i data-lucide="help-circle"></i></div>
                <div class="value">${content.faq?.length || 6}</div>
                <div class="label">FAQ Items</div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3>Quick Actions</h3>
            </div>
            <p>Click on any section in the sidebar to start editing content. Don't forget to click "Save Changes" after making edits, and "Export Site" when you're ready to download the updated website files.</p>
        </div>
    `;
}

// Settings Section
function renderSettings() {
    const s = content.settings;
    return `
        <div class="card">
            <div class="card-header"><h3>Page Banners (Hero Images)</h3></div>
            ${createImageUpload('contact_hero_image', content.contact?.heroImage, 'Contact Page Hero')}
            ${createImageUpload('book_hero_image', content.book?.heroImage, 'Book Session Page Hero')}
            ${createImageUpload('privacy_hero_image', content.privacyPage?.heroImage, 'Privacy Policy Page Hero')}
        </div>
        <div class="card">
            <div class="card-header"><h3>Brand Information</h3></div>
            <div class="form-row">
                <div class="form-group">
                    <label>Brand Name</label>
                    <input type="text" id="settings_brandName" value="${s.brandName}">
                </div>
                <div class="form-group">
                    <label>Tagline</label>
                    <input type="text" id="settings_tagline" value="${s.tagline}">
                </div>
            </div>
            <div class="form-group">
                <label>Motto</label>
                <input type="text" id="settings_motto" value="${s.motto}">
            </div>
        </div>
        <div class="card">
            <div class="card-header"><h3>Contact Information</h3></div>
            <div class="form-row">
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="settings_email" value="${s.contact.email}">
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="tel" id="settings_phone" value="${s.contact.phone}">
                </div>
            </div>
            <div class="form-group">
                <label>Address</label>
                <input type="text" id="settings_address" value="${s.contact.address}">
            </div>
        </div>
        <div class="card">
            <div class="card-header"><h3>Business Hours</h3></div>
            <div class="form-group">
                <label>Weekdays</label>
                <input type="text" id="settings_hours_weekday" value="${s.hours.weekday}">
            </div>
            <div class="form-group">
                <label>Saturday</label>
                <input type="text" id="settings_hours_saturday" value="${s.hours.saturday}">
            </div>
            <div class="form-group">
                <label>Sunday</label>
                <input type="text" id="settings_hours_sunday" value="${s.hours.sunday}">
            </div>
        </div>
    `;
}

// Homepage Section
function renderHomepage() {
    const h = content.homepage;
    return `
        <div class="card">
            <div class="card-header"><h3>Hero Section</h3></div>
            <div class="form-row">
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" id="homepage_hero_title" value="${h.hero.title}">
                </div>
                <div class="form-group">
                    <label>Subtitle</label>
                    <input type="text" id="homepage_hero_subtitle" value="${h.hero.subtitle}">
                </div>
            </div>
            <div class="form-group">
                <label>Description</label>
                <input type="text" id="homepage_hero_description" value="${h.hero.description}">
            </div>
            ${createImageUpload('homepage_hero_image', h.hero.image, 'Hero Background Image')}
        </div>
        <div class="card">
            <div class="card-header"><h3>My Approach Section</h3></div>
            <div class="form-group">
                <label>Title</label>
                <input type="text" id="homepage_approach_title" value="${h.approach.title}">
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea id="homepage_approach_description" rows="4">${h.approach.description}</textarea>
            </div>
            ${createImageUpload('homepage_approach_image', h.approach.image, 'Approach Section Image')}
        </div>
        <div class="card">
            <div class="card-header">
                <h3>Services Preview</h3>
                <button class="btn btn-add" onclick="addListItem('homepage_services')">+ Add Service</button>
            </div>
            <div class="item-list" id="homepage_services_list">
                ${h.services.map((s, i) => `
                    <div class="item-card" data-index="${i}">
                        <div class="item-card-header">
                            <span class="item-card-title">Service ${i + 1}</span>
                            <div class="item-card-actions">
                                <button class="btn btn-delete" onclick="removeListItem('homepage_services', ${i})">Delete</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Title</label>
                            <input type="text" data-field="homepage_services_${i}_title" value="${s.title}">
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <textarea data-field="homepage_services_${i}_description" rows="2">${s.description}</textarea>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// About Section
function renderAbout() {
    const a = content.about;
    return `
        <div class="card">
            <div class="card-header"><h3>Hero Section</h3></div>
            <div class="form-row">
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" id="about_hero_title" value="${a.hero.title}">
                </div>
                <div class="form-group">
                    <label>Subtitle</label>
                    <input type="text" id="about_hero_subtitle" value="${a.hero.subtitle}">
                </div>
            </div>
            <div class="form-group">
                <label>Quote</label>
                <textarea id="about_hero_quote" rows="2">${a.hero.quote}</textarea>
            </div>
            ${createImageUpload('about_hero_image', a.hero?.image || '', 'Profile Image')}
        </div>
        <div class="card">
            <div class="card-header"><h3>Professional Journey</h3></div>
            <div class="form-group">
                <label>Main Text</label>
                <textarea id="about_journey_text" rows="4">${a.journey.text}</textarea>
            </div>
            <h4 style="margin: 1.5rem 0 1rem; color: var(--leafy-green);">Statistics</h4>
            <div class="form-row">
                ${a.journey.stats.map((stat, i) => `
                    <div class="form-group">
                        <label>Stat ${i + 1} Value</label>
                        <input type="text" id="about_journey_stats_${i}_value" value="${stat.value}">
                        <label style="margin-top:0.5rem">Stat ${i + 1} Label</label>
                        <input type="text" id="about_journey_stats_${i}_label" value="${stat.label}">
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="card">
            <div class="card-header"><h3>Qualifications</h3></div>
            <div class="form-group">
                <label>Education (one per line)</label>
                <textarea id="about_qualifications_education" rows="4">${a.qualifications?.education?.join('\n') || ''}</textarea>
            </div>
            <div class="form-group">
                <label>Certifications (one per line)</label>
                <textarea id="about_qualifications_certifications" rows="4">${a.qualifications?.certifications?.join('\n') || ''}</textarea>
            </div>
            <div class="form-group">
                <label>Memberships (one per line)</label>
                <textarea id="about_qualifications_memberships" rows="3">${a.qualifications?.memberships?.join('\n') || ''}</textarea>
            </div>
        </div>
        <div class="card">
            <div class="card-header"><h3>Philosophy</h3></div>
            <div class="form-group">
                <label>Quote</label>
                <textarea id="about_philosophy_quote" rows="3">${a.philosophy.quote}</textarea>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3>Benefits / Why Choose Me</h3>
                <button class="btn btn-add" onclick="addListItem('about_benefits')">+ Add Benefit</button>
            </div>
            <div class="item-list" id="about_benefits_list">
                ${(a.benefits || []).map((b, i) => `
                    <div class="item-card" data-index="${i}">
                        <div class="item-card-header">
                            <span class="item-card-title">${b.title}</span>
                            <div class="item-card-actions">
                                <button class="btn btn-delete" onclick="removeListItem('about_benefits', ${i})">Delete</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Title</label>
                            <input type="text" data-field="about_benefits_${i}_title" value="${b.title}">
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <textarea data-field="about_benefits_${i}_description" rows="2">${b.description}</textarea>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Services Section
function renderServices() {
    const s = content.services;
    return `
        <div class="card">
            <div class="card-header"><h3>Services Page Hero</h3></div>
            ${createImageUpload('services_hero_image', content.services?.heroImage, 'Header Image')}
        </div>
        <div class="card">
            <div class="card-header"><h3>Services Overview</h3></div>
            <div class="form-group">
                <label>Overview Text</label>
                <textarea id="services_overview" rows="3">${s.overview}</textarea>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3>Service Items</h3>
                <button class="btn btn-add" onclick="addListItem('services_items')">+ Add Service</button>
            </div>
            <div class="item-list" id="services_items_list">
                ${s.items.map((item, i) => `
                    <div class="item-card" data-index="${i}">
                        <div class="item-card-header">
                            <span class="item-card-title">${item.title}</span>
                            <div class="item-card-actions">
                                <button class="btn btn-delete" onclick="removeListItem('services_items', ${i})">Delete</button>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label>Title</label>
                                <input type="text" data-field="services_items_${i}_title" value="${item.title}">
                            </div>
                            <div class="form-group">
                                <label>Duration</label>
                                <input type="text" data-field="services_items_${i}_duration" value="${item.duration}">
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <textarea data-field="services_items_${i}_description" rows="2">${item.description}</textarea>
                        </div>
                        <div class="form-group">
                            <label>Format</label>
                            <input type="text" data-field="services_items_${i}_format" value="${item.format}">
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Projects Section
function renderProjects() {
    return `
        <div class="card">
            <div class="card-header"><h3>Projects Page Hero</h3></div>
            ${createImageUpload('projects_hero_image', content.projectsPage?.heroImage, 'Header Image')}
        </div>
        <div class="card">
            <div class="card-header">
                <h3>Project Items</h3>
                <button class="btn btn-add" onclick="addListItem('projects')">+ Add Project</button>
            </div>
            <div class="item-list" id="projects_list">
                ${content.projects.map((p, i) => `
                    <div class="item-card" data-index="${i}">
                        <div class="item-card-header">
                            <span class="item-card-title">${p.title}</span>
                            <div class="item-card-actions">
                                <button class="btn btn-delete" onclick="removeListItem('projects', ${i})">Delete</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Title</label>
                            <input type="text" data-field="projects_${i}_title" value="${p.title}">
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <textarea data-field="projects_${i}_description" rows="3">${p.description}</textarea>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Portfolio Section
function renderPortfolio() {
    const p = content.portfolio;
    return `
        <div class="card">
            <div class="card-header"><h3>Portfolio Page Hero</h3></div>
            ${createImageUpload('portfolio_hero_image', content.portfolioPage?.heroImage, 'Header Image')}
        </div>
        <div class="card">
            <div class="card-header"><h3>Professional Journey</h3></div>
            <div class="form-group">
                <label>Journey Text</label>
                <textarea id="portfolio_journey" rows="4">${p.journey}</textarea>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3>Achievements</h3>
                <button class="btn btn-add" onclick="addListItem('portfolio_achievements')">+ Add Achievement</button>
            </div>
            <div class="item-list" id="portfolio_achievements_list">
                ${p.achievements.map((a, i) => `
                    <div class="item-card" data-index="${i}">
                        <div class="item-card-header">
                            <span class="item-card-title">${a.title}</span>
                            <div class="item-card-actions">
                                <button class="btn btn-delete" onclick="removeListItem('portfolio_achievements', ${i})">Delete</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Title</label>
                            <input type="text" data-field="portfolio_achievements_${i}_title" value="${a.title}">
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <textarea data-field="portfolio_achievements_${i}_description" rows="2">${a.description}</textarea>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Videos Section
function renderVideos() {
    const v = content.videos;
    return `
        <div class="card">
            <div class="card-header"><h3>Videos Page Hero</h3></div>
            ${createImageUpload('videos_hero_image', content.videos?.heroImage, 'Header Image')}
        </div>
        <div class="card">
            <div class="card-header"><h3>Featured Video</h3></div>
            <div class="form-group">
                <label>Title</label>
                <input type="text" id="videos_featured_title" value="${v.featured.title}">
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea id="videos_featured_description" rows="3">${v.featured.description}</textarea>
            </div>
            <div class="form-group">
                <label>Video URL (YouTube/Vimeo)</label>
                <input type="url" id="videos_featured_url" value="${v.featured.url}">
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3>Video Items</h3>
                <button class="btn btn-add" onclick="addListItem('videos_items')">+ Add Video</button>
            </div>
            <div class="item-list" id="videos_items_list">
                ${v.items.map((item, i) => `
                    <div class="item-card" data-index="${i}">
                        <div class="item-card-header">
                            <span class="item-card-title">${item.title}</span>
                            <div class="item-card-actions">
                                <button class="btn btn-delete" onclick="removeListItem('videos_items', ${i})">Delete</button>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label>Title</label>
                                <input type="text" data-field="videos_items_${i}_title" value="${item.title}">
                            </div>
                            <div class="form-group">
                                <label>Duration</label>
                                <input type="text" data-field="videos_items_${i}_duration" value="${item.duration}">
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <textarea data-field="videos_items_${i}_description" rows="2">${item.description}</textarea>
                        </div>
                        <div class="form-group">
                            <label>Date</label>
                            <input type="text" data-field="videos_items_${i}_date" value="${item.date}">
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Gallery Section
function renderGallery() {
    return `
        <div class="section-intro">
            <h3>Photo Gallery</h3>
            <p>Manage your photo gallery. Upload new images or update existing ones. Images will be displayed on the Gallery page.</p>
        </div>
        <div class="card">
            <div class="card-header"><h3>Gallery Page Hero</h3></div>
            ${createImageUpload('gallery_hero_image', content.galleryPage?.heroImage, 'Header Image')}
        </div>
        <div class="card">
            <div class="card-header">
                <h3>Gallery Items (${content.gallery?.length || 0} images)</h3>
                <button class="btn btn-add" onclick="addListItem('gallery')">+ Add Image</button>
            </div>
            <div class="item-list" id="gallery_list">
                ${(content.gallery || []).map((g, i) => {
        const hasImage = g.image && g.image.length > 0;
        const isBase64 = g.image && g.image.startsWith('data:');
        const isUrl = g.image && g.image.startsWith('http');
        const displaySrc = isBase64 || isUrl ? g.image : (g.image ? `../jane-ndila/${g.image}` : '');

        return `
                    <div class="item-card" data-index="${i}">
                        <div class="item-card-header">
                            <span class="item-card-title">${g.title || 'Untitled'}</span>
                            <div class="item-card-actions">
                                <button class="btn btn-delete" onclick="removeListItem('gallery', ${i})">Delete</button>
                            </div>
                        </div>
                        <div class="gallery-edit-grid">
                            <div class="gallery-image-preview">
                                ${hasImage ? `<img src="${displaySrc}" alt="${g.title}" class="preview-img">` : '<span class="no-image">No image</span>'}
                            </div>
                            <div class="gallery-edit-fields">
                                <div class="form-row">
                                    <div class="form-group">
                                        <label>Title</label>
                                        <input type="text" data-field="gallery_${i}_title" value="${g.title || ''}">
                                    </div>
                                    <div class="form-group">
                                        <label>Category</label>
                                        <select data-field="gallery_${i}_category">
                                            <option value="events" ${g.category === 'events' ? 'selected' : ''}>Events</option>
                                            <option value="workshops" ${g.category === 'workshops' ? 'selected' : ''}>Workshops</option>
                                            <option value="community" ${g.category === 'community' ? 'selected' : ''}>Community</option>
                                            <option value="professional" ${g.category === 'professional' ? 'selected' : ''}>Professional</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Description</label>
                                    <input type="text" data-field="gallery_${i}_description" value="${g.description || ''}">
                                </div>
                                <div class="form-group">
                                    <label>Image</label>
                                    <div class="image-upload-inline">
                                        <label class="btn btn-secondary upload-btn">
                                            <i data-lucide="camera"></i> Upload
                                            <input type="file" accept="image/*" onchange="handleGalleryImageUpload(${i}, this)" hidden>
                                        </label>
                                        <input type="text" data-field="gallery_${i}_image" value="${g.image || ''}" placeholder="Or enter path/URL" class="image-path-input">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>
                                        <input type="checkbox" data-field="gallery_${i}_featured" ${g.featured ? 'checked' : ''}>
                                        Featured (larger display)
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                `}).join('')}
            </div>
        </div>
    `;
}

// FAQ Section
function renderFAQ() {
    return `
        <div class="card">
            <div class="card-header">
                <h3>FAQ Items</h3>
                <button class="btn btn-add" onclick="addListItem('faq')">+ Add FAQ</button>
            </div>
            <div class="item-list" id="faq_list">
                ${content.faq.map((f, i) => `
                    <div class="item-card" data-index="${i}">
                        <div class="item-card-header">
                            <span class="item-card-title">FAQ ${i + 1}</span>
                            <div class="item-card-actions">
                                <button class="btn btn-delete" onclick="removeListItem('faq', ${i})">Delete</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Question</label>
                            <input type="text" data-field="faq_${i}_question" value="${f.question}">
                        </div>
                        <div class="form-group">
                            <label>Answer</label>
                            <textarea data-field="faq_${i}_answer" rows="4">${f.answer}</textarea>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// List management
function addListItem(listKey) {
    collectFormData();

    const templates = {
        'homepage_services': { title: 'New Service', description: 'Service description here.' },
        'services_items': { title: 'New Service', description: 'Service description.', duration: '60 minutes', format: 'In-person or Online', expectations: [] },
        'projects': { title: 'New Project', description: 'Project description.' },
        'portfolio_achievements': { title: 'New Achievement', description: 'Achievement description.' },
        'videos_items': { title: 'New Video', description: 'Video description.', duration: '10 min', date: 'Jan 2025' },
        'gallery': { title: 'New Image', description: 'Image description.', category: 'events', image: '', featured: false },
        'faq': { question: 'New Question?', answer: 'Answer here.' },
        'about_benefits': { title: 'New Benefit', description: 'Benefit description.' }
    };

    const parts = listKey.split('_');
    if (parts.length === 1) {
        content[parts[0]].push(templates[listKey]);
    } else if (parts.length === 2) {
        content[parts[0]][parts[1]].push(templates[listKey]);
    }

    saveContent();
    renderSection(currentSection);
}

function removeListItem(listKey, index) {
    collectFormData();

    const parts = listKey.split('_');
    if (parts.length === 1) {
        content[parts[0]].splice(index, 1);
    } else if (parts.length === 2) {
        content[parts[0]][parts[1]].splice(index, 1);
    }

    saveContent();
    renderSection(currentSection);
}

function setupListActions() {
    // Any additional list setup
}

// Collect form data
function collectFormData() {
    // Collect all input values
    document.querySelectorAll('input[id], textarea[id], select[id]').forEach(el => {
        const path = el.id.split('_');
        setNestedValue(content, path, el.type === 'checkbox' ? el.checked : el.value);
    });

    // Collect data-field items (list items)
    document.querySelectorAll('[data-field]').forEach(el => {
        const path = el.dataset.field.split('_');
        setNestedValue(content, path, el.type === 'checkbox' ? el.checked : el.value);
    });
}

function setNestedValue(obj, path, value) {
    let current = obj;
    for (let i = 0; i < path.length - 1; i++) {
        const key = isNaN(path[i]) ? path[i] : parseInt(path[i]);
        if (current[key] === undefined) current[key] = {};
        current = current[key];
    }
    const finalKey = isNaN(path[path.length - 1]) ? path[path.length - 1] : parseInt(path[path.length - 1]);
    current[finalKey] = value;
}

// Export site
function exportSite() {
    collectFormData();
    saveContent();

    // Generate a summary JSON file for now
    const jsonStr = JSON.stringify(content, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `site-content-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast('Content exported! Use this JSON to update your site files.', 'success');
}


