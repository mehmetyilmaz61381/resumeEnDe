const langToggle = document.getElementById("lang-toggle");
let currentLang = localStorage.getItem("lang") || "de";

async function loadLanguage(lang) {
  const response = await fetch(`./lang/${lang}.json`);
  const translations = await response.json();

  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[key]) el.textContent = translations[key];
  });

  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
}

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "de" : "en";
  loadLanguage(currentLang);
});


loadLanguage(currentLang);
