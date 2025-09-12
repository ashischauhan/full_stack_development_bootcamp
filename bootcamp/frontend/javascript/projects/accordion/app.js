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
    <div class="mb-3">
      <h3 class="bg-black text-white text-lg font-semibold px-6 py-3 rounded-xl cursor-pointer flex items-center justify-between">${
        item.question
      }<span class='ml-2'>v</span></h3>
      <p class="px-6 py-4 bg-white border border-black border-t-0 rounded-b-xl text-lg ${
        !item.isAnswerVisible ? "hidden" : ""
      }">${item.answer}</p>
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

  const faqItem3 = new FAQItem(
    "Can I use this FAQ for my own project?",
    "Yes, you can use and modify this FAQ component for your own projects."
  );
  faq.addItem(faqItem3);

  const faqItem4 = new FAQItem(
    "Is this FAQ mobile-friendly?",
    "Yes, this FAQ uses Tailwind CSS and is responsive by default."
  );
  faq.addItem(faqItem4);

  const faqItem5 = new FAQItem(
    "How can I contribute?",
    "You can contribute by submitting issues or pull requests on our repository."
  );
  faq.addItem(faqItem5);

  // Additional questions
  const faqItem6 = new FAQItem(
    "Is my data secure?",
    "Yes, we use industry-standard security practices to protect your data."
  );
  faq.addItem(faqItem6);

  const faqItem7 = new FAQItem(
    "Can I access the FAQ offline?",
    "Currently, the FAQ is only available online, but offline support is planned."
  );
  faq.addItem(faqItem7);

  const faqItem8 = new FAQItem(
    "How often is the FAQ updated?",
    "We update the FAQ regularly based on user feedback and new features."
  );
  faq.addItem(faqItem8);

  const faqItem9 = new FAQItem(
    "Who can I contact for feedback?",
    "Please use the contact form on our website to send feedback."
  );
  faq.addItem(faqItem9);

  faq.renderItems();
})();
