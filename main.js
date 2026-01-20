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
            image: "images/about-profile.JPG"
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
        heroImage: "images/services.JPG",
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
        heroImage: "images/contact.JPG"
    },
    book: {
        heroImage: "images/book.JPG"
    },
    projectsPage: {
        heroImage: "images/thoughtful.JPG"
    },
    portfolioPage: {
        heroImage: "images/thoughtful.JPG"
    },
    galleryPage: {
        heroImage: "images/thoughtful.JPG"
    },
    videos: {
        heroImage: "images/thoughtful.JPG",
        featured: {
            title: "Empowered for Transformation",
            description: "Discover the key principles behind lasting personal change and how to unlock your potential for growth and healing.",
            url: ""
        },
        items: []
    },
    privacyPage: {
        heroImage: "images/privacy.JPG"
    }
};

// Global state
let content = {};
let currentSection = 'dashboard';
let supabaseClient = null;
let isConnected = false;
let session = null;

// Supabase configuration
const SUPABASE_CONFIG_KEY = 'janeNdilaSupabaseConfig';

// Initialize app
document.addEventListener('DOMContentLoaded', async () => {
    // 1. Initialize Supabase
    await initSupabase();

    // 2. Setup Auth Listeners & Check Session
    setupAuthListeners();

    // 3. Setup UI Listeners (always needed)
    setupLoginHandler();
    setupSaveButton();
    setupExportButton();
    setupSupabaseModal();
});

// Setup Login Form Handler
function setupLoginHandler() {
    const loginForm = document.getElementById('loginForm');
    if (!loginForm) return;

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        const loginBtn = document.getElementById('loginBtn');
        const loginError = document.getElementById('loginError');

        if (!email || !password) return;

        loginBtn.disabled = true;
        loginBtn.textContent = 'Signing in...';
        loginError.style.display = 'none';

        try {
            const { data, error } = await supabaseClient.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            // Auth listener will handle the UI switch
        } catch (err) {
            console.error('Login error:', err);
            loginError.textContent = err.message || 'Invalid login credentials';
            loginError.style.display = 'block';
            loginBtn.disabled = false;
            loginBtn.textContent = 'Sign In';
        }
    });

    // Handle logout button
    const logoutBtn = document.getElementById('sidebarLogout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            await supabaseClient.auth.signOut();
        });
    }
}

// Auth State Changes
function setupAuthListeners() {
    if (!supabaseClient) return;

    supabaseClient.auth.onAuthStateChange(async (event, newSession) => {
        console.log('Auth state change:', event, newSession);
        session = newSession;

        if (event === 'SIGNED_IN' || event === 'INITIAL_SESSION') {
            if (session) {
                showAdminInterface();
            } else if (event === 'INITIAL_SESSION') {
                showLoginInterface();
            }
        } else if (event === 'SIGNED_OUT') {
            showLoginInterface();
        }
    });
}

function showAdminInterface() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('adminContainer').style.display = 'grid';

    // Load content now that we are authorized
    loadContent().then(() => {
        setupNavigation();
        renderSection('dashboard');
        updateSyncStatus();
    });
}

function showLoginInterface() {
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('adminContainer').style.display = 'none';

    // Reset login form
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.disabled = false;
        loginBtn.textContent = 'Sign In';
    }
}

// Initialize Supabase client
async function initSupabase() {
    // Try to load saved config first
    const savedConfig = localStorage.getItem(SUPABASE_CONFIG_KEY);
    let url, key;

    if (savedConfig) {
        const config = JSON.parse(savedConfig);
        url = config.url;
        key = config.key;
    } else {
        // Default values
        url = 'https://avezwecbtvtkbtctsbzh.supabase.co';
        key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2ZXp3ZWNidHZ0a2J0Y3RzYnpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4MTk1MDEsImV4cCI6MjA4NDM5NTUwMX0.qa-Tnzl37ts25QAtQ_ek6BljCo-ndZjS-2rD0T03bhM';
    }

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
                // Merge with defaults to ensure new fields are populated
                mergeDefaults(content, defaultContent);
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

// Helper: Deep merge defaults into content
function mergeDefaults(target, defaults) {
    for (const key in defaults) {
        // If key is missing or explicitly empty string (for images), use default
        if (target[key] === undefined || (typeof target[key] === 'string' && target[key] === '' && key.includes('Image'))) {
            target[key] = defaults[key];
        } else if (typeof target[key] === 'object' && target[key] !== null && typeof defaults[key] === 'object' && defaults[key] !== null) {
            mergeDefaults(target[key], defaults[key]);
        }
    }
    return target;
}

// Note: collectFormData is defined at the bottom of the file

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
    const isUrl = currentValue && currentValue.startsWith('http');
    const displaySrc = (isBase64 || isUrl) ? currentValue : (currentValue ? `../jane-ndila/${currentValue}` : '');

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

    // Let collectFormData handle the nested structure during save
    // but update the input field now for immediate UI feedback
    const inputField = document.querySelector(`[data-field="${fieldId}"]`) || document.getElementById(fieldId);
    if (inputField) inputField.value = value;
}

