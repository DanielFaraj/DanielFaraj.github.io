document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach((section, index) => {
        section.addEventListener("click", () => {
            scrollToSection(index);
        });
    });

    // Function to scroll to a specific section
    function scrollToSection(index) {
        sections[index].scrollIntoView({ behavior: "smooth" });
    }
});