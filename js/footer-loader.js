document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("footer");

  if (headerContainer) {
    fetch("footer.html")
      .then((response) => {
        if (!response.ok) throw new Error("Footer konnte nicht geladen werden");
        return response.text();
      })
      .then((data) => {
        headerContainer.innerHTML = data;
        highlightActiveLink();
      })
      .catch((error) => console.error("Fehler beim Footer-Laden:", error));
  }

  function highlightActiveLink() {
    // Ermittelt den aktuellen Dateinamen (z.B. "kontakt.html")
    const currentPath =
      window.location.pathname.split("/").pop() || "index.html";

    // Sucht alle Links im neu geladenen Header
    const navLinks = document.querySelectorAll(".nav-item");

    navLinks.forEach((link) => {
      // Wenn das href-Attribut mit dem aktuellen Pfad übereinstimmt
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      }
    });
  }
});
