document.getElementById('menu').onclick = function() {
    document.getElementById('mobile__menu').classList.add('mobile__menu_active');
  };

  document.getElementById('mobile__menu_close').onclick = function() {
    document.getElementById('mobile__menu').classList.remove('mobile__menu_active');
  }
