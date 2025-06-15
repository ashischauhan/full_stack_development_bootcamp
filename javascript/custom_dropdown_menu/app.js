console.log("Script loaded");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content Loaded");

  const dropdownButton = document.querySelector(".dropdown-button");
  const dropdownList = document.querySelector(".dropdown-list");
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  const selectedText = document.querySelector(".selected-text");
  const dropdownArrow = dropdownButton.querySelector("svg");

  console.log("Elements found:", {
    button: dropdownButton,
    list: dropdownList,
    items: dropdownItems.length,
    text: selectedText,
    arrow: dropdownArrow,
  });

  // Toggle dropdown
  dropdownButton.addEventListener("click", (e) => {
    console.log("Button clicked");
    e.stopPropagation(); // Prevent click from bubbling up
    dropdownList.classList.toggle("hidden");
    dropdownButton.classList.toggle("ring-2");
    dropdownButton.classList.toggle("ring-blue-500");
    dropdownArrow.classList.toggle("rotate-180");
    dropdownButton.setAttribute(
      "aria-expanded",
      dropdownButton.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
  });

  // Handle item selection
  dropdownItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      console.log("Item clicked:", item.textContent);
      e.stopPropagation(); // Prevent click from bubbling up

      // Remove selected class and hide check icons from all items
      dropdownItems.forEach((i) => {
        i.classList.remove("bg-blue-50", "text-blue-600");
        i.querySelector(".check-icon").classList.add("hidden");
      });

      // Add selected class and show check icon for clicked item
      item.classList.add("bg-blue-50", "text-blue-600");
      item.querySelector(".check-icon").classList.remove("hidden");

      // Update button text
      selectedText.textContent = item.querySelector("span").textContent;

      // Close dropdown
      dropdownList.classList.add("hidden");
      dropdownButton.classList.remove("ring-2", "ring-blue-500");
      dropdownArrow.classList.remove("rotate-180");
      dropdownButton.setAttribute("aria-expanded", "false");
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", () => {
    console.log("Document clicked");
    dropdownList.classList.add("hidden");
    dropdownButton.classList.remove("ring-2", "ring-blue-500");
    dropdownArrow.classList.remove("rotate-180");
    dropdownButton.setAttribute("aria-expanded", "false");
  });
});
