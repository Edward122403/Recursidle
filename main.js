const storyParts = [
  "I'm so excited to play the new incremental game everybody's talking about",
  "It's been three weeks, but I've finally saved up enough to get it.",
  "Looks like some sort of RPG styled incremental... Should be pretty easy.",
  // Add more story segments as desired
];

let currentStoryPart = 0;

let money = 30;

const storyTextElement = document.getElementById('story-text');
const nextButton = document.getElementById('next-button');
const buyGameContainer = document.getElementById('buy-game-container');
const moneyTextElement = document.getElementById('money-text');
const buyButton = document.getElementById('buy-button');
const storyContainer = document.getElementById('story-container');
const gameContainer = document.getElementById('game-container');

nextButton.addEventListener('click', function() {
    currentStoryPart++;
    if (currentStoryPart < storyParts.length) {
        storyTextElement.textContent = storyParts[currentStoryPart];
        // Show the buy game container if we're on the "buy" part
        if (currentStoryPart === 2) {
            buyGameContainer.style.display = 'block';
            moneyTextElement.textContent = "You have $" + money + ".";
        }
    } else {
        // Hide the buy game container and show the game container
        buyGameContainer.style.display = 'none';
        storyContainer.style.display = 'none';
        gameContainer.style.display = 'block';
        // Optionally initialize game here
    }
});

buyButton.addEventListener('click', function() {
    // Set money to 0 when the button is clicked
    money = 0;
    moneyTextElement.textContent = "You have $" + money + ".";
    storyTextElement.textContent = "You bought the game! Now, let's start playing...";
    buyGameContainer.style.display = 'none'; // Hide buy button after purchase
    gameContainer.style.display = 'block'; // Show game container
});
