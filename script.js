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

const copyButton = document.getElementById("copyIntro");
const feedback = document.getElementById("copyFeedback");
const introElement = document.getElementById("mentorIntroText");

const intro = introElement
  ? introElement.innerText.trim()
  : "Hello, my name is Josephine. I’m a self-taught junior developer in Kenya building practical web applications, including Living Budget and small-business tools. I’m looking for a technical mentor who can review my code, guide me on secure and reliable development, and advise me on remote opportunities or relevant programmes. I’m committed to learning, improving, and acting on feedback. My portfolio: https://josephine-junior-dev.github.io/Josephine-Digital-Labs-Portfolio/";

if (copyButton && feedback) {
  copyButton.addEventListener("click", async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(intro);
      } else {
        throw new Error("Clipboard API unavailable");
      }
      feedback.textContent = "Copied! Your mentor introduction is ready to paste into a message.";
    } catch {
      const field = document.createElement("textarea");
      field.value = intro;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.focus();
      field.select();
      field.setSelectionRange(0, field.value.length);
      let ok = false;
      try { ok = document.execCommand("copy"); } catch (_) {}
      field.remove();
      feedback.textContent = ok
        ? "Copied! Your mentor introduction is ready to paste into a message."
        : "Copy was blocked by this browser. The introduction is shown above—press and hold the text to copy it.";
    }
  });
}
