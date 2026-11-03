(function () {
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;
  var root = document.documentElement;
  function sync() {
    var dark = root.getAttribute("data-theme") === "dark";
    btn.setAttribute("aria-checked", dark ? "true" : "false");
    btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  }
  btn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    sync();
  });
  sync();
})();
