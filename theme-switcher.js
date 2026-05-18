(function () {
  var defaultTheme = 'biopolymer-helix';
  var storageKey = 'scale-theme-v2';
  var params = new URLSearchParams(window.location.search);
  var theme = params.get('theme');
  if (theme === 'default' || theme === 'reset') {
    try {
      window.localStorage.removeItem('scale-theme');
      window.localStorage.removeItem(storageKey);
    } catch (error) {}
    theme = defaultTheme;
  }
  if (theme) {
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch (error) {}
    document.documentElement.setAttribute('data-theme', theme);
  } else {
    try {
      theme = window.localStorage.getItem(storageKey);
    } catch (error) {}
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-navigation');
  if (!toggle || !nav) {
    return;
  }

  function setOpen(open) {
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) {
      setOpen(false);
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  });
})();
