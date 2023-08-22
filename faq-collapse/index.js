const faqs = document.querySelectorAll(".faq .faq-toggle");

faqs.forEach(faq => {
  faq.addEventListener("click", function (e) {
    this.closest("article.faq").classList.toggle("open");
  });
});