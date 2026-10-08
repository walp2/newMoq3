// ==========================================
// 1. نظام الترجمة وتغيير اللغة
// ==========================================
const translations = {
  ar: {
    bio: "لاعب ومطور • مؤسس شبكة WalP",
    mcTitle: "ماينكرافت",
    dlTitle: "التحميلات",
    contactBtn: "تواصل معي",
    langBtn: "English"
  },
  en: {
    bio: "Gamer & Developer • Founder of WalP Network",
    mcTitle: "Minecraft",
    dlTitle: "Downloads",
    contactBtn: "Contact Me",
    langBtn: "العربية"
  }
};

let currentLang = localStorage.getItem("walp_lang") || "ar";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("walp_lang", lang);

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  const langBtnText = document.getElementById("langBtnText");
  if (langBtnText) {
    langBtnText.textContent = translations[lang].langBtn;
  }
}

function toggleLanguage() {
  const newLang = currentLang === "ar" ? "en" : "ar";
  setLanguage(newLang);
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);
});

// ==========================================
// 2. نظام شريط الأذكار
// ==========================================
const athkarList = [
  "اللهم صلِّ وسلم وبارك على نبينا محمد ﷺ",
  "سبحان الله وبحمده، سبحان الله العظيم",
  "لا إله إلا أنت سبحانك إني كنت من الظالمين",
  "أستغفر الله العظيم وأتوب إليه",
  "لا حول ولا قوة إلا بالله العلي العظيم",
  "الحمد لله حمداً كثيراً طيباً مباركاً فيه"
];

let currentIndex = 0;
const athkarElement = document.getElementById("athkarText");

function updateThikr() {
  if (!athkarElement) return;
  athkarElement.style.opacity = "0";
  setTimeout(() => {
    athkarElement.textContent = athkarList[currentIndex];
    athkarElement.style.opacity = "1";
  }, 300);
}

function nextThikr() {
  currentIndex = (currentIndex + 1) % athkarList.length;
  updateThikr();
}

setInterval(nextThikr, 6000);

function toggleAthkar() {
  const bar = document.getElementById("athkarBar");
  if (bar) {
    bar.style.display = "none";
  }
}
