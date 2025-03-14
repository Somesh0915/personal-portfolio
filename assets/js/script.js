document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll(".nav-links li a");
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const backToTopButton = document.getElementById("backToTop");
  const downloadResumeButton = document.getElementById("downloadResume");
  const sections = document.querySelectorAll("section");
  mobileNavToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - nav.offsetHeight,
          behavior: "smooth",
        });
      }
    });
  });
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY + nav.offsetHeight + 5;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        currentScroll >= sectionTop &&
        currentScroll < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => link.classList.remove("active"));
        const activeLink = document.querySelector(
          `.nav-links li a[href="#${section.id}"]`
        );
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  downloadResumeButton.addEventListener("click", () => {
    // Provide the correct path to your resume PDF file
    const resumeUrl = "assets/Resume.pdf";

    // Create a temporary link to trigger download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Someshkumar_Resume.pdf"; // Customize file name here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});
