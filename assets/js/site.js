(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Rotating research interests in the hero line.
  var el = document.getElementById("typed");
  if (el && !reduce) {
    var words = ["crime economics", "education economics", "applied econometrics", "causal inference"];
    var w = 0, i = words[0].length, deleting = false;
    (function tick() {
      var word = words[w];
      i += deleting ? -1 : 1;
      el.textContent = word.slice(0, i);
      var delay = deleting ? 35 : 70;
      if (!deleting && i === word.length) { deleting = true; delay = 1600; }
      else if (deleting && i === 0) { deleting = false; w = (w + 1) % words.length; delay = 300; }
      setTimeout(tick, delay);
    })();
  }

  // Fade items in as they scroll into view.
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || reduce) {
    items.forEach(function (n) { n.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  items.forEach(function (n) { io.observe(n); });
})();
