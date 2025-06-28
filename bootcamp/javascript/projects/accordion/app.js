class FAQ {
  #items = [];
  constructor(title, intro) {
    this.title = title;
    this.intro = intro;
  }

  addItem(item) {
    this.#items.push(item);
  }

  getItems() {
    return this.#items;
  }

  renderTitle() {
    const titleElement = document.getElementById("title");
    const descriptionElement = document.getElementById("description");
    titleElement.textContent = this.title;
    descriptionElement.textContent = this.intro;
  }

  renderItems() {
    const items = this.#items.map((item) => {
      return `
    <div>
    <h3 class="text-2xl bg-black text-white -2 px-4 py-1">${item.question}</h3>
    <p class="p-4 ${!item.isAnswerVisible ? "hidden" : ""}">${item.answer}</p>
    </div>
    `;
    });
    const accordionElement = document.getElementById("accordion");
    accordionElement.innerHTML = items.join("");

    const questionElements = accordionElement.querySelectorAll("h3");
    questionElements.forEach((questionElement, index) => {
      questionElement.addEventListener("click", () => {
        const answerElement = questionElement.nextElementSibling;
        const isVisible = answerElement.classList.toggle("hidden");
        this.#items[index].isAnswerVisible = !isVisible; // Update the item's visibility state
      });
    });
  }
}

class FAQItem {
  constructor(question, answer, isVisible = false) {
    this.question = question;
    this.answer = answer;
    this.isAnswerVisible = isVisible;
  }
}

(() => {
  //IIFE to avoid global scope pollution

  const faq = new FAQ(
    "Frequently Asked Questions",
    "Here are some of the frequently asked questions."
  );
  faq.renderTitle();

  // Removed duplicate and incorrect 'faq' declaration

  const faqItem1 = new FAQItem(
    "What is the purpose of this FAQ?",
    "This FAQ is designed to answer common questions about our service.",
    true
  );
  faq.addItem(faqItem1);

  const faqItem2 = new FAQItem(
    "How do I contact support?",
    "You can contact support via email at asis@gmail.com"
  );
  faq.addItem(faqItem2);

  faq.renderItems();
})();
