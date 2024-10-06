const storyText = [
  "I'm so excited to play the new incremental game everybody's talking about",
  "It's been three weeks, but I've finally saved up enough to get it.",
  "Looks like some sort of RPG styled incremental... Should be pretty easy.",
  // Add more story segments as desired
];

// Initialize the current index to track the story progression
let currentIndex = 0;

// Select the story text and button elements from the HTML
const storyElement = document.getElementById("story-text");
const nextButton = document.getElementById("next-button");

// Function to advance the story when the button is clicked
function advanceStory() {
  currentIndex++; // Move to the next part of the story
  if (currentIndex < storyText.length) {
    // Update the story text to the current part
    storyElement.textContent = storyText[currentIndex];
  } else {
    // Hide the story container or button when story is done
    document.getElementById("story-container").style.display = "none";
    startGame(); // Optional: call a function to start the main game
  }
}

// Attach an event listener to the button
nextButton.addEventListener("click", advanceStory);
