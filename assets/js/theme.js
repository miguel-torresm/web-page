(function () {
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;
  function label() {
    var dark = document.documentElement.getAttribute("data-theme") === "dark";
    btn.textContent = dark ? "light mode" : "dark mode";
  }
  btn.addEventListener("click", function () {
    var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    label();
  });
  label();
})();
