(function () {
  var params = new URLSearchParams(window.location.search);
  var theme = params.get('theme');
  if (theme === 'default' || theme === 'reset') {
    return;
  }
  if (theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }
})();
