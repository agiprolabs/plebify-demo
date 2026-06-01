
  // Theme
  function setTheme(t) {
    document.documentElement.dataset.theme = t;
    localStorage.setItem('polity-theme', t);
  }
  function toggleTheme() {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  }
  (function init() {
    const saved = localStorage.getItem('polity-theme');
    if (saved) setTheme(saved);
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark');
  })();

  function copyCode(btn) {
    const text = btn.parentElement.querySelector('pre').innerText;
    navigator.clipboard.writeText(text);
    const orig = btn.innerText; btn.innerText = 'Copied'; setTimeout(() => btn.innerText = orig, 1200);
  }

  
  function fmtPct(v) { return (v * 100).toFixed(1) + '%'; }
  function topKey(o) { let bk = null, bv = -1; for (const k in o) { if (o[k] > bv) { bv = o[k]; bk = k; } } return bk; }
