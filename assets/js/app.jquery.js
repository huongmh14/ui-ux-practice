(function ($) {
  "use strict";

  $(function () {
    var $themeSelect = $("#themeSelect");
    var $viewportSelect = $("#viewportSelect");
    var $themeBadge = $("#themeBadge");
    var $viewportBadge = $("#viewportBadge");

    // Exit quietly if required controls are missing on a page.
    if (!$themeSelect.length || !$viewportSelect.length || !$themeBadge.length || !$viewportBadge.length) {
      return;
    }

    function normalizeLabel(value) {
      if (value === "hig") return "HIG";
      if (value === "material") return "Material";
      if (value === "mobile") return "Mobile";
      if (value === "tablet") return "Tablet";
      return "Web";
    }

    function applyState() {
      var theme = $themeSelect.val();
      var viewport = $viewportSelect.val();

      $("body").attr("data-theme", theme);
      $("body").attr("data-viewport", viewport);

      $themeBadge.text(normalizeLabel(theme));
      $viewportBadge.text(normalizeLabel(viewport));
    }

    $themeSelect.on("change", applyState);
    $viewportSelect.on("change", applyState);

    applyState();
  });
})(jQuery);
