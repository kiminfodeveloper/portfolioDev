const translations = {
    pt: {
        hello: "Olá, eu sou",
        developer: "Desenvolvedor Front-end",
        snippetLine1: "// Ao lado temos um jogo feito em JS.",
        snippetLine2: "// encontre o meu perfil no github:",
        startButton: "começar-jogo",
        instructions1: "// use o teclado",
        instructions2: "// setas para jogar",
        foodLeft: "// Comidas restantes",
        skipButton: "pular",
        footerText: "Encontre-me no:",
        selectLanguage: "_selecione a linguagem do site",
        winMessage: "🎉 Parabéns! Você comeu todas as comidas! 🎉",
        restartButton: "Jogar Novamente",
    },
    en: {
        hello: "Hello, I am",
        developer: "Front-end Developer",
        snippetLine1: "// On the side we have a game made in JS.",
        snippetLine2: "// find my profile on github:",
        startButton: "start-game",
        instructions1: "// use the keyboard",
        instructions2: "// arrows to play",
        foodLeft: "// food left",
        skipButton: "skip",
        footerText: "Find me on:",
        selectLanguage: "_select the site language",
        winMessage: "🎉 Congratulations! You ate all the food! 🎉",
        restartButton: "Play Again",
    },
};

function setLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang); // salva
    applyLanguage(lang); // aplica
}

function applyLanguage(lang) {
    document.querySelector(".intro p").textContent = translations[lang].hello;
    document.querySelector(".intro h2").innerHTML =
        "<span>&gt;</span> " + translations[lang].developer;

    const snippet = document.querySelectorAll(".code-snippet p");
    snippet[0].textContent = translations[lang].snippetLine1;
    snippet[1].textContent = translations[lang].snippetLine2;

    document.querySelector(".start-button").textContent =
        translations[lang].startButton;

    const instructions = document.querySelectorAll(".game-instructions p");
    instructions[0].textContent = translations[lang].instructions1;
    instructions[1].textContent = translations[lang].instructions2;
    instructions[2].textContent = translations[lang].foodLeft;

    document.querySelector(".skip-button").textContent =
        translations[lang].skipButton;
    document.querySelector("footer p").textContent =
        translations[lang].footerText;

    document.querySelector(".text-language").textContent =
        translations[lang].selectLanguage;

    // ✅ Tradução da mensagem de vitória e botão
    const winMessageEl = document.querySelector(".win-message p");
    const restartButtonEl = document.querySelector(".restart-button");

    if (winMessageEl) winMessageEl.textContent = translations[lang].winMessage;
    if (restartButtonEl)
        restartButtonEl.textContent = translations[lang].restartButton;
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("selectedLanguage") || "pt";
    applyLanguage(savedLang);
});
