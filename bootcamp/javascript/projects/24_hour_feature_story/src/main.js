const stories = [];

console.log("Main.js loaded successfully!");

// Remove the conflicting DOMContentLoaded listener
// The StoryManager will handle everything

class StoryManager {
  constructor() {
    this.stories = [];
    this.currentStoryIndex = 0;
    this.currentImageIndex = 0;
    this.storyTimer = null;
    this.STORY_DURATION = 5000; // 5 seconds per image

    this.init();
  }

  init() {
    this.loadStoriesFromStorage();
    this.setupEventListeners();
    this.renderStories();
    this.cleanExpiredStories();

    // Clean expired stories every hour
    setInterval(() => this.cleanExpiredStories(), 3600000);
  }

  setupEventListeners() {
    // Add story button - Updated to work with new structure
    document.addEventListener("click", (e) => {
      // Check if clicked element or its parent contains the add story button
      const addStoryBtn = e.target.closest("[data-add-story]");
      if (addStoryBtn) {
        this.showStoryUploadOptions();
      }
    });

    // File upload
    document.getElementById("image-upload").addEventListener("change", (e) => {
      this.handleImageUpload(e);
    });

    // Profile picture upload
    document
      .getElementById("profile-upload")
      .addEventListener("change", (e) => {
        this.handleProfilePictureUpload(e);
      });

    // Story viewer controls
    document.getElementById("close-viewer").addEventListener("click", () => {
      this.closeStoryViewer();
    });

    document.getElementById("prev-story").addEventListener("click", () => {
      this.previousStory();
    });

    document.getElementById("next-story").addEventListener("click", () => {
      this.nextStory();
    });

    // Story viewer click to next
    document.getElementById("story-viewer").addEventListener("click", (e) => {
      if (e.target.id === "story-image" || e.target.id === "story-content") {
        this.nextImage();
      }
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      const viewer = document.getElementById("story-viewer");
      if (!viewer.classList.contains("hidden")) {
        if (e.key === "Escape") this.closeStoryViewer();
        if (e.key === "ArrowLeft") this.previousStory();
        if (e.key === "ArrowRight") this.nextStory();
        if (e.key === " ") {
          e.preventDefault();
          this.nextImage();
        }
      }
    });

    // Touch gestures for mobile
    this.setupTouchGestures();
  }

