// projects.js
function updateProjectsSection(lang) {
    const t = translations[lang].projects;

    const sectionTitle = document.querySelector("h2#projects-title");
    if (sectionTitle) sectionTitle.textContent = t.sectionTitle;

    const project1 = document.querySelector("#project1");
    if (project1) {
        const title = project1.querySelector(".card-title");
        const subtitle = project1.querySelector(".card-subtitle");
        const tech = project1.querySelector(".tech-stack");
        const button = project1.querySelector(".view-button");

        if (title) title.textContent = t.project1Title;
        if (subtitle) subtitle.textContent = t.project1Subtitle;
        if (tech) tech.textContent = t.project1Tech;
        if (button) button.textContent = t.viewProject;
    }

    const project2 = document.querySelector("#project2");
    if (project2) {
        const title = project2.querySelector(".card-title");
        const subtitle = project2.querySelector(".card-subtitle");
        const tech = project2.querySelector(".tech-stack");
        const button = project2.querySelector(".view-button");

        if (title) title.textContent = t.project2Title;
        if (subtitle) subtitle.textContent = t.project2Subtitle;
        if (tech) tech.textContent = t.project2Tech;
        if (button) button.textContent = t.viewProject;
    }

    // ... Repita o mesmo bloco para os demais projetos, se houver
}

// Função acessível ao language.js
window.updateProjectsSection = updateProjectsSection;
