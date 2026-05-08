document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("main-header");

  if (headerContainer) {
    fetch("header.html")
      .then((response) => {
        if (!response.ok) throw new Error("Header konnte nicht geladen werden");
        return response.text();
      })
      .then((data) => {
        headerContainer.innerHTML = data;
        if (typeof initHamburgerMenu === "function") {
          initHamburgerMenu(headerContainer);
        }
        highlightActiveLink();
      })
      .catch((error) => console.error("Fehler beim Header-Laden:", error));
  }

  function highlightActiveLink() {
    // Ermittelt den aktuellen Dateinamen (z.B. "kontakt.html")
    const currentPath =
      window.location.pathname.split("/").pop() || "index.html";

    // Sucht alle Links im neu geladenen Header
    const navLinks = document.querySelectorAll(".nav-items");

    navLinks.forEach((link) => {
      // Wenn das href-Attribut mit dem aktuellen Pfad übereinstimmt
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      }
    });
  }
});
