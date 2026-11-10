// Book cards on the shelf: keep at most one open, and close it on an
// outside click or Esc. Without JavaScript, <details name="shelf"> already
// keeps one open in modern browsers; this covers older ones too.
(function () {
  var SEL = '.spine details';

  function closeAll(except) {
    document.querySelectorAll(SEL + '[open]').forEach(function (d) {
      if (d !== except) d.open = false;
    });
  }

  // Nudge an open card sideways so it never runs off the screen edge.
  function fit(d) {
    var card = d.querySelector('.card');
    if (!card) return;
    card.style.transform = '';
    var r = card.getBoundingClientRect();
    var margin = 16, vw = document.documentElement.clientWidth, shift = 0;
    if (r.right > vw - margin) shift = vw - margin - r.right;
    if (r.left + shift < margin) shift = margin - r.left;
    if (shift) card.style.transform = 'translateX(' + Math.round(shift) + 'px)';
  }

  // "toggle" doesn't bubble, so listen in the capture phase.
  document.addEventListener('toggle', function (e) {
    var d = e.target;
    if (d.matches && d.matches(SEL) && d.open) { closeAll(d); fit(d); }
  }, true);

  window.addEventListener('resize', function () {
    var open = document.querySelector(SEL + '[open]');
    if (open) fit(open);
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest(SEL)) closeAll(null);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var open = document.querySelector(SEL + '[open]');
    if (!open) return;
    var hadFocus = open.contains(document.activeElement);
    closeAll(null);
    if (hadFocus) open.querySelector('summary').focus();
  });
})();
