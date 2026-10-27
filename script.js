const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

const intro = `Hello, my name is Josephine and I am an aspiring self-taught developer from Kenya. I am building practical web applications, including PesaGuard, a personal finance app, and tools for garage and small-business operations. I am looking for a technical mentor who can review my actual code, guide me on secure and reliable development, and advise me on remote paid opportunities or relevant funding programmes. My portfolio is https://github.com/Josephine-Junior-dev and my current live project is https://pesaguard.netlify.app/. I am committed to learning, improving, and acting on feedback.`;

const copyButton = document.getElementById("copyIntro");
const feedback = document.getElementById("copyFeedback");

if (copyButton && feedback) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(intro);
      feedback.textContent = "Introduction copied. You can paste it into a message.";
    } catch {
      const field = document.createElement("textarea");
      field.value = intro;
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      const ok = document.execCommand("copy");
      field.remove();
      feedback.textContent = ok
        ? "Introduction copied. You can paste it into a message."
        : "Copy was blocked by this browser. Please select and copy the text manually.";
    }
  });
}
