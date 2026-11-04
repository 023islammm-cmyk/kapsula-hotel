// ===== Капсулалар беті: галерея (1-нұсқа «Галерея») =====
// Кішкентай фотоны басқанда ол үлкен орынға шығады.
(function () {
  document.querySelectorAll('[data-gal]').forEach(function (gal) {
    gal.addEventListener('click', function (e) {
      var img = e.target.closest('img');
      if (!img || img === gal.firstElementChild) return;
      gal.insertBefore(img, gal.firstElementChild);
    });
  });
})();
