document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".ref-gallery");
  if (!gallery) return;

  // Build the overlay once and reuse it.
  const overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = `
    <button class="lightbox-close" type="button" aria-label="Schliessen">&times;</button>
    <img alt="" />
    <p class="lightbox-caption"></p>
  `;
  document.body.appendChild(overlay);

  const overlayImg = overlay.querySelector("img");
  const overlayCaption = overlay.querySelector(".lightbox-caption");
  const closeButton = overlay.querySelector(".lightbox-close");

  const openLightbox = (src, caption) => {
    overlayImg.setAttribute("src", src);
    overlayImg.setAttribute("alt", caption);
    overlayCaption.textContent = caption;
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
  };

  const closeLightbox = () => {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    // Release the image so it isn't held in memory while closed.
    overlayImg.removeAttribute("src");
  };

  // Open when a gallery image is clicked (event delegation).
  const handleGalleryClick = (event) => {
    const img = event.target.closest("img");
    if (!img) return;
    const figure = img.closest("figure");
    const caption = figure?.querySelector("figcaption")?.textContent.trim() ||
      img.getAttribute("alt") ||
      "";
    openLightbox(img.getAttribute("src"), caption);
  };

  // Close on backdrop click, but not when clicking the image itself.
  const handleOverlayClick = (event) => {
    if (event.target === overlayImg) return;
    closeLightbox();
  };

  const handleKeydown = (event) => {
    if (event.key === "Escape" && overlay.classList.contains("open")) {
      closeLightbox();
    }
  };

  document.querySelectorAll(".ref-gallery").forEach((g) => {
    g.addEventListener("click", handleGalleryClick);
  });
  overlay.addEventListener("click", handleOverlayClick);
  closeButton.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", handleKeydown);
});
