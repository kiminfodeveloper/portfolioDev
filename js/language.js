// language.js
document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("selectedLanguage") || "pt";
    applyLanguage(lang);
});

function setLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    const path = window.location.pathname;

    // INDEX
    if (path.includes("index.html")) {
        const t = translations[lang].index;

        const introP = document.querySelector(".intro p");
        if (introP) introP.textContent = t.hello;

        const introH2 = document.querySelector(".intro h2");
        if (introH2) introH2.innerHTML = "<span>&gt;</span> " + t.developer;

        const snippet = document.querySelectorAll(".code-snippet p");
        if (snippet.length >= 2) {
            snippet[0].textContent = t.snippetLine1;
            snippet[1].textContent = t.snippetLine2;
        }

        const startBtn = document.querySelector(".start-button");
        if (startBtn) startBtn.textContent = t.startButton;

        const instructions = document.querySelectorAll(".game-instructions p");
        if (instructions.length >= 3) {
            instructions[0].textContent = t.instructions1;
            instructions[1].textContent = t.instructions2;
            instructions[2].textContent = t.foodLeft;
        }

        const skipBtn = document.querySelector(".skip-button");
        if (skipBtn) skipBtn.textContent = t.skipButton;

        const footerP = document.querySelector("footer p");
        if (footerP) footerP.textContent = t.footerText;

        const langLabel = document.querySelector(".text-language");
        if (langLabel) langLabel.textContent = t.selectLanguage;

        const winMsg = document.querySelector(".win-message p");
        if (winMsg) winMsg.textContent = t.winMessage;

        const restartBtn = document.querySelector(".restart-button");
        if (restartBtn) restartBtn.textContent = t.restartButton;
    }

    // ABOUT ME
    if (path.includes("about-me.html")) {
        const t = translations[lang].aboutMe;

        const contentDisplay = document.getElementById("content-display");
        if (contentDisplay) {
            const section =
                contentDisplay.getAttribute("data-section") || "bio";
            updateAboutSection(section, lang);
        }

        const snippetTitle = document.querySelector(".code-snippets h3");
        if (snippetTitle) snippetTitle.textContent = t.snippetShowcase;

        const langLabel = document.querySelector(".text-language");
        if (langLabel)
            langLabel.textContent = translations[lang].index.selectLanguage;

        const footerP = document.querySelector("footer p");
        if (footerP) footerP.textContent = translations[lang].index.footerText;

        // ✅ Atualiza os textos das abas do menu lateral
        const menuItems = document.querySelectorAll(".menu li");
        const sectionKeys = [
            "bio",
            "interests",
            "education",
            "highSchool",
            "university",
        ];

        menuItems.forEach((item, index) => {
            const section = sectionKeys[index];
            const titleKey = section + "Title";
            item.textContent = t[titleKey];
        });
    }

    // Atualiza dinamicamente a seção ativa do about-me
    if (typeof updateActiveAboutSection === "function") {
        updateActiveAboutSection();
    }
}
