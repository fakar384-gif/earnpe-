// ==========================================
// Language Translation Dictionary
// ==========================================
const translations = {
    en: { 
        hello: "Hello", greeting: "Hope you have a good day! 😊", balance: "Account Balance", coins: "Total Earning Coins", 
        appStatus: "Application Status", leadAction: "Lead Action >>", confirm: "Confirm", pending: "Pending", 
        rejected: "Rejected", expired: "Expired", sell: "Sell & Earn", toolkit: "My Toolkit", 
        community: "Be a part of EarnPe community", navCoins: "My Coins", navLeads: "Leads", 
        navEarning: "My Earning", navAccount: "Account",
        // পেজের শব্দগুলো
        savings: "Savings Account", loan: "Loan", benefits: "Benefits", 
        howToEarn: "How to Earn", faq: "FAQ",
        // নতুন যুক্ত করা শব্দগুলো
        submitProof: "Submit Proof", 
        stepsTask: "Steps to Complete Task",
        step1: "Click on the <strong>Start Task</strong> button below.",
        step2: "Download the app and install it on your phone.",
        step3: "Register a new account using your mobile number.",
        step4: "Take a screenshot of the successful registration page.",
        step5: "Go to the <strong>SUBMIT PROOF</strong> tab and upload details!",
        // সাবমিট ফর্মের শব্দগুলো
        submitTitle: "Submit Task For Approval",
        submitDesc: "Provide your registered details and upload a screenshot of completion.",
        labelUserId: "Your User ID or Email",
        labelMobile: "Registered Mobile Number"
    },
    bn: { 
        hello: "হ্যালো", greeting: "আপনার দিনটি শুভ হোক! 😊", balance: "অ্যাকাউন্ট ব্যালেন্স", coins: "মোট অর্জিত কয়েন", 
        appStatus: "অ্যাপ্লিকেশনের অবস্থা", leadAction: "লিড অ্যাকশন >>", confirm: "কনফার্ম", pending: "পেন্ডিং", 
        rejected: "রিজেক্টেড", expired: "এক্সপায়ার্ড", sell: "সেল এবং আর্ন", toolkit: "আমার টুলকিট", 
        community: "EarnPe সম্প্রদায়ের অংশ হোন", navCoins: "আমার কয়েন", navLeads: "লিডস", 
        navEarning: "আমার আয়", navAccount: "অ্যাকাউন্ট",
        // পেজের শব্দগুলো
        savings: "সেভিংস অ্যাকাউন্ট", loan: "লোন", benefits: "সুবিধাসমূহ", 
        howToEarn: "কীভাবে আয় করবেন", faq: "সাধারণ জিজ্ঞাসা",
        // নতুন যুক্ত করা শব্দগুলো
        submitProof: "প্রমাণ জমা দিন", 
        stepsTask: "টাস্ক সম্পূর্ণ করার ধাপ",
        step1: "নিচের <strong>Start Task</strong> বাটনে ক্লিক করুন।",
        step2: "অ্যাপটি ডাউনলোড করুন এবং আপনার ফোনে ইনস্টল করুন।",
        step3: "আপনার মোবাইল নম্বর ব্যবহার করে একটি নতুন অ্যাকাউন্ট খুলুন।",
        step4: "সফল রেজিস্ট্রেশন পেজের একটি স্ক্রিনশট নিন।",
        step5: "<strong>SUBMIT PROOF</strong> ট্যাবে যান এবং আপনার প্রমাণ জমা দিন!",
        // সাবমিট ফর্মের শব্দগুলো
        submitTitle: "টাস্ক অনুমোদনের জন্য জমা দিন",
        submitDesc: "আপনার নিবন্ধিত বিবরণ প্রদান করুন এবং কাজ সম্পূর্ণ হওয়ার একটি স্ক্রিনশট আপলোড করুন।",
        labelUserId: "আপনার ইউজার আইডি বা ইমেইল",
        labelMobile: "নিবন্ধিত মোবাইল নম্বর"
    },
    hi: { 
        hello: "नमस्ते", greeting: "आपका दिन शुभ हो! 😊", balance: "खाता शेष", coins: "कुल कमाई के सिक्के", 
        appStatus: "आवेदन की स्थिति", leadAction: "लीड एक्शन >>", confirm: "कन्फर्म", pending: "पेंडिंग", 
        rejected: "रिजेक्टेड", expired: "एक्सपायर्ड", sell: "सेल एंड अर्न", toolkit: "माई टूलकिट", 
        community: "EarnPe समुदाय का हिस्सा बनें", navCoins: "मेरे सिक्के", navLeads: "लीड्स", 
        navEarning: "मेरी कमाई", navAccount: "अकाउंट",
        // पेज के शब्द
        savings: "बचत खाता", loan: "लोन (ऋण)", benefits: "फायदे", 
        howToEarn: "कैसे कमाएं", faq: "सामान्य प्रश्न",
        // नए जोड़े गए शब्द
        submitProof: "प्रमाण जमा करें", 
        stepsTask: "टास्क पूरा करने के चरण",
        step1: "नीचे दिए गए <strong>Start Task</strong> बटन पर क्लिक करें।",
        step2: "ऐप डाउनलोड करें और इसे अपने फोन में इंस्टॉल करें।",
        step3: "अपने मोबाइल नंबर का उपयोग करके एक नया अकाउंट बनाएं।",
        step4: "सफल रजिस्ट्रेशन पेज का स्क्रीनशॉट लें।",
        step5: "<strong>SUBMIT PROOF</strong> टैब पर जाएं और विवरण अपलोड करें!",
        // সাবমিট ফর্মের শব্দগুলো
        submitTitle: "मंजूरी के लिए टास्क जमा करें",
        submitDesc: "अपना पंजीकृत विवरण दें और कार्य पूरा होने का स्क्रीनशॉट अपलोड करें।",
        labelUserId: "आपका यूज़र आईडी या ईमेल",
        labelMobile: "पंजीकृत मोबाइल नंबर"
    },
    as: { 
        hello: "নমস্কাৰ", greeting: "আপোনাৰ দিনটো শুভ হওক! 😊", balance: "একাউণ্ট বেলেঞ্চ", coins: "মুঠ উপাৰ্জন কৰা মুদ্ৰা", 
        appStatus: "আবেদনৰ স্থিতি", leadAction: "লিড একচন >>", confirm: "নিশ্চিত", pending: "বকেয়া", 
        rejected: "প্ৰত্যাখ্যান", expired: "ম্যাদ উকলি যোৱা", sell: "বিক্ৰী আৰু উপাৰ্জন", toolkit: "মোৰ টুলকিট", 
        community: "EarnPe সম্প্ৰদায়ৰ অংশ হওক", navCoins: "মোৰ মুদ্ৰা", navLeads: "লিডছ", 
        navEarning: "মোৰ উপাৰ্জন", navAccount: "একাউণ্ট",
        // পেজৰ শব্দ
        savings: "চেভিংছ একাউণ্ট", loan: "ঋণ", benefits: "সুবিধাসমূহ", 
        howToEarn: "কেনেদৰে উপাৰ্জন কৰিব", faq: "সাধাৰণ প্ৰশ্ন",
        // নতুন যুক্ত কৰা শব্দ
        submitProof: "প্ৰমাণ জমা দিয়ক", 
        stepsTask: "টাস্ক সম্পূৰ্ণ কৰাৰ পদক্ষেপসমূহ",
        step1: "তলৰ <strong>Start Task</strong> বুটামত ক্লিক কৰক।",
        step2: "এপটো ডাউনলোড কৰক আৰু আপোনাৰ ফোনত ইনষ্টল কৰক।",
        step3: "আপোনাৰ ম'বাইল নম্বৰ ব্যৱহাৰ কৰি এটা নতুন একাউণ্ট খোলক।",
        step4: "সফল পঞ্জীয়ন পৃষ্ঠাৰ এটা স্ক্ৰীণশ্বট লওক।",
        step5: "<strong>SUBMIT PROOF</strong> টেবলে যাওক আৰু সবিশেষ আপলোড কৰক!",
        // সাবমিট ফর্মের শব্দগুলো
        submitTitle: "অনুমোদনৰ বাবে টাস্ক জমা দিয়ক",
        submitDesc: "আপোনাৰ পঞ্জীভুক্ত সবিশেষ প্ৰদান কৰক আৰু সম্পূৰ্ণ হোৱাৰ এটা স্ক্ৰীণশ্বট আপলোড কৰক।",
        labelUserId: "আপোনাৰ ইউজাৰ আইডি বা ইমেইল",
        labelMobile: "পঞ্জীভুক্ত ম'বাইল নম্বৰ"
    },
    mr: { 
        hello: "नमस्कार", greeting: "तुमचा दिवस चांगला जावो! 😊", balance: "खाते शिल्लक", coins: "एकूण कमाईची नाणी", 
        appStatus: "अर्जाची स्थिती", leadAction: "लीड ॲक्शन >>", confirm: "निश्चित", pending: "प्रलंबित", 
        rejected: "नाकारले", expired: "कालबाह्य", sell: "विक्री आणि कमाई", toolkit: "माझे टूलकिट", 
        community: "EarnPe समुदायाचा भाग व्हा", navCoins: "माझी नाणी", navLeads: "लीड्स", 
        navEarning: "माझी कमाई", navAccount: "खाते",
        // पृष्ठ शब्द
        savings: "बचत खाते", loan: "कर्ज", benefits: "फायदे", 
        howToEarn: "कसे कमवावे", faq: "वारंवार विचारले जाणारे प्रश्न",
        // नवीन जोडलेले शब्द
        submitProof: "पुरावा सबमिट करा", 
        stepsTask: "टास्क पूर्ण करण्याच्या पायऱ्या",
        step1: "खालील <strong>Start Task</strong> बटणावर क्लिक करा.",
        step2: "अॅप डाउनलोड करा आणि तुमच्या फोनवर इन्स्टॉल करा.",
        step3: "तुमचा मोबाईल नंबर वापरून नवीन खाते तयार करा.",
        step4: "यशस्वी नोंदणी पृष्ठाचा स्क्रीनशॉट घ्या.",
        step5: "<strong>SUBMIT PROOF</strong> टॅबवर जा आणि तपशील अपलोड करा!",
        // সাবমিট ফর্মের শব্দগুলো
        submitTitle: "मंजुरीसाठी टास्क सबमिट करा",
        submitDesc: "तुमचा नोंदणीकृत तपशील द्या आणि काम पूर्ण झाल्याचा स्क्रीनशॉट अपलोड करा.",
        labelUserId: "तुमचा युझर आयडी किंवा ईमेल",
        labelMobile: "नोंदणीकृत मोबाईल नंबर"
    },
    ta: { 
        hello: "வணக்கம்", greeting: "உங்கள் நாள் இனிதாக அமையட்டும்! 😊", balance: "கணக்கு இருப்பு", coins: "மொத்த நாணயங்கள்", 
        appStatus: "விண்ணப்ப நிலை", leadAction: "லீட் ஆக்‌ஷன் >>", confirm: "உறுதி", pending: "நிலுவையில்", 
        rejected: "நிராகரிக்கப்பட்டது", expired: "காலாவதியானது", sell: "விற்பனை", toolkit: "கருவித்தொகுப்பு", 
        community: "EarnPe சமூகத்தில் இணையுங்கள்", navCoins: "நாணயங்கள்", navLeads: "லீட்ஸ்", 
        navEarning: "வருமானம்", navAccount: "கணக்கு",
        // புதிய பக்கங்கள்
        savings: "சேமிப்பு கணக்கு", loan: "கடன்", benefits: "நன்மைகள்", 
        howToEarn: "எப்படி சம்பாதிப்பது", faq: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
        // புதிதாக சேர்க்கப்பட்ட வார்த்தைகள்
        submitProof: "சான்றை சமர்ப்பிக்கவும்", 
        stepsTask: "பணியை முடிப்பதற்கான படிகள்",
        step1: "கீழே உள்ள <strong>Start Task</strong> பொத்தானைக் கிளிக் செய்யவும்.",
        step2: "பயன்பாட்டைப் பதிவிறக்கி உங்கள் போனில் நிறுவவும்.",
        step3: "உங்கள் மொபைல் எண்ணைப் பயன்படுத்தி புதிய கணக்கை உருவாக்கவும்.",
        step4: "வெற்றிகரமான பதிவு பக்கத்தின் ஸ்கிரீன்ஷாட்டை எடுக்கவும்.",
        step5: "<strong>SUBMIT PROOF</strong> தாவலுக்குச் சென்று விவரங்களைப் பதிவேற்றவும்!",
        // সাবমিট ফর্মের শব্দগুলো
        submitTitle: "ஒப்புதலுக்காக பணியை சமர்ப்பிக்கவும்",
        submitDesc: "உங்கள் பதிவு செய்யப்பட்ட விவரங்களை வழங்கி, பணி முடிந்ததற்கான ஸ்கிரீன்ஷாட்டைப் பதிவேற்றவும்.",
        labelUserId: "உங்கள் பயனர் ஐடி அல்லது மின்னஞ்சல்",
        labelMobile: "பதிவு செய்யப்பட்ட மொபைல் எண்"
    },
    gu: { 
        hello: "નમસ્તે", greeting: "તમારો દિવસ શુભ રહે! 😊", balance: "ખાતાની સિલક", coins: "કુલ કમાણીના સિક્કા", 
        appStatus: "અરજીની સ્થિતિ", leadAction: "લીડ એક્શન >>", confirm: "પુષ્ટિ થયેલ", pending: "બાકી", 
        rejected: "નકારવામાં આવેલ", expired: "સમાપ્ત થયેલ", sell: "વેચાણ અને કમાણી", toolkit: "મારી ટૂલકીટ", 
        community: "EarnPe સમુદાયનો ભાગ બનો", navCoins: "મારા સિક્કા", navLeads: "લીડ્સ", 
        navEarning: "મારી કમાણી", navAccount: "એકાઉન્ટ",
        // નવા પૃષ્ઠો
        savings: "બચત ખાતું", loan: "લોન", benefits: "લાભો", 
        howToEarn: "કેવી રીતે કમાવવું", faq: "સામાન્ય પ્રશ્નો",
        // નવા ઉમેરાયેલા શબ્દો
        submitProof: "પુરાવા સબમિટ કરો", 
        stepsTask: "કાર્ય પૂર્ણ કરવા માટેના પગલાં",
        step1: "નીચેના <strong>Start Task</strong> બટન પર ક્લિક કરો.",
        step2: "એપ્લિકેશન ડાઉનલોડ કરો અને તેને તમારા ફોનમાં ઇન્સ્ટોલ કરો.",
        step3: "તમારા મોબાઇલ નંબરનો ઉપયોગ કરીને નવું એકાઉન્ટ બનાવો.",
        step4: "સફળ નોંધણી પૃષ્ઠનો સ્ક્રીનશોટ લો.",
        step5: "<strong>SUBMIT PROOF</strong> ટેબ પર જાઓ અને વિગતો અપલોડ કરો!",
        // সাবমিট ফর্মের শব্দগুলো
        submitTitle: "મંજૂરી માટે કાર્ય સબમિટ કરો",
        submitDesc: "તમારી નોંધાયેલ વિગતો પ્રદાન કરો અને કાર્ય પૂર્ણ થવાનો સ્ક્રીનશોટ અપલોડ કરો.",
        labelUserId: "તમારું યુઝર આઈડી અથવા ઈમેલ",
        labelMobile: "નોંધાયેલ મોબાઈલ નંબર"
    }
};

// ==========================================
// Language Apply Function
// ==========================================
function applyTranslation(lang) {
    const t = translations[lang] || translations['en'];
    
    // ডিকশনারির সব শব্দ খুঁজে বের করে অটোমেটিক HTML এ বসিয়ে দেবে
    for (const key in t) {
        const element = document.getElementById('t-' + key);
        if (element) {
            // innerText এর পরিবর্তে innerHTML ব্যবহার করা হলো <strong> ট্যাগ সাপোর্ট করার জন্য
            element.innerHTML = t[key];
        }
    }

    // ল্যাঙ্গুয়েজ মেনুতে Active কালার আপডেট করা (যদি মেনু থাকে)
    const langItems = document.querySelectorAll('.lang-item');
    if(langItems.length > 0) {
        langItems.forEach(l => l.classList.remove('active-lang'));
        const activeItem = document.querySelector(`.lang-item[data-lang="${lang}"]`);
        if(activeItem) activeItem.classList.add('active-lang');
    }
}

// পেজ লোড হলে সেভ করা ভাষা অ্যাপ্লাই করা
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('appLanguage') || 'en';
    applyTranslation(savedLang);
});