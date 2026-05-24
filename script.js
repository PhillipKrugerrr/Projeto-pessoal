history.scrollRestoration = "manual";

const sections = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});

const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    themeBtn.textContent = "Light Mode";
} else {
    themeBtn.textContent = "Dark Mode";
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeBtn.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");
    }
});