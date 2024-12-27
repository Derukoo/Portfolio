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
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
  const hnav = document.getElementById('hamburger-nav');
  const dnav = document.getElementById('desktop-nav');
  const bnav = document.getElementById('bottom-nav');
	if (scroll_position > 200) {
		hnav.style.backgroundColor = '#33485b';
		dnav.style.backgroundColor = '#33485b';

  } else {
    hnav.style.backgroundColor = '#192530';
    dnav.style.backgroundColor = '#192530';

  }
});
