
document.getElementById("hamburger").addEventListener("click", function () {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
  this.classList.toggle("open");
});

function toggleFAQ(element) {
  const faqItem = element.parentElement;
  const isActive = faqItem.classList.contains("active");
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.classList.remove("active");
  });
  if (!isActive) {
    faqItem.classList.add("active");
  }
}
