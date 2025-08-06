// Efek Mengetik di Hero Section
const typingText = document.getElementById("typing-text");
const words = ["Halo, Saya Daiva 😁 ", "Pelajar Web Pemula", "Game Roblox Enjoyers"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  const currentText = currentWord.substring(0, charIndex);
  typingText.textContent = currentText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 800);
  }
}
type();

// Efek Fade-in saat Scroll
const fadeElements = document.querySelectorAll(".portfolio-card, section");

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in");
      // fadeInObserver.unobserve(entry.target); <-- JANGAN DIPAKAI kalau mau efeknya bisa ulang
    } else {
      entry.target.classList.remove("animate-fade-in");
    }
  });
}, {
  threshold: 0.3
});

fadeElements.forEach((el) => {
  el.classList.add("opacity-0");
  fadeInObserver.observe(el);
});

// Smooth Scroll untuk Navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Efek Hover Interaktif pada Kartu Portofolio
document.querySelectorAll(".portfolio-card").forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.classList.add("shadow-lg", "scale-up");
  });
  card.addEventListener("mouseout", () => {
    card.classList.remove("shadow-lg", "scale-up");
  });
});

// Efek Klik Gelombang pada Tombol
document.querySelectorAll("button, .btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    circle.classList.add("ripple");
    this.appendChild(circle);

    const x = e.clientX - this.getBoundingClientRect().left;
    const y = e.clientY - this.getBoundingClientRect().top;

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    setTimeout(() => {
      circle.remove();
    }, 600);
  });
});
