const storyText = [
  "I'm so excited to play the new incremental game everybody's talking about",
  "It's been three weeks, but I've finally saved up enough to get it.",
  "Looks like some sort of RPG styled incremental... Should be pretty easy.",
  // Add more story segments as desired
];

let currentIndex = 0;

const storyContainer = document.getElementById('story-text');
const nextButton = document.getElementById('next-button');

nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex < storyText.length) {
        storyContainer.textContent = storyText[currentIndex];
    } else {
        storyContainer.textContent = "The adventure continues...";
        nextButton.disabled = true; // Optionally disable the button after the last story bit
    }
});
