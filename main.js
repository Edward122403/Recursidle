const storyText = [
  "I'm so excited to play the new incremental game everybody's talking about",
  "It's been three weeks, but I've finally saved up enough to get it.",
  "Looks like some sort of RPG styled incremental... Should be pretty easy.",
  // Add more story segments as desired
];

let currentStoryPart = 0;

const storyTextElement = document.getElementById('story-text');
const nextButton = document.getElementById('next-button');
const storyContainer = document.getElementById('story-container');
const gameContainer = document.getElementById('game-container');

nextButton.addEventListener('click', function() {
    currentStoryPart++;
    if (currentStoryPart < storyParts.length) {
        storyTextElement.textContent = storyParts[currentStoryPart];
    } else {
        // Hide story and show game container
        storyContainer.style.display = 'none';
        gameContainer.style.display = 'block';
        // Optionally initialize game here
    }
});
