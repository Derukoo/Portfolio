function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".custom-fade-in");

  const handleScroll = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) { // Adjust the offset as needed
        section.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Run once on page load to catch visible sections
});
