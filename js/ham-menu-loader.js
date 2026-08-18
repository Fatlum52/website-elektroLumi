document.addEventListener("DOMContentLoaded", () => {
  const hamMenu = document.querySelector(".ham-menu");
  const offScreenMenu = document.querySelector(".off-screen-menu");
  if (!hamMenu || !offScreenMenu) return;

  const setOpen = (isOpen) => {
    hamMenu.classList.toggle("active", isOpen);
    offScreenMenu.classList.toggle("active", isOpen);
  };

  const handleClick = () => setOpen(!hamMenu.classList.contains("active"));

  hamMenu.addEventListener("click", handleClick);

  offScreenMenu.querySelectorAll(".nav-item").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
});
