(() => {
  const screenButtons = Array.from(document.querySelectorAll("[data-review-source]"));
  const viewportSelect = document.getElementById("reviewViewportSelect");
  const reviewFrame = document.getElementById("reviewFrame");
  const reviewViewport = document.getElementById("reviewViewport");
  const screenBadge = document.getElementById("reviewScreenBadge");
  const viewportBadge = document.getElementById("reviewViewportBadge");
  const openLink = document.getElementById("reviewOpenLink");

  if (!screenButtons.length || !viewportSelect || !reviewFrame || !reviewViewport || !screenBadge || !viewportBadge || !openLink) {
    return;
  }

  const normalizeViewport = (value) => {
    if (value === "mobile") return "Mobile";
    if (value === "tablet") return "Tablet";
    return "Web";
  };

  const updateViewport = () => {
    const viewport = viewportSelect.value;
    reviewViewport.dataset.reviewViewport = viewport;
    viewportBadge.textContent = normalizeViewport(viewport);
  };

  const setActiveButton = (activeButton) => {
    screenButtons.forEach((button) => {
      const isActive = button === activeButton;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  };

  const applyScreen = (button, syncViewport = false) => {
    const source = button.dataset.reviewSource;
    const label = button.dataset.reviewLabel || button.textContent.trim();
    const defaultViewport = button.dataset.reviewDefaultViewport;

    if (syncViewport && defaultViewport && viewportSelect.value !== defaultViewport) {
      viewportSelect.value = defaultViewport;
    }

    setActiveButton(button);

    if (reviewFrame.getAttribute("src") !== source) {
      reviewFrame.setAttribute("src", source);
    }

    reviewFrame.setAttribute("title", `${label} preview`);
    screenBadge.textContent = label;
    openLink.setAttribute("href", source);
    openLink.setAttribute("aria-label", `Open ${label} in a new tab`);
    updateViewport();
  };

  screenButtons.forEach((button) => {
    button.addEventListener("click", () => applyScreen(button, true));
  });

  viewportSelect.addEventListener("change", updateViewport);

  const initialButton = screenButtons.find((button) => button.classList.contains("is-active")) || screenButtons[0];
  applyScreen(initialButton, true);
})();