// Clear image
function clearImage(fieldId) {
    updateImageField(fieldId, '', '');
    const previewBox = document.getElementById(`preview_${fieldId}`);
    if (previewBox) {
        previewBox.innerHTML = '<span class="no-image">No image</span>';
    }
}

// ============================================
// Video Upload Functions
// ============================================

// Create video upload component HTML
function createVideoUpload(fieldId, currentValue, label = 'Video') {
    const hasVideo = currentValue && currentValue.length > 0;
    const isUrl = currentValue && currentValue.startsWith('http');
    const displaySrc = currentValue;

    return `
        <div class="form-group">
            <label>${label}</label>
            <div class="video-upload-container">
                <div class="video-preview-box" id="preview_${fieldId}">
                    ${hasVideo ? `
                        <video width="100%" height="auto" controls class="preview-video">
                            <source src="${displaySrc}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>` : '<span class="no-video">No video</span>'}
                </div>
                <div class="video-upload-actions">
                    <label class="btn btn-secondary upload-btn">
                        <i data-lucide="video"></i> Upload Video
                        <input type="file" accept="video/*" onchange="handleVideoUpload('${fieldId}', this)" hidden>
                    </label>
                    <input type="text" data-field="${fieldId}" value="${currentValue || ''}" placeholder="Or enter video URL" class="video-path-input">
                    ${hasVideo ? `<button type="button" class="btn btn-delete" onclick="clearVideo('${fieldId}')">Remove</button>` : ''}
                </div>
            </div>
            <p class="form-hint">Upload a video or enter a URL (Max 50MB)</p>
        </div>
    `;
}

// Handle video file upload
async function handleVideoUpload(fieldId, input) {
    const file = input.files[0];
    if (!file) return;

    // Check file size (max 50MB for videos)
    if (file.size > 50 * 1024 * 1024) {
        showToast('Video too large. Max size is 50MB.', 'error');
        return;
    }

    // Show loading state
    const previewBox = document.getElementById(`preview_${fieldId}`);
    previewBox.innerHTML = '<span class="loading">Uploading video...</span>';

    try {
        // Try Supabase Storage if connected
        if (isConnected && supabaseClient) {
            const videoUrl = await uploadVideoToSupabaseStorage(file, fieldId);
            if (videoUrl) {
                updateVideoField(fieldId, videoUrl);
                return;
            }
        }

        // Base64 fallback (not recommended for videos but here as a last resort for small ones)
        if (file.size < 5 * 1024 * 1024) {
            const base64 = await fileToBase64(file);
            updateVideoField(fieldId, base64);
        } else {
            showToast('Connect to Supabase to upload large videos', 'warning');
            previewBox.innerHTML = '<span class="no-video">Storage required</span>';
        }

    } catch (e) {
        console.error('Video upload failed:', e);
        showToast('Video upload failed', 'error');
        previewBox.innerHTML = '<span class="no-video">Upload failed</span>';
    }
}

// Upload video to Supabase Storage
async function uploadVideoToSupabaseStorage(file, fieldId) {
    try {
        const fileName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
        // Using 'videos' bucket - assuming it exists or using generic storage
        const { data, error } = await supabaseClient.storage
            .from('videos')
            .upload(fileName, file, { upsert: true });

        if (error) {
            // Fallback to images bucket if videos bucket doesn't exist (Supabase often has 'images' by default)
            console.warn('Videos bucket not found, trying images bucket');
            const { data: imgData, error: imgError } = await supabaseClient.storage
                .from('images')
                .upload(fileName, file, { upsert: true });

            if (imgError) throw imgError;
        }

        const bucket = (error) ? 'images' : 'videos';
        const { data: urlData } = supabaseClient.storage
            .from(bucket)
            .getPublicUrl(fileName);

        return urlData.publicUrl;
    } catch (e) {
        console.warn('Supabase Video Storage upload failed:', e);
        return null;
    }
}

// Update video field value and preview
function updateVideoField(fieldId, value) {
    const input = document.querySelector(`[data-field="${fieldId}"]`);
    if (input) input.value = value;

    const previewBox = document.getElementById(`preview_${fieldId}`);
    if (previewBox) {
        previewBox.innerHTML = `
            <video width="100%" height="auto" controls class="preview-video">
                <source src="${value}" type="video/mp4">
                Your browser does not support the video tag.
            </video>`;
    }
}

// Clear video
function clearVideo(fieldId) {
    updateVideoField(fieldId, '');
    const previewBox = document.getElementById(`preview_${fieldId}`);
    if (previewBox) {
        previewBox.innerHTML = '<span class="no-video">No video</span>';
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

function clearFeaturedVideo() {
    if (confirm('Are you sure you want to clear all featured video information? This will hide the section on the website.')) {
        document.getElementById('videos_featured_title').value = '';
        document.getElementById('videos_featured_description').value = '';
        clearVideo('videos_featured_url');
        clearImage('videos_featured_thumbnail');
        showToast('Featured video cleared', 'success');
    }
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
                <textarea id="about_qualifications_education" rows="4">${Array.isArray(a.qualifications?.education) ? a.qualifications.education.join('\n') : ''}</textarea>
            </div>
            <div class="form-group">
                <label>Certifications (one per line)</label>
                <textarea id="about_qualifications_certifications" rows="4">${Array.isArray(a.qualifications?.certifications) ? a.qualifications.certifications.join('\n') : ''}</textarea>
            </div>
            <div class="form-group">
                <label>Memberships (one per line)</label>
                <textarea id="about_qualifications_memberships" rows="3">${Array.isArray(a.qualifications?.memberships) ? a.qualifications.memberships.join('\n') : ''}</textarea>
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
            <div class="card-header">
                <h3>Featured Video</h3>
                <button class="btn btn-delete" onclick="clearFeaturedVideo()">Clear All</button>
            </div>
            <div class="form-group">
                <label>Title</label>
                <input type="text" id="videos_featured_title" value="${v.featured.title}">
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea id="videos_featured_description" rows="3">${v.featured.description}</textarea>
            </div>
            <div class="form-group">
                <label>Featured Video</label>
                ${createVideoUpload('videos_featured_url', v.featured.url, 'Video File or URL')}
            </div>
            ${createImageUpload('videos_featured_thumbnail', v.featured.thumbnail || '', 'Custom Thumbnail (Optional)')}
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
                            <label>Video</label>
                            ${createVideoUpload(`videos_items_${i}_url`, item.url || '', 'Video File or URL')}
                        </div>
                        ${createImageUpload(`videos_items_${i}_thumbnail`, item.thumbnail || '', 'Thumbnail')}
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

// Collect all form data into content object before saving
function collectFormData() {
    // Helper to get input value by ID
    const getValue = (id) => {
        const el = document.getElementById(id) || document.querySelector(`[data-field="${id}"]`);
        if (!el) return null;
        return el.type === 'checkbox' ? el.checked : el.value;
    };

    // Helper to safely set nested value in content object
    const setPath = (path, value) => {
        if (value === null) return;
        let current = content;
        const keys = path.split('.');
        for (let i = 0; i < keys.length - 1; i++) {
            const key = keys[i];
            if (current[key] === undefined) current[key] = {};
            current = current[key];
        }
        current[keys[keys.length - 1]] = value;
    };

    // --- Settings ---
    setPath('settings.brandName', getValue('settings_brandName'));
    setPath('settings.tagline', getValue('settings_tagline'));
    setPath('settings.motto', getValue('settings_motto'));
    setPath('settings.email', getValue('settings_email'));
    setPath('settings.phone', getValue('settings_phone'));
    setPath('settings.address', getValue('settings_address'));
    setPath('settings.contact.email', getValue('settings_email'));
    setPath('settings.contact.phone', getValue('settings_phone'));
    setPath('settings.contact.address', getValue('settings_address'));
    setPath('settings.hours.weekday', getValue('settings_hours_weekday'));
    setPath('settings.hours.saturday', getValue('settings_hours_saturday'));
    setPath('settings.hours.sunday', getValue('settings_hours_sunday'));

    // --- Homepage ---
    setPath('homepage.hero.title', getValue('homepage_hero_title'));
    setPath('homepage.hero.subtitle', getValue('homepage_hero_subtitle'));
    setPath('homepage.hero.description', getValue('homepage_hero_description'));
    setPath('homepage.hero.image', getValue('homepage_hero_image'));
    setPath('homepage.approach.title', getValue('homepage_approach_title'));
    setPath('homepage.approach.description', getValue('homepage_approach_description'));
    setPath('homepage.approach.image', getValue('homepage_approach_image'));

    // --- About ---
    setPath('about.hero.title', getValue('about_hero_title'));
    setPath('about.hero.subtitle', getValue('about_hero_subtitle'));
    setPath('about.hero.quote', getValue('about_hero_quote'));
    setPath('about.hero.image', getValue('about_hero_image'));
    setPath('about.journey.text', getValue('about_journey_text'));
    setPath('about.philosophy.quote', getValue('about_philosophy_quote'));

    // Qualifications
    const edu = getValue('about_qualifications_education');
    if (edu !== null) setPath('about.qualifications.education', edu.split('\n').map(s => s.trim()).filter(s => s));
    const certs = getValue('about_qualifications_certifications');
    if (certs !== null) setPath('about.qualifications.certifications', certs.split('\n').map(s => s.trim()).filter(s => s));
    const mems = getValue('about_qualifications_memberships');
    if (mems !== null) setPath('about.qualifications.memberships', mems.split('\n').map(s => s.trim()).filter(s => s));

    // Stats
    if (content.about?.journey?.stats) {
        content.about.journey.stats.forEach((_, i) => {
            setPath(`about.journey.stats.${i}.value`, getValue(`about_journey_stats_${i}_value`));
            setPath(`about.journey.stats.${i}.label`, getValue(`about_journey_stats_${i}_label`));
        });
    }

    // --- Services ---
    setPath('services.overview', getValue('services_overview'));
    setPath('services.heroImage', getValue('services_hero_image'));

    // --- Projects ---
    setPath('projectsPage.heroImage', getValue('projects_hero_image'));

    // --- Portfolio ---
    setPath('portfolioPage.heroImage', getValue('portfolio_hero_image'));
    setPath('portfolio.journey', getValue('portfolio_journey'));

    // --- Videos ---
    setPath('videos.heroImage', getValue('videos_hero_image'));
    setPath('videos.featured.title', getValue('videos_featured_title'));
    setPath('videos.featured.description', getValue('videos_featured_description'));
    setPath('videos.featured.url', getValue('videos_featured_url'));
    setPath('videos.featured.thumbnail', getValue('videos_featured_thumbnail'));

    // --- Gallery ---
    setPath('galleryPage.heroImage', getValue('gallery_hero_image'));

    // --- Privacy ---
    setPath('privacyPage.heroImage', getValue('privacy_hero_image'));

    // --- Common Page Banners ---
    setPath('contact.heroImage', getValue('contact_hero_image'));
    setPath('book.heroImage', getValue('book_hero_image'));

    // --- List Items ---
    // These need special care because they are dynamic
    document.querySelectorAll('[data-field]').forEach(el => {
        const field = el.dataset.field;
        const val = el.type === 'checkbox' ? el.checked : el.value;
        const parts = field.split('_');

        // Map lists: listKey_index_prop
        // e.g., homepage_services_0_title -> homepage.services[0].title
        if (parts.length >= 3) {
            const listKey = parts[0];
            const subKey = parts[1];
            const index = parseInt(parts[2]);
            const prop = parts.slice(3).join('_');

            if (listKey === 'homepage' && subKey === 'services' && content.homepage?.services && content.homepage.services[index]) {
                content.homepage.services[index][prop] = val;
            } else if (listKey === 'services' && subKey === 'items' && content.services?.items && content.services.items[index]) {
                content.services.items[index][prop] = val;
            } else if (listKey === 'about' && subKey === 'benefits' && content.about?.benefits && content.about.benefits[index]) {
                content.about.benefits[index][prop] = val;
            } else if (listKey === 'portfolio' && subKey === 'achievements' && content.portfolio?.achievements && content.portfolio.achievements[index]) {
                content.portfolio.achievements[index][prop] = val;
            } else if (listKey === 'videos' && subKey === 'items' && content.videos?.items && content.videos.items[index]) {
                content.videos.items[index][prop] = val;
            } else if (listKey === 'gallery' && content.gallery) {
                // gallery_0_title
                const galleryIndex = parseInt(parts[1]);
                const galleryProp = parts.slice(2).join('_');
                if (content.gallery[galleryIndex]) {
                    content.gallery[galleryIndex][galleryProp] = val;
                }
            } else if (listKey === 'faq' && content.faq) {
                // faq_0_question
                const faqIndex = parseInt(parts[1]);
                const faqProp = parts.slice(2).join('_');
                if (content.faq[faqIndex]) {
                    content.faq[faqIndex][faqProp] = val;
                }
            } else if (listKey === 'projects' && content.projects) {
                // projects_0_title
                const projectIndex = parseInt(parts[1]);
                const projectProp = parts.slice(2).join('_');
                if (content.projects[projectIndex]) {
                    content.projects[projectIndex][projectProp] = val;
                }
            }
        }
    });

    console.log('Form data collected:', content);
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


