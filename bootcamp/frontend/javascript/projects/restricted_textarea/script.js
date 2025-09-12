document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("restrictedTextarea");
  const currentCount = document.getElementById("currentCount");
  const maxLimit = document.getElementById("maxLimit");
  const container = document.querySelector(".textarea-container");

  const MAX_CHARS = 250;
  maxLimit.textContent = MAX_CHARS;

  function updateCharCount() {
    const currentLength = textarea.value.length;
    currentCount.textContent = currentLength;

    if (currentLength >= MAX_CHARS) {
      textarea.classList.remove("border-gray-300", "focus:border-blue-500");
      textarea.classList.add("border-red-500", "focus:border-red-500");
      currentCount.parentElement.classList.remove("text-gray-600");
      currentCount.parentElement.classList.add("text-red-500");
    } else {
      textarea.classList.remove("border-red-500", "focus:border-red-500");
      textarea.classList.add("border-gray-300", "focus:border-blue-500");
      currentCount.parentElement.classList.remove("text-red-500");
      currentCount.parentElement.classList.add("text-gray-600");
    }
  }

  textarea.addEventListener("input", (e) => {
    const currentLength = e.target.value.length;

    if (currentLength > MAX_CHARS) {
      e.target.value = e.target.value.slice(0, MAX_CHARS);
    }

    updateCharCount();
  });

  // Initialize count
  updateCharCount();
});
