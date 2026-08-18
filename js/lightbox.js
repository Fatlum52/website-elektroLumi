document.addEventListener("DOMContentLoaded", () => {
  const galleries = document.querySelectorAll(".ref-gallery");
  if (!galleries.length) return;

  // Build the overlay once and reuse it.
  const overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = `
    <button class="lightbox-close" type="button" aria-label="Schliessen">&times;</button>
    <button class="lightbox-nav lightbox-prev" type="button" aria-label="Vorheriges Bild">
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
        <path d="M15 6 9 12l6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    <img alt="" />
    <button class="lightbox-nav lightbox-next" type="button" aria-label="Nächstes Bild">
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
        <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    <p class="lightbox-caption"></p>
  `;
  document.body.appendChild(overlay);

  const overlayImg = overlay.querySelector("img");
  const overlayCaption = overlay.querySelector(".lightbox-caption");
  const closeButton = overlay.querySelector(".lightbox-close");
  const prevButton = overlay.querySelector(".lightbox-prev");
  const nextButton = overlay.querySelector(".lightbox-next");

  // Images of the gallery currently being viewed, plus our position in it.
  let items = [];
  let index = 0;

  const showItem = (i) => {
    // Wrap around at both ends.
    index = (i + items.length) % items.length;
    const { src, caption } = items[index];
    overlayImg.setAttribute("src", src);
    overlayImg.setAttribute("alt", caption);
    overlayCaption.textContent = caption;
  };

  const openLightbox = (galleryItems, startIndex) => {
    items = galleryItems;
    showItem(startIndex);
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

  const showNext = () => showItem(index + 1);
  const showPrev = () => showItem(index - 1);

  // Collect an image + caption list from a gallery element.
  const collectItems = (gallery) =>
    Array.from(gallery.querySelectorAll("figure")).map((figure) => {
      const img = figure.querySelector("img");
      const caption =
        figure.querySelector("figcaption")?.textContent.trim() ||
        img?.getAttribute("alt") ||
        "";
      // data-full is the largest WebP; src is only the fallback.
      const src = img?.dataset.full || img?.getAttribute("src") || "";
      return { src, caption };
    });

  // Open when a gallery image is clicked (event delegation).
  const handleGalleryClick = (event) => {
    const img = event.target.closest("img");
    if (!img) return;
    const gallery = event.currentTarget;
    const figures = Array.from(gallery.querySelectorAll("figure"));
    const startIndex = figures.indexOf(img.closest("figure"));
    openLightbox(collectItems(gallery), Math.max(startIndex, 0));
  };

  // Close on backdrop click, but not on the image or the control buttons.
  const handleOverlayClick = (event) => {
    if (event.target.closest("button")) return;
    if (event.target === overlayImg) return;
    closeLightbox();
  };

  const handleKeydown = (event) => {
    if (!overlay.classList.contains("open")) return;
    if (event.key === "Escape") closeLightbox();
    else if (event.key === "ArrowRight") showNext();
    else if (event.key === "ArrowLeft") showPrev();
  };

  // Swipe navigation on touch devices.
  let touchStartX = 0;
  const handleTouchStart = (event) => {
    touchStartX = event.changedTouches[0].clientX;
  };
  const handleTouchEnd = (event) => {
    const deltaX = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(deltaX) < 45) return;
    if (deltaX < 0) showNext();
    else showPrev();
  };

  galleries.forEach((g) => g.addEventListener("click", handleGalleryClick));
  overlay.addEventListener("click", handleOverlayClick);
  closeButton.addEventListener("click", closeLightbox);
  nextButton.addEventListener("click", showNext);
  prevButton.addEventListener("click", showPrev);
  document.addEventListener("keydown", handleKeydown);
  overlay.addEventListener("touchstart", handleTouchStart, { passive: true });
  overlay.addEventListener("touchend", handleTouchEnd, { passive: true });
});
