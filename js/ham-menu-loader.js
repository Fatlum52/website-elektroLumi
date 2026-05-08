function initHamburgerMenu(root) {
  if (!root) return;

  const hamMenu = root.querySelector(".ham-menu");
  const offScreenMenu = root.querySelector(".off-screen-menu");
  if (!hamMenu || !offScreenMenu) return;

  function setOpen(isOpen) {
    hamMenu.classList.toggle("active", isOpen);
    offScreenMenu.classList.toggle("active", isOpen);
  }

  hamMenu.addEventListener("click", () => {
    const nextState = !hamMenu.classList.contains("active");
    setOpen(nextState);
  });

  offScreenMenu.querySelectorAll(".nav-items").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
}
