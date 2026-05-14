// ===== SELECT ELEMENTS =====
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");
const form = document.getElementById("contactForm");


// ===== SIDEBAR FUNCTIONS =====

// ===== SIDEBAR FUNCTIONS =====

// Close sidebar (MOBILE ONLY)
closeBtn.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
        sideMenu.classList.remove("open");
    }
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('.side-menu a').forEach(link => {
    link.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

        // Sidebar stays open
    });
});


// ===== CONTACT FORM =====
form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you " + name + "! Your message has been sent.");

    form.reset();
});


// ===== ACTIVE LINK WHILE SCROLLING =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".side-menu a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
function openMenu() {
    document.getElementById("sideMenu").classList.add("open");
    document.querySelector(".menu-icon").style.display = "none";
}

function closeMenu() {
    document.getElementById("sideMenu").classList.remove("open");
    document.querySelector(".menu-icon").style.display = "block";
}

/* close button click */
document.getElementById("closeBtn").addEventListener("click", closeMenu);

// ===== ACTIVE LINK CLICK =====
const navLinks2 = document.querySelectorAll(".side-menu a");

navLinks2.forEach(link => {
    link.addEventListener("click", function () {

        // remove tanan active
        navLinks2.forEach(item => {
            item.classList.remove("active");
        });

        // active sa gi-click
        this.classList.add("active");
    });
});