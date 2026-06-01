(() => {

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

emailjs.init('HM8UcAVStorS8yx0w');

document.querySelector('#contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.querySelector('#nome').value.trim();
    const email = document.querySelector('#email').value.trim();
    const assunto = document.querySelector('#assunto').value.trim();
    const mensagem = document.querySelector('#mensagem').value.trim();

    if (!nome || !email || !assunto || !mensagem) {
        alert('Please fill in all fields before submitting.');
        return; 
    }

    const checkbox = document.querySelector('#termos');
    if (!checkbox.checked) {
        alert('Please accept the terms before submitting.');
        return;
    }

    emailjs.send('service_2l6d4jn', 'template_0wa6op2', {
        name: document.querySelector('#nome').value,
        email: document.querySelector('#email').value,
        subject: document.querySelector('#assunto').value,
        message: document.querySelector('#mensagem').value,
    })
    .then(() => {
        alert('Message sent successfully!');
        this.reset();
    })
    .catch((error) => {
        alert('Something went wrong. Please try again.');
        console.error(error);
    });
});

})()