  setupTouchGestures() {
    let startX = 0;
    let startY = 0;

    document
      .getElementById("story-viewer")
      .addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      });

    document
      .getElementById("story-viewer")
      .addEventListener("touchend", (e) => {
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const diffX = startX - endX;
        const diffY = startY - endY;

        // Horizontal swipe
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
          if (diffX > 0) {
            this.nextStory();
          } else {
            this.previousStory();
          }
        }
        // Vertical swipe down to close
        else if (diffY < -100) {
          this.closeStoryViewer();
        }
      });
  }

  async handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    console.log("File selected:", file.name, file.type, file.size);

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size should be less than 5MB");
      return;
    }

    try {
      console.log("Converting file to base64...");
      const base64 = await this.fileToBase64(file);
      console.log("Base64 conversion successful, length:", base64.length);
      this.addStory(base64);
      event.target.value = ""; // Clear the input
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image. Please try again.");
    }
  }

  fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  showStoryUploadOptions() {
    const hasProfilePicture = this.getProfilePicture();

    if (!hasProfilePicture) {
      // If no profile picture, ask user to set one first
      if (
        confirm(
          "Would you like to set a profile picture first? Click OK to set profile picture, or Cancel to just add a story."
        )
      ) {
        document.getElementById("profile-upload").click();
      } else {
        document.getElementById("image-upload").click();
      }
    } else {
      // If profile picture exists, just add story
      document.getElementById("image-upload").click();
    }
  }

  async handleProfilePictureUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    console.log("Profile picture selected:", file.name, file.type, file.size);

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file for your profile picture");
      return;
    }

    // Check file size (max 2MB for profile picture)
    if (file.size > 2 * 1024 * 1024) {
      alert("Profile picture size should be less than 2MB");
      return;
    }

    try {
      console.log("Converting profile picture to base64...");
      const base64 = await this.fileToBase64(file);
      console.log("Profile picture conversion successful");
      this.setProfilePicture(base64);
      this.renderStories();
      event.target.value = ""; // Clear the input

      // After setting profile picture, ask if they want to add a story
      if (
        confirm("Profile picture updated! Would you like to add a story now?")
      ) {
        document.getElementById("image-upload").click();
      }
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      alert("Error uploading profile picture. Please try again.");
    }
  }

  getProfilePicture() {
    return localStorage.getItem("userProfilePicture");
  }

  setProfilePicture(imageData) {
    localStorage.setItem("userProfilePicture", imageData);
    console.log("Profile picture saved to localStorage");
  }

  addStory(imageData) {
    const story = {
      id: Date.now(),
      image: imageData,
      timestamp: Date.now(),
      expiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    };

    this.stories.unshift(story); // Add to beginning
    this.saveStoriesToStorage();
    this.renderStories();

    console.log("Story added successfully:", story);
    console.log("Total stories:", this.stories.length);
  }

  loadStoriesFromStorage() {
    const saved = localStorage.getItem("24hourStories");
    this.stories = saved ? JSON.parse(saved) : [];
  }

  saveStoriesToStorage() {
    localStorage.setItem("24hourStories", JSON.stringify(this.stories));
  }

  cleanExpiredStories() {
    const now = Date.now();
    const beforeCount = this.stories.length;

    this.stories = this.stories.filter((story) => story.expiresAt > now);

    if (this.stories.length !== beforeCount) {
      this.saveStoriesToStorage();
      this.renderStories();
    }
  }

  renderStories() {
    const container = document.getElementById("stories-container");
    const profilePicture = this.getProfilePicture();

    container.innerHTML = `
            <!-- Add Story Button -->
            <div class="flex flex-col items-center cursor-pointer min-w-[80px] sm:min-w-[70px] transition-all duration-300 ease-in-out hover:scale-105 relative" data-add-story>
                <div class="relative">
                    ${
                      profilePicture
                        ? `<img src="${profilePicture}" class="w-16 h-16 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-gray-300" alt="Your profile">`
                        : `<div class="w-16 h-16 sm:w-14 sm:h-14 rounded-full bg-gray-200 border-2 border-gray-300 flex items-center justify-center">
                            <svg class="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                            </svg>
                        </div>`
                    }
                    <!-- Plus sign overlay -->
                    <div class="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg hover:bg-blue-600 transition-colors plus-button">
                        <span class="text-white text-sm font-bold">+</span>
                    </div>
                </div>
                <span class="text-xs mt-2 text-gray-600">Your Story</span>
            </div>
        `;

    this.stories.forEach((story, index) => {
      const timeAgo = this.getTimeAgo(story.timestamp);

      const storyElement = document.createElement("div");
      storyElement.className =
        "flex flex-col items-center cursor-pointer min-w-[80px] sm:min-w-[70px] transition-all duration-300 ease-in-out hover:scale-105 relative";
      storyElement.innerHTML = `
                <div class="relative">
                    <div class="absolute -inset-1 rounded-full story-ring z-0"></div>
                    <div class="relative bg-white rounded-full p-1 z-10">
                        <img src="${story.image}" 
                             class="w-16 h-16 sm:w-14 sm:h-14 rounded-full object-cover" 
                             alt="Story ${index + 1}">
                    </div>
                </div>
                <span class="text-xs mt-2 text-gray-600 max-w-[4rem] truncate">${timeAgo}</span>
            `;

      storyElement.addEventListener("click", () => {
        this.openStoryViewer(index);
      });

      container.appendChild(storyElement);
    });
  }

  getTimeAgo(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));

    if (hours > 0) {
      return `${hours}h ago`;
    } else if (minutes > 0) {
      return `${minutes}m ago`;
    } else {
      return "Just now";
    }
  }

  openStoryViewer(storyIndex) {
    if (this.stories.length === 0) return;

    this.currentStoryIndex = storyIndex;
    this.currentImageIndex = 0;

    const viewer = document.getElementById("story-viewer");
    viewer.classList.remove("hidden");
    viewer.classList.add("flex");

    this.updateStoryViewer();
    this.startStoryTimer();
  }

  updateStoryViewer() {
    if (this.currentStoryIndex >= this.stories.length) {
      this.closeStoryViewer();
      return;
    }

    const story = this.stories[this.currentStoryIndex];
    const storyImage = document.getElementById("story-image");

    storyImage.src = story.image;
    this.updateProgressBars();
  }

  updateProgressBars() {
    const container = document.getElementById("progress-container");
    container.innerHTML = "";

    // Create progress bar for current story (single image)
    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar flex-1";
    progressBar.innerHTML = '<div class="progress-fill"></div>';
    container.appendChild(progressBar);

    // Start progress animation
    setTimeout(() => {
      const fill = progressBar.querySelector(".progress-fill");
      fill.style.width = "100%";
      fill.style.transition = `width ${this.STORY_DURATION}ms linear`;
    }, 100);
  }

  startStoryTimer() {
    this.clearStoryTimer();

    this.storyTimer = setTimeout(() => {
      this.nextStory();
    }, this.STORY_DURATION);
  }

  clearStoryTimer() {
    if (this.storyTimer) {
      clearTimeout(this.storyTimer);
      this.storyTimer = null;
    }
  }

  nextStory() {
    this.currentStoryIndex++;
    if (this.currentStoryIndex >= this.stories.length) {
      this.closeStoryViewer();
    } else {
      this.updateStoryViewer();
      this.startStoryTimer();
    }
  }

  previousStory() {
    if (this.currentStoryIndex > 0) {
      this.currentStoryIndex--;
      this.updateStoryViewer();
      this.startStoryTimer();
    }
  }

  nextImage() {
    // For now, just go to next story since we have one image per story
    this.nextStory();
  }

  closeStoryViewer() {
    const viewer = document.getElementById("story-viewer");
    viewer.classList.add("hidden");
    viewer.classList.remove("flex");
    this.clearStoryTimer();
  }
}

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  new StoryManager();
});
