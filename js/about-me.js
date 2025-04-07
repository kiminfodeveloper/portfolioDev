function updateAboutSection(section, lang) {
    const t = translations[lang].aboutMe;
    const display = document.getElementById("content-display");

    switch (section) {
        case "bio":
            display.innerHTML = `<h2>${t.bioTitle}</h2><p>${t.bioText}</p>`;
            break;
        case "interests":
            display.innerHTML = `<h2>${t.interestsTitle}</h2><p>${t.interestsText}</p>`;
            break;
        case "education":
            display.innerHTML = `<h2>${t.educationTitle}</h2><p>${t.educationText}</p>`;
            break;
        case "high-school":
            display.innerHTML = `<h2>${t.highSchoolTitle}</h2><p>${t.highSchoolText}</p>`;
            break;
        case "university":
            display.innerHTML = `<h2>${t.universityTitle}</h2><p>${t.universityText}</p>`;
            break;
        default:
            display.innerHTML = `<h2>${t.bioTitle}</h2><p>${t.bioText}</p>`;
            break;
    }
}

document.querySelectorAll(".menu li").forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector(".menu li.active")?.classList.remove("active");
        item.classList.add("active");

        const section = item.getAttribute("data-section");
        const lang = localStorage.getItem("selectedLanguage") || "pt";
        updateAboutSection(section, lang);
    });
});

// Atualiza a seção ativa com o idioma atual
function updateActiveAboutSection() {
    const activeItem = document.querySelector(".menu li.active");
    if (activeItem) {
        const section = activeItem.getAttribute("data-section");
        const lang = localStorage.getItem("selectedLanguage") || "pt";
        updateAboutSection(section, lang);
    }
}

// Torna a função acessível ao language.js
window.updateActiveAboutSection = updateActiveAboutSection;
