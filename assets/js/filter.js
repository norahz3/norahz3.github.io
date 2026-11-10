// Topic filters: show only items whose data-topic matches the pressed button.
// Without JavaScript, everything simply shows.
document.querySelectorAll('.filters').forEach(function (bar) {
  var group = document.getElementById(bar.dataset.filterFor);
  if (!group) return;
  bar.addEventListener('click', function (e) {
    var btn = e.target.closest('button[data-filter]');
    if (!btn) return;
    var want = btn.dataset.filter;
    bar.querySelectorAll('button').forEach(function (b) {
      b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
    });
    group.querySelectorAll('[data-topic]').forEach(function (el) {
      el.hidden = !(want === 'all' || el.dataset.topic === want);
    });
  });
});
