const themeSelect = document.getElementById("themeSelect");
const viewportSelect = document.getElementById("viewportSelect");
const themeBadge = document.getElementById("themeBadge");
const viewportBadge = document.getElementById("viewportBadge");

const normalizeLabel = (value) => {
  if (value === "hig") return "HIG";
  if (value === "material") return "Material";
  if (value === "mobile") return "Mobile";
  if (value === "tablet") return "Tablet";
  return "Web";
};

const applyState = () => {
  const theme = themeSelect.value;
  const viewport = viewportSelect.value;

  document.body.setAttribute("data-theme", theme);
  document.body.setAttribute("data-viewport", viewport);

  themeBadge.textContent = normalizeLabel(theme);
  viewportBadge.textContent = normalizeLabel(viewport);
};

themeSelect.addEventListener("change", applyState);
viewportSelect.addEventListener("change", applyState);

applyState();
