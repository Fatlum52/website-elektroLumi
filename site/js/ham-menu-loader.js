document.addEventListener("DOMContentLoaded", () => {
  const hamMenu = document.querySelector(".ham-menu");
  const offScreenMenu = document.querySelector(".off-screen-menu");
  if (!hamMenu || !offScreenMenu) return;

  const setOpen = (isOpen) => {
    hamMenu.classList.toggle("active", isOpen);
    offScreenMenu.classList.toggle("active", isOpen);
    hamMenu.setAttribute("aria-expanded", String(isOpen));
    hamMenu.setAttribute(
      "aria-label",
      isOpen ? "Menü schliessen" : "Menü öffnen",
    );
  };

  const handleClick = () => setOpen(!hamMenu.classList.contains("active"));

  const handleKeydown = (event) => {
    if (event.key !== "Escape") return;
    if (!hamMenu.classList.contains("active")) return;
    setOpen(false);
    hamMenu.focus();
  };

  hamMenu.addEventListener("click", handleClick);
  document.addEventListener("keydown", handleKeydown);

  offScreenMenu.querySelectorAll(".nav-item").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
});
