const canvas = document.getElementById("snakeCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
let snake = [{ x: 5 * box, y: 5 * box }];
let direction = null;
let food = generateFood();
let game;
let foodEaten = 0;

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    if (e.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
    if (e.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    if (e.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
});

document.querySelector(".start-button").addEventListener("click", () => {
    clearInterval(game);
    snake = [{ x: 5 * box, y: 5 * box }];
    direction = null;
    food = generateFood();
    foodEaten = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStartScreen();

    // Resetar visual das comidas
    const foodDots = document.querySelector(".food-dots");
    foodDots.innerHTML = "";
    for (let i = 0; i < 7; i++) {
        const dot = document.createElement("span");
        foodDots.appendChild(dot);
    }

    document.querySelector(".win-message").style.display = "none";

    const startOnKeyPress = (e) => {
        if (
            ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)
        ) {
            setDirection(e.key);
            game = setInterval(drawGame, 150);
            document.removeEventListener("keydown", startOnKeyPress);
        }
    };

    document.addEventListener("keydown", startOnKeyPress);
});

function drawStartScreen() {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.font = "16px monospace";
    ctx.fillText("Press arrow key", 30, canvas.height / 2 - 10);
    ctx.fillText("to start...", 50, canvas.height / 2 + 10);
}

function setDirection(key) {
    if (key === "ArrowUp") direction = "UP";
    if (key === "ArrowDown") direction = "DOWN";
    if (key === "ArrowLeft") direction = "LEFT";
    if (key === "ArrowRight") direction = "RIGHT";
}

function generateFood() {
    return {
        x: Math.floor(Math.random() * (canvas.width / box)) * box,
        y: Math.floor(Math.random() * (canvas.height / box)) * box,
    };
}

function drawGame() {
    ctx.fillStyle = "#001";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw food
    ctx.fillStyle = "lime";
    ctx.fillRect(food.x, food.y, box, box);

    // Move snake
    let head = { ...snake[0] };
    if (direction === "UP") head.y -= box;
    if (direction === "DOWN") head.y += box;
    if (direction === "LEFT") head.x -= box;
    if (direction === "RIGHT") head.x += box;

    // Collision with wall or self
    if (
        head.x < 0 ||
        head.x >= canvas.width ||
        head.y < 0 ||
        head.y >= canvas.height ||
        collision(head, snake)
    ) {
        clearInterval(game);
        alert("Game Over!");
        return;
    }

    snake.unshift(head);

    // Eat food
    if (head.x === food.x && head.y === food.y) {
        food = generateFood();
        foodEaten++;

        // Atualiza UI
        const foodDots = document.querySelector(".food-dots");
        const spans = foodDots.querySelectorAll("span");
        if (spans.length > 0) {
            foodDots.removeChild(spans[0]);
        }

        // Vitória
        if (foodEaten === 7) {
            clearInterval(game);
            showWinMessage();
        }
    } else {
        snake.pop();
    }

    // Draw snake
    ctx.fillStyle = "#0ff";
    snake.forEach((part) => ctx.fillRect(part.x, part.y, box, box));
}

function collision(head, array) {
    return array.some(
        (segment) => segment.x === head.x && segment.y === head.y
    );
}

function showWinMessage() {
    const winBox = document.querySelector(".win-message");
    winBox.style.display = "flex";
}

// Destacar seta pressionada
document.addEventListener("DOMContentLoaded", () => {
    const arrowKeys = {
        ArrowUp: document.querySelector(".arrow.up"),
        ArrowDown: document.querySelector(".arrow.down"),
        ArrowLeft: document.querySelector(".arrow.left"),
        ArrowRight: document.querySelector(".arrow.right"),
    };

    document.addEventListener("keydown", (e) => {
        const key = e.key;
        const arrow = arrowKeys[key];
        if (arrow) {
            arrow.classList.add("active");
            setTimeout(() => {
                arrow.classList.remove("active");
            }, 150);
        }
    });
});

// Botão para reiniciar após vitória
document.querySelector(".restart-button").addEventListener("click", () => {
    document.querySelector(".start-button").click();
});
