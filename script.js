// Scroll suave para âncoras
document.addEventListener("DOMContentLoaded", function () {
  // Scroll suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Otimização de performance para iframes
  const iframes = document.querySelectorAll("iframe");
  iframes.forEach((iframe) => {
    iframe.setAttribute("loading", "lazy");
  });

  // Prevenir erros de extensões do navegador
  window.addEventListener("error", function (e) {
    // Ignorar erros de extensões do navegador
    if (e.message && e.message.includes("Extension")) {
      e.stopImmediatePropagation();
    }

    // Ignorar erros específicos do reCAPTCHA se existirem
    if (e.filename && e.filename.includes("recaptcha")) {
      e.stopImmediatePropagation();
    }
  });

  console.log("Página carregada com sucesso!");
});
